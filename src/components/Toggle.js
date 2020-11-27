import React, { useState } from 'react';
import { motion} from "framer-motion";

const Toggle = ({ children, title }) => {

  const [toggle, setToggle] = useState(false)

  return (
    <motion.div layout className="question" onClick={() => setToggle(a => !a)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : null}
      <div className="faq-line"></div>
    </motion.div>
  )
}

export default Toggle
