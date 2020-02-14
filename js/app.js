const container = document.querySelector(".container");
const coffees = [
  {
    name: "Punto blanco con topos negro",
    image: "images/tela1.jpg"
  },
  {
    name: "Piqué blanco",
    image: "images/tela2.jpg"
  },
  {
    name: "Popelin blanco con rayas",
    image: "images/tela3.jpg"
  },
  {
    name: "Popelin rosa",
    image: "images/tela4.jpg"
  },
  {
    name: " Punto chanel multicolor malva",
    image: "images/tela5.jpg"
  },
  {
    name: " Crepe japonesa blanco",
    image: "images/tela6.jpg"
  },
  {
    name: "Crepe naranja",
    image: "images/tela7.jpg"
  },
  {
    name: "Crepe satinado japones",
    image: "images/tela8.jpg"
  },
  {
    name: "Entretela blanca",
    image: "images/tela9.jpg"
  },
  {
    name: "Entretela blanca",
    image: "images/tela10.jpg"
  },
  {
    name: "Entretela negra",
    image: "images/tela11.jpg"
  },
  {
    name: "Entretela negra abrigo",
    image: "images/tela12.jpg"
  },
  {
    name: "Lana escocesa cuadro escocés",
    image: "images/tela13.jpg"
  },
  {
    name: "Cuadro escoces rojo",
    image: "images/tela14.jpg"
  },
  {
    name: "Forro bañador beige",
    image: "images/tela15.jpg"
  },
  {
    name: "Forro bañador blanco",
    image: "images/tela16.jpg"
  },
  {
    name: "Forro bañador negro",
    image: "images/tela17.jpg"
  },
  {
    name: "Forro bañador negro",
    image: "images/tela18.jpg"
  },
  {
    name: "Forro bañador blanco",
    image: "images/tela19.jpg"
  },
  {
    name: "Forro blanco",
    image: "images/tela20.jpg"
  },
  {
    name: "Viyela flores",
    image: "images/tela21.jpg"
  },
  {
    name: "Forro granate",
    image: "images/tela22.jpg"
  },
  {
    name: "Forro negro",
    image: "images/tela23.jpg"
  },
  {
    name: "Gasa rosa japonesa",
    image: "images/tela24.jpg"
  },
  {
    name: "Lana gruesa verde marino",
    image: "images/tela25.jpg"
  },
  {
    name: "Lycra bañador negro",
    image: "images/tela26.jpg"
  },
  {
    name: "Lycra bañador negro",
    image: "images/tela27.jpg"
  },
  {
    name: "Lycra bañador turquesa",
    image: "images/tela28.jpg"
  },
  {
    name: "Punto pata de gallo",
    image: "images/tela29.jpg"
  },
  {
    name: "Plumetti negro",
    image: "images/tela30.jpg"
  },
  {
    name: "Polipiel elástico negro",
    image: "images/tela31.jpg"
  },
  {
    name: "Glasilla",
    image: "images/tela32.jpg"
  },
  {
    name: "Punto abrigo gris perla",
    image: "images/tela33.jpg"
  },
  {
    name: "Punto invierno negro",
    image: "images/tela34.jpg"
  },
  {
    name: "Punto invierno negro",
    image: "images/tela35.jpg"
  },
  {
    name: "Punto jaspeado negro y amarillo",
    image: "images/tela36.jpg"
  },
  {
    name: "Punto negro",
    image: "images/tela37.jpg"
  },
  {
    name: "Satinado japonés",
    image: "images/tela38.jpg"
  },
  {
    name: "Satinado rojo",
    image: "images/tela39.jpg"
  },
  {
    name: "Stretch negro",
    image: "images/tela40.jpg"
  },
  {
    name: "Sueter minky blanco",
    image: "images/tela41.jpg"
  },
  {
    name: "Tela arrugada blanca abrigo fino",
    image: "images/tela42.jpg"
  },
  {
    name: "Tela camisa azul",
    image: "images/tela43.jpg"
  },
  {
    name: "Georgette topos blanco y rojo bebe",
    image: "images/tela44.jpg"
  },
  {
    name: "Popelín topos blanco y negro",
    image: "images/tela45.jpg"
  },
  {
    name: "Georgette topos rojo y blanco",
    image: "images/tela46.jpg"
  },
  {
    name: "Transparencia rayas azules",
    image: "images/tela47.jpg"
  },
  {
    name: "Tul marrón",
    image: "images/tela48.jpg"
  },
  {
    name: "Tul beige",
    image: "images/tela49.jpg"
  },
  {
    name: "Vaquero burdeos",
    image: "images/tela50.jpg"
  },
  {
    name: "Vaquero flores berenjena",
    image: "images/tela51.jpg"
  },
  {
    name: "Vaquero flores burdeos",
    image: "images/tela52.jpg"
  },
  {
    name: "Pique zigzag blanco y turquesa",
    image: "images/tela53.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Detalles</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
