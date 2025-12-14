"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Not strictly PRD but good for "Sonstiges"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => setSubmitted(true), 500);
    }

    if (submitted) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center text-green-800">
                <h3 className="text-xl font-bold mb-2">Vielen Dank!</h3>
                <p>Ihre Anfrage wurde gesendet. Wir rufen Sie zeitnah zurück.</p>
                <Button
                    className="mt-6 bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => setSubmitted(false)}
                >
                    Neue Anfrage
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" required placeholder="Ihr vollständiger Name" className="bg-white/50 border-primary/10" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone">Telefonnummer *</Label>
                <Input id="phone" type="tel" required placeholder="Für den Rückruf" className="bg-white/50 border-primary/10" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">E-Mail (Optional)</Label>
                <Input id="email" type="email" placeholder="ihre.email@beispiel.de" className="bg-white/50 border-primary/10" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="reason">Grund der Anfrage</Label>
                <Select>
                    <SelectTrigger id="reason" className="bg-white/50 border-primary/10">
                        <SelectValue placeholder="Bitte wählen" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="schmerzen">Schmerzen / Notfall</SelectItem>
                        <SelectItem value="kontrolle">Kontrolle / PZR</SelectItem>
                        <SelectItem value="beratung">Beratung</SelectItem>
                        <SelectItem value="sonstiges">Sonstiges</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label>Wunschzeitfenster für Rückruf/Termin</Label>
                <RadioGroup defaultValue="egal" className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="vormittags" id="r1" />
                        <Label htmlFor="r1" className="font-normal">Vormittags</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nachmittags" id="r2" />
                        <Label htmlFor="r2" className="font-normal">Nachmittags</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="egal" id="r3" />
                        <Label htmlFor="r3" className="font-normal">Egal</Label>
                    </div>
                </RadioGroup>
            </div>

            <div className="flex items-start space-x-2 pt-2">
                <Checkbox id="privacy" required />
                <div className="grid gap-1.5 leading-none">
                    <Label
                        htmlFor="privacy"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Datenschutz akzeptieren *
                    </Label>
                    <p className="text-sm text-muted-foreground">
                        Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                        <a href="/datenschutz" className="underline hover:text-primary">
                            Datenschutzerklärung
                        </a>{" "}
                        zu.
                    </p>
                </div>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-xl font-bold py-6 shadow-lg shadow-primary/20">
                Terminanfrage absenden
            </Button>
        </form>
    );
}
