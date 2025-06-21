import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Styles/cv.css'
import Information from './components/Information.jsx'
import CV from './components/CV.jsx'
import Education from './components/Education.jsx'
import EmploymentHistory from './components/EmploymentHistory.jsx'
import Honors from './components/Honors.jsx'

function App() {
  const [cvData, setCVData] = useState({
    Information: {
      firstName: "David",
      lastName: "Li",
      email: "david.li9410@gmail.com",
      linkedin: "https://www.linkedin.com"
    },

    Education : {
      uni: "UNC Chapel Hill",
      GPA : "4.0",
      major : "BS Computer Science and Mathematics",
      term : "2024-2028"
    },

    EmploymentHistory: {
      company: "Self-Employed",
      position: "Math Tutor",
      toFrom: "January 2021 - August 2024",
      description : "Worked with students in high school and college. Worked on topics including the Calculus Sequence and real Analysis",
      company1: "Self-Employed",
      position1: "Math Tutor",
      description1 : "Worked with students in high school and college. Worked on topics including the Calculus Sequence and real Analysis",
      toFrom1: "January 2021 - August 2024",
      company2: "Self-Employed",
      position2: "Math Tutor",
      description2 : "Worked with students in high school and college. Worked on topics including the Calculus Sequence and real Analysis",
      toFrom2: "January 2021 - August 2024",
    },


    Honors : {
      title: "3x AIME Qualifier",
      date: "2022,2023,2024",
      description : "Top 2.5%/5% of scorers on the AMC",
      title1: "3x AIME Qualifier",
      date1: "2022,2023,2024",
      description1 : "Top 2.5%/5% of scorers on the AMC"

    }
  });

  return (
    <div className="page-container">
      <div className="form-section">
        <Information information={cvData.Information} setInformation={setCVData}/>
        <Education education={cvData.Education} setEducation={setCVData}/>
        <EmploymentHistory employmentHistory={cvData.EmploymentHistory} setEmploymentHistory={setCVData}/>
        <Honors honors = {cvData.Honors} setHonors={setCVData} />
      </div>
      <div className="cv-preview">
        <CV information={cvData} />
      </div>
    </div>
  )
}

export default App
