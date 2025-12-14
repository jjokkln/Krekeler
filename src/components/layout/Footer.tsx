import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground py-12 border-t border-border mt-auto">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

                {/* Contact Info */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-serif text-lg font-bold text-primary">Zahnarztpraxis Ralf Krekeler</h3>
                    <address className="not-italic text-muted-foreground space-y-2 text-sm">
                        <p className="font-medium text-foreground text-base">Praxis Ralf Krekeler Zahnarzt</p>
                        <p>Gustav-Vorsteher-Straße 2</p>
                        <p>58300 Wetter (Ruhr)</p>
                        <p className="mt-4 flex items-center gap-2">
                            <span className="inline-block w-4 h-4 bg-primary/10 rounded-full" />
                            Tel: 0 23 35 / 52 93
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="inline-block w-4 h-4 bg-primary/10 rounded-full" />
                            Fax: 0 23 35 / 15 18
                        </p>
                    </address>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-serif text-lg font-bold text-primary">Quick Links</h3>
                    <nav className="flex flex-col gap-2 text-muted-foreground">
                        <Link href="/leistungen" className="hover:text-primary transition-colors">Leistungen</Link>
                        <Link href="/ueber-uns" className="hover:text-primary transition-colors">Über uns</Link>
                        <Link href="/kontakt" className="hover:text-primary transition-colors">Kontakt & Anfahrt</Link>
                    </nav>
                </div>

                {/* Legal */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-serif text-lg font-bold text-primary">Rechtliches</h3>
                    <nav className="flex flex-col gap-2 text-muted-foreground">
                        <Link href="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
                        <Link href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
                    </nav>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground">
                © {new Date().getFullYear()} Zahnarztpraxis Ralf Krekeler. Alle Rechte vorbehalten.
            </div>
        </footer>
    );
}
