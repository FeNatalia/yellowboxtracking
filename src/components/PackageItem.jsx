// Project files
import PackageLogo from "../assets/pictures/package.png"

export default function PackageItem({ item, onClick }){
    // Constants 
    const {sender, status} = item;
    return(
        <div onClick={onClick} id="package-item">
            <img src={PackageLogo} alt="an illustration of a brown box in a yellow circle"/>
            <div>
                <h3>{sender}</h3>
                <p>{status}</p>
            </div>
        </div>
    )
}