import React, { useState } from "react";
import "./Events.css";
import EventData from "./Data";
import image from "../../images/logo.png";

const EventModal = ({info}) => {
  console.log(info);
  return (
    <div className="modal_event_content">
      <div className="model_event_img">
        <img src={info.img} alt="logo" />
      </div>
      <div className="model_event_content">
        <div>{info.name}</div>
        <p>{info.about}</p>
        <div>{info.location}</div>
        <div>{info.DDT}</div>
        <button className="modal_event_btn">Register</button>
      </div>
    </div>
  );
};

const Events = ({ events }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleEventCardClick = () => {
    setModalVisible(true);
  };
  const handleCloseButtonClick = () => {
    setModalVisible(false);
  };
  return (
    <div className="events">
      <div className="event_fullname">{events}</div>
      <div className="container_events">
        {EventData[events].map((eventInfo) => (
          <div>
            <div
              className={`event_card ${modalVisible ? " modal-open" : ""}`}
              onClick={handleEventCardClick}
            >
              <div className="card_content">
                <img src={image} className="event_img" alt="logo" />
                <div className="event-info">
                  <p className="title">{eventInfo.name}</p>

                  <div className="additional-info">
                    <p className="info">
                      <i className="fas fa-map-marker-alt"></i>
                      {eventInfo.location}
                    </p>
                    <p className="info">
                      <i className="fas fa-calendar-alt"></i>
                      {eventInfo.DDT}
                    </p>
                  </div>
                  <button className="action">Register</button>
                </div>
              </div>
            </div>
            {modalVisible && (
              <div>
                <div className="modal-background"></div>
                <div
                  className={`event_modal ${
                    modalVisible ? "modal-visible" : ""
                  }`}
                >
                  <div className="event_container">
                    <button
                      className="event_close-button"
                      onClick={handleCloseButtonClick}
                    >
                      X
                    </button>
                    <EventModal info={eventInfo}/>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
