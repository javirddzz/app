let db;

const request = indexedDB.open("tutorialDB", 1);

request.onupgradeneeded = function (event) {
  db = event.target.result;
  const store = db.createObjectStore("usuarios", { keyPath: "user" });
  store.add({ user: "admin", pass: "1234" });
};

request.onsuccess = function (event) {
  db = event.target.result;
};