// import React, { useState } from 'react';
// import './App.css';
// // import Header from './Components/Header';
// // import Footer from './Components/Footer';
// // import Faculty from './Components/Faculty';
// // import User from './Components/User';
// // import Timetable from './Components/Timetable';
// // import Assignments from './Components/Assignments';
// // import Student from './Components/Student';
// // import FeedBackForm from './Components/FeedBackForm';
// // import Home from './Components/Home';
// // import Survey from './Components/Survey';
// // import Campuss from './Components/Campuss'; // Match the exact casing



// function App() {
//   // const [timetable] = useState([
//   //   { date: '2024-07-27', hours: '09:00 - 10:00', subject: 'Mathematics', room: '101' },
//   //   { date: '2024-07-27', hours: '10:00 - 11:00', subject: 'Physics', room: '102' },
//   //   { date: '2024-07-27', hours: '11:00 - 12:00', subject: 'Chemistry', room: '103' }
//   // ]);

//   // const [assignments] = useState([
//   //   { subject: 'Mathematics', dueDate: '2024-08-01', year: '2024', grading: 'A', assignmentType: 'Homework' },
//   //   { subject: 'Physics', dueDate: '2024-08-02', year: '2024', grading: 'B', assignmentType: 'Lab Report' },
//   //   { subject: 'Chemistry', dueDate: '2024-08-03', year: '2024', grading: 'A', assignmentType: 'Project' }
//   // ]);

//   // const [students] = useState([
//   //   { name: 'Bhargavi', id: '2300032939', branch: 'CSE', year: '2nd' },
//   //   { name: 'Niharika', id: '2300033494', branch: 'CSE', year: '2nd' },
//   //   { name: 'Sravanthi', id: '2300032420', branch: 'CSE', year: '2nd' },
//   //   { name: 'Jeevani', id: '2300032841', branch: 'CSE', year: '2nd' },
//   //   { name: 'jayathi', id: '2300030713', branch: 'CSE', year: '2nd' }
//   // ]);

//   return (
//     <div className="App">
//       <Home />
//       <Header />
//       <div className="container mt-5">
//         <div className="row">
//           <div className="col-md-6">
//             {/* <Faculty /> */}
//           </div>
//         </div>
//         <div className="row mt-4">
//           <div className="col-md-6" style={{ paddingTop: '70px' }}>
//             {/* <Timetable timetable={timetable} /> */}
//           </div>
//           <div className="col-md-6" style={{ paddingTop: '70px' }}>
//             {/* <Assignments assignments={assignments} /> */}
//           </div>
//           <div className="col-md-6">
//             {/* <User name="Bhargavi" /> */}
//           </div>
//         </div>
//         <div className="row mt-4">
//           <div className="col-md-12">
//             {/* <Student Students={students} /> */}
//           </div>
//         </div>
//       </div>
//       <FeedBackForm />
//       {/* <Campuss /> Capitalized component */}
      
//       {/* <Footer /> */}
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import MainContent from './Components/Maincontent';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;

