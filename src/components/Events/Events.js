import "./Events.css";
import EventsData from "./Data/index.js";

const InfoTemp = [
  {
    img: "https://www.saltedstone.com/hubfs/TeamPortraits/mitch500.jpg",
    name: "STEVE AMBUUL",
    about: "DIRECTOR OF CLIENT SERVICES, NA",
  },
  {
    img: "https://www.saltedstone.com/hubfs/TeamPortraits/mitch500.jpg",
    name: "STEVE AMBUUL",
    about: "DIRECTOR OF CLIENT SERVICES, NA",
  },
  {
    img: "https://www.saltedstone.com/hubfs/TeamPortraits/mitch500.jpg",
    name: "STEVE AMBUUL",
    about: "DIRECTOR OF CLIENT SERVICES, NA",
  },
  {
    img: "https://www.saltedstone.com/hubfs/TeamPortraits/mitch500.jpg",
    name: "STEVE AMBUUL",
    about: "DIRECTOR OF CLIENT SERVICES, NA",
  },
];
const Events = ({ event }) => {
  return (
    <div>
      <div style={{ marginBottom: "10rem" }} className="Events_Section">
        <h2>{event}</h2>
        <div className="Events_Cards_Container">
          {EventsData[event].map((eventInfo) => (
            <div className="Event_Card">
              <div className="Event_Image">
                <img src={eventInfo.img} alt="ImageName" />
              </div>
              <div className="Event_Name">{eventInfo.name}</div>
              <div className="Event_Position">{eventInfo.about}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
