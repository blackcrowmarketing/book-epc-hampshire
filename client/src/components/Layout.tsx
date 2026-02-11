import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:07966196459" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">07966 196459</span>
            </a>
            <a href="mailto:hilary@book-epc-hampshire.co.uk" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">hilary@book-epc-hampshire.co.uk</span>
            </a>
          </div>
          <div className="hidden md:block">
            Qualified Energy Performance Certificate Provider in Hampshire
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container py-4 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 cursor-pointer">
            <div className="bg-chart-1 p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary-foreground">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-2xl md:text-3xl leading-none text-primary">Book EPC</span>
              <span className="text-sm md:text-base text-muted-foreground tracking-wider font-semibold">HAMPSHIRE</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary font-medium cursor-pointer transition-colors scroll-smooth">Home</a>
            <a href="#pricing" className="text-foreground hover:text-primary font-medium cursor-pointer transition-colors scroll-smooth">Pricing</a>
            <a href="#about" className="text-foreground hover:text-primary font-medium cursor-pointer transition-colors scroll-smooth">About</a>
            <a href="#contact" className="text-foreground hover:text-primary font-medium cursor-pointer transition-colors scroll-smooth">Contact</a>
            <Button className="bg-chart-1 hover:bg-chart-4 text-primary-foreground font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
              REQUEST CALLBACK
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-foreground" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border absolute w-full shadow-lg animate-in slide-in-from-top-5">
            <div className="container py-4 flex flex-col gap-4">
              <a href="#home" className="text-foreground hover:text-primary font-medium cursor-pointer p-2 scroll-smooth" onClick={toggleMenu}>Home</a>
              <a href="#pricing" className="text-foreground hover:text-primary font-medium cursor-pointer p-2 scroll-smooth" onClick={toggleMenu}>Pricing</a>
              <a href="#about" className="text-foreground hover:text-primary font-medium cursor-pointer p-2 scroll-smooth" onClick={toggleMenu}>About</a>
              <a href="#contact" className="text-foreground hover:text-primary font-medium cursor-pointer p-2 scroll-smooth" onClick={toggleMenu}>Contact</a>
              <Button className="w-full bg-chart-1 hover:bg-chart-4 text-primary-foreground font-bold" onClick={() => { document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }); toggleMenu(); }}>
                REQUEST CALLBACK
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-12 pb-6">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-chart-1 p-1.5 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary-foreground">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <span className="font-heading font-bold text-lg">Book EPC Hampshire</span>
              </div>
              <p className="text-primary-foreground/80 mb-4 max-w-xs">
                Professional Energy Performance Certificates provided by qualified assessor Hilary Webb. Serving Southampton and the wider Hampshire area.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-bold text-lg mb-4 text-chart-1">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-primary-foreground/80 hover:text-white cursor-pointer transition-colors">Home</a></li>
                <li><a href="#pricing" className="text-primary-foreground/80 hover:text-white cursor-pointer transition-colors">Pricing</a></li>
                <li><a href="#about" className="text-primary-foreground/80 hover:text-white cursor-pointer transition-colors">About</a></li>
                <li><a href="#contact" className="text-primary-foreground/80 hover:text-white cursor-pointer transition-colors">Contact Us</a></li>
                <li><a href="/documents/epc-guide.pdf" target="_blank" className="text-primary-foreground/80 hover:text-white cursor-pointer transition-colors">EPC Guide (PDF)</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-bold text-lg mb-4 text-chart-1">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-chart-1 mt-0.5" />
                  <span>07966 196459</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-chart-1 mt-0.5" />
                  <span>hilary@book-epc-hampshire.co.uk</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-chart-1 mt-0.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>Southampton, Hampshire</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Book EPC Hampshire. All rights reserved.</p>
            <p>Designed and Powered by <a href="https://blackcrowmarketing.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Black Crow Marketing Ltd</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
