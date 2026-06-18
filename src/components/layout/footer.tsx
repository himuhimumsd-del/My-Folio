import { socialLinks } from "@/constants/socials"
import { siteConfig } from "@/config/site"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-surface border-t border-glass-light py-12 z-base">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-display font-bold text-2xl tracking-tight">
            HS<span className="text-accent-primary">.</span>
          </Link>
          <p className="text-sm text-secondary max-w-xs text-center md:text-left">
            {siteConfig.description}
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <span className="sr-only">{social.name}</span>
              {social.name}
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-6 mt-12 pt-8 border-t border-glass-light flex flex-col md:flex-row justify-between items-center text-xs text-tertiary">
        <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-secondary">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-secondary">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  )
}
