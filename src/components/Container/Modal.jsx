import Button from "../Button";
import "../../css/Container.css"
export default function Modal({show,onClose,children,className}){
    if(!show) return null;

    return(
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
                <Button className={"modal-button"} action={onClose} text="Close" />
            </div>
        </div>
    )
}