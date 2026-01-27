import {
  Layout,
  Layers,
  Smartphone,
  Code2,
} from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen bg-[#000511] text-white px-6 py-24"
    >
      <div className="max-w-7xl mx-auto p-10">

        {/* Heading */}
        <div className="text-center mb-20 ">

          <h2 className="text-4xl md:text-5xl font-bold" style={{ overflowY: "hidden" }}>
            My <span className="text-green-400">Services</span>
          </h2>

          <p className="text-gray-400 mt-3 text-sm max-w-xl mx-auto">
            Web development services I offer to help bring your ideas to life
          </p>

        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-5">

          {/* Service 1 */}
          <ServiceCard
            icon={<Layout size={22} />}
            title="Portfolio Websites"
            desc="Clean, modern portfolio websites that showcase your work and help you stand out to potential employers or clients."
          />

          {/* Service 2 */}
          <ServiceCard
            icon={<Layers size={22} />}
            title="Full-Stack Applications"
            desc="End-to-end web applications with robust backends, databases, and intuitive frontends tailored to your needs."
          />

          {/* Service 3 */}
          <ServiceCard
            icon={<Smartphone size={22} />}
            title="Responsive UI Design"
            desc="Beautiful, mobile-first user interfaces that provide seamless experiences across all devices and screen sizes."
          />

          {/* Service 4 */}
          <ServiceCard
            icon={<Code2 size={22} />}
            title="Backend API Development"
            desc="Scalable and secure RESTful APIs using Node.js and Express.js to power your web applications."
          />

        </div>

      </div>
    </section>
  );
}

/* Card */
function ServiceCard({ icon, title, desc }) {
  return (
    <div
      className="
        group relative

        bg-white/5
        border border-white/10
        rounded-2xl p-8 text-center

        hover:bg-white/10
        hover:border-green-400
        hover:shadow-md
        hover:shadow-green-400/10

        transition-all duration-300
        cursor-pointer
      "
    >

      {/* Icon */}
      <div className="
        mx-auto mb-5 w-12 h-12 rounded-xl
        bg-green-400/10
        flex items-center justify-center
        text-green-400
      ">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {desc}
      </p>

    </div>
  );
}


