import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Dashboard", path: "/" },
  { name: "All Tasks", path: "/tasks" },
  { name: "Completed Tasks", path: "/completed-tasks" },
  { name: "In Progress Tasks", path: "/in-progress-tasks" },
  { name: "New Tasks", path: "/new-tasks" },
  { name: "Delayed Tasks", path: "/delayed-tasks" },
  { name: "Profile", path: "/profile" },
];

const supportLinks = [
  {
    label: "support@taskmanager.com",
    href: "mailto:support@taskmanager.com",
    isExternal: false,
  },
  {
    label: "123 Task Lane, Productivity City",
    isExternal: false,
  },
  {
    label: "Mon - Fri: 9:00 AM - 6:00 PM",
    isExternal: false,
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 md:px-12 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-6">
        {/* Logo / Title */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Task Manager</h2>
          <p className="text-sm">
            Stay organized, track your progress, and manage tasks easily.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
          <ul className="space-y-2 text-sm">
            {supportLinks.map((item, index) => (
              <li key={index}>
                {item.isExternal ? (
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <p>{item.label}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Task Manager. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
