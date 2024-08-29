import React, { useState } from "react";

type ResumeFormProps = {
  onInputChange: (name: string, value: string) => void;
};

const ResumeForm: React.FC<ResumeFormProps> = ({ onInputChange }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="tel" name="phone" onChange={handleChange} />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" name="address" onChange={handleChange} />
      </div>
      <div>
        <label>Experience:</label>
        <textarea name="experience" onChange={handleChange}></textarea>
      </div>
      <div>
        <label>Education:</label>
        <textarea name="education" onChange={handleChange}></textarea>
      </div>
      <div>
        <label>Skills:</label>
        <textarea name="skills" onChange={handleChange}></textarea>
      </div>
    </form>
  );
};

export default ResumeForm;
