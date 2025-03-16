import { Button } from "@/components/ui/button"
import { Mail, Instagram, Facebook, Twitter } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 flex flex-col items-center justify-center md:px-20 px-5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">Contactez-Nous</h2>
            <div className="w-20 h-1 bg-purple-600"></div>
            <p className="text-lg text-muted-foreground">
              Nous serions ravis d&apos;avoir de vos nouvelles. Que vous ayez des questions sur nos collections, des
              commandes personnalisées ou des demandes de vente en gros, notre équipe est là pour vous aider.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-purple-600" />
                <span>info@beatricedesigns.com</span>
              </div>
              <div className="flex items-center">
                <Instagram className="h-5 w-5 mr-3 text-purple-600" />
                <span>@beatricedesigns</span>
              </div>
              <div className="flex items-center">
                <Facebook className="h-5 w-5 mr-3 text-purple-600" />
                <span>Beatrice Designs Officiel</span>
              </div>
              <div className="flex items-center">
                <Twitter className="h-5 w-5 mr-3 text-purple-600" />
                <span>@beatricedesigns</span>
              </div>
            </div>
          </div>
          <div className="bg-purple-50 p-8 rounded-lg">
            <h3 className="font-serif text-2xl font-bold mb-6">Abonnez-vous à Notre Newsletter</h3>
            <p className="mb-6 text-muted-foreground">
              Restez informé de nos dernières collections, événements et offres exclusives.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Adresse Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                />
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">S&apos;abonner</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

