import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-card/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-3">
            <Image
              src="/images/fusion-east-logo.png"
              alt="Fusion East"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-serif text-lg font-bold text-warm-white">
              Fusion East
            </span>
          </Link>

          <p className="max-w-md text-sm text-warm-white/40">
            Caribbean &amp; Soul Food Restaurant &bull; 1179 Elton Street, Brooklyn, NY 11239
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-warm-white/50">
            <Link href="#restaurant" className="transition-colors hover:text-gold">Menu</Link>
            <Link href="#bar" className="transition-colors hover:text-gold">The Bar</Link>
            <Link href="#events" className="transition-colors hover:text-gold">Events</Link>
            <Link href="#catering" className="transition-colors hover:text-gold">Catering</Link>
            <Link href="#about" className="transition-colors hover:text-gold">About</Link>
            <Link href="#contact" className="transition-colors hover:text-gold">Contact</Link>
          </div>

          {/* Certifications line */}
          <p className="text-xs text-warm-white/30">
            MBE Certified &bull; Veteran-Owned &bull; DOE Vendor &bull; Minority Owned Business
          </p>

          {/* Copyright */}
          <p className="text-xs text-warm-white/20">
            &copy; {new Date().getFullYear()} Fusion East. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
