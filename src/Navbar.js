import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLang, toggleTheme } from "./redux-toolkit/Store";

const Navbar = () => {
  const dispatch = useDispatch();
  const { content, lang } = useSelector((state) => state.lang);
  const theme = useSelector((state) => state.theme);

  return (
    <nav
      className={`flex items-center justify-between p-4 border-b ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center space-x-4 gap-2">
        <a href="#" className="hover:underline">
          {content.home}
        </a>
        <a href="#" className="hover:underline">
          {content.users}
        </a>
      </div>
      <div className="flex items-center space-x-2 gap-2">
        <button
          onClick={() => dispatch(toggleLang())}
          className="border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-500 hover:text-white"
        >
          {content.changeTo}
        </button>
        <button
          onClick={() => dispatch(toggleTheme())}
          className="border px-3 py-1 rounded px-3 py-1"
        >
          {theme === "dark" ? content.light : content.dark}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
