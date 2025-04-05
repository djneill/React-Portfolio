const addressData = [
  {
    id: "01",
    icon: "/images/contact/phone1.png",
    title: "Phone ",
    info: (
      <>
        <p>
          <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">
            Request a call
          </p>
        </p>
      </>
    ),
    bg: "#FCF4FF",
  },
  {
    id: "02",
    icon: "/images/contact/email1.png",
    title: "Email ",
    info: (
      <>
        <p>
          <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">
            I will reply ASAP
          </p>
        </p>
      </>
    ),
    bg: "#EEFBFF",
  },
  {
    id: "03",
    icon: "/images/contact/map1.png",
    title: "Location ",
    info: <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">USA</p>,
    bg: "#F2F4FF",
  },
];

export default addressData;
