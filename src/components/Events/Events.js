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
              <div className="Event_content">
                <div className="Event_Name">{eventInfo.name}</div>
                <div className="Event_Position">
                  {eventInfo.about}
                  <br />
                  <button className="text-white justify-self-center self-center mt-8 mb-2 mr-4 ml-4 pt-2 pb-2 pr-4 pl-4 Event_butn">
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
