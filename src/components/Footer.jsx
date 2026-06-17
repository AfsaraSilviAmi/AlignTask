import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Browse Tasks", href: "/tasks" },
    { name: "Browse Freelancers", href: "/freelancers" },
   
  ];

  return (
    <footer className="border-t border-white/20 bg-[#74d3ae]/20 backdrop-blur-xl mt-20">
      <div className="mx-auto px-6 py-10">

        {/* TOP SECTION - 4 COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* 1. LOGO */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="logo" width={40} height={40} />

              <p className="font-bold italic text-xl">
                <span className="bg-gradient-to-r from-[#678d58] to-[#74d3ae] bg-clip-text text-transparent">
                  Align
                </span>
                <span className="bg-gradient-to-r from-[#a6c48a] to-[#74d3ae] bg-clip-text text-transparent">
                  Task
                </span>
              </p>
            </Link>

            <p className="text-sm text-gray-500 mt-3">
              Get your tasks done by skilled freelancers worldwide.
            </p>
          </div>
          
        {/* CONTACT US */}
<div>
  <h3 className="text-lg font-semibold text-gray-700 mb-3">
    Contact Us
  </h3>

  <div className="text-sm text-gray-600 space-y-4">

    {/* Email */}
    <div className="flex items-center gap-3 hover:text-[#dd9787] transition-colors">
      <FaEnvelope className="text-[#dd9787]" />
      <span>ami@aligntask.com</span>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-3 hover:text-[#dd9787] transition-colors">
      <FaPhone className="text-[#dd9787]" />
      <span>+880 12345678</span>
    </div>

    {/* Location */}
    <div className="flex items-center gap-3 hover:text-[#dd9787] transition-colors">
      <FaLocationDot className="text-[#dd9787]" />
      <span>Dhaka, Bangladesh</span>
    </div>

  </div>
</div>

          {/* 2. NAVIGATION */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#dd9787] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. SOCIAL LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Follow Us on
            </h3>

            <div className="flex gap-4">
              <a
                href={"/"}
                className="p-2 rounded-full bg-white shadow hover:scale-110 transition"
              >
                <FaXTwitter className="text-gray-700 hover:text-black" />
              </a>

              <a
                href={"/"}
                className="p-2 rounded-full bg-white shadow hover:scale-110 transition"
              >
                <FaGithub className="text-gray-700 hover:text-black" />
              </a>

              <a
                href={"/"}
                className="p-2 rounded-full bg-white shadow hover:scale-110 transition"
              >
                <FaLinkedin className="text-gray-700 hover:text-[#0a66c2]" />
              </a>
            </div>
          </div>

         
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} AlignTask. All rights reserved by Ami.
          </p>

          <p className="text-sm text-gray-500">
            Built with 💚 for freelancers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;