"use client";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const downloadPdf = () => {
  
    const link = document.createElement("a"); // create <a> tag
    link.href = "/anupam-resume.pdf"; // file location (inside public)
    link.download = "anupam-resume.pdf"; // force download with filename
    link.target = "_blank"; // open in new tab
    link.click(); // trigger click
  };

  let loadingToastId;
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = async () => {
    console.log(contact, message);
    if (contact.trim() !== "" && message.trim() !== "") {
      try {
        loadingToastId = toast.loading("Sending Message");
        const res = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: "anupamkandel8@gmail.com",
            subject: "From your Profile Website",
            contact: contact,
            message: message,
          }),
        });
        // const data = await res.json();
        // console.log(data);
        if (res.status === 200) {
          setContact("");
          setMessage("");
          toast.dismiss(loadingToastId);
          toast.success("Message sent successfully!");
        } else {
          toast.dismiss(loadingToastId);
          toast.error("Failed to send message.");
          window.location.href = "mailto:anupamkandel8@gmail.com";
        }
      } catch (err) {
        toast.dismiss(loadingToastId);
        toast.error("Error sending message");
        console.log("email error: ", err);
        window.location.href = "mailto:anupamkandel8@gmail.com";
      }
    } else {
      toast.error("Please fill in both fields.");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-2xl font-bold"></h2>
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <a
              href="https://www.linkedin.com/in/anupam-kandel-561b72243/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="w-10 h-10"
              />
              <span className="text-xs mt-1 text-gray-600">LinkedIn</span>
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="https://github.com/anupamkandel8"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="w-10 h-10 bg-white rounded-full"
              />
              <span className="text-xs mt-1 text-gray-600">GitHub</span>
            </a>
          </div>
          <div onClick={downloadPdf} className="flex flex-col items-center cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
              alt="Resume"
              className="w-10 h-10"
            />
            <span className="text-xs mt-1 text-gray-600">Resume</span>
          </div>
        </div>
        <div className="flex w-full max-w-90 gap-4">
          <a href="mailto:your.email@example.com"></a>
          <div className="flex flex-col gap-3 w-full">
            <input
              onChange={(e) => setContact(e.target.value)}
              type="text"
              name="contact"
              required
              placeholder="Your contact information"
              className=" border rounded px-3 py-2"
              value={contact}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  sendEmail();
                }
              }}
            />
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              required
              placeholder="Write message..."
              className="border rounded px-3 py-2"
              rows={3}
              value={message}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  sendEmail();
                }
              }}
            />
            <button
              onClick={sendEmail}
              className="px-1 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
