Hier ist das detaillierte Product Requirement Document (PRD) für die Praxis-Website. Ich habe den Fokus strikt auf Konversion (Terminvereinbarung) und Vertrauensaufbau (lokaler Kontext) gelegt.

---

# PRD: Website Relaunch – Zahnarztpraxis Ralf Krekeler
**Version:** 1.0 | **Status:** Draft | **Datum:** 14.12.2025

## 1. Executive Summary
**Vision:** Die Website dient als digitale Visitenkarte für die Bewohner in Wetter (Ruhr) und Umgebung. Sie muss die Brücke zwischen der analogen "Dorfzahnarzt"-Atmosphäre (Vertrauen, Nähe) und moderner Zahnmedizin schlagen.
**Hauptziel:** Maximierung der Kontaktaufnahme (Anrufe & Terminanfragen) durch extreme Barrierefreiheit und klare UX.
**Zielgruppe:** Lokalbevölkerung (breites Altersspektrum, Familien, Senioren). Daher liegt der Fokus auf Lesbarkeit und einfacher Navigation.

---

## 2. Inhaltliche Anforderungen (Content Strategy)

### A. Der Arzt & Das Team (Trust-Building)
In einer ländlichen Gegend wählen Patienten Menschen, keine Institutionen.
* **Hero-Image:** Ein sympathisches, authentisches Foto von Ralf Krekeler (kein Stock-Foto!).
* **Vita & Philosophie:**
    * Kurz & prägnant. Fokus auf Erfahrung und den Bezug zur Region (Wetter/Ruhr).
    * *Wording-Beispiel:* "Ihr Zahnarzt in der Nachbarschaft – moderne Medizin mit persönlichem Bezug."
* **Team:** Vorstellung der Assistenz/Empfang (mit Namen), um die Hemmschwelle vor dem ersten Anruf zu senken.

### B. Leistungsangebot (Patienten-Sprache)
Vermeidung von reinem "Fachchinesisch". Übersetzung in Patientennutzen.
* **Prophylaxe:** "Vorsorge statt Bohren – Ihre Zähne ein Leben lang erhalten."
* **Parodontologie:** "Zahnfleischgesundheit – das Fundament für festen Halt."
* **Zahnersatz:** "Fester Biss und Ästhetik – wir beraten Sie zu Kronen und Brücken."
* **Ästhetik:** "Ihr schönstes Lächeln – schonende Aufhellung und Korrekturen."

### C. USP (Alleinstellungsmerkmal)
* **Lokale Verankerung:** "Mitten in Wetter."
* **Empathie:** Angstfreie Behandlung, Zeit für Beratung.
* **Schnelligkeit:** Kurze Wartezeiten (falls zutreffend), schnelle Hilfe bei Schmerzen.

---

## 3. Sitemap & Informationsarchitektur

Die Struktur ist flach gehalten ("Deep enough to be effective, shallow enough to be quick").

### Seite 1: Home (Landingpage)
* **Above the Fold:** Logo, Navigation, Hero-Shot (Praxis/Arzt), Headline ("Zahnarzt Ralf Krekeler in Wetter"), Primärer CTA Button ("Termin vereinbaren").
* **Quick-Access Bar (Sticky):** Telefonnummer (klickbar) & Öffnungszeiten (Status: "Jetzt geöffnet/geschlossen").
* **Teaser Leistungen:** 3-4 Icons mit Kernleistungen -> Link zur Unterseite.
* **Social Proof:** 1-2 echte Patientenstimmen (Google Reviews Widget).
* **Footer:** Adresse, Anfahrt, Impressum/Datenschutz-Links.

### Seite 2: Leistungen (Services)
* Akkordeon-Design (aufklappbar), um die Seite übersichtlich zu halten.
* Jede Leistung enthält einen direkten "Beratungstermin vereinbaren"-Link.

### Seite 3: Über uns (Team)
* Bild von Ralf Krekeler + Kurz-Bio.
* Bild des Teams / der Praxisräume (Wartezimmer, Behandlungsraum – muss sauber und hell wirken).

### Seite 4: Kontakt & Anfahrt
* **Karte:** Google Maps Integration (DSGVO-konform mit 2-Klick-Lösung).
* **Kontaktdaten:**
    * Tel (Hervorgehoben für Patienten).
    * Fax (Hervorgehoben mit Label: "Für Apotheken & Überweiser").
    * Adresse.
* **Öffnungszeiten:** Tabellarisch. (Achtung: Mi/Fr Vormittagszeiten müssen geklärt werden, siehe To-Do).

### Seite 5: Rechtliches
* Impressum (Pflichtangaben nach TMG).
* Datenschutzerklärung.

---

## 4. Funktionale Anforderungen (Features)

### Kontaktformular (Logik & Felder)
Kein komplexes Buchungssystem (zu hohe Hürde/Kosten), sondern ein **Terminanfrage-Formular**.
* **Felder:**
    * Name (Pflicht).
    * Telefonnummer (Pflicht – Rückruf ist effizienter als E-Mail-Ping-Pong).
    * E-Mail (Optional).
    * Grund: Dropdown (Schmerzen/Notfall, Kontrolle/PZR, Beratung, Sonstiges).
    * Wunschzeitfenster: Radio-Buttons (Vormittags, Nachmittags, Egal).
    * Datenschutz-Checkhaken (Pflicht).
* **Bestätigung:** Success-Message ("Wir rufen Sie zeitnah zurück").

### SEO-Basics (Local SEO)
* **Schema.org Markup:** Implementierung von `LocalBusiness` und `Dentist` Schema (für Google Maps Ranking essentiell).
* **Meta-Tags:** Title: "Zahnarzt Ralf Krekeler | Ihre Praxis in Wetter (Ruhr)".
* **Speed:** Lazy Loading für Bilder, Caching aktivieren.

---

## 5. Design Guidelines (UI/UX)

### Farbpalette (Psychologie)
Ziel: Sauberkeit, aber keine "Krankenhaus-Kälte".
* **Primär:** Ein vertrauenswürdiges, tiefes **Medizin-Blau** (Seriosität).
* **Sekundär:** Helles **Weiß/Grau** (Hygiene, Raum).
* **Akzent:** Ein warmes **Sand-Beige** oder sanftes **Mint-Grün** (Beruhigung, Natur, nimmt die Angst).

### Typografie
* **Headlines:** Serifenschrift (z. B. *Playfair Display* oder *Merriweather*) – vermittelt Tradition und Beständigkeit.
* **Body:** Serifenlos (z. B. *Lato*, *Open Sans* oder *Inter*) – hohe Lesbarkeit, auch für ältere Augen.
* **Größe:** Body-Text mindestens 18px. Hoher Kontrast (Dunkelgrau auf Weiß, kein reines Schwarz).

### Mobile Responsiveness (Critical)
Da viele Nutzer akute Schmerzen haben oder unterwegs suchen:
* **Thumb-Zone:** Wichtige Buttons (Anrufen) müssen unten im Screen erreichbar sein.
* **Click-to-Call:** Die Telefonnummer muss auf Mobile *immer* ein klickbarer Link sein.
* **Ladezeit:** Unter 2 Sekunden im 4G Netz.

---

### Offene Punkte / Blocker (Action Items)
Lenny, folgende Daten sind kritisch für den Go-Live und müssen von dir oder dem Kunden geliefert werden:
1.  **Öffnungszeiten:** Bestätigung der Zeiten für Mittwoch & Freitag (vermutlich 08:00 – 13:00 Uhr?).
2.  **Fotos:** Termin für Praxis-Shooting (Arzt, Team, Räume) ansetzen.
3.  **Domain:** Prüfen, ob `zahnarzt-krekeler.de` oder `zahnarzt-wetter.de` verfügbar ist.

---

**Nächster Schritt:**
Soll ich basierend auf diesem PRD einen **Content-Entwurf für die "Über uns"-Seite** schreiben oder direkt die **Struktur für das Wireframe** skizzieren?