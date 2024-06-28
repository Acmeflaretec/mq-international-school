import Image from "next/image";

const Awards = () => {
  return (
    <section className="pt-16">
      <div className="container shadow-2xl"
        style={{ backgroundImage: "url('/images/hero/hero-bg.jpg')" }}
      >
        <div className="-mx-4 flex flex-wrap bg-primary bg-opacity-70">
          <div className="flex w-full items-center justify-center px-4 flex-col">
            <h2 className="pt-16 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]">
              What's New
            </h2>
            <h3 className="text-xl text-black sm:text-2xl lg:text-xl xl:text-2xl">
              "MQ International Schooling: Championing Excellence in Co-Curricular Activities 2024"
            </h3>
          </div>
          <div className="flex w-full px-4 flex-col md:flex-row">
            <div
              className=" text-center  wow fadeInUp flex md:flex-col items-center justify-center rounded-md py-8 px-8 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s
              "
            >
              <Image
                src={'/images/awards/award.jpg'}
                alt="bg"
                width={500}
                height={500}
                className="rounded-lg"
              />
              {/* {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))} */}
            </div>
            <div
              className="text-center wow fadeInUp flex flex-col items-center justify-center rounded-md py-8 px-8 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s
              "
            >
              <p className="md:max-w-[50vw] text-base leading-relaxed text-black">
                MQ International Schooling, under the visionary leadership of Mr. Maqsoos, our esteemed Founder and Principal, has been recognized as the "Best School for Co-curricular Activities 2024" by nationalschoolawards.in. This prestigious accolade reflects our unwavering commitment to holistic education, where academic excellence goes hand in hand with a rich array of co-curricular opportunities. At MQ International Schooling, we believe that nurturing well-rounded individuals requires more than just classroom learning. Our students thrive in an environment that encourages creativity, leadership, and personal growth through diverse activities, from sports and arts to community service and intellectual pursuits. This award underscores our dedication to fostering an educational experience that empowers students to excel in all facets of life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;