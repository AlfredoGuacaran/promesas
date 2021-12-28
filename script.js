const traerArboles = async function () {
  const url = 'https://jsonplaceholder.typicode.com/photos';
  const datos = await fetch(url);
  const albunes = await datos.json();

  const primeros20 = albunes.slice(0, 20);

  let html;

  primeros20.forEach((album) => {
    html += `<li>${album.title}</li>`;
  });

  console.log(primeros20);

  document.getElementById('lista-albunes').innerHTML = html;
};

traerArboles();
