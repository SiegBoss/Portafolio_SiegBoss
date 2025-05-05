// Animación simple al cargar
window.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    main.style.opacity = 0;
    main.style.transform = "translateY(20px)";
    setTimeout(() => {
      main.style.transition = "all 0.6s ease";
      main.style.opacity = 1;
      main.style.transform = "translateY(0)";
    }, 100);
  });
  
  // Scroll to top (si deseas agregar botón luego)
  /*
  const scrollBtn = document.getElementById("scrollTop");
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  */
  