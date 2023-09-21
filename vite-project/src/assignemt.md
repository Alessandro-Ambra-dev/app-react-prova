Sito multingua
Fetch dei dati da GitHub
Input nome e password su più utenti
Bottone di invio e reset
Controllo sul nome (se valido il bottone invio si attiva)
Controllo su password (se valido il bottone si arriva)
Alert utente non trovato
Se l'utente è loggato mostrare un bottone area riservata
Tailwind per lo stile

FETCH DI PARTENZA:
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => console.log(json))
