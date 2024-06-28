import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "UIdeck",
    href: "https://uideck.com",
    image: "/images/brands/uideck.svg",
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "https://tailgrids.com",
    image: "/images/brands/tailgrids.svg",
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: "/images/brands/lineicons.svg",
  },
  {
    id: 4,
    name: "GrayGrids",
    href: "https://graygrids.com",
    image: "/images/brands/graygrids.svg",
  },
  {
    id: 5,
    name: "TailAdmin",
    href: "https://tailadmin.com",
    image: "/images/brands/tailadmin.svg",
  },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="bg-white text-center shadow-xl wow fadeInUp flex flex-col font-thin items-center justify-center rounded-lg py-8 px-8 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s"
            >
            <Image
            src={'/images/brands/bg-anthem.jpg'}
            alt="bg"
            width={500}
            height={500}
            />
              <b>MQ Anthem</b><br/>
              "You are mercy, Grant me growth<br />
              Your presence, Unique Potential Of Me<br />
              Endless Ocean Bestow knowledge Upon me<br />
              My invaluable treasure is My Education<br />
              I aspire to conquer the world<br />
              I believe my wisdom will create wonders<br />
              Today's learning is my Asset for tomorrow<br />
              My vow is sworn and steadfast<br />
              I will attain all of MQ's Knowledge<br />
              I pledge my devotion with faith in my strength and abilities<br />
              I shall achieve everything through you<br />
              God, may your divine mercy enhance my knowledge."<br />
              {/* {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
