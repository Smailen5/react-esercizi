# Esercizio dark mode

### Sviluppo

- Tailwind
- React+Vite

### Difficolta

Ho trovato un po di difficolta nel capire la documentazione ufficiale di tailwind ma, alla fine sono riuscito
a venirne a capo.
Ho optato per questo:
```js
useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
```
Piuttosto che:
```js
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
```
In questo esercizio ho scelto di non leggere per il momento il tema preferito dall'utente
ma permettere di cambiarlo direttamente con un bottone.


### Link

[![Netlify Status](https://api.netlify.com/api/v1/badges/1229a686-1898-47d7-9afb-c110a4f32467/deploy-status)](https://app.netlify.com/sites/app-dark-mode/deploys)

[Link della mia soluzione](https://app-dark-mode.netlify.app/)

[Link al progetto originale](https://dark-mode-tutorial.netlify.app/)
