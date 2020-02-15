const container = document.querySelector(".container");
const coffees = [
  {
    name: "Punto blanco con topos negro",
    image: "images/tela1.JPG"
  },
  {
    name: "Piqué blanco",
    image: "images/tela2.JPG"
  },
  {
    name: "Popelin blanco con rayas",
    image: "images/tela3.JPG"
  },
  {
    name: "Popelin rosa",
    image: "images/tela4.JPG"
  },
  {
    name: " Punto chanel multicolor malva",
    image: "images/tela5.JPG"
  },
  {
    name: " Crepe japonesa blanco",
    image: "images/tela6.JPG"
  },
  {
    name: "Crepe naranja",
    image: "images/tela7.JPG"
  },
  {
    name: "Crepe satinado japones",
    image: "images/tela8.JPG"
  },
  {
    name: "Entretela blanca",
    image: "images/tela9.JPG"
  },
  {
    name: "Entretela blanca",
    image: "images/tela10.JPG"
  },
  {
    name: "Entretela negra",
    image: "images/tela11.JPG"
  },
  {
    name: "Entretela negra abrigo",
    image: "images/tela12.JPG"
  },
  {
    name: "Lana escocesa cuadro escocés",
    image: "images/tela13.JPG"
  },
  {
    name: "Cuadro escoces rojo",
    image: "images/tela14.JPG"
  },
  {
    name: "Forro bañador beige",
    image: "images/tela15.JPG"
  },
  {
    name: "Forro bañador blanco",
    image: "images/tela16.JPG"
  },
  {
    name: "Forro bañador negro",
    image: "images/tela17.JPG"
  },
  {
    name: "Forro bañador negro",
    image: "images/tela18.JPG"
  },
  {
    name: "Forro bañador blanco",
    image: "images/tela19.JPG"
  },
  {
    name: "Forro blanco",
    image: "images/tela20.JPG"
  },
  {
    name: "Viyela flores",
    image: "images/tela21.JPG"
  },
  {
    name: "Forro granate",
    image: "images/tela22.JPG"
  },
  {
    name: "Forro negro",
    image: "images/tela23.JPG"
  },
  {
    name: "Gasa rosa japonesa",
    image: "images/tela24.JPG"
  },
  {
    name: "Lana gruesa verde marino",
    image: "images/tela25.JPG"
  },
  {
    name: "Lycra bañador negro",
    image: "images/tela26.JPG"
  },
  {
    name: "Lycra bañador negro",
    image: "images/tela27.JPG"
  },
  {
    name: "Lycra bañador turquesa",
    image: "images/tela28.JPG"
  },
  {
    name: "Punto pata de gallo",
    image: "images/tela29.JPG"
  },
  {
    name: "Plumetti negro",
    image: "images/tela30.JPG"
  },
  {
    name: "Polipiel elástico negro",
    image: "images/tela31.JPG"
  },
  {
    name: "Glasilla",
    image: "images/tela32.JPG"
  },
  {
    name: "Punto abrigo gris perla",
    image: "images/tela33.JPG"
  },
  {
    name: "Punto invierno negro",
    image: "images/tela34.JPG"
  },
  {
    name: "Punto invierno negro",
    image: "images/tela35.JPG"
  },
  {
    name: "Punto jaspeado negro y amarillo",
    image: "images/tela36.JPG"
  },
  {
    name: "Punto negro",
    image: "images/tela37.JPG"
  },
  {
    name: "Satinado japonés",
    image: "images/tela38.JPG"
  },
  {
    name: "Satinado rojo",
    image: "images/tela39.JPG"
  },
  {
    name: "Stretch negro",
    image: "images/tela40.JPG"
  },
  {
    name: "Sueter minky blanco",
    image: "images/tela41.JPG"
  },
  {
    name: "Tela arrugada blanca abrigo fino",
    image: "images/tela42.JPG"
  },
  {
    name: "Tela camisa azul",
    image: "images/tela43.JPG"
  },
  {
    name: "Georgette topos blanco y rojo bebe",
    image: "images/tela44.JPG"
  },
  {
    name: "Popelín topos blanco y negro",
    image: "images/tela45.JPG"
  },
  {
    name: "Georgette topos rojo y blanco",
    image: "images/tela46.JPG"
  },
  {
    name: "Transparencia rayas azules",
    image: "images/tela47.JPG"
  },
  {
    name: "Tul marrón",
    image: "images/tela48.JPG"
  },
  {
    name: "Tul beige",
    image: "images/tela49.JPG"
  },
  {
    name: "Vaquero burdeos",
    image: "images/tela50.JPG"
  },
  {
    name: "Vaquero flores berenjena",
    image: "images/tela51.JPG"
  },
  {
    name: "Vaquero flores burdeos",
    image: "images/tela52.JPG"
  },
  {
    name: "Pique zigzag blanco y turquesa",
    image: "images/tela53.JPG"
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
