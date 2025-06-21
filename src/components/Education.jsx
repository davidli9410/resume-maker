import React from "react";
import CustomInput from "./CustomInput";

function Education({ education, setEducation }) { 
    const handleChange = (field, value) => {
        setEducation(prev => ({
            ...prev,
            Education: {
                ...prev.Education,
                [field]: value
            }
        }));
    };

    return (
        <div className="section-container">
            <h2>Education</h2>
            <CustomInput
                label="University"
                value={education.uni}
                onChange={(val) => handleChange("uni", val)}
            />
            <CustomInput
                label="Path of Study"
                value={education.major}
                onChange={(val) => handleChange("major", val)}
            />
            <CustomInput
                label="GPA"
                value={education.GPA}
                onChange={(val) => handleChange("GPA", val)}
            />
            <CustomInput
                label="Term"
                value={education.term}
                onChange={(val) => handleChange("term", val)}
            />


            

            
        </div>
    );
} 

export default Education;