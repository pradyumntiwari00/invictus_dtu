import React from 'react'

const FAQs = [
  { idx: 1, ques: "ques1", ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?" },
  { idx: 2, ques: "ques1", ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?" },
  { idx: 3, ques: "ques1", ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?" },
  { idx: 4, ques: "ques1", ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?" },
  { idx: 5, ques: "ques1", ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?" },
  { idx: 6, ques: "ques1", ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?" },
  { idx: 7, ques: "ques1", ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?" },
  { idx: 8, ques: "ques1", ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?" },
  { idx: 9, ques: "ques1", ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?" },
]

const Faq = () => {
  return (
    <>
    <div className='back-img'>
      <div className='text-center font my-3'>FAQ</div>
      <div className="accordion container" id="accordionExample">
        {
          FAQs.map((element) => {
            return (
              <div className="accordion-item" key={element.idx}>
                <h2 className="accordion-header" id={`heading${element.idx}`}>
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${element.idx}`} aria-expanded="false" aria-controls={`collapse${element.idx}`}>
                    {element.ques}
                  </button>
                </h2>
                <div id={`collapse${element.idx}`} className="accordion-collapse collapse" aria-labelledby={`heading${element.idx}`} data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    {element.ans}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      </div>
    </>
  )
}

export default Faq