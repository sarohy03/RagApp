import React from "react";
import Button from "./Button";
function Navbar({onServiceClick}) {
  return (
    <>
      <header className="top-0 z-20 mx-auto flex flex-row justify-between py-3">
        <div className="flex flex-row p-8 justify-center w-[50vw]">
          <h1 className="text-5xl font-extrabold  text-[#011627ff]">
            THE SOLVER
          </h1>
        </div>
        <div className="flex flex-row justify-around p-8 w-[50vw]">
          <Button
            label="Services"
            onClick={onServiceClick}
            className={"font-extrabold hover:bg-[#0f305d]"}
          />
          <Button
            label="FAQ"
            onClick={() => {
              alert("WOW");
            }}
            className={"font-extrabold hover:bg-[#0f305d]"}
          />
          <Button
            label="About Us"
            onClick={() => {
              alert("its us");
            }}
            className={"font-extrabold hover:bg-[#0f305d]"}
          />
        </div>

        <div className="flex flex-row justify-evenly p-8 w-[50vw]">
          <Button
            label="Try it"
            onClick={() => {
              alert("its us");
            }}
            className={"bg-[#0f305d] hover:bg-[#011627ff]   font-extrabold"}
          />
        </div>
      </header>
    </>
  );
}

export default Navbar;
