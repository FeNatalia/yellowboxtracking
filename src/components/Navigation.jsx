import Logo from "../assets/pictures/logo.png";

export default function Navigation(){
    return(
        <nav id="navigation">
            <a href="#home">
                <img src={Logo} alt="yellowbox text with a parachute icon instead of the o letter" />
            </a>
            <a href="#home">Home</a>
            <a href="#track">Track</a>
        </nav>
    )
}