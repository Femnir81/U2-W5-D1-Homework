

setInterval(() => {
    // Richiamare la data attuale
let dataAttuale = new Date()
console.log(dataAttuale)

// Mostrarla in una pagina HTML
document.getElementById('data-attuale').innerHTML = `La data di oggi è ${dataAttuale}`

// Mostrare elementi singoli della data
document.getElementById('giorno').innerHTML = `Oggi è il giorno ${dataAttuale.getDate()}`

document.getElementById('mese').innerHTML = `Oggi è il mese ${dataAttuale.toLocaleDateString('default', { month: 'long' })}`

document.getElementById('anno').innerHTML = `Oggi è l'anno ${dataAttuale.getFullYear()}`

document.getElementById('ora').innerHTML = `Sono le ore ${dataAttuale.getHours()}`

document.getElementById('minuti').innerHTML = `Sono i minuti ${dataAttuale.getMinutes()}`

document.getElementById('secondi').innerHTML = `Sono i secondi ${dataAttuale.getSeconds()}`

// Creare un sistema per la formattazione in formato europeo in HTML
document.getElementById('formato-europeo').innerHTML = `Oggi è il giorno ${dataAttuale.toLocaleString()}`
}, 1000);