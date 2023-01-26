import Tba from './Tba';
import './TechEvents.css'

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
                    <h1 className='my-5 font'>Domain3</h1>
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
        </>
    )
}

export default TechEvents