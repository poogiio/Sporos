# 🌿 Despentinat – Instruccions Completes del Lloc Web

> Guia pas a pas per publicar, editar i mantenir el teu lloc web gratuïtament a GitHub Pages.

---

## 📋 RESUM EXECUTIU

**Objectiu:** Lloc web de presentació per a Despentinat (perruqueria i salon de bellesa a Pals) que converteixi visitants en clients via WhatsApp.

**Diferencial clau:** Disseny premium amb estètica càlida (terracota + crema + salvia), tipografia elegant, i CTA de WhatsApp omniprescent. La majoria de competidors locals NO tenen web o tenen webs antiquades i genèriques. Despentinat tindrà el lloc web més professional de la zona.

**Per què convertirà:**
- Botó WhatsApp flotant sempre visible amb animació pulsant
- Formulari de contacte amb resposta ràpida a WhatsApp
- Prova social (testimonials, anys d'experiència, valoració)
- Disseny mobile-first (la majoria de visites seran des del mòbil)
- SEO local optimitzat per cerques de "perruqueria Pals", "perruqueria Costa Brava"

---

## 📁 ESTRUCTURA DE CARPETES (GitHub Pages)

```
despentinat/                  ← Carpeta principal del repositori
├── index.html                ← Pàgina principal (aquest arxiu)
├── img/                      ← Totes les imatges del lloc web
│   ├── hero-bg.jpg           ← Foto principal del hero (fons gran)
│   ├── equip.jpg             ← Foto del saló o equip
│   ├── og-image.jpg          ← Imatge per compartir a WhatsApp/xarxes (1200x630px)
│   ├── galeria-1.jpg         ← Fotos de treballs (fins a 6 o més)
│   ├── galeria-2.jpg
│   ├── galeria-3.jpg
│   ├── galeria-4.jpg
│   ├── galeria-5.jpg
│   └── galeria-6.jpg
└── README.md                 ← Aquesta guia
```

**Nota:** No calen arxius CSS ni JS externs. Tot és autocontingut en l'index.html (Tailwind i Alpine via CDN).

---

## 🚀 PAS 1: Crear el repositori a GitHub

1. Ves a **https://github.com** i inicia sessió (o crea un compte gratuït)
2. Clica el botó verd **"New"** o el **"+"** a la part superior dreta → **"New repository"**
3. A **"Repository name"**: escriu `despentinat` (o `despentinat.github.io` si vols l'URL directament)
4. Selecciona **"Public"** (obligatori per a GitHub Pages gratuït)
5. Marca ✅ **"Add a README file"**
6. Clica **"Create repository"**

---

## 📤 PAS 2: Pujar els arxius

### Opció A – Des del navegador (la més fàcil):
1. Al teu repositori a GitHub, clica **"Add file"** → **"Upload files"**
2. Arrossega l'arxiu `index.html` a la zona de càrrega
3. Clica **"Commit changes"**
4. Repeteix per a la carpeta `img/`: clica **"Add file"** → **"Upload files"**, entra a la carpeta `img/` i puja totes les imatges

### Opció B – Des de terminal (si saps usar git):
```bash
git clone https://github.com/EL_TEU_USUARI/despentinat.git
cd despentinat
# Copia els arxius aquí
git add .
git commit -m "Primer desplegament del lloc web Despentinat"
git push origin main
```

---

## ⚙️ PAS 3: Activar GitHub Pages

1. Al teu repositori, clica la pestanya **"Settings"**
2. Al menú esquerre, cerca i clica **"Pages"**
3. A **"Branch"**, selecciona `main` i clica **"Save"**
4. Espera 1-3 minuts
5. Apareixerà un missatge: *"Your site is live at https://EL_TEU_USUARI.github.io/despentinat/"*
6. ✅ El lloc web ja és en línia i accessible a tothom!

**URL per defecte:** `https://EL_TEU_USUARI.github.io/despentinat/`

---

## ✏️ PAS 4: Editar continguts (per al client no tècnic)

El codi té comentaris `<!-- EDITAR AQUÍ -->` que indiquen exactament on canviar cada cosa.

### Canviar el número de WhatsApp:
Busca `657646062` al codi (apareix ~8 vegades) i reemplaça per el teu número nou.
El format ha de ser: `34` + número sense espais. Exemple: `34612345678`

### Canviar el missatge prellenat de WhatsApp:
Busca `M'agradaria%20demanar%20cita%20a%20Despentinat` i canvia el text.
⚠️ Els espais han de ser `%20` i els accents han de ser codificats (o usa un codificador d'URL en línia).

### Canviar textos (títols, descripció, serveis, preus):
Obre `index.html` amb qualsevol editor de text (Notepad, TextEdit, VS Code).
Busca el comentari `<!-- EDITAR AQUÍ -->` just sobre el text que vols canviar.

### Canviar el nom al SEO (meta tags):
Busca `<title>` i `<meta name="description"` a la part superior del codi.

### Canviar horaris:
Busca `Dl–Dv: 9:00–19:00 · Ds: 9:00–14:00` (apareix 2 vegades) i modifica.

### Canviar l'adreça:
Busca `EDITAR: Carrer i número` i `Pals, 17256 – Girona` i actualitza.

### Canviar el link de Instagram:
Busca `https://www.instagram.com/despentinat/` i canvia per el teu perfil.

---

## 🖼️ PAS 5: Afegir imatges pròpies

### Imatge hero (fons principal molt important):
- Nom de fitxer: `img/hero-bg.jpg`
- Mida recomanada: **1920 × 1080px mínims** (o més gran)
- Ha de ser una foto del saló, de treballs de cabell, o d'ambient
- Comprimit per web: màxim 400-600KB (usa https://squoosh.app)

### Imatge de l'equip/saló:
- Nom de fitxer: `img/equip.jpg`
- Format: rectangular vertical, proporció aprox. 3:4
- Foto de l'equip treballant, o del interior del saló

### Imatges de galeria:
- Noms: `img/galeria-1.jpg` fins a `img/galeria-6.jpg`
- Format quadrat (1:1) ideal
- Treballs de coloració, talls, manicures, etc.
- Comprimit per web (usa https://squoosh.app)

### Imatge OG (per compartir):
- Nom: `img/og-image.jpg`
- Mida: **1200 × 630px**
- S'usa quan es comparteix el link a WhatsApp, Facebook, etc.

### Si vols afegir el logotip:
- Nom: `img/logo.svg` o `img/logo.png`
- Al codi, cerca el comentari sobre el logo al HEADER i substitueix el text per:
  ```html
  <img src="img/logo.svg" alt="Despentinat" class="h-10" />
  ```

---

## 📬 PAS 6: Configurar el formulari de contacte (Formspree)

El formulari d'aquest lloc web envia les dades a Formspree (servei gratuït), que t'arriben per email. Des de l'email pots respondre per WhatsApp al client.

### Configuració pas a pas:
1. Ves a **https://formspree.io** i crea un compte gratuït (usa el teu email habitual)
2. Clica **"New Form"**
3. Posa un nom (ex: "Despentinat Cites") i el teu email de notificació
4. Copia el **Form ID** que t'assignen (sembla: `xdoqkpnv`)
5. Al fitxer `index.html`, busca:
   ```
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
6. Reemplaça `YOUR_FORM_ID` pel teu ID real:
   ```
   action="https://formspree.io/f/xdoqkpnv"
   ```
7. Puja el canvi a GitHub

### Com arribarà la informació:
- Rebràs un email amb: nom del client, telèfon WhatsApp, servei demanat i missatge
- Amb el telèfon pots crear un link directe: `https://wa.me/34XXXXXXXXX`
- El pla gratuït de Formspree permet 50 missatges/mes (suficient per a un salon local)

---

## 🌐 PAS 7: Connectar un domini propi (opcional)

Si vols que el lloc web tingui una URL pròpia com `www.despentinat.com`:

### A. Compra el domini:
- Recomanem: **IONOS.es**, **Namecheap.com** o **GoDaddy.es**
- Preu aprox: 10-15€/any per un `.com` o `.es`

### B. Configura el DNS al proveïdor del domini:
Afegeix aquests registres DNS:
```
Tipus: A     → 185.199.108.153
Tipus: A     → 185.199.109.153
Tipus: A     → 185.199.110.153
Tipus: A     → 185.199.111.153
Tipus: CNAME → www → EL_TEU_USUARI.github.io
```

### C. Configura a GitHub Pages:
1. Al repositori → Settings → Pages
2. A "Custom domain" escriu: `www.despentinat.com`
3. Clica "Save"
4. Marca ✅ "Enforce HTTPS"

### D. Crea l'arxiu CNAME:
Al repositori, crea un arxiu amb el nom `CNAME` (sense extensió) amb el contingut:
```
www.despentinat.com
```

---

## 🎨 PAS 8: Canviar els colors

Obre `index.html` i busca la secció `tailwind.config`. Veuràs la paleta de colors:

```javascript
colors: {
  cream:  { DEFAULT: '#FAF5EE', ... },   // Color de fons (crema marfil)
  terra:  { DEFAULT: '#B5644A', ... },   // Terracota (color principal/CTA)
  sage:   { DEFAULT: '#6E8060', ... },   // Verd salvia (accent secundari)
  sand:   { DEFAULT: '#C9A86C', ... },   // Or/sorra (detalls i títols)
  ink:    { DEFAULT: '#28231F', ... },   // Negre càlid (text)
}
```

Canvia els valors hexadecimales per els colors que prefereixis.
Per trobar colors, usa: **https://coolors.co** o **https://palettemaker.com**

---

## 🔍 PAS 9: SEO local – Registrar-se a Google

Per aparèixer a Google Maps i a les cerques locals:

1. Ves a **https://business.google.com**
2. Crea el teu perfil de Google Business (gratuït)
3. Afegeix: nom, adreça, telèfon, horaris, categoria "Perruqueria"
4. Puja fotos del saló i dels treballs
5. Afegeix la URL del lloc web

Amb el perfil de Google Business, apareixeràs als resultats locals quan algú busqui "perruqueria Pals" o "perruqueria Costa Brava".

---

## 📊 PAS 10: Seguiment de visites (Google Analytics)

Per veure quantes persones visiten el teu web:

1. Ves a **https://analytics.google.com**
2. Crea un compte i propietat nova
3. Copia el codi de seguiment (sembla: `G-XXXXXXXXXX`)
4. Al `index.html`, just abans del `</head>`, afegeix:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

---

## 📱 PAS 11: Veure el lloc web en el mòbil durant l'edició

Mentre edites i vols veure els canvis abans de pujar a GitHub:
- Obre el fitxer `index.html` directament amb el navegador del teu ordinador
- Prem `F12` (Chrome/Firefox) → clica la icona del mòbil per veure la versió mòbil

---

## ❓ PREGUNTES FREQÜENTS

**¿El lloc web és realment gratuït?**
Sí! GitHub Pages és 100% gratuït per a llocs estàtics. L'únic cost opcional és el domini propi (~12€/any).

**¿Quant tarda en actualitzar-se quan pujo canvis?**
Normalment entre 30 segons i 3 minuts.

**¿El lloc web funciona en mòbil?**
Sí, és 100% responsive (mobile-first). Dissenyat per funcionar perfectament en qualsevol dispositiu.

**¿Puc tenir més pàgines?**
Sí. Pots crear `serveis.html`, `contacte.html`, etc. amb la mateixa estructura i enllaçar-les.

**¿El formulari funciona sense servidor?**
Sí, gràcies a Formspree. El servei gratuït permet 50 enviaments/mes.

**¿Puc editar el lloc web des del mòbil?**
Sí, pots editar arxius directament a GitHub.com des del navegador del mòbil.

---

## 🆘 NECESSITES AJUDA?

Si tens dubtes editant el codi, pots:
1. Buscar a YouTube: "GitHub Pages tutorial en español"
2. Demanar ajuda a ChatGPT o Claude mostrant el codi
3. Contactar un freelance local a Workana.com o Fiverr.com

---

*Lloc web creat per a Despentinat · Pals, Baix Empordà, Girona · 2026*
