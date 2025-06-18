import Header from "../Header";
import threeDots from '../../assets/more.png'

export default function ToDoHeader({text ="0"}){
    return (
        <div className="header-container">
            <img src={threeDots} alt="3 Dots"  />
            <h4>{`${text} Completed`}</h4>
        </div>
    )
}