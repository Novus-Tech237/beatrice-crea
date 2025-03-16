import Image from "next/image"

const testimonials = [
  {
    name: "Amara Johnson",
    location: "New York, États-Unis",
    quote:
      "La qualité et le savoir-faire de ma robe Beatrice Designs sont exceptionnels. Je reçois des compliments chaque fois que je la porte !",
    avatar: "/tm1.jpg",
  },
  {
    name: "Chioma Okafor",
    location: "Lagos, Nigeria",
    quote:
      "En tant que personne qui valorise la mode africaine authentique, j'apprécie la façon dont Beatrice Designs honore la tradition tout en créant des pièces modernes que je peux porter n'importe où.",
    avatar: "/tm2.jpg",
  },
  {
    name: "Maya Williams",
    location: "Londres, Royaume-Uni",
    quote:
      "L'attention aux détails et l'histoire derrière chaque vêtement rendent Beatrice Designs vraiment spécial. Pas seulement de la mode, mais de l'art portable.",
    avatar: "/tm4.jpg",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 flex flex-col items-center justify-center md:px-20 px-5 bg-purple-900 text-white">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <div className="w-20 h-1 bg-white mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-purple-800 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-purple-200">{testimonial.location}</p>
                </div>
              </div>
              <p className="italic text-purple-100">&quot;{testimonial.quote}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

