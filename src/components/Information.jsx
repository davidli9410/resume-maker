import React from "react";
import '../Styles/inputs.css'
import CustomInput from "./CustomInput";

function Information({information, setInformation}) {
  const handleChange = (field, value) => {
    setInformation(prev => ({
      ...prev,
      Information: {
        ...prev.Information,
        [field]: value
      }
    }));
  };

  return (
    <div className="section-container">
      <h2>Basic Information</h2>
      <CustomInput
        label="First Name"
        value={information.firstName}
        onChange={(val) => handleChange("firstName", val)}
      />
      <CustomInput
        label="Last Name"
        value={information.lastName}
        onChange={(val) => handleChange("lastName", val)}
      />
      <CustomInput
        label="Email"
        value={information.email}
        onChange={(val) => handleChange("email", val)}
      />
      <CustomInput
        label="LinkedIn"
        value={information.linkedin}
        onChange={(val) => handleChange("linkedin", val)}
      />
    </div>
  );
}

export default Information;
