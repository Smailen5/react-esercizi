# utilizzato

## librerie

- axios
- react icons


## difficolta

- inizialmente pensavo di gestire il cambiamento della card dal componente SingleHoliday ma, ho capito che dovevo solo avere
i bottoni e le funzioni si dovevano trovare in Holiday

- ho usato anche un if per limitare l'avanzamento del count o porterebbe ad errore una volta superato la lunghezza del array
- - ho cambiato questa parte, siccome non posso sapere quanto e lungo ho deciso di usare `vacanze.data.length -1` per trovare
la massima lunghezza dell'array dinamicamente, invece di usare `oldValue === 4`