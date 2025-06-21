import React from "react";
import CustomInput from "./CustomInput";

function Honors({honors, setHonors}) {
  const handleChange = (field, value) => {
    setHonors(prev => ({
      ...prev,
      Honors: {
        ...prev.Honors,
        [field]: value
      }
    }));
  };

  return (
    <div className="section-container">
      <h2>Honors & Awards</h2>
      <CustomInput
        label="Award"
        value={honors.title}
        onChange={(val) => handleChange("title", val)}
      />
      <CustomInput
        label="Date"
        value={honors.date}
        onChange={(val) => handleChange("date", val)}
      />
      <CustomInput
        label="Description"
        value={honors.description}
        onChange={(val) => handleChange("description", val)}
      />

    <CustomInput
        label="Award"
        value={honors.title1}
        onChange={(val) => handleChange("title1", val)}
      />
      <CustomInput
        label="Date"
        value={honors.date1}
        onChange={(val) => handleChange("date1", val)}
      />
      <CustomInput
        label="Description"
        value={honors.description1}
        onChange={(val) => handleChange("description1", val)}
      />
    </div>
  );
}

export default Honors;