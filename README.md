# React Todo App

Applicazione Todo List sviluppata con React e Redux Toolkit.
Supporta aggiunta, completamento ed eliminazione di attività,
con stato globale gestito tramite Redux.

## Stack

![React](https://img.shields.io/badge/React-18-f7c948?style=flat-square&logo=react&logoColor=1a1a1a)
![Redux](https://img.shields.io/badge/Redux_Toolkit-state_mgmt-4a6cf7?style=flat-square&logo=redux&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7c948?style=flat-square&logo=javascript&logoColor=1a1a1a)

## Avvio locale

```bash
npm install
npm start
# Apri http://localhost:3000
```

## Deploy

Configurato per deploy su piattaforme cloud tramite
Nixpacks (`nixpacks.toml`) e server Caddy (`Caddyfile`).

## Struttura

| Cartella | Descrizione |
|---|---|
| `src/` | Componenti React e slice Redux |
| `public/` | Asset statici e index.html |
