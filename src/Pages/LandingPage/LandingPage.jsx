import React from "react";
import Navbar from "../../Components/Navbar";
import { Circle, CircleGrid, Cross, Donut } from "react-awesome-shapes";
import Button from "../../Components/Button";
import vector_db from "../../assets/vector_db.png";
import pdfs from "../../assets/pdfs.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
function LandingPage() {
  const ServiceSectionRef = useRef(null);
  const OnServiceClick = () => {
    ServiceSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Navbar onServiceClick={OnServiceClick} />
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
        <div className="flex justify-center items-center mt-[7rem] rounded-full shadow-xl ">
          <div className="w-1/2 border-t-4 border-blue-800 rounded-full  shadow-xl"></div>
        </div>
        <div
          ref={ServiceSectionRef}
          className="text-7xl pt-2 font-bold font-mono  mt-9 flex flex-row justify-center align-middle pt-10 "
        >
          <div className="rounded-3xl shadow-2xl bg-[#011627ff] text-white p-7">
            <h1>Services</h1>
          </div>
        </div>
        <div className="absolute">
          <Circle
            size={"20em"}
            zIndex="0"
            color="linear-gradient(to right, #1e40af, #0f305d)"
            className="inline-block ml-[83%]"
          />
        </div>
        <section className="mt-[2rem] border-2  p-[5em] px-[8em] z-10 bg-slate-200  ">
          <div className="bg-slate-200 z-10 relative">
            <div
              data-aos="fade-up"
              className=" border-2 rounded-3xl shadow-xl flex flex-row justify-between bg-slate-200  "
            >
              <div className="pl-[5em]  w-[50%] py-[10em] z-10 ">
                <h1 data-aos="" className="text-xl font-semibold">
                  <h1 className="text-2xl font-extrabold pb-5">
                    Unlock Deeper Insights with AI-Powered Retrieval and
                    Generation:
                  </h1>
                  Our system doesn't just search your data—it enhances your
                  ability to uncover valuable insights by seamlessly blending
                  retrieval mechanisms with generative AI. Whether you're
                  querying detailed reports, technical manuals, or web archives,
                  our solution ensures that the most relevant and important
                  information is brought to the forefront. With the power of AI,
                  we go beyond keyword matching. Our system understands the
                  context behind your queries, delivering precise results that
                  help you find exactly what you're looking for, even in large
                  or unstructured datasets. By combining the efficiency of
                  retrieval with the intelligence of generative AI, we ensure
                  that you not only get answers but also deeper insights,
                  enabling faster, more informed decisions.
                </h1>
              </div>

              <div className=" pr-[5em] py-[5em]">
                <img
                  src={vector_db}
                  alt="Logo"
                  className="w-[30em] rounded-3xl shadow-2xl "
                />
              </div>
            </div>
          </div>
          <div className="bg-slate-200 z-10 relative">
            <div
              data-aos="fade-up"
              className=" border-2 rounded-3xl shadow-2xl flex flex-row justify-between bg-slate-200 mt-11 "
            >
              <div className="pl-[5em]  w-[50%] py-[10em] z-10 ">
                <h1 data-aos="" className="text-xl font-semibold">
                  <h1 className="text-2xl font-extrabold pb-5">
                    Data Query Across Multiple Sources:
                  </h1>
                  Managing different types of data can be challenging. Whether
                  you're dealing with PDFs, websites, or plain text files, our
                  RAG system allows you to extract the information you need,
                  when you need it. Our advanced solutions offer seamless
                  querying across
                  <br />
                  PDFs: Unlock the information trapped in your documents with
                  natural language queries that fetch exactly what you're
                  looking for. <br />
                  Websites: Search your indexed websites for real-time, relevant
                  data directly from your own site or public resources. <br />
                  Text Files: Organize and query your text-based files with
                  precision, saving time and reducing manual searches.
                </h1>
              </div>

              <div className=" pr-[5em] py-[5em]">
                <img
                  src={pdfs}
                  alt="Logo"
                  className="w-[30em] rounded-3xl shadow-2xl "
                />
              </div>
            </div>
          </div>
          <div className="relative bottom-[7em] ml-[93%] z-0">
          <Donut
              color="#1e40af"
              size="180px"
            width={["40px", "40px", "60px", "60px"]}
            zIndex={0}
          />
          </div>
        </section>
      </body>
    </>
  );
}

export default LandingPage;
