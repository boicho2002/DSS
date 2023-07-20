import React, {useState} from 'react';
import GradeList from './components/GradeList';
import GradeDetails from './components/GradeDetails';
import NavBar from './components/NavBar'
import './styles/main2.css';
import { Grade } from './Interfaces';


function App() {
  const testItem={
    id: 1,
    studentFirstName:"Boicho",
    StudentLastName:"Boichev",
    subject:"Software Development",
    score:6,
    date:new Date()
  }
  const secondItem={
    id: 2,
    studentFirstName:"Elen",
    StudentLastName:"Borisov",
    subject:"Software Development",
    score:6,
    date:new Date()
  }
  const thirdItem={
    id: 3,
    studentFirstName:"Nikolai",
    StudentLastName:"Ivanov",
    subject:"Software Development",
    score:4,
    date:new Date()
  }
  const emptyItem={
    id: -1,
    studentFirstName:"",
    StudentLastName:"",
    subject:"",
    score:0,
    date:new Date()
  }
  const [grades, setGrades] = useState<Grade[]>([testItem, secondItem, thirdItem]);
  const [selectedGrade, setSelectedGrade] = useState<Grade>(emptyItem);
  
  const handleSave = (grade: Grade) => {
    if (selectedGrade.id!=-1) {
      const updatedGrades = grades.map((g) => (g.id === grade.id ? grade : g));
      setGrades(updatedGrades);
    } else {
      const newGrade = { ...grade, id: grades.length + 1 };
      setGrades([...grades, newGrade]);

    }
    handleClear();
   
  };

  const handleDelete = (grade: Grade) => {
    // const updatedGrades = grades.filter((item) => item !== grade);
    // setGrades(updatedGrades);
    // updateIdsAfterDelete(updatedGrades);
    // if(selectedGrade===grade){
    //   handleClear();
    // }
    const updatedGrades = grades.filter(item => item!==grade);
    for(let e of updatedGrades){
      if(e.id>grade.id) e.id--;
    }
    setGrades(updatedGrades);
    if(selectedGrade===grade) handleClear();
  };

  const handleEdit = (grade: Grade) => {
    setSelectedGrade(grade);
  };

  const handleClear = () => {
    setSelectedGrade(emptyItem);
  };
  // const updateIdsAfterDelete = (updatedGrades: Grade[]) => {
  //   const updatedGradesWithIds = updatedGrades.map((grade, index) => ({
  //     ...grade,
  //     id: index + 1,
  //   }));
  //   setGrades(updatedGradesWithIds);
  // };

  return (
    <div className="shkolo">
     <NavBar />
      <main>
      <div className="grade-list">
        <GradeList  grades={grades} handleDelete={handleDelete} handleEdit={handleEdit} />
      </div>
      <div className="grade-details">
        <GradeDetails selectedGrade={selectedGrade} handleSave={handleSave} handleClear={handleClear}  />
      </div>
      </main>
      <div className="footer">© 2023 Grade Management System. All rights reserved.</div>
    </div>
  );
};

export default App;
