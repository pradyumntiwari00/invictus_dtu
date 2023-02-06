import React from 'react'
import Footer from "../Footer/Footer";
import "./faq.css";

const FAQs = [
  { idx: 1, ques: "Is the entry free?", ans: "The entry has been and will always be free for all college students." },
  { idx: 2, ques: "What are the restrictions on entrance and exit of campus during INVICTUS?", ans: "Entrance on campus begins at 10 AM for all participants and visitors on all three days. If you are not attending the concerts, and not availing accommodation, you will be required to leave campus by 4 PM.You will be required to leave the campus by 10 PM." },
  { idx: 3, ques: "Will there be some food options available during INVICTUS?", ans: "Yes,there will be food courts available near the OAT. " },
  { idx: 4, ques: "Are on-spot registrations allowed during the fest?", ans: "On-spot registrations may or may not be allowed depending on the number of registered participants. We suggest that you register online as soon as possible to prevent any unforeseen circumstances." },
  { idx: 5, ques: "What things are not allowed in the concert?", ans: "Pointed objects like scissors, knives, etc are not allowed. Make sure you bring your friends along, though! There are arrangements inside for water, along with food courts. So there won’t be any need to carry water!.You can buy food from food courts at the OAT area" },
  { idx: 6, ques: "Are vehicles allowed inside?", ans: "No, vehicles are not allowed inside university campus." },
]

const Faq = () => {
  return (
    <>
    <div className='back-img'>
      <div className='text-center font mt-5 pt-5'>FAQs</div>
      <div className="accordion container my-5" id="accordionExample">
        {
          FAQs.map((element) => {
            return (
              <div className="accordion-item faq-color" key={element.idx}>
                <div className="accordion-header" id={`heading${element.idx}`}>
                  <button className="accordion-button collapsed faq-color" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${element.idx}`} aria-expanded="false" aria-controls={`collapse${element.idx}`}>
                    {element.ques}
                  </button>
                </div>
                <div id={`collapse${element.idx}`} className="accordion-collapse collapse" aria-labelledby={`heading${element.idx}`} data-bs-parent="#accordionExample">
                  <div className="accordion-body text-center">
                    {element.ans}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Faq