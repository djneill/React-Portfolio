import Image from "next/image";
import PersonalInfo from "./PersonalInfo";

const index = () => {
  return (
    <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
      {/* start .col and routePath image left */}
      <div className="col-span-12 md:col-span-4">
        {/* personal images for routePath page  */}
        <Image
          className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
          src="/images/about/aboutShot.webp"
          width={300}
          height={400}
          alt="Headshot of DJ"
        />
      </div>
      {/* End .col and routePath image left */}

      {/* Start about right content */}
      <div className="col-span-12 md:col-span-8 space-y-2.5">
        <div className=" md:mr-12 xl:mr-16">
          <h3 className="text-4xl font-medium dark:text-white mb-2.5 ">
            Who am I?
          </h3>
          <p className="text-gray-lite  dark:text-color-910 leading-7">
            I&apos;m a passionate full-stack software engineer, freelance web developer, and designer. I thrive on turning innovative ideas into reality. I have a knack for crafting elegant and functional digital solutions, working seamlessly across the stack, from frontend to backend development.
          </p>
          <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
            My goal is to create web applications that not only meet the technical requirements but also captivate and engage users. Whether it&apos;s building dynamic web applications, designing beautiful user interfaces, or turning ideas into code, I&apos;m dedicated to delivering high-quality, responsive, and user-friendly web experiences. Let&apos;s collaborate and bring your digital vision to life!
          </p>
        </div>

        {/* personal information */}
        <div>
          <h3 className="text-4xl font-medium my-5 dark:text-white">
            Get In Touch
          </h3>
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
            <PersonalInfo />
          </div>
        </div>
        {/* End personal information */}
      </div>
      {/* End about right content */}
    </div>
  );
};

export default index;
