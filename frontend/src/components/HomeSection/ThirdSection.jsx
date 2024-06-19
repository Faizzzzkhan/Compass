import HomeFeature from "../HomeFeature";

function ThirdSection(){
    return(
        <div className="interHere flex justify-center">
            <div className="w-[85%] py-5">
                <h1 className="text-3xl py-3 font-bold text-center">Features</h1>
                <div>
                    <HomeFeature title="Personalized Recommendations" content="Our advance algorithm analyzes your unique profile to provide personalized career recommendations to tailored to your interests, skills and goals. Discover career paths that trult align with who you are." button="Learn More" />
                    <HomeFeature title="Detailed Career paths" content="Explore comprehensive career paths for each recommended role. Get insight into required skills, education qualification, potential growth and real-world job description to make informed decisions about your future." button="Try it Now" position="flex-row-reverse" />
                    <HomeFeature title="Skill-Building Resources" content="Access a curated library of resources to build and enhavce your skills. From online courses and certification programs to articles and tutorials, we provide everything you need to stay ahead in your chosen field." button="Learn More" />
                </div>
            </div>
        </div>
    )
}
export default ThirdSection; 