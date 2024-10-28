import React from "react";
import Navbar from "../../Components/Navbar";
import { Circle, CircleGrid, Cross, Donut } from "react-awesome-shapes";
import Button from "../../Components/Button";
import vector_db from "../../assets/vector_db.png";
import pdfs from "../../assets/pdfs.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { scrollToSection } from "./helper";
function LandingPage() {
  const ServiceSectionRef = useRef(null);
  const FaqSectionRef = useRef(null);
  const AboutSectionRef = useRef(null);

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Retrieval-Augmented Generation (RAG)?",
      answer:
        "Retrieval-Augmented Generation (RAG) is a system that combines information retrieval and natural language generation. It enhances data queries by not only fetching relevant information but also providing contextually accurate responses. Our RAG solution empowers users to uncover insights from various data sources efficiently.",
    },
    {
      question: "How can I query my data effectively?",
      answer:
        "You can query your data effectively by utilizing our RAG system, which allows you to search through PDFs, websites, and text files seamlessly. Simply input natural language queries, and our system retrieves the most relevant information from your indexed data, providing precise results that enhance decision-making.",
    },
    {
      question: "What types of data can I use with your solution?",
      answer:
        "Our solution supports a wide range of data types, including PDFs, web pages, and text files. This flexibility allows you to extract information from various sources, making it easier to manage and utilize your data across different formats.",
    },
    {
      question: "How does your AI-powered system enhance data retrieval?",
      answer:
        "Our AI-powered system enhances data retrieval by understanding the context behind your queries. Unlike traditional keyword-based searches, our RAG system leverages generative AI to deliver more accurate and contextually relevant results, ensuring you find exactly what you're looking for even in large or unstructured datasets.",
    },
  ];
  

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    
    <div className=" bg-slate-200 z-0 h-[100%] m-0 box-border overflow-hidden">
      <Navbar
        scrollToSection={scrollToSection}
        ServiceSectionRef={ServiceSectionRef}
        FaqSectionRef={FaqSectionRef}
        AboutSectionRef={AboutSectionRef}
      />
      <body>
        <section className="mt-20 sm:mt-32 lg:mt-40 flex flex-col items-center text-center  ">
          {/* Circle Shape */}
          <div className="  relative ">
            <Circle
              size={"100px"} 
              zIndex="2"       
              color="linear-gradient(to right, #1e40af, #0f305d)"
              className="inline-block border-2 ml-[60%]   sm:left-[20em]  "
            />
            </div>
            {/* border-2 border-cyan-200 pl-[60%] sm:ml-[33%] box-border overflow-hidden */}

          <div className="z-10 ">
            {/* Title Text */}
            <div className="mb-4">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold">
                A Software Solution
              </p>
            </div>

            {/* Main Headings */}
            <div className="mb-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-mono">
                Systematic Approach For
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-mono">
                <span className="text-blue-800">RAG</span> Problems
              </h1>
            </div>

            {/* CircleGrid and Subtitle */}
            <div className="relative mb-6 flex items-center justify-center">
              <CircleGrid
                color="#1e40af"
                size="175px"
                className="inline-block  inline-block  mr-[40em] sm:mr-[120%]   "
                zIndex={2}
              />
              <p className="text-sm md:text-lg lg:text-xl font-semibold mt-12">
                Query your PDFs, Websites, Text Files
              </p>
            </div>
          </div>
          {/* Button */}
          <div className="mt-6">
            <Button
              label="Get started"
              onClick={() => alert("done")}
              className="bg-[#0f305d] hover:bg-[#011627ff] py-2 sm:py-3 md:py-4 px-6 sm:px-8 text-base sm:text-lg md:text-xl font-extrabold"
            />
          </div>

          {/* Divider Line */}
          <div className="flex justify-center items-center mt-10 sm:mt-14 md:mt-20 lg:mt-24 w-full">
            <div className="w-3/4 sm:w-2/3 md:w-1/2 border-t-2 sm:border-t-4 border-blue-800 rounded-full"></div>
          </div>
        </section>

        {/*displays the Services title*/}

        <div
          ref={ServiceSectionRef}
          className="mt-9 flex flex-row justify-center align-middle pt-10"
        >
          <div className="rounded-3xl shadow-2xl bg-[#011627ff] text-white p-5 md:p-7">
            <h1 className="text-4xl md:text-7xl font-bold font-mono text-center">
              Services
            </h1>
          </div>
        </div>

        <div className="relative">
          <Circle
            size={"20em"}
            zIndex="0"
            color="linear-gradient(to right, #1e40af, #0f305d)"
            className="inline-block sm:left-0 left-[8em]  "
          />
        </div>

        {/*displays the Cards of services*/}
        <section className="mt-8 border-2 p-5 md:p-10 z-10 bg-slate-200">
          {/* Card no 1 */}
          <div className="group bg-slate-200 z-10 relative rounded-3xl">
            <div
              data-aos="fade-up"
              className="rounded-3xl shadow-xl flex flex-col md:flex-row justify-between bg-slate-300"
            >
              <div className="px-5 md:pl-20 w-full md:w-1/2 py-10 md:py-20 z-10">
                <h1 className="text-xl md:text-2xl font-semibold group-hover:transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-105 duration-300">
                  <span className="text-2xl md:text-3xl font-extrabold pb-5">
                    Unlock Deeper Insights with AI-Powered Retrieval and
                    Generation:
                  </span>
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
              <div className="px-5 md:px-20 py-10 group-hover:transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-105 duration-300">
                <img
                  src={vector_db}
                  alt="Logo"
                  className="w-full md:w-[30em] rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Card no 2 */}
          <div className="group bg-slate-200 z-10 relative mt-11">
            <div
              data-aos="fade-up"
              className="rounded-3xl shadow-xl flex flex-col md:flex-row justify-between bg-slate-300"
            >
              <div className="px-5 py-5 group-hover:shadow-none group-hover:transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-105 duration-300">
                <img
                  src={pdfs}
                  alt="Logo"
                  className="w-full max-w-xs md:max-w-lg rounded-3xl shadow-2xl"
                />
              </div>
              <div className="px-5 md:pr-20 w-full md:w-1/2 py-10 z-10">
                <h1 className="text-xl md:text-2xl font-semibold group-hover:transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-105 duration-300">
                  <span className="text-2xl md:text-3xl font-extrabold pb-5">
                    Data Query Across Multiple Sources:
                  </span>
                  Managing different types of data can be challenging. Whether
                  you're dealing with PDFs, websites, or plain text files, our
                  RAG system allows you to extract the information you need,
                  when you need it. Our advanced solutions offer seamless
                  querying across
                  <br />
                  PDFs: Unlock the information trapped in your documents with
                  natural language queries that fetch exactly what you're
                  looking for.
                  <br />
                  Websites: Search your indexed websites for real-time, relevant
                  data directly from your own site or public resources.
                  <br />
                  Text Files: Organize and query your text-based files with
                  precision, saving time and reducing manual searches.
                </h1>
              </div>
            </div>
          </div>

          {/* Donut shape */}
          <div className="relative bottom-28 ml-auto z-0 md:ml-[100em]">
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

        <section
          ref={FaqSectionRef}
          className="max-w-xl mx-auto mt-10 bg-slate-200 shadow-2xl rounded-3xl p-8"
        >
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
        <section
  ref={AboutSectionRef}
  className="text-7xl pt-2 font-bold mt-16 flex flex-col justify-center align-middle text-center"
>
  <div className="rounded-3xl shadow-2xl bg-[#0f305d] text-white p-7 mx-12 ">
    <h1 className="text-4xl md:text-7xl font-extrabold font-mono ">About Us  </h1>
    <p className="text-sm md:text-2xl font-mono mt-4">
      We are a team of passionate developers and engineers, focused on
      solving complex problems with efficient software solutions. Our
      goal is to empower businesses and individuals with cutting-edge
      technologies that simplify workflows and enhance productivity.
      Specializing in Retrieval-Augmented Generation (RAG) systems, we
      provide customized solutions for querying PDFs, websites, text
      files, and more. Let us help you harness the power of AI to transform your data into actionable insights!
    </p>

  </div>
</section>

      </body>
    </div>
  );
}

export default LandingPage;
