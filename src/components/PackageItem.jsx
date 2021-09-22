export default function PackageItem({ item, onClick }){
    const {sender, status} = item;
    return(
        <div onClick={onClick}>
            <h3>{sender}</h3>
            <p>{status}</p>
        </div>
    )
}