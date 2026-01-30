import { useState, useEffect } from "react";
import { Sun } from "lucide-react";

const sections = [
  "home",
  "about",
  "skills",
  "projects",
  "services",
  "contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll detect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      sections.forEach((sec) => {
        const el = document.getElementById(sec);

        if (el) {
          const top = el.offsetTop - 100;
          const height = el.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActive(sec);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

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
        <h1
          className="text-xl font-bold tracking-wide cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Ahmad<span className="text-green-400">.dev</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium items-center">

          {sections.map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className={`
                cursor-pointer transition capitalize
                ${
                  active === item
                    ? "text-green-400"
                    : "text-[#808EA3] hover:text-green-400"
                }
              `}
            >
              {item}
            </li>
          ))}


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

          {sections.map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className={`
                cursor-pointer capitalize transition
                ${
                  active === item
                    ? "text-green-400"
                    : "hover:text-green-400"
                }
              `}
            >
              {item}
            </li>
          ))}

        </ul>
      )}
    </nav>
  );
}
