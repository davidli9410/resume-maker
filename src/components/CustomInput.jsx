import React from "react";

function CustomInput({label, value, onChange }) {
    return (

        <div>

            <label>{label}</label>
            <input type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={{
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                width: "100%",}}

                
            />
        </div>
    )

}


export default CustomInput;