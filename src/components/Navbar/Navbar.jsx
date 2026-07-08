const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400 cursor-pointer">
          MyPortfolio
        </h1>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-lg font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition duration-300"
            >
              About Me
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact Me
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;