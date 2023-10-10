document.addEventListener('DOMContentLoaded', () => {
  
  const imagenPrincipal = document.querySelector('.imagen-principal');
  const imagenesGaleria = document.querySelectorAll('.imagen-galeria');

  imagenesGaleria.forEach(imagen => {    
    imagen.addEventListener('click', (e) => {
      imagenPrincipal.src = e.target.src;
    });
  });
  
  
});