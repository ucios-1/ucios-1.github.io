const form = document.getElementById("libruaryForm");

form.addEventListener( "submit", function ( event ) {
  event.preventDefault();

  var storage = [];
  // sprawdza czy storage już istnieje i w zależności przypisuje istniejęce albo tworzy nowe znaczenie
  if(window.localStorage.getItem("booksLibruary")) {
    storage = JSON.parse(window.localStorage.getItem("booksLibruary"));
  } else {
    storage = [];
    window.localStorage.setItem("booksLibruary", "");
  }
  
  // tworzy object i przypisuje wartości z tablicy
  const formData = {
    title: form.elements[0].value, 
    author: form.elements[1].value,
    prio: form.elements[2].value,
    category: form.elements[3].value 
  };

  // dodaje object do listy dannych pobranych z local Storage
  storage.push(formData);

  // nadpisuje nowe wartości w istniejącym zapisie
  window.localStorage.setItem("booksLibruary", JSON.stringify(storage));

  // czyści wartości tablicy
  for(let i = 0; i < form.elements.length - 1; i++) {
    i === 3 ? form.elements[i].value = "kryminał" : form.elements[i].value = "";
  }
  
  // uaktualnia listę
  updateLibruaryList();
});

const updateLibruaryList = function() {
  const libList = document.getElementById("libItSelf");

  // czyści liste biblioteki
  libList.innerHTML = "";

  const storage = JSON.parse(window.localStorage.getItem("booksLibruary"));

  // sprawdza czy storage istnieje
  if(storage) {
    storage.map((el, indx) => {
      
      // towrzy div, w którym będzie wszystko zapisane
      const entry = document.createElement("div");
      entry.classList.add("lib");
      entry.classList.add("entry");

      // tworzy poszczególne wpisy i dodaje do div's "entry"
      const childNum = document.createElement("p");
      childNum.innerText = indx + 1;
      entry.appendChild(childNum);

      const childTitle = document.createElement("p");
      childTitle.innerText = el.title;
      entry.appendChild(childTitle);

      const childAuthor = document.createElement("p");
      childAuthor.innerText = el.author;
      entry.appendChild(childAuthor);

      const childCategory = document.createElement("p");
      childCategory.innerText = el.category;
      entry.appendChild(childCategory);

      const childPrio = document.createElement("p");
      childPrio.innerText = el.prio;
      entry.appendChild(childPrio);

      //dodaje div'a do listy biblioteki
      libList.appendChild(entry);
    });
  }
}

window.onload = updateLibruaryList();