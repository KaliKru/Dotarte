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
  ajar.html           Case Study „Ajar" (ADHS-Begleiter-App)
  ajar.css            Eigener Stil für die Ajar-Seite (Fraunces/DM Sans, Terrakotta-Akzente)
  images/             Alle Bilder, die zur Ajar-Seite gehören
```

## Tech-Stack

Reines HTML, CSS und Vanilla-JavaScript — keine Frameworks, keine Build-Schritte. Jede Seite ist eine einzelne `.html`-Datei mit eigenem `.css`.

Fonts werden über Google Fonts eingebunden (im `<head>` jeder Seite verlinkt).

## Neues Projekt hinzufügen

1. Neuen Unterordner in `projects/` anlegen (z. B. `projects/seasons/` oder `projects/seasons.html` + `projects/seasons.css` direkt in `projects/`, je nachdem wie viele Bilder das Projekt hat)
2. Auf der Hauptseite (`index.html`) eine der Platzhalter-Karten durch das neue Projekt ersetzen (Bild, Label, Beschreibungstext)
3. Status-Label setzen: `Concept` (goldener Punkt) für laufende Projekte, `Shipped` (grüner Punkt, Klasse `is-shipped`) für abgeschlossene

## Offene Punkte

- Weitere Projekt-Unterseiten (Seasons, Corporate Identity, Immobilien-Branding) sind auf der Hauptseite als Platzhalter angelegt, eigene Case-Study-Seiten folgen noch
