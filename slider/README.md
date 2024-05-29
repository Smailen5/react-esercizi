# Esercizio Slider

## Sviluppo

- react+vite
- bootstrap
- react icons

## Difficolta

- visti i continui errori di eslint e visto che sarebbe una best practice ho deciso di usare le props validation
```js
Slide.propTypes = {
  voto: PropTypes.number.isRequired,
  recensione: PropTypes.string.isRequired,
  autore: PropTypes.string.isRequired,
  classe: PropTypes.string,
};
```

- Secondo le best practice il codice riutilizzabile come `starCreator` non va scritto all'interno dei componenti ma va separato in una cartella a parte di nome `utils`

# Link

[![Netlify Status](https://api.netlify.com/api/v1/badges/ba26b2d0-bb13-4b30-9293-d33bb531aecf/deploy-status)](https://app.netlify.com/sites/app-slider/deploys)

[Link della mia soluzione](https://app-slider.netlify.app/)

[Link al progetto originale](https://slider-tutorial.netlify.app/)