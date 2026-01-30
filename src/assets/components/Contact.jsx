import {
  Mail,
  Github,
  Linkedin,
  FileText,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#000511] text-white px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ overflowY: "hidden" }}
          >
            Get In <span className="text-green-400">Touch</span>
          </h2>

          <p className="text-gray-400 mt-3 text-sm max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities?
            Feel free to reach out!
          </p>

        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Left Info */}
          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              I'm currently looking for internship opportunities and
              open to freelance projects. Whether you have a question
              or just want to say hi, I’ll try my best to get back to you.
            </p>

            {/* Info Cards */}
            <div className="space-y-4 mb-10">

              <InfoCard
                icon={<Mail />}
                title="Email"
                value="ahmadhashmi1304@gmail.com"
                link="mailto:ahmadhashmi1304@gmail.com"
              />

              <InfoCard
                icon={<Github />}
                title="GitHub"
                value="AhmadAbdullah001"
                link="https://github.com/AhmadAbdullah001"
              />

              <InfoCard
                icon={<Linkedin />}
                title="LinkedIn"
                value="Ahmad Abdullah Hashmi"
                link="https://www.linkedin.com/in/ahmad-abdullah-hashmi-802a372a9"
              />

            </div>

            {/* Resume Button */}
            <a
              href="/AhmadAbdullahHashmiResume.pdf"
              download
              className="
                flex items-center justify-center gap-2
                bg-green-400 text-black
                py-3 rounded-xl font-medium
                hover:bg-green-500
                transition
              "
            >
              <FileText size={18} />
              Download Resume
            </a>

          </div>

          {/* Right Form */}
          <div
            className="
              bg-white/5 backdrop-blur-md
              border border-white/10
              rounded-2xl p-8
            "
          >

            {/* 🔥 FORM WITH FORMSPREE */}
            <form
              action="https://formspree.io/f/mojwyegb"
              method="POST"
              className="space-y-6"
            >

              {/* Name */}
              <div>
                <label className="text-sm text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="input-style"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-gray-300">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="input-style"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-gray-300">
                  Your Message
                </label>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="input-style resize-none"
                  required
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="
                  w-full flex items-center justify-center gap-2
                  bg-green-400 text-black py-3 rounded-xl
                  font-medium
                  hover:bg-green-500
                  transition
                "
              >
                Send Message
                <Send size={18} />
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* Input Style */}
      <style jsx>{`
        .input-style {
          width: 100%;
          margin-top: 6px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          color: white;
          outline: none;
          transition: 0.3s;
        }

        .input-style:focus {
          border-color: #4ade80;
          box-shadow: 0 0 0 1px #4ade80;
        }
      `}</style>

    </section>
  );
}


/* Info Card */
function InfoCard({ icon, title, value, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="
        flex items-center gap-4
        bg-white/5 backdrop-blur-md
        border border-white/10
        rounded-xl p-4
        hover:bg-white/10
        hover:border-green-400/30
        hover:shadow-lg
        hover:shadow-green-400/10
        transition
      "
    >

      <div className="bg-green-400/10 p-3 rounded-lg text-green-400">
        {icon}
      </div>

      <div>
        <p className="text-sm text-gray-400">
          {title}
        </p>

        <p className="font-medium text-sm">
          {value}
        </p>
      </div>

    </a>
  );
}
