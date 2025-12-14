import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Leistungen",
    description: "Unser Behandlungsspektrum: Prophylaxe, Parodontologie, Zahnersatz und Ästhetik.",
};

export default function ServicesPage() {
    const services = [
        {
            id: "prophylaxe",
            title: "Prophylaxe",
            content: "Vorsorge statt Bohren – Ihre Zähne ein Leben lang erhalten. Unsere professionelle Zahnreinigung entfernt Zahnbeläge und Zahnstein gründlich, auch an Stellen, die Sie zu Hause schwer erreichen.",
        },
        {
            id: "parodontologie",
            title: "Parodontologie",
            content: "Zahnfleischgesundheit – das Fundament für festen Halt. Wir behandeln Zahnfleischentzündungen schonend und nachhaltig, um Ihren Zahnhalteapparat zu schützen.",
        },
        {
            id: "zahnersatz",
            title: "Zahnersatz",
            content: "Fester Biss und Ästhetik – wir beraten Sie zu Kronen und Brücken. Ob festsitzender oder herausnehmbarer Zahnersatz, wir finden die optimale Lösung für Ihre Situation.",
        },
        {
            id: "aesthetik",
            title: "Ästhetik",
            content: "Ihr schönstes Lächeln – schonende Aufhellung und Korrekturen. Mit Bleaching, Veneers oder unsichtbaren Korrekturen sorgen wir für ein strahlendes Lächeln.",
        },
        // Add more from generic dentist services if needed, but strictly PRD for now.
    ];

    return (
        <div className="container px-4 md:px-6 mx-auto py-16 md:py-24">
            <div className="max-w-3xl mx-auto space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-serif font-bold tracking-tight text-primary">
                        Unsere Leistungen
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Moderne Zahnmedizin für Ihre Gesundheit.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {services.map((service) => (
                        <AccordionItem key={service.id} value={service.id}>
                            <AccordionTrigger className="text-xl font-medium hover:text-primary text-left">
                                {service.title}
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground space-y-4">
                                <p>{service.content}</p>
                                <Button asChild size="sm" variant="secondary">
                                    <Link href="/kontakt">Beratungstermin vereinbaren</Link>
                                </Button>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="bg-primary/5 rounded-2xl p-8 text-center mt-12">
                    <h3 className="text-xl font-bold text-primary mb-2">Haben Sie Fragen?</h3>
                    <p className="text-muted-foreground mb-6">Wir beraten Sie gerne persönlich zu unseren Leistungen.</p>
                    <Button asChild size="lg">
                        <Link href="/kontakt">Kontakt aufnehmen</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
