export default function ImpressumPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate">
            <h1>Impressum</h1>
            <p>Angaben gemäß § 5 TMG</p>

            <h2>Kontakt</h2>
            <p className="leading-relaxed">
                Praxis Ralf Krekeler Zahnarzt<br />
                Gustav-Vorsteher-Straße 2<br />
                58300 Wetter (Ruhr)<br />
            </p>
            <p className="leading-relaxed mt-4">
                Telefon: 0 23 35 / 52 93<br />
                Telefax: 0 23 35 / 15 18<br />
                E-Mail: info@zahnarzt-krekeler.de
            </p>

            <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>Berufsbezeichnung: Zahnarzt (verliehen in der Bundesrepublik Deutschland)</p>
            <p>Zuständige Kammer: Zahnärztekammer Westfalen-Lippe</p>
            {/* Add actual legal details later */}
        </div>
    );
}
