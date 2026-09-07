# Dotarte — Portfolio-Website

Persönliches Portfolio, live unter **[dotarte.de](https://dotarte.de)**.

## Sichtbarkeit

Die Seite ist **absichtlich nicht in Suchmaschinen auffindbar** — sie ist nur über den direkten Link erreichbar, taucht aber nicht bei Google & Co. auf. Das wird über zwei Dinge sichergestellt:
- `robots.txt` im Hauptverzeichnis (weist Suchmaschinen-Crawler ab)
- `<meta name="robots" content="noindex, nofollow">` im `<head>` jeder Seite

Falls die Seite später doch auffindbar sein soll: beides entfernen.

## Kontakt-Schutz (LinkedIn & E-Mail)

Zwei zusätzliche Maßnahmen, damit Kontaktdaten nicht von Bots/Crawlern automatisch erfasst werden:

- **LinkedIn-Link**: `rel="noopener noreferrer"` — verhindert, dass LinkedIn über den HTTP-Referrer-Header sieht, dass der Klick von dieser Seite kam
- **E-Mail-Link**: Adresse liegt Base64-verschlüsselt im Code (`atob(...)`), wird erst beim Klick zu einem echten `mailto:`-Link zusammengesetzt — schützt vor einfachen E-Mail-Scraping-Bots

**Falls die E-Mail-Adresse später geändert wird**, muss der neue Code dafür einmal frisch generiert werden. In der Browser-Konsole (F12 → Console):
```js
btoa("neue-adresse@beispiel.de")
```
Das Ergebnis ersetzt den Base64-String in **beiden** Dateien (`index.html` und `projects/ajar.html`), im `onclick`-Attribut des Mail-Links.

## Struktur

```
index.html          Hauptseite (Hero, Projekt-Übersicht, Kontakt)
styles.css           Styles der Hauptseite (Creme/Gold/Dunkel, Roboto + Bricolage Grotesque)
scripts.js            JavaScript der Hauptseite (Karten-Hover/-Fokus, Copyright-Jahr)
robots.txt           Suchmaschinen-Sperre (siehe oben)
images/              Bilder, die nur auf der Hauptseite verwendet werden
projects/
  shared.js           Gemeinsames JS für alle Projekt-Unterseiten (Scroll-Nav, ToC-Scroll-Spy, Copyright-Jahr)
  ajar/               Case Study „Ajar" (ADHS-Begleiter-App)
    ajar.html
    ajar.css           Eigener Stil (Fraunces/DM Sans, Terrakotta-Akzente)
    images/            Alle Ajar-Bilder
  seasons/            Case Study „Seasons" (Job-/Reise-App)
    seasons.html
    seasons.css        Eigener Stil (Poppins)
    images/            Alle Seasons-Bilder

**Neues Projekt anlegen:** Einfach einen neuen Ordner nach demselben Muster in `projects/` erstellen (`index.html` + eigenes `.css` + `images/`) — `shared.js` wird automatisch mitgenutzt, kein Duplizieren von JS nötig.

**Wichtige Konvention — Hero-Bild-Höhe (ab Seasons):** `.hero-banner` bekommt bei neuen Projekt-Seiten dasselbe Seitenverhältnis wie Ajars Original-Hero-Bild (`aspect-ratio: 4000 / 1400;` ≈ 2,86:1, plus `object-fit: cover;`) — dadurch ist die Höhe bei jeder Bildschirmgröße exakt proportional identisch zu Ajar, unabhängig vom tatsächlichen Seitenverhältnis des jeweiligen Fotos (wird automatisch mittig zugeschnitten). **Ajar selbst bleibt unverändert** (`height: auto`, eigenes Originalbild ohne Zuschnitt) — diese Regel gilt nur für neue Projekte, die dieselbe Bildhöhe wie Ajar erreichen sollen.

**Wichtige Konvention — Standardfarben (ab Seasons):** Neue Projekt-Seiten übernehmen als Ausgangspunkt die Hauptseiten-Farben für Body (`#e9e7e2`), Hero (`#f8f7f0`) und Content-Karte (`#fdfcf9`) — **außer Ajar**, das bewusst seine eigene, unabhängige Farbpalette behält und davon ausgenommen bleibt.
```

## Tech-Stack

Reines HTML, CSS und Vanilla-JavaScript — keine Frameworks, keine Build-Schritte. Jede Seite ist eine einzelne `.html`-Datei mit eigenem `.css`.

Fonts werden über Google Fonts eingebunden (im `<head>` jeder Seite verlinkt).

## Neues Projekt hinzufügen

1. Neuen Ordner in `projects/` anlegen, z. B. `projects/neuesprojekt/`, mit `neuesprojekt.html` + eigenem `.css` + `images/` (Dateiname bewusst wie der Ordner benannt, nicht `index.html` — sonst sind bei mehreren offenen Projekten alle Dateien gleich benannt und schwer zu unterscheiden)
2. `<script src="../shared.js"></script>` einbinden (Nav/Scroll-Verhalten funktioniert dann automatisch mit)
3. Auf der Hauptseite (`index.html`) eine der Platzhalter-Karten durch das neue Projekt ersetzen (Bild, Label, Beschreibungstext)
4. Status-Label setzen: `Concept` (goldener Punkt) für laufende Projekte, `Shipped` (grüner Punkt, Klasse `is-shipped`) für abgeschlossene

## Offene Punkte

- **Seasons**: Hero-Section steht, Rest der Case Study folgt noch (Hero-Bild muss lokal unter `projects/seasons/images/hero-banner.png` ergänzt werden)
- Corporate Identity & Immobilien-Branding sind auf der Hauptseite als Platzhalter angelegt, eigene Case-Study-Seiten folgen noch
