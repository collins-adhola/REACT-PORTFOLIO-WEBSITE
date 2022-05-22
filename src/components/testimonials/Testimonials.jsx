import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";


const data = [
  {
    avatar: AVTR1,
    named: "Tina Snow",
    review:
      "Collins is the best guy ever and he surely going places as a full stacj JavaScript developer. What this space girls!",
  },
  {
    avatar: AVTR2,
    named: "Amiina Shale",
    review:
      "Collins is the best guy ever and he surely going places as a full stacj JavaScript developer. What this space girls!",
  },

  {
    avatar: AVTR3,
    named: "Jenifer Nakato",
    review:
      "Collins is the best guy ever and he surely going places as a full stacj JavaScript developer. What this space girls!",
  },

  {
    avatar: AVTR4,
    named: "Peter Mana",
    review:
      "Collins is the best guy ever and he surely going places as a full stacj JavaScript developer. What this space girls!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className="testimonials">
          <div className="client__avatar">
            <img src={avatar} alt=" Avatar one" />
          </div>
          <h5 client__name>{name}</h5>
          <small className="client__review">
            {review}
          </small>
        </article>
            )
          })
        }
        

       

       
      </div>
    </section>
  );
}

export default Testimonials