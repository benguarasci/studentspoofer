import React from 'react';
import './modal.css';
import { AnimatePresence, motion } from "framer-motion"

const Filters = ({ open,onClose }) => {
        if(!open) return null
    return (
    <AnimatePresence>
        <div onClick={onClose} className="overlay">
            <motion.div 
                initial={{
                    y: "-50%",
                    x: "-50%",
                    opacity: 0,
                    scale: 0.9,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        ease: "easeOut",
                        duration: 0.15,
                    },
                }}
                exit={{
                    opacity: 0,
                    scale: 0.9,
                    transition: {
                        ease: "easeIn",
                        duration: 0.05,
                    },
                }} 
                className='modalContainer'
                >
                {/* <div className="modalContainer"> */}
                    <div className="modalRight">
                    </div>
                    <div className="modalContent">
                        <h1>Filters</h1>
            
                    </div>    
                {/* </div> */}
            </motion.div>
        </div>
    </AnimatePresence>
    )
}

export default Filters