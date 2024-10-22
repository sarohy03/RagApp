import React from "react";
import Navbar from "../../Components/Navbar";
import { Circle, CircleGrid } from "react-awesome-shapes";
import Button from "../../Components/Button";
import vector_db from "../../assets/vector_db.png";
function LandingPage() {
  return (
    <>
      <Navbar />
      <body>
        <div className="mt-[13em] flex flex-col justify-center text-center">
          <div>
            <Circle
              size={"100px"}
              zIndex="2"
              color="linear-gradient(to right, #1e40af, #0f305d)"
              className="inline-block ml-[21em] "
            />
          </div>
          <div>
            <p className="text-2xl font-semibold ">A software Solution</p>
          </div>
          <div className="mt-[1%]">
            <h1 className="text-8xl pt-2 font-bold font-mono ">
              Syestematic Approch For
            </h1>
            <h1 className="text-8xl pb-3 font-bold font-mono  ">
              <p className="text-blue-800 p-4 ">RAG</p>Problems
            </h1>
          </div>
          <div className="mt-[1%]">
            <CircleGrid
              color="#1e40af"
              size="175px"
              className="inline-block right-[75%] "
              zIndex={2}
            />
            <p className="text-xl font-semibold">
              Query your PDFs, Websites, text files
            </p>
          </div>
          <div className="mt-6">
            <Button
              label="Get started"
              onClick={() => {
                alert("done");
              }}
              className={
                "bg-[#0f305d] hover:bg-[#011627ff]  py-[15px] font-extrabold"
              }
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-[6rem] rounded-full shadow-xl ">
          <div className="w-1/2 border-t-4 border-blue-800 rounded-full  shadow-xl"></div>
        </div>
        <section className="mt-[4rem] border-2 border-red-900 p-[10px] ">
          <div className=" border-2 border-red-900 rounded-xl shadow-2xl flex flex-row justify-around">
            <div className="border-2 border-red-900">
              dejend
            </div>
            <div className="border-2 border-red-900">
            <img src={vector_db} alt="Logo" className="w-[12em]" />

            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default LandingPage;
