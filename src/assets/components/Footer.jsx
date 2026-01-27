import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#000511] text-white px-6 py-16">

      <div className="max-w-7xl mx-auto">

        {/* Top Divider */}
        <div className="border-t border-white/10 mb-10 w-screen"></div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Left */}
          <div className="text-center md:text-left">

            <h3 className="text-lg font-semibold text-green-400 mb-1">
              Ahmad.dev
            </h3>

            <p className="text-gray-400 text-sm max-w-sm">
              "Code is like humor. When you have to explain it, it's bad."
            </p>

          </div>

          {/* Right Icons */}
          <div className="flex gap-4">

            <SocialIcon
              icon={<Mail size={18} />}
              link="mailto:ahmadhashmi1304@gmail.com"
            />

            <SocialIcon
              icon={<Github size={18} />}
              link="https://github.com/AhmadAbdullah001"
            />

            <SocialIcon
              icon={<Linkedin size={18} />}
              link="https://www.linkedin.com/in/ahmad-abdullah-hashmi-802a372a9"
            />

          </div>

        </div>

        {/* Bottom Divider */}
        <div className="border-t border-white/10 my-10"></div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm">

          © {new Date().getFullYear()} Ahmad Abdullah Hashmi.
          Built with <span className="text-green-400">❤</span> using React

        </p>

      </div>

    </footer>
  );
}

/* Social Icon */
function SocialIcon({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="
        w-10 h-10 rounded-xl
        bg-[#1f2229]
        flex items-center justify-center

        hover:bg-green-400/20
        hover:text-green-400

        transition
      "
    >
      {icon}
    </a>
  );
}
