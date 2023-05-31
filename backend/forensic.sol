// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract ForensicReport
{
    event new_subject(uint subject_id, string subject_name, uint subject_age, string subject_sex);
    uint256 code_digits = 16;
    uint256 code_modulus = 10**16;

    struct Subject
    {
        uint subject_id;
        uint unique_subject_id;
        string subject_name;
        uint subject_age;
        string subject_sex;
    }

    struct Forensic_lab
    {
        uint lab_id;
        uint area_code;
        string lab_name;
    }

    struct Forensic_report {
        uint case_id;
        string test_date;
        string report_date;
        uint test_id;
        string test_name;
        string blood_group;
        string description;
        string evidence;
        string conclusions;
    }

    Subject[] public subjects;
    Forensic_report[] public forensic_reports;
    Forensic_lab[] public forensic_labs;
    address[] forensic_pathologist;
    mapping(uint => Forensic_report) subject_to_report;
    mapping(uint => Forensic_lab) report_to_lab;

    // function uint_to_str(uint _i) internal pure returns (string memory _uint_as_string)
    // {
    //     if(_i == 0)
    //     {
    //         return "0";
    //     }
    //     uint j = _i;
    //     uint len;
    //     while(j != 0)
    //     {
    //         len++;
    //         j /= 10;
    //     }
    //     bytes memory bstr = new bytes(len);
    //     uint k = len-1;
    //     while(_i != 0)
    //     {
    //         bstr[k--] = bytes(uint8(48 + _i % 10));
    //         _i /= 10;
    //     }
    //     return string(bstr);
    // }

    function generate_unique_id(
        uint _subject_id,
        string _subject_name,
        uint _subject_age,
        string _subject_sex
    ) private view returns (uint)
    {
        uint hash_id = uint(keccak256(abi.encodePacked(_subject_id, _subject_name, _subject_age, _subject_sex)));
        return hash_id % code_modulus;
    }

    function add_subject(
        uint _subject_id,
        string _subject_name,
        uint _subject_age,
        string _subject_sex
    ) internal view
    {
        require(/* check msg.sender */);
        uint unique_id = generate_unique_id(_subject_id,_subject_name,_subject_age,_subject_sex);
        uint subject_index = subjects.push(Subject(_subject_id, unique_id, _subject_name, _subject_age, _subject_sex)) - 1;
        forensic_pathologist[subject_index] = msg.sender;
        emit new_subject(_subject_id, _subject_name, _subject_age, _subject_sex);
    }

    function view_subject(
        uint _unique_subject_id,
        uint _subject_id,
        string _subject_name,
        uint _subject_age,
        string _subject_sex
    ) internal 
    {   
        uint check_unique_id = keccak256(abi.encodePacked(_subject_id, _subject_name, _subject_age, _subject_sex));
        require(_unique_subject_id == check_unique_id);

    }

    function addReport(string memory _caseNumber, string memory _date, string memory _location, string memory _description, string memory _evidence, string memory _conclusions) public {
        reports.push(Report(reports.length + 1, _caseNumber, _date, _location, _description, _evidence, _conclusions));
    }

    function getReport(uint _id) public view returns (string memory, string memory, string memory, string memory, string memory, string memory) {
        Report memory report = reports[_id - 1];
        return (report.caseNumber, report.date, report.location, report.description, report.evidence, report.conclusions);
    }
}
