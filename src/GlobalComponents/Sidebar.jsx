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

  return (
    <div>
      {/* Sidebar Toggle Button for Small Screens */}
      <div className="md:hidden p-4 bg-black text-white flex items-center justify-between gap-3">
        <button onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
        <Link to="/">
          <p className="text-xl font-bold ">Task Manager</p>
        </Link>
      </div>

      {/* Sidebar */}
      <div
        className={`h-screen w-64 bg-black text-white flex flex-col justify-between shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out fixed md:static z-50`}
      >
        {/* Top Section */}
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold text-center py-6 border-b border-gray-700 hidden md:block">
              Task Manager
            </h1>
          </Link>
          <ul className="mt-4">
            {navigationLinks.map((link, index) => (
              <Link to={link.href} key={index}>
                <li
                  key={index}
                  className="p-4 hover:bg-gray-800 cursor-pointer flex items-center gap-3"
                >
                  {link.icon}
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Bottom Section */}
        <Link to="/login">
          <div className="p-4 hover:bg-gray-800 cursor-pointer flex items-center gap-3">
            <FaSignOutAlt />
            Logout
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
