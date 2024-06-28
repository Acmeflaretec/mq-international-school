import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="MQ International Schooling, established in 2018, offers a unique blend of traditional moral education and modern teaching methods to foster holistic child development. With branches in Cherkala and Arikady, the school provides a diverse range of activities and an integrated curriculum, including Quran recitation and memorization."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
