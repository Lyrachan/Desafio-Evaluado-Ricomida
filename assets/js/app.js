
// Activación de tooltip de Bootstrap

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

//



$(document).ready(function(){
    
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
      });



// Cambio de color de "Ingredientes" y "Preparación" según su etiqueta

    
    $("h4").on("dblclick", function(){
        $(this).css({
            "color": "red"
        });
      });



      
   
   
        $(".carta").click(function(){       // Toggle para hacer desaparecer y aparecer con selector de clase
            $(".contenido").toggle();
})});
