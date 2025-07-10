'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

interface FooterProps {
    locale?: string
  }
  
  export default function Footer({ locale = 'pt' }: FooterProps) {
    const openGoogleMaps = () => {
      const address = encodeURIComponent('Coffee Cabana, R. Q.ta Dona Joana Forjaz, 9700-559, Portugal')
      window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank')
    }

    const content = {
      pt: {
        visit: "Visite-nos",
        hours: "Horários",
        stayConnected: "Mantenha-se Conectado",
        newsletter: "Atualizações frescas da quinta",
        emailPlaceholder: "Seu email",
        subscribe: "Subscrever",
        rights: "Todos os direitos reservados",
        privacy: "Política de Privacidade",
        terms: "Termos de Uso",
        weekdayHours: "Segunda-Quinta: 8:00 - 17:00",
        weekendHours: "Sexta-Domingo: 8:00 - 19:00",
      },
      en: {
        visit: "Visit Us",
        hours: "Hours",
        stayConnected: "Stay Connected",
        newsletter: "Fresh farm updates",
        emailPlaceholder: "Your email",
        subscribe: "Subscribe",
        rights: "All rights reserved",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        weekdayHours: "Monday - Thursday: 8:00 - 17:00",
        weekendHours: "Friday - Sunday: 8:00 - 19:00",
      }
    }
  
    const t = content[locale as keyof typeof content] || content.pt
  
    return (
      <footer className="bg-black text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8">
            
            {/* Stay Connected */}
            <div className="lg:w-auto">
              <h3 className="text-white font-semibold text-lg mb-4 underline">
                {t.stayConnected}
              </h3>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/coffee_cabana_official/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-200" aria-label="Instagram">
                  <FontAwesomeIcon 
                    icon={faInstagram} 
                    size="lg"
                    className="text-white" 
                  />
                </a>
                <a href="https://www.facebook.com/p/Coffee-Cabana-100076131101706/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-200" aria-label="Facebook">
                  <FontAwesomeIcon 
                    icon={faFacebookF} 
                    size="lg"
                    className="text-white" 
                  />
                </a>
                <a href="https://wa.me/351919116145" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-200" aria-label="WhatsApp">
                  <FontAwesomeIcon 
                    icon={faWhatsapp} 
                    size="lg"
                    className="text-white" 
                  />
                </a>
                <a href="mailto:bananaecocamp@gmail.com" className="hover:scale-110 transition-all duration-200" aria-label="Email">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-white" />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="lg:w-auto">
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center underline">
                {t.hours}
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>{t.weekdayHours}</p>
                <p>{t.weekendHours}</p>
              </div>
            </div>

            {/* Visit Us */}
            <div className="lg:w-auto">
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center underline">
                {t.visit}
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <button 
                  onClick={openGoogleMaps}
                  className="text-left hover:text-white transition-colors cursor-pointer underline hover:no-underline text-gray-300"
                >
                  <p>Coffee Cabana</p>
                  <p>R. Q.ta Dona Joana Forjaz</p>
                  <p>9700-559, São Mateus da Calheta, Terceira</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }