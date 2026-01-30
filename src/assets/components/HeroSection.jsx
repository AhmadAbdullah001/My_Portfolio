import { Github, Linkedin, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {

  // Typing Texts
  const texts = [
    "Full Stack Web Developer",
    "DSA Learner",
    "Internship Aspirant"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing Effect Logic
  useEffect(() => {

    const speed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {

      // Typing
      if (!deleting && subIndex < texts[index].length) {
        setSubIndex(subIndex + 1);
        setText(texts[index].substring(0, subIndex + 1));
      }

      // Start Deleting
      else if (!deleting && subIndex === texts[index].length) {
        setTimeout(() => setDeleting(true), 1000);
      }

      // Deleting
      else if (deleting && subIndex > 0) {
        setSubIndex(subIndex - 1);
        setText(texts[index].substring(0, subIndex - 1));
      }

      // Move to Next Word
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((index + 1) % texts.length);
      }

    }, speed);

    return () => clearTimeout(timeout);

  }, [subIndex, index, deleting]);



  return (
    <section id="home" className="min-h-screen bg-transparent text-white flex w-screen px-6 relative pt-24">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <p className="text-green-400 mb-2">Hello, I'm</p>

          <h1
            style={{ overflowY: "hidden" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Ahmad Abdullah{" "}
            <span className="text-green-400">Hashmi</span>
          </h1>


          {/* Typing Text */}
          <p className="text-gray-400 mt-4 max-w-lg text-c text-xl">

            {text}
            <span className="text-green-400 animate-pulse">|</span>

          </p>


          {/* Buttons */}
          <div className="flex gap-4 mt-6">

            <a href="#projects" className="bg-green-500 text-black px-6 py-3 rounded-lg font-medium">
              View Projects ↓
            </a>

            <a href="/AhmadAbdullahHashmiResume.pdf" download className="border border-gray-600 px-6 py-3 cursor-pointer rounded-lg hover:bg-white hover:text-black transition">
              Download Resume
            </a>

          </div>


          {/* Social Icons */}
          <div className="flex gap-4 mt-6">

            <a
              href="https://github.com/"
              target="_blank"
              className="w-10 h-10 flex items-center rounded-xl justify-center bg-[#1F2229] hover:bg-[#082601] transition"
            >
              <Github style={{ color: "#808EA3" }} className="hover:stroke-green-400" />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="w-10 h-10 flex items-center rounded-xl justify-center bg-[#1F2229] hover:bg-[#000036] transition"
            >
              <Linkedin style={{ color: "#808EA3" }} className="hover:stroke-blue-400" />
            </a>

          </div>

        </div>



        {/* Right Side */}
        <div className="flex justify-center">

          <div
            className="relative"
            style={{ width: "max-content", height: "max-content" }}
          >

            <img
              src="/PIC2.jpeg"
              alt="Profile"
              className="w-100 h-100 md:w-90 md:h-100 object-contain relative z-10"
            />

          </div>

        </div>

      </div>



      {/* Down Arrow */}
      <ArrowDown
        className="absolute bottom-6 left-1/2 -translate-x-1/2
        text-gray-400 animate-bounce cursor-pointer
        hover:text-green-400 transition"
      />

    </section>
  );
}
