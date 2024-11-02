import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
    const [content, setContent] = useState(null);
    const [showExamDropdown, setShowExamDropdown] = useState(false);

    const handleHomeClick = () => {
        setContent(
            <div className="home-content">
                <h2>Welcome to WRP</h2>
                <div className="card-container">
                    <div className="card">
                        <img src="icon-url-1.png" alt="Awards" />
                        <h3>Awards</h3>
                        <p>Explore the awards we have received!</p>
                    </div>
                    <div className="card">
                        <img src="icon-url-2.png" alt="Leaderboard" />
                        <h3>Leaderboard</h3>
                        <p>Check out the current standings!</p>
                        <p></p>
                    </div>
                    <div className="card">
                        <img src="icon-url-3.png" alt="Projects" />
                        <h3>Projects</h3>
                       
                        <p>View ongoing and completed projects!</p>
                        <p>hello</p>
                    </div>
                </div>
            </div>
        );
    };

    const handleAcademicRegistrationClick = () => {
        setContent(
            <div className="academic-registration-content">
                <h2>Academic Registration</h2>
                <p>Here you can register for your courses and view your academic information.</p>
                <div className="card-container">
                    <div className="card">
                        <img src="icon-url-4.png" alt="Register for Courses" />
                        <h3>Register for Courses</h3>
                        <p>Click here to register for your upcoming courses.</p>
                    </div>
                    <div className="card">
                        <img src="icon-url-5.png" alt="View Academic Info" />
                        <h3>View Academic Info</h3>
                        <p>Access your grades and academic progress.</p>
                    </div>
                    <div className="card">
                        <img src="icon-url-6.png" alt="Academic Calendar" />
                        <h3>Academic Calendar</h3>
                        <p>Check important dates and deadlines for the semester.</p>
                    </div>
                    <div className="card">
                        <img src="icon-url-7.png" alt="Advising" />
                        <h3>Advising</h3>
                        <p>Get help from your academic advisor.</p>
                    </div>
                </div>
            </div>
        );
    };

    const handleAttendanceRegisterClick = () => {
        setContent(
            <div className="attendance-register-content">
                <h2>Attendance Register</h2>
                <p>Here you can view your attendance records.</p>
                <div className="attendance-records">
                    <div className="record">
                        <strong>Date:</strong> November 1, 2024
                        <br />
                        <strong>Status:</strong> Present
                    </div>
                    <div className="record">
                        <strong>Date:</strong> October 31, 2024
                        <br />
                        <strong>Status:</strong> Absent
                    </div>
                    <div className="record">
                        <strong>Date:</strong> October 30, 2024
                        <br />
                        <strong>Status:</strong> Present
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img src="icon-url-8.png" alt="Attendance Summary" />
                        <h3>Attendance Summary</h3>
                        <p>Review your overall attendance for the semester.</p>
                    </div>
                    <div className="card">
                        <img src="icon-url-9.png" alt="Request Leave" />
                        <h3>Request Leave</h3>
                        <p>Apply for leave if you cannot attend classes.</p>
                    </div>
                </div>
            </div>
        );
    };

    const handleCoursesClick = () => {
        setContent(
            <div className="courses-content">
                <h2>Available Courses</h2>
                <p>Explore the range of courses offered in our curriculum:</p>
                <h3>Core Courses</h3>
                <ul>
                    <li><strong>Data Structures</strong> - Understand the fundamentals of data organization and manipulation.</li>
                    <li><strong>Algorithms</strong> - Learn efficient problem-solving techniques.</li>
                    <li><strong>Database Management Systems</strong> - Explore the concepts of data storage and retrieval.</li>
                </ul>
                <h3>Elective Courses</h3>
                <ul>
                    <li><strong>Web Development</strong> - Dive into front-end and back-end technologies.</li>
                    <li><strong>Machine Learning</strong> - Get introduced to AI concepts and applications.</li>
                    <li><strong>Cloud Computing</strong> - Learn about cloud services and deployment models.</li>
                </ul>
                <h3>Project Courses</h3>
                <p>Engage in hands-on projects to apply your knowledge practically.</p>
                <ul>
                    <li><strong>Capstone Project</strong> - Work on a real-world project as a team.</li>
                    <li><strong>Internship</strong> - Gain industry experience through internships.</li>
                </ul>
            </div>
        );
    };

    const handleCounsellingDiaryClick = () => {
        setContent(
            <div className="counselling-diary-content">
                <h2>Counselling Diary</h2>
                <p>Here are your recent remarks from your counselor:</p>
                <div className="remarks">
                    <div className="remark">
                        <strong>Date:</strong> November 1, 2024
                        <br />
                        <strong>Remark:</strong> Keep up the good work! Your attendance has improved significantly.
                    </div>
                    <div className="remark">
                        <strong>Date:</strong> October 15, 2024
                        <br />
                        <strong>Remark:</strong> Consider participating more in class discussions to enhance your learning.
                    </div>
                    <div className="remark">
                        <strong>Date:</strong> October 5, 2024
                        <br />
                        <strong>Remark:</strong> Great progress in your project work! Stay focused.
                    </div>
                </div>
            </div>
        );
    };

    const handleExamSectionClick = () => {
        setShowExamDropdown(!showExamDropdown);
    };

    const handleExamRoomClick = () => {
        setContent(
            <div className="exam-room-content">
                <h2>Exam Room</h2>
                <p>Check your allocated exam room and seating arrangements.</p>
            </div>
        );
    };

    const handleExamScriptsClick = () => {
        setContent(
            <div className="exam-scripts-content">
                <h2>Exam Scripts</h2>
                <p>View your submitted exam scripts and grading information.</p>
            </div>
        );
    };

    const handleHallticketClick = () => {
        setContent(
            <div className="hallticket-content">
                <h2>Hallticket</h2>
                <p>Download your hall ticket for the upcoming exams.</p>
            </div>
        );
    };

    return (
        <div style={{ display: 'flex' }}>
            <div className="sidebar">
                <button className="sidebar-item" onClick={handleHomeClick}>Home</button>
                <button className="sidebar-item" onClick={handleAcademicRegistrationClick}>Academic Registration</button>
                <button className="sidebar-item" onClick={handleAttendanceRegisterClick}>Attendance Register</button>
                <button className="sidebar-item" onClick={handleCoursesClick}>Courses</button>
                <button className="sidebar-item" onClick={handleCounsellingDiaryClick}>Counselling Diary</button>
                <button className="sidebar-item" onClick={handleExamSectionClick}>
                    Exam Section {showExamDropdown ? '▲' : '▼'}
                </button>
                {showExamDropdown && (
                    <div className="exam-dropdown">
                        <button className="exam-dropdown-item" onClick={handleExamRoomClick}>Exam Room</button>
                        <button className="exam-dropdown-item" onClick={handleExamScriptsClick}>Exam Scripts</button>
                        <button className="exam-dropdown-item" onClick={handleHallticketClick}>Hallticket</button>
                    </div>
                )}
                <button className="sidebar-item">Career Choice</button>
                <button className="sidebar-item">Clubs/Activities</button>
                <button className="sidebar-item">Feedback</button>
                <button className="sidebar-item">Fee Payments</button>
                <button className="sidebar-item">Hostel Management</button>
                <button className="sidebar-item">Hallticket</button>
            </div>
            <div className="content-section">
                {content}
            </div>
        </div>
    );
}

export default Sidebar;
