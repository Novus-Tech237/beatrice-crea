"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const collections = [
  {
    title: "Élégance Ankara",
    description: "Imprimés vibrants et silhouettes modernes pour la femme contemporaine",
    image: "/1.jpg",
  },
  {
    title: "Collection Kente",
    description: "Vêtements luxueux inspirés du tissu royal des Ashanti",
    image: "/8.png",
  },
  {
    title: "Fusion Adire",
    description: "Techniques traditionnelles de teinture réimaginées pour la mode d'aujourd'hui",
    image: "/9.jpg",
  },
]

export default function Collections() {
  return (
    <section id="collections" className="py-20 flex flex-col items-center justify-center md:px-20 px-5">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Collections Phares
          </h2>
          <div className="w-20 h-1 bg-pink-600 mb-6"></div>
          <p className="max-w-2xl text-muted-foreground text-lg">
            Découvrez nos créations artisanales qui mêlent les textiles traditionnels africains aux silhouettes
            contemporaines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <div className="relative h-[400px] w-full overflow-hidden">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="font-serif text-xl font-bold mb-2">{collection.title}</h3>
                <p className="text-white/80 mb-4">{collection.description}</p>
                <Button variant="outline" className="w-fit border-white text-black hover:text-white hover:bg-purple-500/20 ">
                  Voir la Collection
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-20 w-full max-w-3xl"
          >
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <div className="flex items-start">
                <div className="relative h-16 w-16 mr-6 flex-shrink-0 rounded-full overflow-hidden border-2 border-purple-400">
                  <Image
                    src="/profile.jpg"
                    alt="Fogue Beatrice"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <Quote className="h-5 w-5 text-purple-400 mr-2 rotate-180" />
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-purple-400 to-transparent"></div>
                  </div>
                  <p className="text-pink-100/90 text-lg italic font-serif leading-relaxed">
                    Notre mode n&apos;est pas seulement un vêtement, c&apos;est un héritage vivant. Chaque motif, chaque couleur
                    raconte l&apos;histoire de nos ancêtres et célèbre la beauté de notre culture africaine dans le monde
                    moderne.
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-purple-400 mr-3"></div>
                    <div>
                      <p className="text-purple-950 font-semibold">Fogue Beatrice</p>
                      <p className="text-pink-600/60 text-sm">Fondatrice & PDG</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
    </section>
  )
}

