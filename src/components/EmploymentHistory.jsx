import React from "react";
import { useState } from "react";
import CustomInput from "./CustomInput";

function EmploymentHistory({employmentHistory, setEmploymentHistory}) {
  const handleChange = (field, value) => {
    setEmploymentHistory(prev => ({
      ...prev,
      EmploymentHistory: {
        ...prev.EmploymentHistory,
        [field]: value
      }
    }));
  };

  return (
    <div className="section-container">
      <h2>Work Experience</h2>
      <div className="job-entry">
        <CustomInput
          label="Company"
          value={employmentHistory.company}
          onChange={(val) => handleChange("company", val)}
        />
        <CustomInput
          label="Position"
          value={employmentHistory.position}
          onChange={(val) => handleChange("position", val)}
        />
        <CustomInput
          label="Duration"
          value={employmentHistory.toFrom}
          onChange={(val) => handleChange("toFrom", val)}
        />
        <CustomInput
          label="Description"
          value={employmentHistory.description}
          onChange={(val) => handleChange("description", val)}
        />
        <CustomInput
          label="Company"
          value={employmentHistory.company1}
          onChange={(val) => handleChange("company1", val)}
        />
        <CustomInput
          label="Position"
          value={employmentHistory.position1}
          onChange={(val) => handleChange("position1", val)}
        />
        <CustomInput
          label="Duration"
          value={employmentHistory.toFrom1}
          onChange={(val) => handleChange("toFrom1", val)}
        />
        <CustomInput
          label="Description"
          value={employmentHistory.description1}
          onChange={(val) => handleChange("description1", val)}
        /><CustomInput
          label="Company"
          value={employmentHistory.company2}
          onChange={(val) => handleChange("company2", val)}
        />
        <CustomInput
          label="Position"
          value={employmentHistory.position2}
          onChange={(val) => handleChange("position2", val)}
        />
        <CustomInput
          label="Duration"
          value={employmentHistory.toFrom2}
          onChange={(val) => handleChange("toFrom2", val)}
        />
        <CustomInput
          label="Description"
          value={employmentHistory.description2}
          onChange={(val) => handleChange("description2", val)}
        />

      </div>
    </div>
  );
}

export default EmploymentHistory;