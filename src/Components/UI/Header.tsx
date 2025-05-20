const navItems = [
    ["About", "about"],
    ["Experience", "experience"],
    ["Projects", "projects"],
    ["Contact", "contact"],
  ];

const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-sm dark:shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-5">
          <button
            onClick={() =>
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-xl sm:text-2xl font-bold"
          >
            PE<span className="text-primary">.</span>
          </button>
          <nav className="hidden md:flex gap-8 font-medium">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() =>
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-gray-700 cursor-pointer"
              >
                {label}
              </button>
            ))}
          </nav>
          <nav className="md:hidden flex gap-3 text-sm font-medium">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() =>
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-gray-700 md:text-4xl"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>
  )
}

export default Header
