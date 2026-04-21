# FlowBot - IA Gentek

Landing page de **IA Gentek**, servicio de chatbots multicanal con IA para WhatsApp. Construido con Angular 19, Tailwind CSS v4 y Forest Design System.

**Produccion:** [flowbot.iagentek.com.mx](https://flowbot.iagentek.com.mx)

## Stack

- **Angular 19** (standalone components)
- **Tailwind CSS v4** + **Forest Design System** (paleta bosque, glassmorphism, animaciones Apple)
- **Docker** + **Nginx** para produccion
- **Traefik** como reverse proxy con SSL automatico (Let's Encrypt)

## Estructura

```
src/
├── app/
│   ├── components/
│   │   └── home/                # Landing page completa
│   ├── services/
│   │   ├── whatsapp.service.ts  # Generador URL wa.me
│   │   └── qr.service.ts       # Generador QR codes
│   ├── app.component.ts
│   └── app.config.ts
├── environments/
├── forest/css/                  # Forest Design System
├── styles.css
├── _headers                     # Headers seguridad (Netlify)
└── _redirects                   # SPA redirect (Netlify)
public/
├── assets/
│   ├── icons/                   # SVGs reutilizables
│   ├── images/                  # QR WhatsApp
│   └── logos/                   # Logos IA Gentek (negro/blanco)
└── favicon.ico
```

## Desarrollo local

```bash
npm install
ng serve
```

Abrir http://localhost:4200

## Docker (local)

```bash
docker compose up --build -d
```

Abrir http://localhost:4200

## Deploy en VPS (Docker Swarm + Traefik)

```bash
# Construir imagen en el VPS
docker build -t flowbot-frontend:latest .

# Deployar stack
docker stack deploy -c docker-stack.yml flowbot
```

El `docker-stack.yml` configura Traefik con SSL automatico para `flowbot.iagentek.com.mx`.

## Deploy en Netlify (alternativo)

El proyecto incluye `netlify.toml`, `_headers` y `_redirects`. Conectar el repo en Netlify y se deploya automaticamente.

- **Build command:** `npm run build`
- **Publish directory:** `dist/ia-gentek/browser`

## Secciones de la landing

1. **Navbar** - Glassmorphism + logo IA Gentek + boton contacto
2. **Hero** - Card oscura con gradiente Forest + logo blanco
3. **QR + WhatsApp** - Escanear QR o abrir WhatsApp directo
4. **Features** - 6 cards: n8n, Multicanal, IA, Seguridad, Analytics, CRM
5. **Proceso** - 3 pasos: Consulta, Diseno, Lanzamiento
6. **Footer** - Logo + creditos

## Creado por

**Samael Hernandez** - [IA Gentek](https://iagentek.com.mx)
