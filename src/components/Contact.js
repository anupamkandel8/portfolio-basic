"use client";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact({ className }) {
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
    <div
      className={`  flex flex-col items-center lg:justify-center gap-1 ${className}`}
    >
      <h1 className="text-3xl font-bold">Contact Me</h1>

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
  );
}
