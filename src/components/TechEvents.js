import Tba from './Tba';
import './TechEvents.css'
import Footer from "./Footer/Footer"

const Hackthon_Ideathon = [
    {
        img: "https://user-images.githubusercontent.com/77263121/214587833-c257dbed-3868-4bf3-9534-ae2cc45c06ff.jpg",
        idx: 1,
        name: "I am Hackathon",
        location: "BR Auditorium of DTU COllage",
        DDT: "Tuesday 24th December 11 AM",
        about:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam omnis. Earum aliquam velit nostrum consectetur accusantium.",
    },
    {
        img: "https://user-images.githubusercontent.com/77263121/214588133-c64c0cac-eda8-4896-9b7e-e0a58897aedf.png",
        idx: 2,
        name: "I am Hackathon",
        location: "BR Auditorium of DTU COllage",
        DDT: "Tuesday 24th December 11 AM",
        about:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam omnis. Earum aliquam velit nostrum consectetur accusantium.",
    },
    {
        img: "https://user-images.githubusercontent.com/77263121/214588260-5ac765fe-2f4d-4ce7-9f82-c7a2994efb15.jpg",
        idx: 3,
        name: "I am Hackathon",
        location: "BR Auditorium of DTU COllage",
        DDT: "Tuesday 24th December 11 AM",
        about:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam omnis. Earum aliquam velit nostrum consectetur accusantium.",
    },
];

const macs_Events = [
    {img: require('../images/macs1.jpeg'),idx: 1, name: "Greedy Knight", location: "", DDT: "13-15th February 2023", about: "A chess based puzzle competition in which a participant will have to collect the maximum number of coins placed on the chess board using the KNIGHT pawn."},
    {img: require('../images/macs2.jpeg'),idx: 2, name: "De-Cyber", location: "", DDT: "13-15th February 2023", about: "A debugging and decryption based competition with a cyber war theme."},
    {img: require('../images/macs3.jpeg'),idx: 3, name: "Chess Warfare", location: "", DDT: "13-14th February 2023", about: "An individual-based event, in which players will compete with each other in the game of chess. The tournament will follow an elimination-based system."},
    {img: require('../images/macs4.jpeg'),idx: 4, name: "Mathletics", location: "", DDT: "13-15th February 2023", about: "A quiz involving mathematical equations and questions."},
]

const TechEvents = () => {
    return (
        <>
            <div className='back-img'>
                <div className="main">
                    <h1 className='my-5 font'>Domain1</h1>
                    <ul className="cards1">

                        {
                            Hackthon_Ideathon.map((element) => {
                                return (
                                    <li className="cards_item1" key={element.idx}>
                                        <div className="card1 gradient-border">
                                            <div className="card_image1"><img src={element.img} className="img1" alt="Event" /></div>
                                            <div className="card_content1">
                                                <h2 className="card_title1">{element.name}</h2>
                                                <p className="card_text1">Date: {element.DDT}</p>
                                                <p className="card_text1">Venue: {element.location}</p>
                                                <p className="card_text1">{element.about}</p>
                                                <a target="_blank" href="https://www.geeksforgeeks.org/" rel='noreferrer' className="btn1 card_btn1">Know More</a>
                                                <a target="_blank" href="https://www.geeksforgeeks.org/" rel='noreferrer' className="btn1 card_btn1">Register</a>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="main">
                    <h1 className='my-5 font'>Domain2</h1>
                    <ul className="cards1">

                        {
                            Hackthon_Ideathon.map((element) => {
                                return (
                                    <li className="cards_item1" key={element.idx}>
                                        <div className="card1 gradient-border">
                                            <div className="card_image1"><img src={element.img} className="img1" alt="Event" /></div>
                                            <div className="card_content1">
                                                <h2 className="card_title1">{element.name}</h2>
                                                <p className="card_text1">Date: {element.DDT}</p>
                                                <p className="card_text1">Venue: {element.location}</p>
                                                <p className="card_text1">{element.about}</p>
                                                <a target="_blank" href="https://www.geeksforgeeks.org/" rel='noreferrer' className="btn1 card_btn1">Know More</a>
                                                <a target="_blank" href="https://www.geeksforgeeks.org/" rel='noreferrer' className="btn1 card_btn1">Register</a>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="main">
                    <h1 className='my-5 font'>Miscellaneous</h1>
                    <ul className="cards1">

                        {
                            macs_Events.map((element) => {
                                return (
                                    <li className="cards_item1" key={element.idx}>
                                        <div className="card1 gradient-border">
                                            <div className="card_image1"><img src={element.img} className="img1" alt="Event" /></div>
                                            <div className="card_content1">
                                                <h2 className="card_title1">{element.name}</h2>
                                                <p className="card_text1">Date: {element.DDT}</p>
                                                <p className="card_text1">Venue: {element.location}</p>
                                                <p className="card_text1">{element.about}</p>
                                                <a target="_blank" href="https://www.geeksforgeeks.org/" rel='noreferrer' className="btn1 card_btn1">Know More</a>
                                                <a target="_blank" href="https://www.geeksforgeeks.org/" rel='noreferrer' className="btn1 card_btn1">Register</a>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="main">
                    <h1 className='my-5 font'>Domain4</h1>
                    <ul className="cards1">

                        {
                            Hackthon_Ideathon.map((element) => {
                                return (
                                    // <li className="cards_item1" key={element.idx}>
                                    //     <div className="card1 gradient-border">
                                    //         <div className="card_image1"><img src={element.img} className="img1" alt="Event" /></div>
                                    //         <div className="card_content1">
                                    //             <h2 className="card_title1">{element.name}</h2>
                                    //             <p className="card_text1">Date: {element.DDT}</p>
                                    //             <p className="card_text1">Venue: {element.location}</p>
                                    //             <p className="card_text1">{element.about}</p>
                                    //             <a target="_blank" href="https://www.geeksforgeeks.org/" rel='noreferrer' className="btn1 card_btn1">Know More</a>
                                    //             <a target="_blank" href="https://www.geeksforgeeks.org/" rel='noreferrer' className="btn1 card_btn1">Register</a>
                                    //         </div>
                                    //     </div>
                                    // </li>
                                    <Tba/>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default TechEvents