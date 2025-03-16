import Image from "next/image"
import { Button } from "@/components/ui/button"

const products = [
  {
    title: "Robe Ankara Élégance",
    description: "Robe mi-longue avec imprimés vibrants et coupe moderne",
    price: 129.99,
    oldPrice: 159.99,
    isNew: true,
    image: "/prod1.png",
  },
  {
    title: "Chemise Kente Homme",
    description: "Chemise en coton avec motifs Kente traditionnels",
    price: 89.99,
    oldPrice: null,
    isNew: false,
    image: "/prod2.png",
  },
  {
    title: "Jupe Adire Fusion",
    description: "Jupe longue avec motifs Adire contemporains",
    price: 79.99,
    oldPrice: 99.99,
    isNew: true,
    image: "/prod5.png",
  },
  {
    title: "Veste Bogolan",
    description: "Veste légère avec motifs Bogolan du Mali",
    price: 149.99,
    oldPrice: null,
    isNew: false,
    image: "/prod4.png",
  },
  {
    title: "Ensemble Deux Pièces",
    description: "Top et pantalon assortis en tissu Ankara",
    price: 169.99,
    oldPrice: 199.99,
    isNew: true,
    image: "/prod6.png",
  },
  {
    title: "Écharpe Kente Luxe",
    description: "Écharpe tissée à la main avec motifs Kente royaux",
    price: 59.99,
    oldPrice: null,
    isNew: false,
    image: "/prod3.png",
  },
]

export default function Heritage() {
  return (
    <section id="heritage" className="py-20 flex flex-col items-center justify-center md:px-20 px-5">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Nos Produits</h2>
          <div className="w-20 h-1 bg-purple-600 mb-6"></div>
          <p className="max-w-2xl text-muted-foreground text-lg">
            Découvrez notre collection exclusive de vêtements inspirés par les traditions africaines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-[300px]">
                <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
                {product.isNew && (
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Nouveau
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-3">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold">{product.price} €</span>
                  {product.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through">{product.oldPrice} €</span>
                  )}
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

