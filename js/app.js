let boks = [];
let form = document.getElementsByTagName("form")[0];
let tbody = document.getElementsByTagName("tbody")[0];
console.log(tbody);
form.addEventListener("submit", (e) => {
  const newBook = [
    e.target.name.value,
    e.target.publisher.value,
    e.target.price.value,
    e.target.genre.value,
  ];
  boks.push(newBook);
  console.log(boks);
  tbody.innerHTML = ''
  boks.forEach((item) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${item[0]}</td><td>${item[1]}</td><td>${item[2]}</td><td>${item[3]}</td>`;
    tbody.appendChild(tr);
  });
  e.preventDefault();
});
