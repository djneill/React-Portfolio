import Image from "next/image";
import Social from "../social/Social";
import Link from "next/link"
import { FiCodesandbox } from "react-icons/fi";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh]  xl:h-[71vh]  justify-center"
      data-aos="fade"
    >
      <Image
        className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]"
        src="/images/about/headShot.webp"
        width={250}
        height={250}
        priority
        alt="hero image"
      />
      <h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
        DJ Neill
      </h3>
      <p className="mb-4 text-[#7B7B7B]">Full-Stack Software Engineer</p>
      {/* Avatar Info End */}

      {/* Social information start */}
      <div className="flex space-x-3">
        <Social />
      </div>
      {/* Social information start */}

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
      <div className="flex px-4">
        <Link
          href="/works"
          className="flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-4 py-3 text-lg text-white rounded-[35px] mt-6 mx-2"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="flex items-center bg-transparent border-white border-2 duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6 mx-2"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Hero;
