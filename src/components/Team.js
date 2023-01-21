import './Team.css'
import React from 'react'

const teamData = [
    { idx:1,img: require('../images/logo.png'), name: "name1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate." },
    { idx:2,img: require('../images/logo.png'), name: "name1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate." },
    { idx:3,img: require('../images/logo.png'), name: "name1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate." },
    { idx:4,img: require('../images/logo.png'), name: "name1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate." },
    { idx:5,img: require('../images/logo.png'), name: "name1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate." },
    { idx:6,img: require('../images/logo.png'), name: "name1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate." },
    { idx:7,img: require('../images/logo.png'), name: "name1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate." },
    { idx:8,img: require('../images/logo.png'), name: "name1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate." },
    { idx:9,img: require('../images/logo.png'), name: "name1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate." },
    { idx:10,img: require('../images/logo.png'), name: "name1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate." },
]

const Team = () => {
    return (
        <>
            <div className='back-img'>
                <h1 className='my-3 font'>Our Team</h1>
                <div className="container">
                    <div className="row">

                        {
                            teamData.map((element) => {
                                return(
                                <div className="col-md-3" key={element.idx}>
                                    <input type="checkbox" id={element.idx} />
                                    <label className='card-container' htmlFor={element.idx}>
                                        <div className="card-flip">
                                            {/* <!-- Card Front --> */}
                                            <div className="card-fluid front back-col gradient-border my-1">
                                                <div className="card-block py-1 px-1">
                                                    <img src={element.img} alt="Person" className="card-img-top img-fluid pt-2"/>
                                                    <h4 className="card-title text-center pb-1">{element.name}</h4>
                                                </div>
                                            </div>

                                            {/* <!-- Card Back --> */}
                                            <div className="card back back-col gradient-border">
                                                <div className="card-block">
                                                    <h4 className="card-title text-center py-1">{element.name}</h4>
                                                    <p className="card-text mx-2">{element.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                )
                            })
                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default Team