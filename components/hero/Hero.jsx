import Image from "next/image";
import Social from "../social/Social";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FiCodesandbox } from "react-icons/fi";

const Hero = () => {
  const { theme } = useTheme();

  const buttonClass = `flex items-center justify-center bg-transparent duration-200 transition ease-linear hover:bg-gradient-to-l ${
    theme === "light"
      ? "from-[#DD2476] to-[#fa5252ef] border-black text-black"
      : "from-[#DD2476] to-[#fa5252ef] border-white text-white"
  } border-2 px-8 py-3 text-lg rounded-[35px] mt-6 mx-2`;
  return (
    <div
      className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh]  xl:h-[71vh]  justify-center"
      data-aos="fade"
    >
      <Image
        className={`rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px] border-2 ${
          theme === "light" ? "border-purple-600" : "border-[#fa5252ef]"
        } `}
        src="/images/about/headShot.webp"
        width={250}
        height={250}
        priority
        alt="hero image"
      />
      <h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
        DJ Neill
      </h3>
      <p className="mb-1 text-[#7B7B7B]">Full-Stack Software Engineer</p>
      {/* Avatar Info End */}

      {/* Dowanload button start */}
      {/* <a
        href="/images/cv.pdf"
        download
        className="flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
      >
        <img src="/images/download.png" alt="icon" className="mr-2" />
        Download CV
      </a> */}
      {/* Dowanload button End */}
      <div className="flex flex-col md:flex-row px-4">
        <Link
          href="/works"
          className="flex items-center justify-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-4 py-3 text-lg text-white rounded-[35px] mt-6 mx-2"
        >
          View My Work
        </Link>
        <Link href="/contact" className={buttonClass}>
          Contact Me
        </Link>
      </div>
      {/* Social information start */}
      <div className="flex space-x-6 mt-6">
        <Social />
      </div>
      {/* Social information start */}
    </div>
  );
};

export default Hero;
