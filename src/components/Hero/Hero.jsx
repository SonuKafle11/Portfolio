function Hero() {
  return (
    <div id="home"
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
      }}
    >

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative h-full flex items-center justify-center">

        <div className="max-w-6xl grid md:grid-cols-2 gap-20 items-center">

          <div>


      <h1 className="text-7xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
  I'm Sumitra Kafle
</h1>

            <p className="text-gray-300 mt-8 text-xl leading-9">
              React Developer | Frontend Enthusiast |
              Passionate about creating beautiful and responsive websites.
            </p>

            <a
  href="/Sumitra-CV.pdf"
  download
  className="inline-block mt-10 bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-full text-white font-semibold transition duration-300 shadow-lg hover:shadow-cyan-500/50"
>
  📃 Download CV
</a>

          </div>

          <div className="flex justify-center">

          </div>

        </div>

      </div>

    </div>
  );
}

export default Hero;