import React, { useState } from 'react';

const StudentForm = () => {
    const [student, setStudent] = useState({ studentId: '', name: '', branch: '', year: '' });

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/api/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student),
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="studentId" placeholder="Student ID" onChange={handleChange} />
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="text" name="branch" placeholder="Branch" onChange={handleChange} />
            <input type="number" name="year" placeholder="Year" onChange={handleChange} />
            <button type="submit">Register Student</button>
        </form>
    );
};

export default StudentForm;
