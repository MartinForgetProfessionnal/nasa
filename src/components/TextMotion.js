import React from 'react'
import { motion } from "framer-motion";

function TextMotion() {
    return (
        <div>
            {/* Construction du texte qui se déplace qui est affiché au centre de la home page */}
            <motion.h1 className='motionClass'
                animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
            >
                And enjoy the ride!
            </motion.h1></div>
    )
}

export default TextMotion