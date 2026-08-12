# Marcos Daniel Casimiro — Portfolio

Sitio de portfolio de una sola página construido con [Astro](https://astro.build), estático y sin JavaScript en runtime.

## Estructura

```text
/
├── public/
│  ├── favicon.svg
│  └── robots.txt
└── src/
   ├── layouts/Layout.astro
   ├── pages/index.astro
   ├── components/
   ├── data/
   └── styles/{tokens.css,global.css}
```

## Comandos

| Comando           | Acción                                       |
| ------------------ | --------------------------------------------- |
| `npm install`       | Instala las dependencias                      |
| `npm run dev`       | Levanta el servidor local en `localhost:4321` |
| `npm run build`     | Compila el sitio de producción en `./dist/`   |
| `npm run preview`   | Previsualiza el build antes de deployar       |
| `npm run astro ...` | Corre comandos de la CLI de Astro             |
