import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>HTML</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>CSS</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>JavaScript</h4>
              </div>

              <small className="text-light">Intermediate</small>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Bootstrap</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>React</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Figma</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Material UI</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Flex</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>

        {/*=========== FRONTEND ENDS ====================================== */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Node JS</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Docker</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>API</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>MangoDB</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Django</h4>
              </div>
              <small className="text-light">Basic</small>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Python</h4>
              </div>
              <small className="text-light">Basic</small>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Postgres</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>

            {/* <article className="experience_details">
              <BsFillPatchCheckFill />
              <h4>Flex</h4>
              <small className="text-light">Experienced</small>
            </article> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
