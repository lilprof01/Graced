import {
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 text-center border-t">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm">
              © {new Date().getFullYear()} Precious Ebele. All rights reserved.
            </p>
            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href="mailto:princess.ebele@gmail.com"
                aria-label="Email"
                className="hover:opacity-80"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://x.com/pretttyebi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:opacity-80"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com/in/princessebele"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:opacity-80"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <p className="text-xs border-t border-white/20 pt-4">
            developed with ❤️ by{" "}
            <a
              href="https://x.com/aniya_juwon"
              target="_blank"
              className="underline hover:text-blue-600 transition-all duration-300 ease-in-out"
            >
              Smart
            </a>
          </p>
        </div>
      </footer>
  )
}

export default Footer
