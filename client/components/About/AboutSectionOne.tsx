import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="text-red fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }:{text:string}) => (
    <p className="mb-5 flex items-center text-lg font-medium">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-red bg-opacity-10 text-red">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-auto flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Why Us"
                paragraph="We offer a wide range of activities including Brain Gym, Karate, Scouts, Pond Work, Puppetry, Handicrafts, Magic, Nature walks, AI Robotics Training, Basics of Coding, Cursive writing, and Islamic lifestyle, alongside kindergarten classes. Our syllabus is integrated with the Oxford School Education system and includes instruction in four basic languages. A special feature of our curriculum is Quran recitation and memorization of 38-plus Surahs before the age of 6. Furthermore, we plan to open additional outlets throughout India."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Diverse Activity Offerings" />
                    <List text="Holistic Development" />
                    <List text="Islamic Lifestyle and Quranic Education" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Advanced Tech Training" />
                    <List text="Integrated Curriculum" />
                    <List text="Expansion Plans" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="flex items-center wow fadeInUp relative aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/hero/butter.gif"
                  alt="about-image"
                  width={70}
                  height={70}
                  className="absolute mt-96 md:ml-20 lg:ml-0 xl:ml-20 md:z-10"
                />
                <Image
                  src="/images/gallery/AJI_4208.jpg"
                  alt="about-image"
                  width={350}
                  height={350}
                  className="absolute mb-32 md:mb-0 md:mt-96 md:ml-40 lg:ml-20 xl:ml-40 md:w-[30vh] lg:w-[30vh] border-white border-spacing-10 border"
                  style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }} // Hexagon
                />
                <Image
                  src="/images/gallery/AJI_3868.jpg"
                  alt="about-image"
                  width={350}
                  height={350}
                  className="absolute md:ml-72 lg:ml-40 xl:ml-72 border-white border-spacing-3 border hidden md:block"
                  style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }} // Hexagon
                />
                <Image
                  src="/images/gallery/AJI_3854.jpg"
                  alt="about-image"
                  width={350}
                  height={350}
                  className="absolute md:mb-80 lg:mb-96 border-white border-spacing-10 border hidden md:block"
                  style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }} // Hexagon
                />
                <div className="flex flex-row mt-56 md:hidden">
                  <Image
                    src="/images/gallery/AJI_3854.jpg"
                    alt="about-image"
                    width={50}
                    height={50}
                    className="border-white border-spacing-3 border w-[50vw]"
                    style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }} // Hexagon
                  />
                  <Image
                    src="/images/gallery/AJI_3868.jpg"
                    alt="about-image"
                    width={50}
                    height={50}
                    className="border-white border-spacing-10 border w-[50vw]"
                    style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }} // Hexagon
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
