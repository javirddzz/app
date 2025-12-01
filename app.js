document.getElementById("loginForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  const tx = db.transaction("usuarios", "readonly");
  const store = tx.objectStore("usuarios");
  const query = store.get(user);

  query.onsuccess = function(){
    if (!query.result){
      alert("Usuario no encontrado.");
      return;
    }

    if (query.result.pass === pass){
      alert("Bienvenido " + user);
      window.location.href = "index.html";
    } else {
      alert("Contraseña incorrecta");
    }
  };
  // Proteger acceso a la app
if (location.pathname.includes("index.html")) {
  const userLogged = localStorage.getItem("loggedUser");
  if (!userLogged) {
    location.href = "login.html";
  }
}
});