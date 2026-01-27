import { Github,Linkedin ,ArrowDown} from 'lucide-react';
import Avatar from "./Avatar";
export default function HeroSection() {
  return (
    <section className="min-h-screen bg-transparent text-white flex  w-screen px-6 relative pt-24">
      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <p className="text-green-400 mb-2">Hello, I'm</p>

          <h1 style={{overflowY:"hidden"}} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Ahmad Abdullah{" "}
            <span className="text-green-400">Hashmi</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-lg text-c">
            Full Stack Web Developer Enthusiast | DSA Learner | Internship
            Aspirant
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">

            <button className="bg-green-500 text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition">
              View Projects ↓
            </button>

            <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Download Resume
            </button>

          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">

            <a className="w-10 h-10 flex items-center rounded-xl justify-center border border-none bg-[#1F2229]  hover:bg-[#082601] hover:text-black transition">
                <Github className="hover:stroke-green-400" style={{color:"#808EA3"}}></Github>
            </a>

            <a className="w-10 h-10 flex items-center rounded-xl justify-center border border-none bg-[#1F2229]  hover:bg-[#000036] hover:text-black transition">
              <Linkedin className='hover:stroke-blue-400' style={{color:"#808EA3"}}></Linkedin>
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center ">

          <div className="relative" style={{width:"max-content", height:"max-content"}}>

            {/* Glow */}
            {/* <div className="absolute inset-0 rounded-full bg-green-500 blur-3xl opacity-50"></div> */}

            {/* Image */}
            <img
              src="/PIC2.jpeg"
              alt="Profile"
              className="w-100 h-100 md:w-90 md:h-100 bottom-4  object-contain relative z-10 "
            />
  {/* <Avatar  /> */}
          </div>

        </div>

      </div>
      <ArrowDown className='absolute bottom-6 left-1/2 -translate-x-1/2
             text-gray-400 animate-bounce cursor-pointer
             hover:text-green-400 transition'></ArrowDown>
    </section>
  );
}
