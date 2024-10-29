import React, { useState } from "react";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Navbar({
  scrollToSection,
  ServiceSectionRef,
  FaqSectionRef,
  AboutSectionRef,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  return (
    <>
      <header className="top-0 bg-slate-200 z-20 mx-auto flex flex-row justify-between items-center py-3">
        {/* Logo */}
        <Link to={"/"} className="p-8 ">
          <h1 className="text-5xl font-extrabold text-[#011627ff]">
            THE SOLVER
          </h1>
        </Link>

        {/* Desktop Links - Centered */}
        {scrollToSection ? (
          <div className="hidden lg:flex flex-row space-x-8 items-center mx-auto ml-[20%]">
            <Button
              label="Services"
              onClick={() => scrollToSection(ServiceSectionRef)}
              className="font-extrabold hover:bg-[#0f305d]"
            />
            <Button
              label="FAQ"
              onClick={() => scrollToSection(FaqSectionRef)}
              className="font-extrabold hover:bg-[#0f305d]"
            />
            <Button
              label="About Us"
              onClick={() => scrollToSection(AboutSectionRef)}
              className="font-extrabold hover:bg-[#0f305d]"
            />
          </div>
        ) : (
          <></>
        )}

        {/* Desktop Try It Button - Right Aligned */}
        <div className="hidden lg:flex p-8 ">
          <Button
            label="Try it"
            onClick={() => {
              navigate("/login");
            }}
            className="bg-[#0f305d] hover:bg-[#011627ff] font-extrabold"
          />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center p-8">
          <button onClick={toggleMenu} className="text-3xl text-[#011627ff]">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center text-white space-y-4 py-4">
          <Button
            label="Services"
            onClick={() => {
              scrollToSection(ServiceSectionRef);
              setIsOpen(false);
            }}
            className="font-extrabold  hover:bg-[#011627ff] w-50% text-center"
          />
          <Button
            label="FAQ"
            onClick={() => {
              scrollToSection(FaqSectionRef);
              setIsOpen(false);
            }}
            className="font-extrabold hover:bg-[#011627ff] w-50% text-center"
          />
          <Button
            label="About Us"
            onClick={() => {
              scrollToSection(AboutSectionRef);
              setIsOpen(false);
            }}
            className="font-extrabold hover:bg-[#011627ff] w-50% text-center"
          />
          <Button
            label="Try it"
            onClick={() => {
              navigate("/login");
              setIsOpen(false);
            }}
            className="bg-[#0f305d] hover:bg-[#011627ff] font-extrabold w-50% text-center"
          />
        </div>
      )}
    </>
  );
}

export default Navbar;
