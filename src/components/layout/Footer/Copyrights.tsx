"use client";
import { useState } from "react";

const Copyrights = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language: any) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="lg:w-[1140px] h-auto mx-auto flex lg:flex-row flex-col gap-3 lg:gap-0 lg:justify-between font-custom-font text-sm items-center justify-center border-t-2 border-gray-dark py-[50px]">
      <p> Copyright 2024</p>
      <div>
        <ul className="flex gap-12">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
        </ul>
      </div>
      <div className="flex gap-2 items-center">
        <img src="./assets/earth.png" />
        <div className="relative">
          <button onClick={toggleDropdown} className="focus:outline-none">
            {selectedLanguage} {">"}
          </button>

          <div
            className={`absolute left-0 mt-2 w-30 bg-white rounded-md shadow-lg border ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul>
              <li
                className="block px-4 hover:bg-gray-dark"
                onClick={() => handleLanguageSelect("English")}
              >
                English
              </li>
              <li
                className="block px-4 hover:bg-gray-dark"
                onClick={() => handleLanguageSelect("Bulgarian")}
              >
                Bulgarian
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyrights;
