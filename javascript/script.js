document.addEventListener('DOMContentLoaded', function() {
    const lista = document.getElementById('lista');
    
    lista.addEventListener('click', function(event) {
      if (event.target && event.target.matches('button.btn10, button.btn9, button.btn8, button.btn7, button.btn6, button.btn5' )) {
        
        // Obtener el <li> que contiene el botón presionado
        const li = event.target.closest('li');
        
        // Definir las clases que los botones pueden tener
        const clasesBoton = ['btn10', 'btn9', 'btn8','btn7','btn6','btn5'];
        
        // Crear un selector que busque los botones con esas clases
        const selector = clasesBoton.map(clase => `button.${clase}`).join(', ');
        
        // Seleccionar todos los botones dentro del <li> que tienen esas clases
        const botones = li.querySelectorAll(selector);
        
        // Eliminar la clase 'cambiado' de todos los botones dentro de ese <li>
        botones.forEach(function(boton) {
          boton.classList.remove('cambiado');
        });
        
        // Agregar la clase 'cambiado' al botón que fue presionado
        event.target.classList.add('cambiado');
      }
    });
  });

  function ira(){
    window.location.href="../html/Lista de los mejores gatos del mundo.html";
  };

  function volver(){
    window.location.href="../Index.html";
  };
  
 
