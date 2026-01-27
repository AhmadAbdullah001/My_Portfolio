import {
  Code,
  Globe,
  Database,
  Wrench,
  Brain,
} from "lucide-react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#000511] text-white px-6 py-24"
    >
      <div className="max-w-7xl mx-auto p-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ overflowY: "hidden" }}
          >
            Technical <span className="text-green-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-3 text-sm">
            Technologies and tools I work with
          </p>

        </div>

        {/* Cards Grid */}
        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {/* Programming */}
          <SkillCard
            icon={<Code />}
            title="Programming"
            color="bg-blue-500"
            skills={["C", "C++", "JavaScript"]}
          />

          {/* Web */}
          <SkillCard
            icon={<Globe />}
            title="Web Technologies"
            color="bg-green-500"
            skills={["HTML", "CSS", "React", "Node.js", "Express.js"]}
          />

          {/* Database */}
          <SkillCard
            icon={<Database />}
            title="Databases"
            color="bg-orange-500"
            skills={["MongoDB", "SQL"]}
          />

          {/* Tools (Wide Card) */}
         <SkillCard
         icon={<Wrench />}
         title="Tools & Frameworks"
         color="bg-purple-500"
         skills={[
         "Git",
         "GitHub",
         "Bootstrap",
        "Tailwind CSS",
        "MS Office",
  ]}
/>


          {/* DSA */}
          <SkillCard
            icon={<Brain />}
            title="DSA"
            color="bg-red-500"
            skills={[
              "Data Structures",
              "Algorithms",
              "Problem Solving",
            ]}
          />

        </div>

      </div>
    </section>
  );
}

/* Reusable Card */
function SkillCard({
  icon,
  title,
  color,
  skills,
  className = "",
}) {
  return (
    <div
      className={`
        ${className}

        bg-white/5 backdrop-blur-md
        border border-white/10
        rounded-2xl p-6

        hover:bg-white/10
        hover:border-green-400/30

        transition-all duration-300
        cursor-pointer
      `}
    >

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">

        <div
          className={`
            ${color}
            w-10 h-10
            rounded-lg
            flex items-center justify-center
          `}
        >
          {icon}
        </div>

        <h3 className="font-semibold text-lg">
          {title}
        </h3>

      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3">

        {skills.map((skill, i) => (
          <span
            key={i}
            className="
              bg-[#1f2229]
              border border-white/10
              px-3 py-1
              rounded-lg
              text-sm
              text-gray-300
            "
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}
