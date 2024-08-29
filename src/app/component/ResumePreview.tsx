import React from "react";

type ResumePreviewProps = {
  name: string;
  email: string;
  phone: string;
  address: string;
  experience: string;
  education: string;
  skills: string;
};

const ResumePreview: React.FC<ResumePreviewProps> = ({
  name,
  email,
  phone,
  address,
  experience,
  education,
  skills,
}) => {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        width: "600px",
        margin: "0 auto",
      }}
    >
      <h2>{name || "Your Name"}</h2>
      <p>{email || "your.email@example.com"}</p>
      <p>{phone || "(123) 456-7890"}</p>
      <p>{address || "Your Address"}</p>

      <h3>Experience</h3>
      <p>{experience || "Your professional experience"}</p>

      <h3>Education</h3>
      <p>{education || "Your educational background"}</p>

      <h3>Skills</h3>
      <p>{skills || "Your skills"}</p>
    </div>
  );
};

export default ResumePreview;
