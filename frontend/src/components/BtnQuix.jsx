import { NavLink } from "react-router-dom"
function QuizBtn(){
    return(
        <NavLink to={'/quiz'}><button className="p-2 text-sm rounded-md bg-[#509df9]">Take te Quiz</button></NavLink>
    )
}
export default QuizBtn;