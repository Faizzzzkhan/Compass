function WorkCard(props){
    return(
        <div className="rounded-md p-5 flex flex-col justify-between shadow-md shadow-gray-500">
            <h2 className="py-5 text-[#043872] text-xl font-semibold">{props.title}</h2>
            <p className="text-sm">{props.info}</p>
            <>
            <br/>
            <hr className="border border-gray-600" />
            </>
        </div>
    )
}
export default WorkCard;