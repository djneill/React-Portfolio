import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import portfolioData from "../../data/worksData";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Works1 = () => {
  const { theme } = useTheme();
  const [data, setData] = useState(portfolioData);
  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    setData(portfolioData);
  }, []);

  // Toggle card expansion
  const toggleCard = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
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

      {/* Start Expandable Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => {
          const isExpanded = expandedCards[item.id];

          return (
            <div
              className="rounded-xl p-6 dark:border-[2px] border-[#212425] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col"
              style={{
                background: `${theme === "dark" ? "transparent" : item?.bg}`,
              }}
              key={item.id}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-lg mb-4">
                <Image
                  className="w-full transition duration-200 ease-in-out transform hover:scale-105 rounded-lg h-auto object-cover"
                  src={item.imgSmall}
                  width={600}
                  height={400}
                  priority
                  alt={item.title}
                />
              </div>

              {/* Tag */}
              <span className="text-[12px] font-medium text-gray-lite dark:text-[#A6A6A6] uppercase tracking-wider mb-2 block">
                {item.tag}
              </span>

              {/* Title */}
              <h2 className="font-bold text-2xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mb-3">
                {item.title}
              </h2>

              {/* Description - Expandable */}
              <div className="mb-4 flex-grow">
                <p
                  className={`text-gray-700 dark:text-gray-300 text-sm leading-relaxed transition-all duration-300 ${
                    isExpanded ? "" : "line-clamp-3"
                  }`}
                >
                  {item.description}
                </p>
                <button
                  onClick={() => toggleCard(item.id)}
                  className="text-[#FA5252] hover:text-[#DD2476] text-xs font-medium mt-2 transition-colors"
                >
                  {isExpanded ? "Show less" : "Read more..."}
                </button>
              </div>

              {/* Tech Stack - Shows when expanded */}
              {isExpanded && item.languages && (
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 italic animate-fadeIn">
                  <span className="font-semibold">Tech Stack:</span>{" "}
                  {item.languages}
                </p>
              )}

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                {item.repoLink ? (
                  <a
                    href={item.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:from-[#50C878] hover:to-[#228B22] transition-all duration-200 px-4 py-3 text-sm font-medium text-white rounded-lg"
                  >
                    <FiGithub className="text-lg" />
                    GitHub
                  </a>
                ) : (
                  <div
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-400 dark:bg-gray-600 px-2 py-3 text-sm font-medium text-white rounded-lg cursor-not-allowed opacity-60"
                    title="Private client repository"
                  >
                    <FiGithub className="text-lg" />
                    Private Repo
                  </div>
                )}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:from-[#176bd9] hover:to-[#0000FF] transition-all duration-200 px-4 py-3 text-sm font-medium text-white rounded-lg"
                >
                  <FiExternalLink className="text-lg" />
                  Live Demo
                </a>
              </div>
            </div>
          );
        })}
      </div>
      {/* End Expandable Cards Grid */}
    </>
  );
};

export default Works1;
