import Photo from "../assets/image.png"
function Home() {
  return (
    <>
      <div className="flex justify-center h-full bg-[#043872] interHere">
        <div className="w-[85%] flex justify-between gap-5">
          <div className="w-full flex flex-col justify-center items-start gap-5 text-white">
            <h1 className="text-[55px] leading-[60px] font-bold">
              Find your perfect career path with Compass
            </h1>
            <p className="text-[14px]">
              Take our career quiz to discover personalized recommendations,
              explore resources and plan your prefessional journey
            </p>
            <button className="p-3 text-sm rounded-md bg-[#509df9]">Take te Quiz</button>
          </div>
          <div className="w-full flex items-center">
            <img src={Photo} alt="home image" height={10} width={400} className="rounded-md"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
