import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddData = () => {
  const [mssv, setMssv] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const student = { mssv, name, dob, email };

    // console.log(student);
    fetch('http://localhost:8000/students/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="add-data">
      <h2>Add a new Student</h2>  
      <form onSubmit={handleSubmit}>
        <label>MSSV</label>
        <input 
          type="text" 
          required 
          value={mssv}
          onChange={(e) => setMssv(e.target.value)}
        />
        <label>Name</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Date of Birth</label>
        <input
          type="date"
          required
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Add Student</button>
      </form>
    </div>
  );
}
 
export default AddData;