/*  document.addEventListener("DOMContentLoaded", () => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=INSERISCIQUIUNAQUERY')
        .then((response)=>{
            response.json().then((data)=>{
                console.log(data)
            });
        })
    .catch((err)=>{console.log("errore"+ err);});
}); */

 

/* document.addEventListener("DOMContentLoaded", () => { */
function search (){
    let artista = document.getElementById("searchField").value
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + artista)                         
        .then((Response)=>{
            Response.json().then((data)=>{
                let canzoni = data.data
                let container = document.getElementById('artistSection');
                container.innerHTML = ''
                document.getElementById("searchResults").style.display="block"
                let contenitoreArtista = document.querySelector("#nomeArt")
                contenitoreArtista.innerHTML = artista.toUpperCase()
                for (let i of canzoni){
                    let canz = document.createElement('div')
                    canz.classList.add('canzone');
                    let tit = document.createElement('h5')
                    tit.textContent = i.title_short
                    let img = document.createElement('img')
                    img.src = i.album.cover_big
                    img.alt = i.title_short
                    let alb = document.createElement('span')
                    alb.textContent = i.album.title
                    canz.appendChild(img)
                    canz.appendChild(tit)
                    canz.appendChild(alb)
                    container.appendChild(canz)
                }
                document.getElementById('artist').classList.remove('d-none');
                console.log(data)
            });
        })
    .catch((err)=>{console.log("errore"+ err);});
};


/* Aspetto che il DOM sia completamente caricato.
Effettuo una richiesta all'API per cercare "Eminem".
Converto la risposta in JSON.
Ciclo attraverso i dati delle canzoni e creo gli elementi HTML necessari (titolo e immagine) per ciascuna canzone.
Aggiungo questi elementi al contenitore principale.
Rendo visibile il contenitore principale rimuovendo la classe d-none.
Gestisci eventuali errori loggandoli nella console. */   



