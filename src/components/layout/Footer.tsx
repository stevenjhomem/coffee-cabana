import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

interface FooterProps {
    locale?: string
  }
  
  export default function Footer({ locale = 'pt' }: FooterProps) {
    const content = {
      pt: {
        visit: "Visite-nos",
        hours: "Horário",
        stayConnected: "Mantenha-se Ligado",
        newsletter: "Novidades da quinta",
        emailPlaceholder: "O seu email",
        subscribe: "Subscrever",
        quickLinks: "Links Rápidos",
        links: {
          story: "Nossa História",
          menu: "Menu", 
          tours: "Visitas à Quinta",
          contact: "Contacto"
        },
        rights: "Todos os direitos reservados",
        privacy: "Política de Privacidade",
        terms: "Termos de Uso"
      },
      en: {
        visit: "Visit Us",
        hours: "Hours",
        stayConnected: "Stay Connected", 
        newsletter: "Fresh updates from the farm",
        emailPlaceholder: "Your email",
        subscribe: "Subscribe",
        quickLinks: "Quick Links",
        links: {
          story: "Our Story",
          menu: "Menu",
          tours: "Farm Tours", 
          contact: "Contact"
        },
        rights: "All rights reserved",
        privacy: "Privacy Policy",
        terms: "Terms of Use"
      }
      // Add de, es, fr translations...
    }
  
    const t = content[locale as keyof typeof content] || content.pt
  
    return (
      <footer className="bg-[#eee9df] text-black">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8">
            
            {/* Visit Us */}
            <div className="lg:w-auto">
              <h3 className="text-warm-tan font-semibold text-lg mb-4 flex items-center">
                {t.visit}
              </h3>
              <div className="space-y-2 text-sm">
                <p>Rua da Sé</p>
                <p>Angra do Heroísmo, Terceira</p>
              </div>
            </div>

            {/* Hours */}
            <div className="lg:w-auto">
              <h3 className="text-warm-tan font-semibold text-lg mb-4 flex items-center">
                {t.hours}
              </h3>
              <div className="space-y-2 text-sm">
                <p>Segunda-Domingo: 7:00 - 18:00</p>
              </div>
            </div>

            {/* Stay Connected */}
            <div className="lg:w-auto">
              <h3 className="text-warm-tan font-semibold text-lg mb-4">
                {t.stayConnected}
              </h3>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="hover:scale-110 transition-all duration-200" aria-label="Instagram">
                  <FontAwesomeIcon 
                    icon={faInstagram} 
                    className="h-6 w-6 text-[#DD2A7B]" 
                  />
                </a>
                <a href="#" className="hover:scale-110 transition-all duration-200" aria-label="Facebook">
                  <FontAwesomeIcon 
                    icon={faFacebook} 
                    className="h-6 w-6 text-[#1877F2]" 
                  />
                </a>
                <a href="#" className="hover:scale-110 transition-all duration-200" aria-label="WhatsApp">
                  <FontAwesomeIcon 
                    icon={faWhatsapp} 
                    className="h-6 w-6 text-[#25D366]" 
                  />
                </a>
                <a href="mailto:hello@coffeecabana.pt" className="hover:scale-110 transition-all duration-200" aria-label="Email">
                  <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:w-auto">
              <h3 className="text-warm-tan font-semibold text-lg mb-4">
                {t.quickLinks}
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href={`/${locale}/story`} className="hover:text-black transition-colors">{t.links.story}</a></li>
                <li><a href={`/${locale}/menu`} className="hover:text-black transition-colors">{t.links.menu}</a></li>
                <li><a href={`/${locale}/tours`} className="hover:text-black transition-colors">{t.links.tours}</a></li>
                <li><a href={`/${locale}/contact`} className="hover:text-black transition-colors">{t.links.contact}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }