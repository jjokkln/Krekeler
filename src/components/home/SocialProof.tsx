import { Star } from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";

export default function SocialProof() {
    const reviews = [
        {
            name: "Patient auf jameda",
            text: "Dr. Krekeler ist in jeder Hinsicht ein perfekter Zahnarzt, immer freundlich, vorsichtig und gut erklärend. Das ganze Praxisteam ist top!",
            rating: 5,
        },
        {
            name: "Patient auf jameda",
            text: "Seit 20 Jahren schon bin ich bei Herrn Krekeler in Behandlung. Weil er sich bei mir immer sehr viel Zeit nimmt und alle meine Probleme bisher perfekt behandelt hat, nehme ich jedes Mal eine weite Anreise in Kauf.",
            rating: 5,
        },
        {
            name: "Patient auf jameda",
            text: "Meine Frau und Ich sind Jahre lang bei Dr. Krekeler, durch sein Geduld und Kompetenz können wir nur weiter empfehlen. Das gesamte Team ist super.",
            rating: 5,
        },
        {
            name: "Patient auf jameda",
            text: "Fachgerechte und feinfühlige Behandlung. Sehr geduldiger und freundlicher Arzt.",
            rating: 5,
        }
    ];

    return (
        <section className="py-20 bg-primary/5 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sand-100 rounded-full blur-3xl opacity-50 -z-10" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <h2 className="text-3xl font-serif font-bold tracking-tight text-center text-primary mb-16 sm:text-4xl">
                    Das sagen unsere Patienten
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    {reviews.map((review, i) => (
                        <Card key={i} className="bg-white/60 backdrop-blur-md border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                            <CardHeader className="pb-4">
                                <div className="flex items-center gap-1 mb-3">
                                    {Array.from({ length: 5 }).map((_, starIndex) => (
                                        <Star
                                            key={starIndex}
                                            className={`w-5 h-5 ${starIndex < review.rating
                                                ? "fill-yellow-400 text-yellow-400"
                                                : "text-muted-foreground"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <CardTitle className="text-lg font-bold text-foreground">
                                    {review.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground italic leading-relaxed">
                                    "{review.text}"
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
