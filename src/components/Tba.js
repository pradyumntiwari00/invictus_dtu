import React from 'react'

const Tba = () => {
    return (
        <>
            <li className="cards_item1">
                <div className="card1 gradient-border">
                    <div className="card_image1"><img src={require('../images/logo.png')} className="img1" alt="Event" /></div>
                    <div className="card_content1">
                        <h2 className="card_title1">TBA</h2>
                        <p className="card_text1">Date: TBA</p>
                        <p className="card_text1">Venue: TBA</p>
                        <a target="_blank" href="https://www.geeksforgeeks.org/" rel='noreferrer' className="btn1 card_btn1">Know More</a>
                        <a target="_blank" href="https://www.geeksforgeeks.org/" rel='noreferrer' className="btn1 card_btn1">Register</a>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Tba