import React, {useState, useEffect} from 'react';
import { Grade } from '../Interfaces';
import './GradeDetails.css';

const GradeDetails = (props:any) => {
const [id, setId]=useState(props.selectedGrade?.id || '');
const [studentFirstName, setStudentFirstName] = useState(props.selectedGrade?.studentFirstName || '');
const [studentLastName, setStudentLastName] = useState(props.selectedGrade?.StudentLastName || '');
const [subject, setSubject] = useState(props.selectedGrade?.subject || '');
const [score, setScore] = useState(props.selectedGrade?.score.toString() || '');
const [date, setDate] = useState(props.selectedGrade?.date || new Date());

useEffect(()=>{
  if(props.selectedGrade){
    setId(props.selectedGrade.id);
    setStudentFirstName(props.selectedGrade.studentFirstName);
    setStudentLastName(props.selectedGrade.StudentLastName);
    setSubject(props.selectedGrade.subject);
    setScore(props.selectedGrade.score.toFixed(0));
    setDate(new Date(props.selectedGrade.date));

  }
  else{
    setId(0);
    setStudentFirstName("");
    setStudentLastName("");
    setSubject("");
    setScore("");
    setDate(new Date());
  }
  

},[props.selectedGrade])
const handleFormSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (studentFirstName && studentLastName && subject && score) {
    const updatedGrade: Grade = {
      id: props.selectedGrade ? props.selectedGrade.id : -1,
      studentFirstName,
      StudentLastName: studentLastName,
      subject,
      score: parseInt(score),
      date,
    };
    props.handleSave(updatedGrade);
    handleClearForm();
  }
};

const handleClearForm = () => {
  setStudentFirstName('');
  setStudentLastName('');
  setSubject('');
  setScore('');
  setDate(new Date());
  props.handleClear();
};

return (
    
  <div className="content-details">

    <form onSubmit={handleFormSubmit}>
    <h2>
        Student's grade details
    </h2>
      <label htmlFor="field1">First Name</label>
      <input
        id="field1"
        type="text"
        value={studentFirstName}
        onChange={(e) => setStudentFirstName(e.target.value)}
      />

      <label htmlFor="field2">Last Name</label>
      <input
        id="field2"
        type="text"
        value={studentLastName}
        onChange={(e) => setStudentLastName(e.target.value)}
      />

      <label htmlFor="field3">Subject</label>
      <input id="field3" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />

      <label htmlFor="field4">Score</label>
      <input id="field4" type="number" value={score}  onChange={(e) => setScore(e.target.value)} />

      <label htmlFor="field5">Date</label>
      <input id="field5" type="date" value={date.toISOString().split('T')[0]} onChange={(e) => setDate(new Date(e.target.value))} />

      <button id="saveButton" type="submit">
        Save
      </button>
      <button id="clearButton" type="button" onClick={handleClearForm}>
        Clear
      </button>
    </form>
  </div>
);
};
 
export default GradeDetails;