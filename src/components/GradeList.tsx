import React , {useState} from 'react';
import { Grade } from '../Interfaces';
import './GradeList.css';

interface  ListProps{
    grades: Grade[];
    handleDelete: (grade: Grade) => void;
    handleEdit: (grade: Grade) => void;
  }
  


const GradeList = ({grades, handleDelete, handleEdit}: ListProps) => {
    const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>,grade: Grade) => {
      event.stopPropagation();
        handleDelete(grade);
      };
      const handleEditClick=(event:  React.MouseEvent<HTMLLIElement, MouseEvent>,grade:Grade)=>{
        event.stopPropagation(); 
        handleEdit(grade);
      }
    
     
    return ( 
<div className="content-list">
    <h2>
        Student's grade list
    </h2>
      <ul>
        {grades.map((grade) => (
          <li key={grade.id} onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent> ) =>handleEditClick(e ,grade) }>
            <p className="id">ID: {grade.id}</p>
            <p className="field1">First Name: {grade.studentFirstName}</p>
            <p className="field2">Last Name: {grade.StudentLastName}</p>
            <p className="field3">Subject: {grade.subject}</p>
            <p className="field4">Score: {grade.score}</p>
            <p className="field5">Date: {grade.date.toDateString()}</p>
            <button className="deleteButton" onClick={(e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleDeleteClick(e, grade)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    );
};
 
export default GradeList;