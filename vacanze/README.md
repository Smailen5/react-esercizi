# Esercizio App Vacanze

### Sviluppo

- React+Vite
- Tailwind

#### librerie

- axios
- react icons


### Difficolta

- inizialmente ho eseguito un map sui dati recuperati, andava bene ma la richiesta era di avere una singola card, ho quindi optato per passare una alla volta le vacanze al componente `SingleHoliday` usando un `useState` che successivamente usero per cambiare la card visualizzata

- inizialmente pensavo di gestire il cambiamento della card dal componente SingleHoliday ma, ho capito che dovevo solo avere
i bottoni e le funzioni si dovevano trovare in Holiday

- ho usato anche un if per limitare l'avanzamento del count o porterebbe ad errore una volta superato la lunghezza del array
- - ho cambiato questa parte, siccome non posso sapere quanto e lungo ho deciso di usare `vacanze.data.length -1` per trovare
la massima lunghezza dell'array dinamicamente, invece di usare `oldValue === 4`

- mi sono accorto che i prezzi erano poco leggibili senza la virgola ho quindi usato 
```js
let number = vacanza.prezzo;
  let numberString = number.toString();
  let position = numberString.length - 2;
  let resultString =
    numberString.slice(0, position) + "," + numberString.slice(position);
```
si e un po lungo ma funziona perfettamente, non so se mi conviene ritrasformare la stringa in numero ma, visto che e semplicemente per una migliore visualizzazione lascio cosi, non credo che questo dato andra mai inviato a un DB

- eslint e stato una spina nel fianco, visto che per il momento uso JavaScript e non TypeScript non credo debba dichiarare la validazione dei props, sicuramente in futuro e una pratica che e meglio fare

### Link



[Link della mia soluzione]()

[Link al progetto originale]()