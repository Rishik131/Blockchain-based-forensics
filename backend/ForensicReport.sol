// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract ForensicReport {
    struct Subject {
        string SubjectName;
        uint SubjectAge;
        string SubjectSex;
        uint AdmissionID;
        uint TestCode;
        bool Exists;
    }

    struct SubjectReport {
        uint SubjectID;
        uint CaseID;
        uint TestID;
        string TestName;
        string Description;
        string Evidence;
        string Conclusion;
        uint TestDate;
        uint ReportDate;
        bool Exists;
    }

    mapping(uint => Subject) public subjects;
    mapping(uint => SubjectReport) public subjectReports;

    function newSubject(uint _SubjectID, string memory _SubjectName, uint _SubjectAge, string memory _SubjectSex, uint _AdmissionID, uint _TestCode) public {
        require(!subjects[_SubjectID].Exists, "Subject already exists");
        subjects[_SubjectID] = Subject(_SubjectName, _SubjectAge, _SubjectSex, _AdmissionID, _TestCode, true);
    }

    function getSubject(uint _SubjectID) public view returns (string memory, uint, string memory, uint, uint) {
        Subject storage s = subjects[_SubjectID];
        require(s.Exists, "Subject not found");
        return (s.SubjectName, s.SubjectAge, s.SubjectSex, s.AdmissionID, s.TestCode);
    }

    function addSubjectReport(uint _SubjectID, uint _CaseID, uint _TestDate, uint _ReportDate, uint _TestID, string memory _TestName, string memory _Description, string memory _Evidence, string memory _Conclusion) public {
        require(!subjectReports[_CaseID].Exists, "Subject report already exists");
        subjectReports[_CaseID] = SubjectReport(_SubjectID, _CaseID, _TestID, _TestName, _Description, _Evidence, _Conclusion, _TestDate, _ReportDate, true);
    }

    function getSubjectReport(uint _CaseID) public view returns (uint, uint, uint, string memory, string memory, string memory, string memory, uint, uint) {
        SubjectReport storage sr = subjectReports[_CaseID];
        require(sr.Exists, "Subject report not found");
        return (sr.SubjectID, sr.CaseID, sr.TestID, sr.TestName, sr.Description, sr.Evidence, sr.Conclusion, sr.TestDate, sr.ReportDate);
    }
}
