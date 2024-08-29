// components/Translator.js
"use client";
// import React, { useState } from "react";
// import axios from "axios";

// const Translator = ({ targetLanguage }: any) => {
//   const [word, setWord] = useState("");
//   const [translation, setTranslation] = useState("");

//   const translateWord = async () => {
//     try {
//       const response = await axios.get(
//         "https://api.mymemory.translated.net/get",
//         {
//           params: {
//             q: word,
//             langpair: `en|${targetLanguage}`,
//           },
//         }
//       );

//       setTranslation(response.data.responseData.translatedText);
//     } catch (error) {
//       console.error("Error translating the word:", error);
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
//       <h1 className="text-xl font-bold text-gray-800">
//         English to {targetLanguage} Translator
//       </h1>
//       <input
//         type="text"
//         value={word}
//         onChange={(e) => setWord(e.target.value)}
//         placeholder="Enter an English word"
//         className="w-full px-3 py-2 border rounded-lg text-gray-800 focus:outline-none"
//       />
//       <button
//         onClick={translateWord}
//         className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
//       >
//         Translate
//       </button>
//       {translation && (
//         <div className="mt-4">
//           <h2 className="text-lg font-semibold text-gray-700">Translation:</h2>
//           <p className="text-gray-600">{translation}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Translator;
import { useState, useEffect } from "react";

type FormData = {
  name: string;
  position: string;
  company: string;
  phone: string;
  email: string;
  skills: string;
  experience: string;
};

const CoverLetterForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    position: "",
    company: "",
    phone: "",
    email: "",
    skills: "",
    experience: "",
  });

  const [coverLetter, setCoverLetter] = useState<string>("");
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

  const generateCoverLetter = () => {
    const { name, position, company, phone, email, skills, experience } =
      formData;
    const template = `
${name}
${phone}
${email}
[Today’s Date]

Hiring Manager
${company}

Dear Hiring Manager,

I am writing to express my interest in the ${position} at ${company}, as advertised on LinkedIn. With a strong background in ${skills}, I am confident in my ability to contribute effectively to your team.

I am currently pursuing a Bachelor's degree in Electronics and Communication Engineering, where I have developed a deep interest in software development. My passion for creating visually appealing and functional web applications led me to complete relevant courses and independently build several projects. Although I may not have formal work experience, my problem-solving abilities, effective time management, and eagerness to learn new technologies have been key in overcoming challenges and enhancing my skills.

I am particularly drawn to this role because of the innovative environment at ${company} and the opportunity to work on cutting-edge web technologies. I am eager to contribute my skills, continue learning, and grow within your team.

Thank you for considering my application. Please find my resume attached for your review. I look forward to your response and can be reached at ${phone} (WhatsApp) or via email at ${email}.

Sincerely,

${name}
Aspiring Frontend Developer
    `;

    setCoverLetter(template);
    setIsTyping(true);
    setTypedLetter("");
  };

  useEffect(() => {
    if (isTyping && coverLetter) {
      const timeout = setTimeout(() => {
        setTypedLetter(coverLetter.slice(0, typedLetter.length + 1));
      }, 10);

      if (typedLetter === coverLetter) {
        setIsTyping(false);
      }

      return () => clearTimeout(timeout);
    }
  }, [typedLetter, coverLetter, isTyping]);

  const handleCopy = () => {
    navigator.clipboard.writeText(coverLetter);
    alert("Cover letter copied to clipboard!");
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
    setIsTyping(false);
    setTypedLetter(coverLetter);
  };

  return (
    <div className="flex flex-col lg:flex-row p-5 max-w-7xl mx-auto space-y-6 my-20 lg:space-y-0 lg:space-x-10">
      {/* Left side - Input Fields */}
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-5">Cover Letter Generator</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Your Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded"
              placeholder="e.g., Tasmim Rahman"
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
              placeholder="e.g., Junior Frontend Developer"
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
              placeholder="e.g., Digital Solutions"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Phone Number:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded"
              placeholder="e.g., +8801701954548"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded"
              placeholder="e.g., tasmimrahman29@gmail.com"
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
              placeholder="e.g., TypeScript, React.js, Next.js, Node.js"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Relevant Experience:
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded"
              rows={4}
              placeholder="Briefly describe your relevant experience"
            />
          </label>
        </div>
        <button
          style={{ backgroundColor: "#3e94e4" }}
          onClick={generateCoverLetter}
          className=" text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Generate Cover Letter
        </button>
      </div>

      {/* Right side - Generated Cover Letter */}
      <div className="lg:w-1/2">
        {coverLetter && (
          <div
            style={{ backgroundColor: "#f4f6ff" }}
            className="p-5  rounded-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Generated Cover Letter:</h3>
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

export default CoverLetterForm;

// import { useState, useEffect } from "react";

// const VoiceToText = () => {
//   const [isListening, setIsListening] = useState(false);
//   const [text, setText] = useState("");
//   const [recognition, setRecognition] = useState(null);

//   useEffect(() => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert(
//         "Your browser does not support speech recognition. Please use Chrome."
//       );
//       return;
//     }

//     const recognitionInstance = new window.webkitSpeechRecognition();
//     recognitionInstance.continuous = true;
//     recognitionInstance.interimResults = true;
//     recognitionInstance.lang = "en-US";

//     recognitionInstance.onresult = (event: any) => {
//       let interimTranscript = "";
//       for (let i = event.resultIndex; i < event.results.length; i++) {
//         const transcript = event.results[i][0].transcript;
//         if (event.results[i].isFinal) {
//           setText((prevText) => prevText + transcript);
//         } else {
//           interimTranscript += transcript;
//         }
//       }
//       setText((prevText) => prevText + interimTranscript);
//     };

//     recognitionInstance.onerror = (event: any) => {
//       console.error("Speech recognition error detected: " + event.error);
//     };

//     setRecognition(recognitionInstance);
//   }, []);

//   const startListening = () => {
//     if (recognition) {
//       recognition.start();
//       setIsListening(true);
//     }
//   };

//   const stopListening = () => {
//     if (recognition) {
//       recognition.stop();
//       setIsListening(false);
//     }
//   };

//   return (
//     <div
//       style={{
//         padding: "20px",
//         backgroundColor: "#f4f4f4",
//         borderRadius: "8px",
//       }}
//     >
//       <h2>Voice to Text Converter</h2>
//       <button
//         onClick={isListening ? stopListening : startListening}
//         style={{ marginBottom: "10px", padding: "10px", cursor: "pointer" }}
//       >
//         {isListening ? "Stop Listening" : "Start Listening"}
//       </button>
//       <div
//         style={{
//           marginTop: "20px",
//           padding: "10px",
//           border: "1px solid #ddd",
//           backgroundColor: "#fff",
//           minHeight: "100px",
//         }}
//       >
//         <strong>Transcribed Text:</strong>
//         <p>{text}</p>
//       </div>
//     </div>
//   );
// };

// export default VoiceToText;
