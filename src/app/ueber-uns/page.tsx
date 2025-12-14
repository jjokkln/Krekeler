import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Über uns",
    description: "Lernen Sie Zahnarzt Ralf Krekeler und sein Team kennen.",
};

export default function AboutPage() {
    return (
        <div className="container px-4 md:px-6 mx-auto py-16 md:py-24">
            <div className="space-y-16">
                {/* Doctor Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 space-y-6">
                        <h1 className="text-4xl font-serif font-bold tracking-tight text-primary">
                            Ralf Krekeler
                        </h1>
                        <h2 className="text-xl font-medium text-muted-foreground">
                            Ihr Zahnarzt in der Nachbarschaft
                        </h2>
                        <div className="prose text-muted-foreground leading-relaxed">
                            <p>
                                Als Zahnarzt mit tiefer Verbundenheit zu Wetter (Ruhr) ist es mir ein Anliegen,
                                Ihnen moderne Medizin mit einem persönlichen Bezug zu bieten.
                            </p>
                            <p>
                                In unserer Praxis steht der Mensch im Mittelpunkt. Wir nehmen uns Zeit, hören zu
                                und entwickeln gemeinsam mit Ihnen die beste Lösung für Ihre Zahngesundheit.
                                Keine Massenabfertigung, sondern Vertrauen und Kontinuität.
                            </p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center">
                        {/* Placeholder Image */}
                        <div className="relative w-full aspect-[3/4] max-w-sm rounded-xl overflow-hidden border border-border shadow-xl">
                            <Image
                                src="/Ralf.png"
                                alt="Ralf Krekeler"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 400px"
                            />
                        </div>
                    </div>
                </div>

                {/* Team/Practice Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center">
                        {/* Placeholder Image */}
                        <div className="relative w-full aspect-video rounded-xl bg-muted border border-border flex items-center justify-center text-center p-4">
                            <span className="text-muted-foreground">Foto von Team / Praxisräumen</span>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-4xl font-serif font-bold text-primary">
                            Ralf Krekeler <span className="block text-2xl text-muted-foreground font-light mt-2">Selbstständiger Zahnarzt</span>
                        </h2>

                        <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                            <p className="text-xl font-medium text-foreground italic">
                                Tätigkeitsschwerpunkt Endodontologie
                            </p>
                        </div>

                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Als erfahrener Zahnarzt in Wetter (Ruhr) stehe ich für eine moderne Zahnmedizin, die den Menschen in den Mittelpunkt stellt.
                            Mit meinem Tätigkeitsschwerpunkt in der Endodontologie (Wurzelbehandlung) habe ich mich darauf spezialisiert, Ihre natürlichen Zähne langfristig zu erhalten.
                        </p>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-lg font-bold uppercase tracking-widest text-primary/80">Qualifikationen & Engagement</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground leading-snug list-disc pl-5">
                                <li>Vorstandsmitglied der Zahnärztekammer Westfalen-Lippe (ZÄKWL)</li>
                                <li>Vorsitzender, Hygiene- und Gutachterbeauftragter der Bezirksstelle Hagen-Ennepe-Ruhr-Kreis (ZÄKWL/KZVWL)</li>
                                <li>Zahnersatz-Gutachter der KZVWL</li>
                                <li>Moderator ZE-Gutachter-QZ der KZVWL/ZÄKWL</li>
                                <li>Mitglied des Qualitätsgremiums der KZVWL</li>
                                <li>Mitglied des Patientenberaterteams der ZÄKWL u. KZVWL</li>
                                <li>Delegierter der Vertreterversammlung der KZVWL</li>
                                <li>Delegierter der Bundesversammlung der Bundeszahnärztekammer (BZÄK)</li>
                                <li>Aktivmitglied im RC Wetter-Herdecke Ruhrtal</li>
                                <li>Aktivmitglied im NBSV Neuss</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
