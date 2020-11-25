import React from 'react'
import AboutSection from "../components/aboutSection/AboutSection.component"
import FAQSection from "../components/faqSection/FAQ.component"
import ServicesSection from "../components/servicesSection/Services.component"
import { motion } from "framer-motion";
import { pageAnimation } from "../Animations";


const AboutUsPage = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FAQSection />
    </motion.div>
  )
}

export default AboutUsPage
