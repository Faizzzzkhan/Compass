import HomeCard from "../HomeCard";

function SecondSection() {
  return (
    <div className="min-h-screen flex justify-center interHere py-5">
      <div className="w-[85%]">
        <div className="flex flex-col items-center gap-3 py-3">
          <h2 className="p-1 font-bold text-4xl">
            Explore the most in-demand fied in CS & IT
          </h2>
          <p className="w-[50%] text-[9.5px] text-center">
            Whether you're aiming to break into software development, data
            science, cybersecurity, or another IT field, Compass has the right
            path for you
          </p>
        </div>
        <div className="grid grid-cols-4 gap-10">
          <HomeCard
            title="Software Development"
            list1="Frontend Developer"
            list2="Backend Developer"
            list3="Full Stack Developer"
            list4="Mobile App Developer"
            main={true}
          />
          <HomeCard
            title="Data Science"
            list1="Data Scientist"
            list2="Data Analyst"
            list3="Data Engineer"
            list4="Machine Learning Engineer"
            main={false}
          />
          <HomeCard
            title="IT Consulting and Strategy"
            list1="IT Consultant"
            list2="Technology Strategist"
            list3="Digital Transformation Specialist"
            list4="IT Governance Analyst"
            main={false}
          />
          <HomeCard
            title="Blockchain Technology"
            list1="Blockchain Developer"
            list2="Blockchain Architect"
            list3="Smart Contract Developer"
            list4="Blockchain Consultant"
            main={false}
          />
          <HomeCard
            title="Network and Systems Administration"
            list1="Network Administrator"
            list2="System Administrator"
            list3="Network Engineer"
            list4="IT Support Specialist"
            main={false}
          />
          <HomeCard
            title="Database Management"
            list1="Database Administrator"
            list2="Database Developer"
            list3="SQL Developer"
            list4="Big Data Engineer"
            main={true}
          />
          <HomeCard
            title="IT Project Management"
            list1="IT Project Manager"
            list2="Scrum Master"
            list3="Agile Coach"
            list4="IT Business Analyst"
            main={false}
          />
          <HomeCard
            title="Game Development"
            list1="Game Developer"
            list2="Game Designer"
            list3="Graphics Programmer"
            list4="Game Tester"
            main={true}
          />
          <HomeCard
            title="Internet of Things (IoT)"
            list1="IoT Developer"
            list2="IoT Architect"
            list3="IoT Systems Engineer"
            list4="Embedded Systems Engineer"
            main={false}
          />
          <HomeCard
            title="Augmented Reality (AR) and Virtual Reality (VR)"
            list1="AR/VR Developer"
            list2="AR/VR Designer"
            list3="Simulation Engineer"
            list4="3D Artist"
            main={true}
          />
          <HomeCard
            title="DevOps and Automation"
            list1="DevOps Engineer"
            list2="Automation Engineer"
            list3="Site Reliability Engineer (SRE)"
            list4="Continuous Integration Specialist"
            main={false}
          />
        </div>
      </div>
    </div>
  );
}
export default SecondSection;
