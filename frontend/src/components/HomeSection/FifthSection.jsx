import HomeFeature from "../HomeFeature";

function FifthSection(){
    return(
        <div className="flex justify-center bg-[#043872] ">
            <div className="w-[85%]">
                <HomeFeature position="text-white" title="Top Courses" content="Expand your knowledge and skillset with our carefully curated list of online courses, Whether your're looking to learn anew programming language, master data analysis or gain certification in cybersecurity, we've got you covered. Our courses are sources from top educational platforms and are tailored to match your career recommendations." button="Learn More" />
                <HomeFeature position="flex-row-reverse text-white" title="Top Articles" content="Stay informed with our extensive library of articles. Covering a wide range of topics from industry trends and career advice to technical tutorials and personal development tips, our articles are designed to keep you up-to-date and inspired. Writted by experts and industry professionals, they offers valuable insights to help you grow in your career" button="Learn More" />
            </div>
        </div>
    )
}
export default FifthSection;