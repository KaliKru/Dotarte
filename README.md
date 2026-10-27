# Dotarte — Portfolio-Website

Persönliches Portfolio, live unter **[dotarte.de](https://dotarte.de)**.

## Sichtbarkeit

Die Seite ist **absichtlich nicht in Suchmaschinen auffindbar** — sie ist nur über den direkten Link erreichbar, taucht aber nicht bei Google & Co. auf. Das wird über zwei Dinge sichergestellt:
- `robots.txt` im Hauptverzeichnis (weist Suchmaschinen-Crawler ab)
- `<meta name="robots" content="noindex, nofollow">` im `<head>` jeder Seite

Falls die Seite später doch auffindbar sein soll: beides entfernen.

## Kontakt-Schutz (E-Mail)

Die E-Mail-Adresse liegt nicht im Klartext im Code, damit sie nicht von Bots automatisch erfasst wird: Sie steht Base64-codiert im Attribut `data-mail` des Mail-Links und wird erst beim Klick zu einem echten `mailto:`-Link zusammengesetzt (Code dafür in `scripts.js` und `projects/shared.js`).

**Adresse ändern:** In der Browser-Konsole (F12 → Console) eingeben:
```js
btoa("neue-adresse@beispiel.de")
```
Das Ergebnis ersetzt den Wert von `data-mail` im Footer in **allen** Seiten (`index.html`, `projects/ajar/ajar.html`, `projects/complaint-form/complaint-form.html`, `projects/schreibheft/schreibheft.html`, `projects/seasons/seasons.html` und die englischen Seiten in `en/`).

## Struktur

```
index.html          Hauptseite (Hero, Projekt-Karten, Kontakt)
styles.css          Styles der Hauptseite (Creme/Gold/Dunkel, Roboto + Bricolage Grotesque)
scripts.js          JavaScript der Hauptseite (Copyright-Jahr, Nav-Verhalten, E-Mail-Link)
robots.txt          Suchmaschinen-Sperre (siehe oben)
images/             Bilder, die nur auf der Hauptseite verwendet werden
projects/
  shared.js         Gemeinsames JS für alle Projekt-Unterseiten (Scroll-Nav, ToC, Copyright-Jahr, E-Mail-Link)
  ajar/             Case Study „Ajar" (ADHS-Begleiter-App)
    ajar.html
    ajar.css        Eigener Stil (Fraunces/DM Sans, Navy-Akzente)
    images/         Alle Ajar-Bilder
  complaint-form/   Case Study „Complaint-Formular"
    complaint-form.html
    complaint-form.css
    images/
  seasons/          Case Study „Seasons" (Job-/Reise-App)
    seasons.html
    seasons.css     Eigener Stil (Poppins)
    images/         Alle Seasons-Bilder
  schreibheft/      Case Study „Schreibheft" (Schreibtraining für Deutschlernende, Side Project)
    schreibheft.html
    schreibheft.css   Basis wie Complaint, plus eigene Grüntöne aus der App
    images/         Alle Schreibheft-Bilder
en/                 Englische Version (gleiche Struktur, nutzt CSS, JS und Bilder der deutschen Seiten)
  index.html
  projects/
    ajar/ajar.html
    complaint-form/complaint-form.html
    schreibheft/schreibheft.html
archive/            Archiv früherer Bausteine (nicht verlinkt)
```

**Sprachen:** Deutsch liegt im Hauptverzeichnis, Englisch unter `en/`. Auf jeder Seite wechselt „DE | EN“ (oben rechts) zur gleichen Seite in der anderen Sprache. Wird ein Text geändert, muss er in beiden Sprachversionen angepasst werden.

**Neues Projekt anlegen:** Einen neuen Ordner nach demselben Muster in `projects/` erstellen (`projektname.html` + eigenes `.css` + `images/`). Für Englisch zusätzlich `en/projects/projektname/projektname.html` (verweist auf das CSS und die Bilder im deutschen Ordner).

**Wichtige Konvention — Hero-Bild-Höhe (ab Seasons):** `.hero-banner` bekommt bei neuen Projekt-Seiten dasselbe Seitenverhältnis wie Ajars Original-Hero-Bild (`aspect-ratio: 4000 / 1400;` ≈ 2,86:1, plus `object-fit: cover;`) — dadurch ist die Höhe bei jeder Bildschirmgröße exakt proportional identisch zu Ajar, unabhängig vom tatsächlichen Seitenverhältnis des jeweiligen Fotos (wird automatisch mittig zugeschnitten). **Ajar selbst bleibt unverändert** (`height: auto`, eigenes Originalbild ohne Zuschnitt) — diese Regel gilt nur für neue Projekte, die dieselbe Bildhöhe wie Ajar erreichen sollen.

**Wichtige Konvention — Standardfarben (ab Seasons):** Neue Projekt-Seiten übernehmen als Ausgangspunkt die Hauptseiten-Farben für Body (`#e9e7e2`), Hero (`#f8f7f0`) und Content-Karte (`#fdfcf9`) — **außer Ajar**, das bewusst seine eigene, unabhängige Farbpalette behält und davon ausgenommen bleibt.

**Wichtige Konvention — Footer, Logo und Scroll-nach-oben-Pfeil** sind auf allen Seiten identisch (Pfeil in Navy `#383b56`).

## Tech-Stack

Reines HTML, CSS und Vanilla-JavaScript — keine Frameworks, keine Build-Schritte. Jede Seite ist eine einzelne `.html`-Datei mit eigenem `.css`.

Fonts werden über Google Fonts eingebunden (im `<head>` jeder Seite verlinkt).

## Neues Projekt auf der Hauptseite zeigen

1. Auf der Hauptseite (`index.html`) und in `en/index.html` einen Karten-Block (`<article class="project-card">`) kopieren und anpassen (Label, Bild, Titel mit Link, Status, Beschreibung).
2. Status-Label setzen: `Concept` (goldener Punkt) für laufende Projekte, `Shipped` (grüner Punkt, Klasse `is-shipped`) für abgeschlossene, `Side Project` (Navy-Punkt, Klasse `is-side`) für eigene Nebenprojekte.
3. Die Details auf den Karten sind immer sichtbar (kein Hover nötig). Die ganze Karte ist über den Titel-Link klickbar.
4. Am Ende jeder Case-Study-Seite führt der Button „Nächste Case Study“ zum nächsten Projekt.
