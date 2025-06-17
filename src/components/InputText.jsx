import "../css/Container.css"

export default function InputText({value ,handleInputChange}){
    
    return <input type="text" placeholder="Add a New Task..." onChange={handleInputChange} value={value} />
}


