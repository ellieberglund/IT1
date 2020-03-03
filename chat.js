//html referanser
const inpNavn = document.querySelector("#inpNavn")
const inpMeld = document.querySelector("#inpMeld")
const divMeld = document.querySelector("#Meldinger")

//firestore
const db = firebase.firestore();
const chat = db.collection("chat");

// lager funksjon
function leggtilMeld(){
  chat.add({
    fra: inpNavn.value,
    tekst: inpMeld.value
  })
}

chat.onSnapshot(snapshot => skrivResultat(snapshot));

function skrivResultat(snapshot){
  snapshot.docChanges().forEach(element => lagHTML(element.doc.data()));
}


function lagHTML(chatData){
  divMeld.innerHTML +=`
  <section class="chat">
    <div class="fra">
      ${chatData["fra"]}:
    </div>
    <div class="tekst">
      ${chatData["tekst"]}
    </div>
  </section>
  `
}
