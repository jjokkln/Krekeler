import Link from "next/link";
import { ShieldCheck, HeartPulse, Smile, Sparkles } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function ServicesTeaser() {
    const services = [
        {
            title: "Prophylaxe",
            description: "Vorsorge statt Bohren – Ihre Zähne ein Leben lang erhalten.",
            icon: ShieldCheck,
            href: "/leistungen#prophylaxe",
        },
        {
            title: "Parodontologie",
            description: "Zahnfleischgesundheit – das Fundament für festen Halt.",
            icon: HeartPulse,
            href: "/leistungen#parodontologie",
        },
        {
            title: "Zahnersatz",
            description: "Fester Biss und Ästhetik – wir beraten Sie zu Kronen und Brücken.",
            icon: Sparkles, // Placeholder icon
            href: "/leistungen#zahnersatz",
        },
        {
            title: "Ästhetik",
            description: "Ihr schönstes Lächeln – schonende Aufhellung und Korrekturen.",
            icon: Smile,
            href: "/leistungen#aesthetik",
        },
    ];

    return (
        <section className="py-24 bg-transparent relative">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-5xl">
                        Unser Behandlungsspektrum
                    </h2>
                    <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl font-light">
                        Wir bieten Ihnen moderne Zahnmedizin in familiärer Atmosphäre.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <Card key={service.title} className="bg-white/60 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden group">
                            <CardHeader className="text-center items-center pb-4 pt-8">
                                <div className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-2xl mb-6 text-primary shadow-inner group-hover:scale-110 transition-transform">
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <CardTitle className="text-2xl font-serif font-bold text-foreground">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-center px-6 pb-8">
                                <CardDescription className="text-base mb-6 leading-relaxed">
                                    {service.description}
                                </CardDescription>
                                <Link
                                    href={service.href}
                                    className="text-primary font-semibold hover:text-accent-foreground transition-colors inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                                >
                                    Mehr erfahren <span className="text-lg">→</span>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/leistungen"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        Alle Leistungen ansehen
                    </Link>
                </div>
            </div>
        </section>
    );
}
