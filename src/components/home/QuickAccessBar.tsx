import { Phone, Clock } from "lucide-react";
import Link from "next/link";

export default function QuickAccessBar() {
    return (
        <div className="sticky top-0 z-50 w-full bg-primary/95 backdrop-blur-sm text-primary-foreground py-2 px-4 shadow-sm border-b border-white/10">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm font-medium gap-2 sm:gap-0">
                <a
                    href="tel:+4923355293"
                    className="flex items-center gap-2 hover:text-white/80 transition-colors"
                >
                    <Phone className="w-4 h-4" />
                    <span>0 23 35 / 52 93</span>
                </a>

                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="hidden sm:inline">Mo, Di, Do: 8-12 & 15-18 | Mi, Fr: 8-12</span>
                    <span className="sm:hidden">Mo-Fr geöffnet</span>

                    {/* Status Indicator Logic could be refined, keeping simple for now */}
                    <span className="flex items-center gap-1.5 bg-green-500/20 px-2 py-0.5 rounded-full border border-green-500/30">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-bold text-green-100 uppercase tracking-wider">Geöffnet</span>
                    </span>
                </div>
            </div>
        </div>
    );
}
