import { Github, ExternalLink, Layers } from "lucide-react";

export default function Projects() {
  return (
    <section 
      id="projects"
      className="bg-[#000000] min-h-screen bg-[#000511] text-white px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold " style={{ overflowY: "hidden" }}>
            Featured <span className="text-green-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-3 text-sm max-w-xl mx-auto">
            Real-world applications I've built to solve problems and learn new technologies
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Project 1 */}
          <ProjectCard
            title="Smart Complaint Management System"
            desc="A full-stack complaint portal with role-based access, admin moderation, real-time status tracking, and AI-assisted complaint rewriting."
            features={[
              "Role-based authentication",
              "AI complaint optimization",
              "Real-time status updates",
              "Admin dashboard",
            ]}
            tech={["React", "Node.js", "Express.js", "MongoDB"]}
            github="#"
            live="#"
          />

          {/* Project 2 */}
          <ProjectCard
            title="E-Commerce Gaming Store"
            desc="A scalable full-stack e-commerce platform featuring product browsing, cart functionality, and backend APIs for gaming components."
            features={[
              "Product catalog",
              "User authentication",
              "Shopping cart",
              "Payment integration ready",
            ]}
            tech={["React", "Node.js", "Express.js", "MongoDB"]}
            github="#"
            live="#"
          />

        </div>

      </div>
    </section>
  );
}

/* Card Component */
function ProjectCard({
  title,
  desc,
  features,
  tech,
  github,
  live,
}) {
  return (
    <div
      className="
        relative
        bg-white/5 backdrop-blur-md
        border border-white/10
        rounded-2xl p-8

        hover:bg-white/10
        hover:shadow-xl
        hover:shadow-green-400/20
        hover:border-green-400/30

        transition-all duration-300
      "
    >

      {/* Top Icons */}
      <div className="flex justify-between items-start mb-6">

        <div className="bg-green-400/10 p-3 rounded-xl">
          <Layers className="text-green-400" size={22} />
        </div>

        <div className="flex gap-3">

          <a
            href={github}
            target="_blank"
            className="bg-[#1f2229] p-2 rounded-lg hover:bg-green-400/20 transition"
          >
            <Github size={18} />
          </a>

          <a
            href={live}
            target="_blank"
            className="bg-[#1f2229] p-2 rounded-lg hover:bg-green-400/20 transition"
          >
            <ExternalLink size={18} />
          </a>

        </div>

      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      {/* Desc */}
      <p className="text-gray-400 text-sm leading-relaxed mb-5">
        {desc}
      </p>

      {/* Features */}
      <div className="mb-6">

        <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">
          Key Features
        </p>

        <ul className="grid grid-cols-2 gap-y-2 text-sm text-gray-300">

          {features.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-green-400">•</span>
              {item}
            </li>
          ))}

        </ul>

      </div>

      {/* Tech Stack */}
      <div className="border-t border-white/10 pt-4 flex flex-wrap gap-3">

        {tech.map((item, i) => (
          <span
            key={i}
            className="
              bg-green-400/10
              text-green-400
              px-3 py-1
              rounded-full
              text-xs
            "
          >
            {item}
          </span>
        ))}

      </div>

    </div>
  );
}
