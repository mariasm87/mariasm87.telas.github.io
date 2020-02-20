const container = document.querySelector(".container");
const coffees = [
  {
    name: "Punto blanco con topos negro",
    image: "images/tela1.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Piqué blanco",
    image: "images/tela2.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Popelin blanco con rayas",
    image: "images/tela3.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Popelin rosa",
    image: "images/tela4.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: " Punto chanel multicolor malva",
    image: "images/tela5.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: " Crepe japonesa blanco",
    image: "images/tela6.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Crepe naranja",
    image: "images/tela7.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Crepe satinado japones",
    image: "images/tela8.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Entretela blanca",
    image: "images/tela9.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Entretela blanca",
    image: "images/tela10.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Entretela negra",
    image: "images/tela11.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Entretela negra abrigo",
    image: "images/tela12.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Lana escocesa cuadro escocés",
    image: "images/tela13.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Cuadro escoces rojo",
    image: "images/tela14.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Forro bañador beige",
    image: "images/tela15.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Forro bañador blanco",
    image: "images/tela16.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Forro bañador negro",
    image: "images/tela17.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Forro bañador negro",
    image: "images/tela18.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Forro bañador blanco",
    image: "images/tela19.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Forro blanco",
    image: "images/tela20.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Viyela flores",
    image: "images/tela21.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Forro granate",
    image: "images/tela22.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Forro negro",
    image: "images/tela23.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Gasa rosa japonesa",
    image: "images/tela24.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Lana gruesa verde marino",
    image: "images/tela25.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Lycra bañador negro",
    image: "images/tela26.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Lycra bañador negro",
    image: "images/tela27.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Lycra bañador turquesa",
    image: "images/tela28.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Punto pata de gallo",
    image: "images/tela29.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Plumetti negro",
    image: "images/tela30.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Polipiel elástico negro",
    image: "images/tela31.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Glasilla",
    image: "images/tela32.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Punto abrigo gris perla",
    image: "images/tela33.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Punto invierno negro",
    image: "images/tela34.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Punto invierno negro",
    image: "images/tela35.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Punto jaspeado negro y amarillo",
    image: "images/tela36.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Punto negro",
    image: "images/tela37.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Satinado japonés",
    image: "images/tela38.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Satinado rojo",
    image: "images/tela39.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Stretch negro",
    image: "images/tela40.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Sueter minky blanco",
    image: "images/tela41.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Tela arrugada blanca abrigo fino",
    image: "images/tela42.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Tela camisa azul",
    image: "images/tela43.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Georgette topos blanco y rojo bebe",
    image: "images/tela44.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Popelín topos blanco y negro",
    image: "images/tela45.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Georgette topos rojo y blanco",
    image: "images/tela46.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Transparencia rayas azules",
    image: "images/tela47.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Tul marrón",
    image: "images/tela48.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Tul beige",
    image: "images/tela49.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Vaquero burdeos",
    image: "images/tela50.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Vaquero flores berenjena",
    image: "images/tela51.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Vaquero flores burdeos",
    image: "images/tela52.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  },
  {
    name: "Pique zigzag blanco y turquesa",
    image: "images/tela53.JPG",
    localizacion: "Caja1",
    cantidad: "1m"
  }
];

const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image, localizacion, cantidad }) =>
      (output += `
              <div class="card">
		
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
		<div id="ex1" class="modal">
  		  <p>Detalles de la tela:</p>
		  <p style="padding-left:20px;"> <b>Tejido:</b> ${name} </p>
                  <p style="padding-left:20px;"> <b>Cantidad:</b> ${cantidad} </p>
		  <p style="padding-left:20px;"> <b>Localizacion:</b> ${localizacion} </p>
		  <br>
		  <div align="center">
  		      <a class="card--link" href="#" rel="modal:close">Modificar</a>
		      <a class="card--link" href="#" rel="modal:close">Eliminar</a>
		  </div>
		</div>
                <a class="card--link" href="#ex1" rel="modal:open">Detalles</a>
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