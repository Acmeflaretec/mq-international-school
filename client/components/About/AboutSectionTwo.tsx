import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-12">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className=" w-full px-4 lg:w-1/2 order-2 md:order-1">
            <div
              className="flex wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center items-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.jpg"
                alt="about image"
                width={500}
                height={500}
                className="rounded-lg"
              />
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
