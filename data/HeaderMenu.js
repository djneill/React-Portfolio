import { AiOutlineHome } from "react-icons/ai";
import { FaBlogger, FaRegUser } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";

const HeaderMenu = [
  {
    id: "01",
    name: "Home",
    routePath: "/",
    icon: <AiOutlineHome />,
  },
  {
    id: "02",
    name: "View My Work",
    routePath: "/works",
    icon: <FiCodesandbox />,
  },
  {
    id: "03",
    name: "About",
    routePath: "/about",
    icon: <FaRegUser />,
  },
  {
    id: "04",
    name: "Technologies",
    routePath: "/resume",
    icon: <CgNotes />,
  },

  {
    id: "05",
    name: "Contact",
    routePath: "/contact",
    icon: <RiContactsBookLine />,
  },
];
export default HeaderMenu;
