import ContactForm from "@/components/contact/ContactForm";
import { Phone, MapPin, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontakt & Anfahrt",
    description: "Vereinbaren Sie Ihren Termin bei Zahnarzt Ralf Krekeler in Wetter (Ruhr).",
};

export default function ContactPage() {
    return (
        <div className="container px-4 md:px-6 mx-auto py-16 md:py-24">
            <h1 className="text-4xl font-serif font-bold tracking-tight text-primary text-center mb-12">
                Kontakt & Anfahrt
            </h1>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Left Column: Info & Map */}
                <div className="space-y-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-2">
                                <MapPin className="w-6 h-6" />
                                Anschrift
                            </h2>
                            <address className="not-italic text-lg text-muted-foreground leading-relaxed pl-8">
                                <span className="font-semibold text-foreground block mb-1">Praxis Ralf Krekeler Zahnarzt</span>
                                Gustav-Vorsteher-Straße 2<br />
                                58300 Wetter (Ruhr)
                            </address>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-2">
                                <Phone className="w-6 h-6" />
                                Kontakt
                            </h2>
                            <div className="pl-8 space-y-3 text-lg text-muted-foreground">
                                <p className="flex items-center gap-3">
                                    <span className="font-medium text-foreground w-16">Tel:</span>
                                    <a href="tel:+4923355293" className="hover:text-primary transition-colors">
                                        0 23 35 / 52 93
                                    </a>
                                </p>
                                <p className="flex items-center gap-3">
                                    <span className="font-medium text-foreground w-16">Fax:</span>
                                    <span>0 23 35 / 15 18</span>
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-2">
                                <Clock className="w-6 h-6" />
                                Sprechzeiten
                            </h2>
                            <div className="pl-8 grid grid-cols-[100px_1fr] gap-y-2 text-lg text-muted-foreground">
                                <span className="font-medium text-foreground">Montag</span>
                                <span>08:00 – 12:00, 15:00 – 18:00 Uhr</span>

                                <span className="font-medium text-foreground">Dienstag</span>
                                <span>08:00 – 12:00, 15:00 – 18:00 Uhr</span>

                                <span className="font-medium text-foreground">Mittwoch</span>
                                <span>08:00 – 12:00 Uhr</span>

                                <span className="font-medium text-foreground">Donnerstag</span>
                                <span>08:00 – 12:00, 15:00 – 18:00 Uhr</span>

                                <span className="font-medium text-foreground">Freitag</span>
                                <span>08:00 – 12:00 Uhr</span>
                            </div>
                            <p className="pl-8 mt-4 text-sm text-muted-foreground italic">
                                Sowie nach Vereinbarung.
                            </p>
                            <p className="pl-8 mt-2 text-base font-medium text-primary bg-primary/5 inline-block px-3 py-1 rounded-md border border-primary/10">
                                Abrechnungsart: Kasse (sowie Privat und Selbstzahler)
                            </p>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="aspect-video bg-muted rounded-xl border border-border flex items-center justify-center text-muted-foreground">
                        <span>Google Maps Placeholder<br />(DSGVO 2-Klick Lösung hier)</span>
                    </div>
                </div>

                {/* Right Column: API Form */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-primary">Terminanfrage</h2>
                    <p className="text-muted-foreground">
                        Füllen Sie das Formular aus, wir rufen Sie zurück.
                        Schmerzen? Bitte rufen Sie direkt an!
                    </p>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
