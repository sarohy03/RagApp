import React from "react";
import Navbar from "../../Components/Navbar";
import { Circle, CircleGrid, Cross, Donut } from "react-awesome-shapes";
import Button from "../../Components/Button";
import vector_db from "../../assets/vector_db.png";
import pdfs from "../../assets/pdfs.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import  {scrollToSection} from "./helper" 
function LandingPage() {
  const ServiceSectionRef = useRef(null);
  const FaqSectionRef = useRef(null);
  const AboutSectionRef = useRef(null);

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework that allows you to style your applications directly in your markup.",
    },
    {
      question: "How does React work?",
      answer:
        "React is a JavaScript library for building user interfaces. It uses a virtual DOM to optimize DOM updates.",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript that allows you to write HTML-like code directly in JavaScript files.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Navbar scrollToSection={scrollToSection} ServiceSectionRef={ServiceSectionRef} FaqSectionRef={FaqSectionRef} AboutSectionRef={AboutSectionRef}/>
      <body>
        {/*displays the title*/}
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

        {/*displays the line*/}

        <div className="flex justify-center items-center mt-[7rem] rounded-full shadow-xl ">
          <div className="w-1/2 border-t-4 border-blue-800 rounded-full  shadow-xl"></div>
        </div>
        {/*displays the Services title*/}

        <div
          ref={ ServiceSectionRef }
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

        {/*displays the Cards of services*/}

        <section className="mt-[2rem] border-2  p-[5em] px-[8em] z-10 bg-slate-200  ">
          {/*Card no 1*/}

          <div className="group bg-slate-200 z-10 relative">
            <div data-aos="fade-up" className=" rounded-3xl  shadow-xl  flex flex-row justify-between bg-slate-300  "
            >
              <div className="pl-[5em]  w-[50%] py-[10em] z-10 ">
                <h1 data-aos="" className="text-xl font-semibold  group-hover:transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-105 duration-300">
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

              <div className=" pr-[5em] py-[5em]  group-hover:transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-105 duration-300">
                <img
                  src={vector_db}
                  alt="Logo"
                  className="w-[30em] rounded-3xl shadow-2xl "
                />
              </div>
            </div>
          </div>
          {/*Card no 2*/}

          <div className="group bg-slate-200 z-10 relative">
            <div
              data-aos="fade-up"
              className=" rounded-3xl  shadow-xl  flex flex-row justify-between bg-slate-300   mt-11 "
            >
              <div className=" pl-[5em] py-[5em] group-hover:shadow-none group-hover:transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-105 duration-300">
                <img
                  src={pdfs}
                  alt="Logo"
                  className="w-[30em] rounded-3xl shadow-2xl "
                />
              </div>
              <div className="pr-[5em]  w-[50%] py-[10em] z-10 ">
                <h1 data-aos="" className="text-xl font-semibold  group-hover:transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-105 duration-300">
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
            </div>
          </div>
          {/*Donut shape*/}
          <div className="relative bottom-[7em] ml-[93%] z-0  ">
            <Donut
              color="#1e40af"
              size="180px"
              width={["40px", "40px", "60px", "60px"]}
              zIndex={0}
            />
          </div>
        </section>

        {/*displays the line*/}

        <div className="flex justify-center items-center mt-[6rem] rounded-full shadow-xl ">
          <div className="w-1/2 border-t-4 border-blue-800 rounded-full  shadow-xl"></div>
        </div>

        {/*FAQ*/}

        <section ref={FaqSectionRef} className="max-w-xl mx-auto mt-10 bg-slate-200 shadow-2xl rounded-3xl p-8">
          <h1 className="text-4xl font-bold text-center mb-6 text-[#011627ff]">
            Frequently Asked Questions
          </h1>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <button
                  className="w-full text-left text-2xl font-bold text-[#0f305d] focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </button>
                {openIndex === index && (
                  <div className="mt-4 text-lg text-gray-700">{faq.answer}</div>
                )}
                <hr className="mt-4 border-t-2 border-gray-300" />
              </div>
            ))}
          </div>
        </section>
        {/* About Us Section */}
        <section ref={AboutSectionRef} className="text-7xl pt-2 font-bold font-mono mt-16 flex flex-col justify-center align-middle text-center">
          <div className="rounded-3xl shadow-2xl bg-[#0f305d] text-white p-7 mx-12">
            <h1>About Us</h1>
            <p className="text-2xl font-normal mt-4">
              We are a team of passionate developers and engineers, focused on
              solving complex problems with efficient software solutions. Our
              goal is to empower businesses and individuals with cutting-edge
              technologies that simplify workflows and enhance productivity.
              Specializing in Retrieval-Augmented Generation (RAG) systems, we
              provide customized solutions for querying PDFs, websites, text
              files, and more. Let us help you harness the power of AI to unlock
              new possibilities for your business.
            </p>
          </div>
        </section>
      </body>
    </>
  );
}

export default LandingPage;
