const Tag = () => {
  const tagData = [
    {
      title: "Languages",
      tags: ["https://skillicons.dev/icons?i=js,ts,cs,html,css&theme=dark"],
    },
    {
      title: "Frameworks",
      tags: [
        "https://skillicons.dev/icons?i=react,nodejs,next,vite,astro&theme=dark",
      ],
    },
    {
      title: "Libraries",
      tags: [
        "https://skillicons.dev/icons?i=tailwind,express,bootstrap&theme=dark",
      ],
    },
    {
      title: "Databases",
      tags: [
        "https://skillicons.dev/icons?i=mongodb,sqlite,postgresql&theme=dark",
      ],
    },
    {
      title: "Tools",
      tags: [
        "https://skillicons.dev/icons?i=vscode,github,git,postman,photoshop,figma,vercel,netlify&theme=dark",
      ],
    },
  ];

  return (
    <>
      {tagData.map((section, i) => (
        <div className="m-4" key={i}>
          <h3>{section.title}</h3>
          {section.tags.map((tag, j) => (
            <img src={tag} alt={`Tag ${j}`} key={j} className="tag-icon" />
          ))}
        </div>
      ))}
    </>
  );
};

export default Tag;
