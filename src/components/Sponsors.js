import React from "react";
import "./Home.css";
import "./Sponsors.css";
import Footer from "./Footer/Footer"

const Home = () => {
  const sponsors = [
    { img: require('./SponsorImages/All india radio/pngegg.png') },
    { img: require('./SponsorImages/Amar Ujala/Untitled design (11).png') },
    { img: require('./SponsorImages/Bank of Baroda/BOB LOGO.png') },
    { img: require('./SponsorImages/Beardo/berado_logo_black.jpg') },
    { img: require('./SponsorImages/Blockadda/BA_Logo_Blue_On_White (1).png') },
    { img: require('./SponsorImages/Chess.com/291978.333e4ddb.668x375o.576e795e2298@2x.png') },
    { img: require('./SponsorImages/Clovia/Clovia_logo_PNG_(2).png') },
    { img: require('./SponsorImages/Codechef/codechef-startuptalky-removebg-preview.png') },
    { img: require('./SponsorImages/Coding Ninjas/60016668-4437-498a-9bff-f5b6b9faf607-removebg-preview.png') },
    { img: require('./SponsorImages/Ed times/1.png') },
    { img: require('./SponsorImages/Edge metaverse/12.png') },
    { img: require('./SponsorImages/H20.ai/h2o-logo.jpg') },
    { img: require('./SponsorImages/Icreate/iCreate-Logo_Full.png') },
    { img: require('./SponsorImages/Interview Buddy/interview buddy.png') },
    { img: require('./SponsorImages/J.K. Cements/Untitled design (15).png') },
    { img: require('./SponsorImages/Microgravity/Untitled design (5).png') },
    { img: require('./SponsorImages/Motilal oswal/download (12).png') },
    { img: require('./SponsorImages/Mtv/MTV New TriColor Logo (1).png') },
    { img: require('./SponsorImages/Notice Bard/NoticeBard Logo NEW.png') },
    { img: require('./SponsorImages/Royal Enfield/8.png') },
    { img: require('./SponsorImages/SachKahoon/sach kahoon logo Final.png') },
    { img: require('./SponsorImages/Techstory/1_CcBzXN2l0rOabzGdXBZI4g.png') },
    { img: require('./SponsorImages/Trading view/Untitled design (6).png')},
    { img: require('./SponsorImages/Unstop/2.png')},
    { img: require('./SponsorImages/Youth Incorporated/youth incop.png')},
  ];
  return (
    <>
      <div className="sponsor">
        <h1 className="sponsor-title">OUR SPONSORS</h1>
        <div className="cards-sponsor">
          {
            sponsors.map((element) => {
              return (
                <div className="cards_sponsor" key={element.img}>
                <img src={element.img} className="image-sponsor p-2" alt="Sponsor" />
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
