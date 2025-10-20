import dynamic from "next/dynamic";
import Header from "../components/header/Header";
import About1 from "../components/about/about1";
import Service from "../components/service/Service";
import Brand from "../components/brand/Brand";
import Footer from "../components/footer/Footer";
import Seo from "../components/seo/Seo";
import Image from "next/image";

const index = () => {
  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
      <Seo pageTitle="About" />
      {/* End Head for Seo */}

      <Header />
      {/* End  Header */}

      <div className="container lg:rounded-2xl bg-white dark:bg-[#111111]  px-4 sm:px-5 md:px-10 lg:px-20">
        <div data-aos="fade">
          {/* Start top about info */}
          <div className="py-12">
            <h2 className="after-effect after:left-52 mt-12 lg:mt-0 ">
              About Me
            </h2>
            {/* Page Title */}
            <About1 />
          </div>
          {/* End top about info */}

          {/* Start Client Slider */}
          <div className="bg-[#F8FBFB] dark:bg-zinc-700 max-w-full h-full py-4 rounded-xl">
            <h3 className="text-center font-merienda dark:text-white text-6xl mb-3 font-semibold ">
              Clients
            </h3>
            <Brand />
          </div>
          {/* End Client Slider */}

          {/* Conference Pictures Section */}
          <div className="py-10">
            <h3 className="text-4xl font-medium mb-8 dark:text-white">
              Conference Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-[300px] rounded-[20px] overflow-hidden">
                <Image
                  src="/images/about/20241205_103534.webp"
                  alt="Conference Picture 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[300px] rounded-[20px] overflow-hidden">
                <Image
                  src="/images/about/20241205_104421.webp"
                  alt="Conference Picture 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[300px] rounded-[20px] overflow-hidden">
                <Image
                  src="/images/about/20241205_090012.webp"
                  alt="Conference Picture 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[300px] rounded-[20px] overflow-hidden">
                <Image
                  src="/images/about/IMG_1110.webp"
                  alt="Conference Picture 4"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[300px] rounded-[20px] overflow-hidden">
                <Image
                  src="/images/about/20241205_200703.webp"
                  alt="Conference Picture 5"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[300px] rounded-[20px] overflow-hidden">
                <Image
                  src="/images/about/Screenshot_20241205_212143_LinkedIn.webp"
                  alt="Conference Picture 6"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[300px] rounded-[20px] overflow-hidden">
                <Image
                  src="/images/about/20250924_155505.webp"
                  alt="Conference Picture 7"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[300px] rounded-[20px] overflow-hidden">
                <Image
                  src="/images/about/20250924_200316.webp"
                  alt="Conference Picture 8"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[300px] rounded-[20px] overflow-hidden">
                <Image
                  src="/images/about/20250925_180024.webp"
                  alt="Conference Picture 9"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          {/* End Conference Pictures Section */}

          {/* Start about service info */}
          <div className="pb-12 ">
            <h3 className="text-[35px] dark:text-white font-medium pb-5">
              What I do!
            </h3>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
              {/* Experience information  */}
              <Service />
            </div>
          </div>
          {/* End about service info */}

          {/* Start Common Footer  */}
          <Footer />
          {/* End Common Footer  */}
        </div>
        {/* End fade effect */}
      </div>
      {/* End container */}
    </div>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
