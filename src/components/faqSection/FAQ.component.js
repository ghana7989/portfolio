import React from 'react'
import { StyledFaq } from "./FAQ.styles"

const FAQSection = () => {
  return (
    <StyledFaq className="faq">
      <h2>Any Questions <span>FAQ</span></h2>
      <div className="question">
        <h4>How do I start!?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, ratione!</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, ratione!</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, ratione!</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What Products do you offer.</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, ratione!</p>
        </div>
        <div className="faq-line"></div>
      </div>
    </StyledFaq>
  )
}

export default FAQSection
