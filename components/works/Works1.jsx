import Image from "next/image";
import { FiUser, FiCode, FiFilePlus, FiExternalLink } from "react-icons/fi";
import { BsXCircle } from "react-icons/bs";
import Masonry from "react-masonry-css";
import Modal from "react-modal";
import portfolioData from "../../data/worksData";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

Modal.setAppElement("#__next");

const Works1 = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    500: 1,
  };

  // start dynamic portfolio with slug
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handlePortfolioData = (id) => {
    const find = portfolioData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModal = (id) => {
    handlePortfolioData(id);
  };
  // End dynamic portfolio with slug

  // start filter data based on function
  const [test, setTest] = useState("All");

  const handleSearch = (text) => {
    handleData(text);
    setTest(text);
  };
  useEffect(() => {
    setTest("All");
    handleData("All");
  }, []);

  const [data, setData] = useState(portfolioData);

  // filter portfolio data
  const handleData = (text) => {
    if (text === "All") {
      setData(portfolioData);
    } else {
      const findData = portfolioData.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  return (
    <>
      {/* Portfolio filter tab start */}
      {/* <ul className="mt-[40px] flex w-full justify-start md:justify-end flex-wrap font-medium pb-12">
        <li
          className={`${test === "All" ? "text-[#FA5252]" : "filter-btn "
            } mr-4 md:mx-4`}
          onClick={() => handleSearch("All")}
        >
          All
        </li>
        <li
          className={`${test === "Website" ? "text-[#FA5252]" : "filter-btn"
            } mr-4 md:mx-4`}
          onClick={() => handleSearch("Website")}
        >
          Websites
        </li>
        <li
          className={`${test === "Web App" ? "text-[#FA5252]" : "filter-btn"
            } mr-4 md:mx-4`}
          onClick={() => handleSearch("Web App")}
        >
          Web Apps
        </li> */}
      {/* <li
          className={`${test === "Logo" ? "text-[#FA5252]" : "filter-btn ml-0"
            } mr-4 md:mx-4`}
          onClick={() => handleSearch("Logo")}
        >
          Logo
        </li>
        <li
          className={`${test === "UI/UX" ? "text-[#FA5252]" : "filter-btn"}  `}
          onClick={() => handleSearch("UI/UX")}
        >
          Graphic Design
        </li> */}
      {/* </ul> */}
      {/* End portfolio filter tab */}

      {/* Start portfolio items */}
      <div
        breakpointCols={breakpointColumnsObj}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {data.map((item) => (
          <div
            className="rounded-lg p-6 dark:border-[2px] border-[#212425]"
            style={{
              background: `${theme === "dark" ? "transparent" : item?.bg}`,
            }}
            key={item.id}
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                className="w-full transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto "
                src={item.imgSmall}
                width={300}
                height={300}
                priority
                alt="portfolio Image"
              />
            </div>
            <span className="pt-5 text-[14px] font-normal text-gray-lite text-center block dark:text-[#A6A6A6]">
              {item.tag}
            </span>
            <h2 className="font-medium text-xl text-center duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
              {item.title}
            </h2>
            <div className="flex justify-center">
              <a
                href={item.repoLink}
                alt="GitHub Repo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l hover:from-[#50C878]  hover:to-[#228B22] p-2 text-xtiny text-white rounded-[35px] m-2"
              >
                GitHub Repo
              </a>
              <a
                href={item.link}
                alt="Demo Link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l hover:from-[#176bd9]  hover:to-[#0000FF] p-2 text-xtiny text-white rounded-[35px] m-2"
              >
                View Demo
              </a>
            </div>
            <div className="flex justify-center">
              <button
                className={`flex justify-center bg-transparent duration-200 transition ease-linear hover:bg-gradient-to-l ${
                  theme === "light"
                    ? "from-[#DD2476] to-[#fa5252ef] border-black text-black"
                    : "from-[#DD2476] to-[#fa5252ef] border-white text-white"
                } border-2 p-3 text-tiny rounded-[35px] my-2 mx-auto}`}
                onClick={() => handleModal(item?.id)}
              >
                Read Project Description
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* End portfolio items */}

      {/* Start Modal for portfolio items */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className=" outline-none flex items-center  p-4 md:p-8  rounded-2xl my-8"
      >
        <div className=" w-full md:w-10/12 flex items-center   lg:w-[850px] bg-white dark:bg-[#323232] mx-auto rounded-xl p-4 md:p-8 absolute left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-[50%] shadow-lg ">
          <div className=" overflow-y-scroll max-h-[60vh] no-scrollbar ">
            {/* close button */}
            <BsXCircle
              onClick={() => setIsOpen(false)}
              className="text-7xl cursor-pointer  absolute right-2 -top-10 md:-right-10 md:-top-6 z-50  text-white transition transform hover:rotate-45 duration-300 ease-in-out "
            />
            <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
              {singleData.tag}
            </h2>

            <div className="flex flex-col justify-center items-center my-6">
              <div className="space-y-2">
                <p className="dark:text-white flex items-center text-[15px]  sm:text-lg flex-wrap">
                  <FiCode className="text-lg mr-2 hidden sm:block" />
                  Languages :&nbsp;
                  <span className="font-medium">{singleData?.languages}</span>
                </p>
              </div>
            </div>

            <p className="dark:text-white  text-2line font-normal text-[15px] sm:text-sm  ">
              {singleData?.description}
            </p>

            <Image
              className="w-full md:h-[450px]  h-auto object-cover rounded-xl mt-6"
              src={singleData?.img}
              alt="blog details image"
              width={620}
              height={420}
              loading="lazy"
            />
          </div>
        </div>
      </Modal>
      {/* End Modal for portfolio items */}
    </>
  );
};

export default Works1;
