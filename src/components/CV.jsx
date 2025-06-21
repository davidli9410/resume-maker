import React from "react";
import Honors from "./Honors";


function CV({ information }) {
  const {
    Information: { firstName, lastName, email, linkedin },
    Education: { uni, major, GPA, term },
    EmploymentHistory,
    Honors
  } = information;

  return (
    <div className="cv-preview">
      <h2>CV</h2>
      <div className="cv-header">
        <h3>{firstName} {lastName}</h3>
        <div className="cv-contact">
          {email} - <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

      </div>

      <div className="cv-section">
        <h3>Education</h3>
        <div className="education-item">
          <div className="university">{uni}, {major}</div>
          <div className="details">{term}, GPA: {GPA}</div>
        </div>
      </div>

      <div className="cv-section">
        <h3>Experience</h3>
        <div className="employment-item">
          <div className="company-position">{EmploymentHistory.company} - {EmploymentHistory.position}</div>
          <div className="dates">{EmploymentHistory.toFrom}</div>
          <div className="description">-{EmploymentHistory.description}</div>
        </div>
        <div className="employment-item">
          <div className="company-position">{EmploymentHistory.company1} - {EmploymentHistory.position1}</div>
          <div className="dates">{EmploymentHistory.toFrom1}</div>
          <div className="description">-{EmploymentHistory.description1}</div>
        </div>
        <div className="employment-item">
          <div className="company-position">{EmploymentHistory.company2} - {EmploymentHistory.position2}</div>
          <div className="dates">{EmploymentHistory.toFrom2}</div>
          <div className="description">-{EmploymentHistory.description2}</div>
        </div>
        <h3>Honors/Awards</h3>
        <div className="honors-item">
          <div >{Honors.title} - {Honors.date}</div>
          <div className="description">-{Honors.description}</div>

        </div>
        <div className="honors-item">
          <div >{Honors.title1} - {Honors.date1}</div>
          <div className="description">-{Honors.description1}</div>

        </div>

        <div className="honors-item">
          
        </div>
        
      </div>
    </div>
  );
}

export default CV;
