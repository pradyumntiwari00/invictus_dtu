import "./Events.css";
import EventsData from "./Data/index.js";

const Events = ({ event }) => {
  return (
    <div>
      <div className="Events_Section">
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
