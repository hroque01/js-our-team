// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

//persone
//Wayne Barnett - Founder & CEO
//Angela Caroll - Chief Editor
//Walter Gordon - Office Manager
//Angela Lopez - Social Media Manager
//Scott Estrada - Developer
//Barbara Ramos - Graphic Designer

const personale = [
    {
        "nome" : 'Wayne Barnett',
        "Ruolo" : 'Founder & CEO',
        "foto" : "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome" : 'Angela Caroll',
        "Ruolo" : 'Chief Editor',
        "foto" : "img/angela-caroll-chief-editor.jpg"
    },

    {
        "nome" : 'Walter Gordon',
        "Ruolo" : 'Office Manager',
        "foto" : "img/walter-gordon-office-manager.jpg"
    },

    {
        "nome" : 'Angela Lopez',
        "Ruolo" : 'Social Media Manager',
        "foto" : "img/angela-lopez-social-media-manager.jpg"
    },
    
    {
        "nome" : 'Scott Estrada',
        "Ruolo" : 'Developer',
        "foto" : "img/scott-estrada-developer.jpg"
    },

    {
        "nome" : 'Barbara Ramos',
        "Ruolo" : 'Graphic Designer',
        "foto" : "img/barbara-ramos-graphic-designer.jpg" 
    }
]

console.log(personale)
// document.querySelector(".card").innerHTML = JSON.stringify(personale, null, 4)

cards();

function cards () {

    for (let i = 0; i < personale.length; i++) {
        
        
        // BONUS 1:
        // Trasformare la stringa foto in una immagine effettiva
        let newCard = `
        <div class="card">
            <img src="${personale[i].foto}" alt="">
            <div>
                <div class="center">${personale[i].nome}</div>
                <div class="center">${personale[i].Ruolo}</div>
            </div>
        </div>
        `

        // BONUS 2:
        // Organizzare i singoli membri in card/schede
        const container=document.querySelector(".container").innerHTML += newCard
    
    }
}


