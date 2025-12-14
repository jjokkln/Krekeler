import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/leistungen", label: "Leistungen" },
        { href: "/ueber-uns", label: "Über uns" },
        { href: "/kontakt", label: "Kontakt" },
    ];

    return (
        <header className="sticky top-[36px] z-40 w-full bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm transition-all">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex flex-col group">
                    <span className="text-2xl font-serif font-black text-primary leading-none tracking-tight group-hover:opacity-80 transition-opacity">
                        Ralf Krekeler
                    </span>
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest text-[0.65rem]">
                        Zahnarzt in Wetter
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-foreground hover:text-primary font-medium transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-sm">
                        <Link href="/kontakt">Termin vereinbaren</Link>
                    </Button>
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Menu">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col gap-6 mt-10">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Button asChild size="lg" className="mt-4">
                                    <Link href="/kontakt">Termin vereinbaren</Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
