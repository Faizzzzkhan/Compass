import QuizBtn from "../components/BtnQuix";
import Photo from "../assets/image.png";
import SecondSection  from "../components/HomeSection/SecondSection";
import ThirdSection from "../components/HomeSection/ThirdSection";
import ForthSection from "../components/HomeSection/ForthSection";
import FifthSection from "../components/HomeSection/FifthSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="flex justify-center h-screen bg-[#043872] interHere">
        <div className="w-[85%] flex justify-between gap-5">
          <div className="w-full flex flex-col justify-center items-start gap-5 text-white">
            <h1 className="text-[55px] leading-[60px] font-bold">
              Find your perfect career path with Compass
            </h1>
            <p className="text-[14px]">
              Take our career quiz to discover personalized recommendations,
              explore resources and plan your prefessional journey
            </p>
            <QuizBtn/>
          </div>
          <div className="w-full flex items-center justify-center">
            <img src={Photo} alt="home image" width={500} className="rounded-md"/>
          </div>
        </div> 
      </div>
      <SecondSection/>
      <ThirdSection/>
      <ForthSection/>
      <FifthSection/>
      <Footer/>
    </>
  );
}

export default Home;
