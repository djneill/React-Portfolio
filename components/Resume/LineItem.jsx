import { Line } from "rc-progress";
import React from "react";

const LineItem = ({ item }) => {
  const lineArray = [
    {
      id: 1,
      color: "#FF6464",
      name: "JavaScript | TypeScript | C# | HTML | CSS",
      // number: "90",
    },
    {
      id: 2,
      color: "#FFA726",
      name: "React | .NET | Next.JS | Node.JS | Vite | Astro",
      // number: "95",
    },
    {
      id: 3,
      color: "#5185D4",
      name: "Tailwind CSS | Bootstrap | Shadcn/ui | DaisyUI | Express.JS",
      // number: "85",
    },
    {
      id: 4,
      color: "#CA56F2",
      name: "MongoDB | PostgreSQL | SQLite",
      // number: "75",
    },
    {
      id: 5,
      color: "#65A30D",
      name: "Vercel | Netlify | Figma | Photoshop | Postman | Git | GitHub | VsCode",
      // number: "90",
    },
  ];

  return (
    <>
      {lineArray.map((item) => (
        <div className=" mb-7" key={item.id}>
          <div className="flex justify-between py-1">
            <span className=" text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
              {item?.name}
            </span>
            <span className=" text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
              {item?.number}
            </span>
          </div>

          <Line
            percent={100}
            strokeWidth={1}
            trailWidth={1}
            // trailColor={`${local === "dark" ? "#1C1C1C" : "#EDF2F2"}`}
            strokeColor={item?.color}
          />
        </div>
      ))}
    </>
  );
};

export default LineItem;
