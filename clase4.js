/* Acá vemos que el document nos da acceso a todo el DOM,
ese arbol que contiene todos los nodos de nuestro sitio */
console.log(document);

/* Ahora vamos a utilizar 2 metodos propios de document que
nos facilitan "pescar" elementos en el sitio:
- querySelector()
- querySelectorAll() */

/* Obtenemos el titulo principal.
Vayamos a la consola y despleguemos la flecha que
nos muestra todas las propiedades del nodo */
const titulo = document.querySelector("h1");
console.log(titulo);

// Nos traemos ahora un listado de nodos
const itemsMenu = document.querySelectorAll("li");
console.log(itemsMenu);

// Hacemos un selector más específico
const infoExtra = document.querySelector(".info .clima");
console.log(infoExtra);

/* ------------------------------- Practicando ------------------------------ */

/* Seleccionamos la lista de noticias y revisamos su informacion interna.
Aprovechamos que la NodeList es un ITERABLE, entonces podemos recorrerla.
🚩 NO es un Array. */
const articulos = document.querySelectorAll("article");

for (let i = 0; i < articulos.length; i++) {
  console.log(articulos[i]);
}

/* Ahora hacemos la misma practica pero con ForEach, y accedemos a
propiedades de los nodos. */
articulos.forEach((articulo) => {
  const titulo = articulo.querySelector("h2").innerText;
  console.log(titulo);
  /*💡si quisieramos,acá podemos mutar los nodos, o cambiar algunas
  de sus propiedades */
});

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1 - Escribir un selector para cada elemento del sitio.
// 2 - Plasmarlo en un diagrama de árbol como la consigna:
// https://docs.google.com/document/d/15nGvKkEcbrRgwqV50ISh0QYZ_TO67vmWQaLfNpUxqjs/preview


const head1 = document.querySelector(`head`);
console.log(head1);

const meta0 = document.querySelectorAll(`meta`);
for (let i = 0; i < meta0.length; i++) {
  console.log(meta0[i]);
}


const title = document.querySelector(`title`);
console.log(title);

const link = document.querySelector(`link`);
console.log(link);

const body1 = document.querySelector(`body`);
console.log(body1);

const header1 = document.querySelector(`header`);
console.log(header1);

const tituloH1 = document.querySelector(`h1`);
console.log(tituloH1);

const nav1 = document.querySelector(`nav`);
console.log(nav1);

const ul1 = document.querySelector(`ul`);
console.log(ul1);

const lista1 = document.querySelectorAll(`nav ul li`);
console.log(lista1);

const divTema1 = document.querySelector(`.tema`);
console.log(divTema1);

// const divTema2 = document.getElementsByClassName(`tema`);
// console.log(divTema2);

const boton = document.querySelector(`button`);
console.log(boton);

const info = document.querySelector(`.info`);
console.log(info);

const clima = document.querySelector(`.clima`);
console.log(clima);

const dolar = document.querySelector(`.dolar`);
console.log(dolar);

const main = document.querySelector(`main`);
console.log(main);

const noticias = document.querySelector(`.noticias`);
console.log(noticias);

const articulo5 = document.querySelectorAll(`article`);

for (let i = 0; i < articulo5.length; i++) {
  console.log(articulo5[i]);
}

const articuloH2 = document.querySelectorAll(`article h2`);
for (let i = 0; i < articuloH2.length; i++) {
  console.log(articuloH2[i]);
}

const articuloImg = document.querySelectorAll(`article img`);
for (let i = 0; i < articuloImg.length; i++) {
  console.log(articuloImg[i]);
}

const articuloP = document.querySelectorAll(`article p`);
for (let i = 0; i < articuloP.length; i++) {
  console.log(articuloP[i]);
}

const foot = document.querySelector(`footer`);
console.log(foot);


////////////////
