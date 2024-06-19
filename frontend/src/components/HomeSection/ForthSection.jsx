import WorkCard from "../WordCard";

function ForthSection(){
    return(
        <div className="flex justify-center interHere">
            <div className="w-[85%] py-5">
                <h1 className="text-center text-3xl font-bold py-5">How does it work</h1>
                <div className="py-5 grid grid-cols-3 gap-5">
                    <WorkCard title="Step 1: Take the Quiz" info="Begin your journey by taking our quick and engaging career quiz. This step involves answering a series of questions about your interests, skills and career aspirations. The Quiz is designed to gather valuable about your unique profile" />
                    <WorkCard title="Step 2: Get Recommendations" info="Based on your quiz responses, our advanced algortihm generates personalized career recommendations just for you. Descover a range of career paths that align with your strengths and preferences, providing you with options that suit your unique profile." />
                    <WorkCard title="Step 3: Explore Resources" info="Delve into a wealth of resources tailored to your recommended carer paths. Access skill building materials, online courses, articles, and tutorials to echance your knowledge and capabilities. Out curated library ensures you have the tools you need to succeed" />
                </div> 
            </div>
        </div>
    )
}
export default ForthSection;