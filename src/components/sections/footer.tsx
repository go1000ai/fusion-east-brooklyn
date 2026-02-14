import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-[3] border-t border-dark-border bg-dark-card/30 py-6 sm:py-6 lg:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-5">
        {/* Logo + address centered */}
        <div className="flex items-center justify-center gap-3">
          <Link href="#hero">
            <Image
              src="/images/fusion-east-logo.png"
              alt="Fusion East"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover"
            />
          </Link>
          <p className="text-sm text-warm-white/40">
            1179 Elton Street, Brooklyn, NY 11239
          </p>
        </div>

        {/* Three columns side by side, items vertical in each */}
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          {/* Column 1: Navigation */}
          <div className="flex flex-col gap-1.5 text-warm-white/50">
            <Link href="#restaurant" className="transition-colors hover:text-gold">Menu</Link>
            <Link href="#bar" className="transition-colors hover:text-gold">The Bar</Link>
            <Link href="#events" className="transition-colors hover:text-gold">Events</Link>
          </div>

          {/* Column 2: More navigation */}
          <div className="flex flex-col gap-1.5 text-warm-white/50">
            <Link href="#catering" className="transition-colors hover:text-gold">Catering</Link>
            <Link href="#about" className="transition-colors hover:text-gold">About</Link>
            <Link href="#contact" className="transition-colors hover:text-gold">Contact</Link>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col gap-1.5 text-warm-white/30">
            <Link href="/careers" className="transition-colors hover:text-gold">Join Our Team</Link>
            <Link href="/terms" className="transition-colors hover:text-warm-white/50">Terms</Link>
            <Link href="/privacy" className="transition-colors hover:text-warm-white/50">Privacy</Link>
          </div>
        </div>

        {/* Copyright centered below */}
        <p className="text-center text-sm text-warm-white/20">
          &copy; {new Date().getFullYear()} Fusion East
        </p>
      </div>
    </footer>
  );
}
