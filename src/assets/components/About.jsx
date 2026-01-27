import { Code, Target, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold"style={{overflowY:"hidden"}}>
            About <span className="text-green-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Get to know more about my journey, passion, and goals
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Content */}
          <div className="space-y-6 text-gray-300 leading-relaxed">

            <p>
              I'm a passionate 3rd-year B.Tech Computer Science student
              at Abdul Kalam Technical University, driven by a deep interest
              in building impactful web applications and solving complex
              problems.
            </p>

            <p>
              My journey in tech started with curiosity about how websites
              work, and has evolved into a dedicated pursuit of becoming
              a skilled full-stack developer. I'm constantly learning new
              technologies and refining my skills in data structures and
              algorithms.
            </p>

            <p>
              Currently, I'm actively preparing for Web development internships
              while working on real-world projects that challenge me to
              grow as a developer.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 pt-6">

              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
                <Code className="text-green-400" size={20} />
                <span>Full Stack</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
                <Target className="text-green-400" size={20} />
                <span>DSA Focus</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
                <GraduationCap className="text-green-400" size={20} />
                <span>3rd Year</span>
              </div>

            </div>

          </div>

    
<div>

  <h3 className="text-2xl font-semibold mb-10">
    Education Timeline
  </h3>

  <div className="relative pl-10">

    {/* Vertical Line */}
    <div className="absolute left-[18px] top-0 h-full w-[2px] bg-green-400/40"></div>

    {/* Item 1 */}
    <div className="relative mb-12 flex gap-6">

      {/* Dot */}
      <div className="relative z-10 pt-1">
        <span className="block w-4 h-4 bg-green-400 rounded-full"></span>
      </div>

      {/* Content */}
      <div>
        <p className="text-green-400 text-sm font-medium mb-1">
          2023 - 2027
        </p>

        <h4 className="text-lg font-semibold">
          B.Tech in Computer Science
        </h4>

        <p className="text-gray-400 text-sm mt-1">
          Abdul Kalam Technical University
        </p>

        <p className="text-gray-500 text-sm mt-2 max-w-md">
          Currently in 3rd year, focusing on full-stack development
          and DSA.
        </p>
      </div>

    </div>

    {/* Item 2 */}
    <div className="relative flex gap-6">

      {/* Dot */}
      <div className="relative z-10 pt-1">
        <span className="block w-4 h-4 bg-green-400 rounded-full"></span>
      </div>

      {/* Content */}
      <div>
        <p className="text-green-400 text-sm font-medium mb-1">
          2021 - 2023
        </p>

        <h4 className="text-lg font-semibold">
          Higher Secondary Education
        </h4>

        <p className="text-gray-400 text-sm mt-1">
          ICSE Board
        </p>

        <p className="text-gray-500 text-sm mt-2 max-w-md">
          Completed 12th with focus on Science and Mathematics.
        </p>
      </div>

    </div>

  </div>

</div>

        </div>

      </div>
    </section>
  );
}
