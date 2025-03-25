"use client"
import { motion } from "framer-motion";
import { ArrowBigDown } from "lucide-react";

const BeatriceHeader = () => {
    return (
        <section>
            <div className="flex items-center justify-center md:h-full h-[30rem] flex-col ">
                <motion.div

                    className="flex flex-col items-center justify-center flex-grow md:w-[1200px]">
                  
                    <motion.h1 initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-8xl text-purple-400 ">
                        Beatrice Designs                    
                    </motion.h1>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="md:mt-4 text-center mt-8"
                    >
                        <span className="text-pink-100/90 text-lg">Découvrez Vêtements Afritudes, où chaque vêtement raconte une histoire. Styles authentiques et modernes inspirés de nos racines.</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default BeatriceHeader;