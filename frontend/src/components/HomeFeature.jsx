function HomeFeature(props){
    return(
        <div className={`flex ${props.position} py-3 justify-between`}>
            <div className="w-full px-5 py-10">
                <h1 className="text-[3.5rem] leading-[65px] py-3 font-bold">{props.title}</h1>
                <p className="text-sm py-3">{props.content}</p>
                <button className="my-7 bg-[#509df9] text-white px-5 py-2 hover:shadow-md hover:shadow-gray-500 transition-all rounded-md">{props.button}</button>
            </div>
            <div className="w-full p-5">
                <div className="bg-blue-200 h-full w-full rounded-md"></div>
            </div>
        </div>
    )
}

export default HomeFeature;