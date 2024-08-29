"use client";
import { useState, useEffect } from "react";

type FormData = {
  name: string;
  position: string;
  company: string;
  skills: string;
  experience: string;
};

const Email = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    position: "",
    company: "",
    skills: "",
    experience: "",
  });

  const [email, setEmail] = useState<string>("");
  const [typedLetter, setTypedLetter] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateEmail = () => {
    const { name, position, company, skills, experience } = formData;
    const template = `
Dear Hiring Manager,

I am writing to express my interest in the ${position} at ${company}, as advertised on LinkedIn. With a strong background in ${skills}, I am confident in my ability to contribute effectively to your team.

I am currently pursuing a Bachelor's degree in Electronics and Communication Engineering, where I have developed a deep interest in software development. My passion for creating visually appealing and functional web applications led me to complete relevant courses and independently build several projects. Although I may not have formal work experience, my problem-solving abilities, effective time management, and eagerness to learn new technologies have been key in overcoming challenges and enhancing my skills.

I am particularly drawn to this role because of the innovative environment at ${company} and the opportunity to work on cutting-edge web technologies. I am eager to contribute my skills, continue learning, and grow within your team.

Thank you for considering my application. Please find my resume attached for your review. I look forward to your response and can be reached at +8801701954548 (WhatsApp) or via email at tasmimrahman29@gmail.com.

Sincerely,

${name}
Aspiring Frontend Developer
    `;

    setEmail(template);
    setIsTyping(true);
    setTypedLetter("");
  };

  useEffect(() => {
    if (isTyping && email) {
      const timeout = setTimeout(() => {
        setTypedLetter(email.slice(0, typedLetter.length + 1));
      }, 10);

      if (typedLetter === email) {
        setIsTyping(false);
      }

      return () => clearTimeout(timeout);
    }
  }, [typedLetter, email, isTyping]);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    alert("Cover letter copied to clipboard!");
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
    setIsTyping(false);
    setTypedLetter(email);
  };

  return (
    <div className="flex flex-col lg:flex-row p-5 max-w-7xl mx-auto space-y-6 my-20 lg:space-y-0 lg:space-x-10">
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-5">Email Generator</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Your Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Position Applied For:
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Company Name:
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Key Skills:
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded"
            />
          </label>
        </div>

        <button
          style={{ backgroundColor: "#3e94e4" }}
          onClick={generateEmail}
          className=" text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Generate Email
        </button>
      </div>

      <div className="lg:w-1/2">
        {email && (
          <div
            style={{ backgroundColor: "#f4f6ff" }}
            className="p-5  rounded-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Generated Email </h3>
              <div>
                <button
                  onClick={handleCopy}
                  className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 mr-2"
                >
                  Copy
                </button>
                <button
                  onClick={handleEdit}
                  className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
                >
                  {isEditing ? "Save" : "Edit"}
                </button>
              </div>
            </div>
            {isEditing ? (
              <textarea
                className="w-full p-2 border rounded"
                rows={10}
                value={typedLetter}
                onChange={(e) => setTypedLetter(e.target.value)}
              />
            ) : (
              <pre className="whitespace-pre-wrap text-sm leading-6">
                {typedLetter}
              </pre>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Email;
