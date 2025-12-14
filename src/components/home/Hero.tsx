import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent -z-10" />

            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="flex flex-col justify-center space-y-8 relative z-10">
                        <div className="space-y-6">
                            <h1 className="text-5xl font-serif font-extrabold tracking-tight text-primary sm:text-6xl xl:text-7xl/none drop-shadow-sm">
                                Zahnarzt Ralf Krekeler. <span className="text-foreground/80 block text-3xl sm:text-4xl mt-2 font-light">Tätigkeitsschwerpunkt Endodontologie.</span>
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed text-lg font-light">
                                Moderne Zahnmedizin mit persönlichem Bezug in Wetter (Ruhr).
                                Vertrauen Sie auf Kompetenz und Erfahrung.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 py-7 h-auto shadow-lg shadow-primary/20 rounded-full transition-all hover:scale-105">
                                <Link href="/kontakt">
                                    Termin vereinbaren
                                </Link>
                            </Button>
                            <Button asChild variant="ghost" size="lg" className="text-primary hover:bg-primary/5 text-lg px-8 py-7 h-auto font-medium rounded-full border border-primary/10 bg-white/50 backdrop-blur-sm">
                                <Link href="/leistungen">
                                    Unsere Leistungen
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full -z-10 transform scale-90" />
                        {/* Hero Image Container with Glass effect ring */}
                        <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-w-sm lg:max-w-md mx-auto transform hover:scale-[1.01] transition-transform duration-700 ease-out">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-[2rem] -rotate-3 blur-2xl opacity-60"></div>
                            <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/40 shadow-2xl bg-white/10 backdrop-blur-sm">
                                <Image
                                    src="/Ralf.png"
                                    alt="Zahnarzt Ralf Krekeler"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {/* Optional: Overlay gradient for text readability if needed, or subtle shine */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-60"></div>
                            </div>
                        </div>        </div>
                </div>
            </div>
        </section >
    );
}
