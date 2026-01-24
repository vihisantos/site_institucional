import { motion, type Transition } from 'framer-motion';
import type { ReactNode } from 'react';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
        scale: 0.98
    },
    in: {
        opacity: 1,
        y: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        y: -20,
        scale: 1.02
    }
};

const pageTransition: Transition = {
    type: "tween",
    ease: "circOut",
    duration: 0.4
};

export const PageTransition = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full flex-1"
        >
            {children}
        </motion.div>
    );
};
