import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";

function About() {
  return (
    <section id="about" className="bg-slate-900 text-white py-24 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          About Me
        </h1>

        {/* About */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Profile Image */}
          <div className="flex justify-center">
  <div className="w-full max-w-md h-[550px] rounded-3xl overflow-hidden border-4 border-cyan-400 shadow-2xl">
    <img
      src="/images/profile-pic.png"
      alt="Profile"
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
    />
  </div>
</div>

          {/* Background */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              Background
            </h2>

            <p className="text-gray-300 text-lg leading-8">
              I am a passionate BSc CSIT student with a strong interest in
              software development, web technologies, and problem-solving.
              I enjoy building practical applications and continuously
              improving my programming skills.
            </p>

            <p className="text-gray-300 text-lg leading-8 mt-6">
              I have experience working with Java, Python, PHP, React.js,
              HTML, CSS, JavaScript, SQL, and Git. I enjoy learning modern
              technologies and building responsive web applications.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">
              <div className="bg-slate-800 rounded-xl p-5">
                <h3 className="text-cyan-400 font-semibold">
                  🎓 Education
                </h3>

                <p className="text-gray-300 mt-2">
                  BSc CSIT Student
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-5">
                <h3 className="text-cyan-400 font-semibold">
                  💻 Specialization
                </h3>

                <p className="text-gray-300 mt-2">
                  React.js & Full Stack Development
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Skills */}
        <div className="mt-24">
          <Skills />
        </div>

        {/* Certifications */}
        <div className="mt-24">

          <h2 className="text-4xl font-bold text-cyan-400 mb-10">
            Certifications & Workshops
          </h2>

          <div className="bg-slate-800 rounded-xl p-8 shadow-lg">

            <div className="flex justify-between border-b border-slate-700 py-4">
              <span>📌 Workshop on Project Management</span>
              <span className="text-gray-400">Feb 2024</span>
            </div>

            <div className="flex justify-between border-b border-slate-700 py-4">
              <span>📌 Full Stack Development Using React.js</span>
              <span className="text-gray-400">March 2024</span>
            </div>

            <div className="flex justify-between py-4">
              <span>📌 Basic Linux & Git</span>
              <span className="text-gray-400">Dec 2023</span>
            </div>

          </div>

        </div>

        {/* Projects */}
        <div className="mt-24">
          <Projects />
        </div>

      </div>
    </section>
  );
}

export default About;