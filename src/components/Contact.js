import React from 'react';

export default function Contact() {

  const onSubmit=async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const message = e.target.message.value;
    try {
      const res = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer re_cXDuNjcs_JuFev2M9JAER9q1g8y6QHhvc'
  },
  body: JSON.stringify({
    from: email,
    to: 'anupamkandel8@gmail.com',
    subject: 'Contact form Portfolio',
    html: `<p>${message}</p>`
  })
      });
      if (res.ok) {
  alert('Email sent!');
  e.target.reset();
      } else {
  alert('Failed to send email.');
      }
    } catch (err) {
      alert('Error sending email.');
    }
  }

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
              href="https://github.com/your-github"
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
          <div className="flex flex-col items-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Resume"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                alt="Resume"
                className="w-10 h-10"
              />
              <span className="text-xs mt-1 text-gray-600">Resume</span>
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="mailto:your.email@example.com">
          
          </a>
          <form
            className="flex flex-col gap-3 w-full max-w-xs"
       
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Recipient Email"
              className=" border rounded px-3 py-2"
            />
            <textarea
              name="message"
              required
              placeholder="Write anything..."
              className="border rounded px-3 py-2"
              rows={4}
            />
            <button
            
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Send via Resend
            </button>
          </form>

          
        </div>
      </div>

    </div>
  );
}
