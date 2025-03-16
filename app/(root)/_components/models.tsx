"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const models = [
  { id: 1, name: "Classic Elegance", image: "/1.jpg" },
  { id: 2, name: "Modern Chic", image: "/2.jpg" },
  { id: 3, name: "Avant-Garde", image: "/4.jpg" },
  { id: 2, name: "Modern Chic", image: "/5.jpg" },
  { id: 3, name: "Avant-Garde", image: "/3.jpg" },
]

export function Models() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {models.map((model) => (
            <motion.div
              key={model.id}
              className="bg-pink-100 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={model.image || "/placeholder.jpg"}
                alt={model.name}
                width={600}
                height={600}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-purple-600">{model.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

