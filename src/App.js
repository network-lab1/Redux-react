import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addStudent, deleteStudent } from './actions';
import { createContext, useContext } from 'react';

const StudentContext = createContext();
const DemoContext = createContext();
// Step 2: Define sample data
const sampleData = {
  name: 'John Doe',
  age: 20,
  class: 'Grade 10',
  nationality: 'USA'
};

const demoData = {
  productName:"Lays",
  price:50
};

const Demo = () =>{
  return(
    <DemoContext.Provider value={demoData}>
      <div>
        <PName/>
        <Price/>
      </div>
    </DemoContext.Provider>
  )
}

const PName = () => {
  const productData = useContext(DemoContext);
  return <div>Name: {productData.productName}</div>;
};

const Price = () => {
  const productData = useContext(DemoContext);
  return <div>Price: {productData.price}</div>
}
// Step 3: Create the Student component
const Student = () => {
  return (
    <StudentContext.Provider value={sampleData}>
      <div>
        <Name />
        <Age />
        <Class />
        <Nationality />
      </div>
    </StudentContext.Provider>
  );
};

// Step 4: Create child components that consume the context
const Name = () => {
  const studentData = useContext(StudentContext);
  return <div>Name: {studentData.name}</div>;
};

const Age = () => {
  const studentData = useContext(StudentContext);
  return <div>Age: {studentData.age}</div>;
};

const Class = () => {
  const studentData = useContext(StudentContext);
  return <div>Class: {studentData.class}</div>;
};

const Nationality = () => {
  const studentData = useContext(StudentContext);
  return <div>Nationality: {studentData.nationality}</div>;
};

const App = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent(name, age, country));
    setName('');
    setAge('');
    setCountry('');
  };

  const handleDelete = (index) => {
    dispatch(deleteStudent(index));
  };

  return (
    <div>
      {/* <Person1 name={"hari"} age={24}/> */}
      <div>
        <Student/>
      </div>
      <br></br>
      <br></br>
      <div>
        <Demo/>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <button type="submit">Add Student</button>
      </form>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            Name: {student.name}, Age: {student.age}, Country: {student.country}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

