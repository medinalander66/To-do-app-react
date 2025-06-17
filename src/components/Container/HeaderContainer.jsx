import Header from "../Header";

export default function ToDoHeader({text ="0"}){
    return (
        <div className="header-container">
            <img src="../src/assets/more.png" alt="3 Dots"  />
            <h4>{`${text} Completed`}</h4>
        </div>
    )
}