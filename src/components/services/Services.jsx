import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/IX design</h3>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem, ipsum dor sit amet consecteur elit</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem, ipsum dor sit amet consecteur elit</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem, ipsum dor sit amet consecteur elit</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem, ipsum dor sit amet consecteur elit</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem, ipsum dor sit amet consecteur elit</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem, ipsum dor sit amet consecteur elit</p>
              </li>
            </ul>
          </div>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web development</h3>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem, ipsum dor sit amet consecteur elit</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem, ipsum dor sit amet consecteur elit</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem, ipsum dor sit amet consecteur elit</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem, ipsum dor sit amet consecteur elit</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem, ipsum dor sit amet consecteur elit</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem, ipsum dor sit amet consecteur elit</p>
              </li>
            </ul>
          </div>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem, ipsum dor sit amet consecteur elit</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem, ipsum dor sit amet consecteur elit</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem, ipsum dor sit amet consecteur elit</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem, ipsum dor sit amet consecteur elit</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem, ipsum dor sit amet consecteur elit</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem, ipsum dor sit amet consecteur elit</p>
              </li>
            </ul>
            {/* END OF CONTNET CREATION */}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
