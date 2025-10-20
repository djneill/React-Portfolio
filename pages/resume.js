import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Seo from "../components/seo/Seo";

const index = () => {
  const techStack = [
    {
      category: "Languages",
      description: "Core programming languages I work with",
      icons:
        "https://skillicons.dev/icons?i=js,ts,cs,html,css&theme=dark&perline=5",
    },
    {
      category: "Frameworks",
      description: "Modern frameworks for building scalable applications",
      icons:
        "https://skillicons.dev/icons?i=react,dotnet,next,nodejs,vite,astro&theme=dark&perline=6",
    },
    {
      category: "Libraries & Styling",
      description: "UI libraries and CSS frameworks",
      icons:
        "https://skillicons.dev/icons?i=tailwind,express,bootstrap&theme=dark&perline=3",
    },
    {
      category: "Databases",
      description: "Data storage and management solutions",
      icons:
        "https://skillicons.dev/icons?i=mongodb,sqlite,postgresql&theme=dark&perline=3",
    },
    {
      category: "Tools & Platforms",
      description: "Development tools and deployment platforms",
      icons:
        "https://skillicons.dev/icons?i=vscode,github,git,azure,postman,photoshop,figma,vercel,netlify&theme=dark&perline=9",
    },
  ];

  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <Seo pageTitle="Tech Stack" />

      <Header />

      <div className="container lg:rounded-2xl bg-white dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="container sm:px-5 md:px-10 lg:px-20">
            <div className="py-12 md:py-16 px-4">
              {/* Page Title & Intro */}
              <div className="text-center max-w-3xl mx-auto mb-16 mt-14 md:mt-0">
                <h1 className="text-5xl md:text-6xl font-bold dark:text-white mb-6">
                  My Tech Stack
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  A collection of technologies and tools I use to build modern,
                  scalable, and user-friendly applications. From frontend to
                  backend, here&apos;s what powers my development workflow.
                </p>
              </div>

              {/* Tech Stack Grid */}
              <div className="space-y-12">
                {techStack.map((section, index) => (
                  <div
                    key={index}
                    className="bg-[#F8F9FA] dark:bg-[#0D0D0D] rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* Category Header */}
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold dark:text-white mb-2">
                        {section.category}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        {section.description}
                      </p>
                    </div>

                    {/* Tech Icons */}
                    <div className="flex justify-center">
                      <Image
                        src={section.icons}
                        alt={`${section.category} icons`}
                        className="max-w-full h-auto"
                        width={800}
                        height={100}
                        unoptimized
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Optional: Call to Action */}
              <div className="text-center mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                  Interested in working together?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:from-[#DD2476] hover:to-[#FA5252] transition-all duration-200 px-8 py-4 text-lg font-medium text-white rounded-lg"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
