import { useState, useEffect } from "react";
import { Sun } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50
        transition-all duration-300

        ${
          scrolled
            ? "bg-black/30 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }

        text-white px-6 py-4
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          Ahmad<span className="text-green-400">.dev</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium items-center">
          {["Home","About","Skills","Projects","Services","Contact"].map(
            (item) => (
              <li
                key={item}
                className="text-[#808EA3] hover:text-green-400 cursor-pointer transition"
              >
                {item}
              </li>
            )
          )}

          {/* Theme Button */}
          <button className="group bg-[#1F2229] p-2 rounded-md">
            <Sun className="h-5 w-5 text-gray-300 group-hover:text-green-400 transition" />
          </button>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-black/80 backdrop-blur-md px-6 pb-4 space-y-4 text-sm">
          {["Home","About","Projects","Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-green-400 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
