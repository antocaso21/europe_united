# Europe United — sito web istituzionale (italiano)

**Versione aggiornata:** 12 novembre 2026. Sito statico multipagina pronto per GitHub Pages.

## Contenuti inclusi

- Homepage con fotografia di un evento condivisa dall'utente e logo ufficiale.
- Centro Studi, Ricerca, Progetti, Metodo, Geografie della Memoria, The Missing Archive, Circuito di Comunità, Risorse, Contatti.
- **MigrACTION**: scheda dedicata; Europe United indicato come **Partner**.
- **EDU-AI 2.0**: scheda dedicata; Europe United indicato come **Associated partner**.
- Progetti con filtri tematici e collegamenti locali.
- Galleria fotografica con tutte e tre le fotografie fornite.
- Design responsive (desktop e smartphone), SEO base, sitemap, favicon derivata dal marchio fornito.
- Soltanto la versione italiana. Nessun collegamento a pagine in inglese.

## Come pubblicare su GitHub Pages

1. Estrai lo ZIP.
2. Apri `index.html` per verificare la homepage offline.
3. Crea un repository GitHub nuovo oppure utilizza il repository del sito Europe United.
4. Copia nella radice del repository **tutti i file e cartelle contenuti nello ZIP**, mantenendo le cartelle `assets/`, `scripts/`, `.github/`.
5. Impostazioni repository → **Pages** → Deploy from a branch → `main` → `/(root)` → Save.
6. Se usi un dominio personalizzato, configurarlo solo dopo che la versione GitHub Pages funziona; aggiungi il file `CNAME` con il dominio effettivo.

Il pacchetto non contiene un file `CNAME`: non sono state cambiate impostazioni DNS.

## Contenuti da confermare prima della pubblicazione definitiva

- Verificare i diritti di pubblicazione delle fotografie e il consenso delle persone riconoscibili; queste immagini sono state fornite dall'utente.
- Confermare i testi definitivi e le denominazioni ufficiali dei ruoli nei progetti, in particolare l'eventuale formulazione contrattuale di associated partner.
- Validare la versione corrente dei collegamenti alle policy (provengono dalla precedente versione del sito).
- Verificare i dati istituzionali: recuperati dai documenti Europe United già forniti.
- Il sito è statico e il modulo contatti apre il client email (`mailto:`), senza backend.

## Dove sostituire contenuti

- Stile: `assets/style.css`.
- Interazione: `assets/site.js`.
- Homepage: `index.html`.
- Logo ufficiale senza modifiche: `assets/logo-ufficiale-europe-united.jpg`.
- Logo ottimizzato per il web: `assets/logo-ufficiale-europe-united.webp`.
- Favicon ed emblema: ritaglio del logo ufficiale fornito (senza disegno inventato).
- Fotografie originali: `/mnt/data` nel contesto di generazione; nello ZIP sono incluse versioni web ottimizzate visivamente fedeli, in `assets/evento-*.webp`.

## Verifica collegamenti

`python scripts/check_site.py`

Il codice HTML, il CSS e il JavaScript non richiedono framework o dipendenze per l'hosting.
