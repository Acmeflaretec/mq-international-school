import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-12">
      <div className="container">
        <div className="-mx-auto flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2 order-2 md:order-1">
            <div
              className="flex items-center relative aspect-[1/1] max-w-[500px] lg:mr-0"
              data-wow-delay=".2s"
            >
              <Image
                src="/images/hero/butter.gif"
                alt="about-image"
                objectFit="cover"
                width={70}
                height={70}
                className="absolute mt-96 md:ml-20 lg:ml-0 md:z-10"
                style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }} // Hexagon
              />
              <Image
                src="/images/about/about-image.jpg"
                alt="about-image"
                objectFit="cover"
                width={350}
                height={350}
                className="absolute mb-32 md:mb-24 md:mt-96 md:ml-40 lg:ml-16 border-white border-spacing-10 border"
                style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }} // Hexagon
              />
              <Image
                src="/images/about/about-image-2.jpg"
                alt="about-image"
                objectFit="cover"
                width={350}
                height={350}
                className="absolute md:ml-72 lg:ml-28 xl:ml-52 border-white border-spacing-3 border hidden md:block"
                style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }} // Hexagon
              />
              <Image
                src="/images/gallery/AJI_3786.jpg"
                alt="about-image"
                objectFit="cover"
                width={350}
                height={350}
                className="absolute md:mb-80 lg:mb-96 border-white border-spacing-10 border hidden md:block"
                style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }} // Hexagon
              />
              <div className="flex flex-row mt-56 md:hidden">
                <Image
                  src="/images/about/about-image-2.jpg"
                  alt="about-image"
                  width={50}
                  height={50}
                  className="border-white border-spacing-3 border w-[50vw]"
                  style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }} // Hexagon
                />
                <Image
                  src="/images/gallery/AJI_3786.jpg"
                  alt="about-image"
                  width={50}
                  height={50}
                  className="border-white border-spacing-10 border w-[50vw]"
                  style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }} // Hexagon
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 order-1 md:order-2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Our History
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  MQ International Schooling was founded in 2018 with a strong conviction to develop children using traditional moral methodologies blended with modern multimedia and conventional classroom teaching methods. Since our humble beginnings in Cherkala, we have expanded to a second branch in Arikady, catering to hundreds of children. Our blended approach to child development has been highly successful and well-proven. Our team consists of well-trained, experienced, and motivated teachers who work under the guidance of highly accomplished management professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
