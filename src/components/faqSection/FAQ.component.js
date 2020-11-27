import { AnimateSharedLayout } from 'framer-motion'
import React from 'react'
import Toggle from '../Toggle'
import { StyledFaq } from "./FAQ.styles"

const FAQSection = () => {
  return (
    <StyledFaq className="faq">
      <h2>Any Questions <span>FAQ</span></h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start!?">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, ratione!</p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, ratione!</p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, ratione!</p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer.">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, ratione!</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  )
}

export default FAQSection
