import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-20 flex flex-col items-center justify-center md:px-20 px-5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/6.jpg"
              alt="Beatrice, la fondatrice"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">L&apos;Histoire de Beatrice Designs</h2>
            <div className="w-20 h-1 bg-purple-600"></div>
            <p className="text-lg text-muted-foreground">
              Fondée par Beatrice FOGUE en 2021, notre marque est née d&apos;une passion pour présenter au monde le riche
              patrimoine textile de l&apos;Afrique. Ce qui a commencé comme une petite collection de vêtements faits à la
              main est devenu une marque internationalement reconnue célébrant l&apos;artisanat africain.
            </p>
            <p className="text-lg text-muted-foreground">
              Chaque pièce raconte une histoire - de tradition, de culture, des artisans qualifiés qui donnent vie à nos
              créations. Nous travaillons directement avec des tisserands et des artistes textiles à travers le
              continent pour créer des pièces authentiques qui honorent leur patrimoine.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 mt-4">En Savoir Plus Sur Nous</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

