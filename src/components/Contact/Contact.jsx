function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-8 py-20"
    >
      <div className="max-w-5xl w-full">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4">
            Contact Info
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm currently looking for internships, freelance opportunities,
            and exciting software development projects. Feel free to contact me.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Email */}
          <div className="bg-slate-800 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              📩 Email
            </h2>

            <a
              href="mailto:sonukafle1@gmail.com"
              className="text-gray-300 hover:text-cyan-400"
            >
              sonukafle1@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="bg-slate-800 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
               GitHub
            </h2>

            <a
              href="https://github.com/SonuKafle11"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-cyan-400"
            >
              github.com/SonuKafle11
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-slate-800 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              🔗 LinkedIn
            </h2>

            <a
              href="https://www.linkedin.com/in/sumitra-kafle-4371b1347/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-cyan-400"
            >
              Sumitra Kafle
            </a>
          </div>

          {/* Location */}
          <div className="bg-slate-800 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              📍 Location
            </h2>

            <p className="text-gray-300">
              Kathmandu, Nepal
            </p>
          </div>

          

        </div>

        {/* Download Resume */}
        <div className="text-center mt-14">
          <a
            href="/Sumitra-CV.pdf"
            download
            className="inline-block bg-cyan-500 hover:bg-cyan-600 px-10 py-4 rounded-full text-lg font-semibold transition duration-300 shadow-lg hover:shadow-cyan-500/50"
          >
            📄 Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;