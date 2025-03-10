import React, { useState } from "react";
import {
  FaHome,
  FaClipboardList,
  FaCheck,
  FaSpinner,
  FaPlus,
  FaExclamationTriangle,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const navigationLinks = [
  {
    name: "Dashboard",
    icon: <FaHome />,
    href: "/",
  },
  {
    name: "All Tasks",
    icon: <FaClipboardList />,
    href: "/tasks",
  },
  {
    name: "Completed Tasks",
    icon: <FaCheck />,
    href: "/completed-tasks",
  },
  {
    name: "In Progress Tasks",
    icon: <FaSpinner />,
    href: "/in-progress-tasks",
  },
  {
    name: "New Tasks",
    icon: <FaPlus />,
    href: "/new-tasks",
  },
  {
    name: "Delayed Tasks",
    icon: <FaExclamationTriangle />,
    href: "/delayed-tasks",
  },
  {
    name: "Profile",
    icon: <FaUser />,
    href: "/profile",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      {/* Toggle Button for Small Screens */}
      <div className="md:hidden p-4 bg-black text-white flex items-center justify-between fixed top-0 left-0 right-0 z-10">
        <button onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <Link to="/" onClick={handleLinkClick}>
          <p className="text-xl font-bold">Task Manager</p>
        </Link>
      </div>

      {/* Sidebar */}
      <div
        className={`md:min-h-screen w-64 pb-8 bg-black text-white flex flex-col flex-1 overflow-y-auto" shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out fixed top-0 z-10`}
      >
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <Link to="/" onClick={handleLinkClick}>
            <h1 className="text-2xl font-bold text-center py-6 border-b border-gray-700 hidden md:block">
              Task Manager
            </h1>
          </Link>
          <ul className="mt-4">
            {navigationLinks.map((link, index) => (
              <li key={index} className="p-4 hover:bg-gray-800 cursor-pointer">
                <Link
                  to={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3"
                >
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logout Section */}
        <div className="p-4 hover:bg-gray-800 cursor-pointer">
          <Link
            to="/login"
            className="flex items-center gap-3"
            onClick={handleLinkClick}
          >
            <FaSignOutAlt />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
