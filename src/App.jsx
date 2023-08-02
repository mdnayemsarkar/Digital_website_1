import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Header from "./Header";
import "./App.css";
import img from "../public/images/35541.png";
import hand from "../public/images/icon-1.webp";
import player from "../public/images/play-button.png";
import Home from "./Service";
import Pc from "./Footer";

const App = () => {
  // for gsap
  const myElementRef = useRef(null);
  useEffect(() => {
    const element = myElementRef.current;

    gsap.from(element, {
      opacity: 1,
      scale: 0.5,
      delay: 0.5,
      duration: 1,
      ease: "elastic.out(1, 0.75)",
    });
  }, []);

  // for dynamic word
  const words = [
    "Dynamic website",
    "React Website",
    "Expensive Product",
    "Responsive site",
    "Portfolio",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showWord, setShowWord] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowWord(false); // Start fade-out effect

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Change to the next word
        setShowWord(true); // Start fade-in effect
      }, 500); // Wait for 500 milliseconds for fade-out effect to complete
    }, 2000); // Change the word every 2 seconds

    return () => {
      clearInterval(timer);
    };
  }, [words.length]); // Include words.length in the dependency array to update when the number of words changes

  const currentWord = words[currentWordIndex];
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 h-screen mt-10 overflow-hidden">
        <div className="round mt-32 ml-4 md:ml-10 lg:ml-44 relative">
          <img
            src={img}
            alt=""
            className="sm:h-60 md:h-80 lg:h-[450px] absolute bottom-2"
          />
          <div>
            {/* absolute img start  */}
            <div className="h-3 w-3 sm:h-4 sm:w-4 bg bg-slate-700"></div>
            <div className="h-4 w-4 sm:h-5 sm:w-5 bg bg-green-700 left-28 sm:left-96 relative"></div>
            <div className="h-3 w-3 sm:h-4 sm:w-4 bg bg-red-700 left-28 sm:left-96 top-20 sm:top-36 relative"></div>
            <div className="h-3 w-3 sm:h-4 sm:w-4 bg bg-yellow-300 left-[-60px] sm:left-[-80px] top-20 sm:top-36 relative"></div>
            <div className="h-5 w-5 sm:h-6 sm:w-6 bg bg-lime-600 left-10 sm:left-28 top-48 sm:top-72 relative"></div>
            <div className="h-3 w-3 sm:h-4 sm:w-4 bg bg-cyan-600 left-28 sm:left-72 top-48 sm:top-72 relative"></div>
            <div className="h-3 w-3 sm:h-4 sm:w-4 bg bg-pink-600 top-48 sm:top-72 relative"></div>
            {/* absolute img ends  */}
          </div>
        </div>

        <div>
          <div className="flex flex-col" >  
            <div className="flex mt-10">
              <img src={hand} alt="" />
              <p className="text-3xl pl-5 font-inconsolata">
                Hello! We are Avada Digital Agency.
              </p>
            </div>
            <div className="text-4xl sm:text-6xl font-monospace font-semibold pl-6 sm:pl-12 mt-3">
              We Create Amazing digital
              <p
                className={`transition-opacity duration-500 text-purple-800  ${
                  showWord ? "opacity-100" : "opacity-0"
                }`}
              >
                {currentWord}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-around mt-11">
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Perspiciatis, maiores!
              </p>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Learn more about us
                </span>
              </button>
            </div>
            <div className="flex items-center mt-8">
              <div>
                <img src={player} alt="" />
              </div>
              <p className="pl-4 text-blue-700 font-semibold text-lg">
                View our new showreel
              </p>
            </div>
          </div>
          {/* right section ends  */}
        </div>
      </div>

      {/* secound section starts here  */}
      <div className="h-screen w-screen grid grid-cols-2 bg-slate-400">
        <div>
          <img
            src="../public/images/info-2.jpg"
            alt=""
            className="h-[32rem] relative top-32 left-24 rounded-xl shadow-2xl shadow-gray-50"
          />
        </div>
        {/* right side start */}
        <div>
          <div className="mt-32">
            <div className="text-5xl font-bold font-inconsolata">
              Professional Programming <br /> Services You Can Trust
            </div>
            <div className="text-xl mt-8 font-semibold font-monospace">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              provident rerum explicabo, nisi aspernatur eaque?
            </div>
            <hr className="mt-11" />
          </div>
          <div className="flex gap-4 mt-10">
            <div>
              <h1 className="text-3xl font-semibold font-inconsolata mb-5">
                Programming Solutions
              </h1>
              <p className="font-semibold font-monospace mb-8 pt-9">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                facilis!
              </p>
              <a
                href=""
                className="underline text-yellow-300 font-bold text-xl"
              >
                Learn About This
              </a>
            </div>
            <div>
              <h1 className="text-3xl font-semibold font-inconsolata mb-5">
                Build Your Dream Website
              </h1>
              <p className="font-semibold font-monospace mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                suscipit.
              </p>
              <a
                href=""
                className="underline text-yellow-300 font-bold text-xl"
              >
                Learn About This
              </a>
            </div>
          </div>
        </div>
        {/* right side ends  */}
      </div>
      {/* secound section ends here  */}
      {/* third section starts here  */}
      <div className="h-screen w-screen bg-white">
        <Home />
      </div>
      {/* third section ends here  */}
      {/* fourth section starts  */}
      <div className="flex items-center justify-around h-screen w-screen">
        {/* 1st pc starts here  */}
        <div className="shadow-2xl w-1/2 h-96 mt-12">
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px] mt-7">
            <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
              <img
                src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
                className="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl"
                alt=""
              />
              <img
                src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
                className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg"
                alt=""
              />
            </div>
          </div>
          <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
          </div>
        </div>
        {/* 1st pc ends here  */}
        {/* 2nds pc starts here  */}
        <div className="shadow-2xl w-1/2 h-96 mt-12">
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[194px] md:max-w-[412px] mt-12">
            <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
              <img
                src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png"
                className="dark:hidden h-[140px] md:h-[262px] w-full rounded-xl"
                alt=""
              />
              <img
                src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png"
                className="hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl"
                alt=""
              />
            </div>
          </div>
          <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
          <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
        </div>
      </div>
      {/* fourth section ends  */}
      {/* footer section starts here  */}
      <Pc />
      {/* footer section ends here  */}
    </>
  );
};

export default App;
