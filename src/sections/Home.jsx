import HomePhoto from "../assets/pictures/home.jpg"

export default function Home(){
    return(
        <section id="home">
            <div className="home-photo">
                <img src={HomePhoto} alt="an illustration of a brown box attached to balloons flying"/>
            </div>
            <h1>Yellowbox tracks your parcel live</h1>
            <a href="#track" className="btn-primary">track now</a>
        </section>
    )
}