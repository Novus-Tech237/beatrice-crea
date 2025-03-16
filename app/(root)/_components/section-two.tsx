"use client"

import { motion } from "framer-motion";
import InfoCard from "@/components/info-card";
import Image from "next/image";
import { Info, Search, StoreIcon, Truck } from "lucide-react";
import { Models } from "./models";

const SectionTwo = () => {
    return (
        <div className="conatainer flex md:flex-row flex-col justify-around items-center">
            <div className="container md:px-32 px-10 -py-10">
                <div className="mb-[60px] pt-[5rem]">
                    <span className="subheading">Nos Collection</span>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mt-10"
                >
                    <h1 className="text-4xl font-bold md:w-[600px] text-pink-800">Découvrez les caractéristiques de Beatrice Designs</h1>
                    <p className="mt-8 text-lg md:w-[700px]">
                    Nos créations se distinguent par leur unicité et leur originalité. Chaque pièce est conçue pour refléter l&apos;authenticité et la beauté de la culture afro.
                    </p>
                </motion.div>
                <Models/>
                
            </div>
        </div>
    );
}

export default SectionTwo;