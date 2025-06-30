'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

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
        terms: "Termos de Uso",
        openingHours: "Segunda, Quarta a Domingo: 7:00 - 18:00",
        closedDay: "Terça-feira: Fechado"
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
        terms: "Terms of Use",
        openingHours: "Monday, Wednesday to Sunday: 7:00 - 18:00",
        closedDay: "Tuesday: Closed"
      },
      de: {
        visit: "Besuchen Sie uns",
        hours: "Öffnungszeiten",
        stayConnected: "Bleiben Sie verbunden",
        newsletter: "Frische Updates vom Hof",
        emailPlaceholder: "Ihre E-Mail",
        subscribe: "Abonnieren",
        quickLinks: "Schnelllinks",
        links: {
          story: "Unsere Geschichte",
          menu: "Menü",
          tours: "Hofführungen",
          contact: "Kontakt"
        },
        rights: "Alle Rechte vorbehalten",
        privacy: "Datenschutzrichtlinie",
        terms: "Nutzungsbedingungen",
        openingHours: "Montag, Mittwoch bis Sonntag: 7:00 - 18:00",
        closedDay: "Dienstag: Geschlossen"
      },
      es: {
        visit: "Visítanos",
        hours: "Horarios",
        stayConnected: "Mantente Conectado",
        newsletter: "Actualizaciones frescas de la granja",
        emailPlaceholder: "Tu email",
        subscribe: "Suscribirse",
        quickLinks: "Enlaces Rápidos",
        links: {
          story: "Nuestra Historia",
          menu: "Menú",
          tours: "Visitas a la Granja",
          contact: "Contacto"
        },
        rights: "Todos los derechos reservados",
        privacy: "Política de Privacidad",
        terms: "Términos de Uso",
        openingHours: "Lunes, Miércoles a Domingo: 7:00 - 18:00",
        closedDay: "Martes: Cerrado"
      },
      fr: {
        visit: "Visitez-nous",
        hours: "Horaires",
        stayConnected: "Restez Connecté",
        newsletter: "Actualités fraîches de la ferme",
        emailPlaceholder: "Votre email",
        subscribe: "S'abonner",
        quickLinks: "Liens Rapides",
        links: {
          story: "Notre Histoire",
          menu: "Menu",
          tours: "Visites de la Ferme",
          contact: "Contact"
        },
        rights: "Tous droits réservés",
        privacy: "Politique de Confidentialité",
        terms: "Conditions d'Utilisation",
        openingHours: "Lundi, Mercredi à Dimanche: 7:00 - 18:00",
        closedDay: "Mardi: Fermé"
      }
    }
  
    const t = content[locale as keyof typeof content] || content.pt
  
    return (
      <footer className="bg-[#eee9df] text-black">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8">
            
            {/* Visit Us */}
            <div className="lg:w-auto">
              <h3 className="text-gray-600 font-semibold text-lg mb-4 flex items-center underline">
                {t.visit}
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <button 
                  onClick={openGoogleMaps}
                  className="text-left hover:text-warm-tan transition-colors cursor-pointer underline hover:no-underline text-gray-600"
                >
                  <p>Coffee Cabana</p>
                  <p>R. Q.ta Dona Joana Forjaz</p>
                  <p>9700-559, São Mateus da Calheta, Terceira</p>
                </button>
              </div>
            </div>

            {/* Hours */}
            <div className="lg:w-auto">
              <h3 className="text-gray-600 font-semibold text-lg mb-4 flex items-center underline">
                {t.hours}
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>{t.openingHours}</p>
                <p>{t.closedDay}</p>
              </div>
            </div>

            {/* Stay Connected */}
            <div className="lg:w-auto">
              <h3 className="text-gray-600 font-semibold text-lg mb-4 underline">
                {t.stayConnected}
              </h3>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/coffee_cabana_official/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-200" aria-label="Instagram">
                  <FontAwesomeIcon 
                    icon={faInstagram} 
                    size="2x"
                    className="text-[#DD2A7B]" 
                  />
                </a>
                <a href="https://www.facebook.com/p/Coffee-Cabana-100076131101706/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-200" aria-label="Facebook">
                  <FontAwesomeIcon 
                    icon={faFacebook} 
                    size="2x"
                    className="text-[#1877F2]" 
                  />
                </a>
                <a href="https://wa.me/351919116145" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-200" aria-label="WhatsApp">
                  <FontAwesomeIcon 
                    icon={faWhatsapp} 
                    size="2x"
                    className="text-[#25D366]" 
                  />
                </a>
                <a href="mailto:bananaecocamp@gmail.com" className="hover:scale-110 transition-all duration-200" aria-label="Email">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-gray-600" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:w-auto">
              <h3 className="text-gray-600 font-semibold text-lg mb-4 underline">
                {t.quickLinks}
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href={`/${locale}/story`} className="hover:text-black transition-colors">{t.links.story}</a></li>
                <li><a href={`/${locale}/menu`} className="hover:text-black transition-colors">{t.links.menu}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }