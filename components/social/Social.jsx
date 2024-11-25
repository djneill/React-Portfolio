import {
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { PiButterflyFill } from "react-icons/pi";

const Social = () => {
  const socialContent = [
    {
      id: 1,
      link: "https://github.com/djneill",
      icon: <FaGithub />,
      iconClass: "text-[#6cc644]",
    },
    {
      id: 2,
      link: "https://twitter.com/CodingGuitarist",
      icon: <FaTwitter />,
      iconClass: "text-[#1C9CEA]",
    },
    {
      id: 3,
      link: "https://bsky.app/profile/codingguitarist.bsky.social",
      icon: <PiButterflyFill />,
      iconClass: "text-[#87CEEB]",
    },
    {
      id: 4,
      link: "https://www.linkedin.com/in/dj-neill/",
      icon: <FaLinkedinIn />,
      iconClass: "text-[#0072b1]",
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
