function fmenu(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('cuerpoPag').innerHTML = data;
        }).catch(error => console.log('Error al cargar la página', error));
};

$(document).ready(function(){
   
    $('#registroForm').parsley({
        trigger: 'input'
    });
    $('input').on('input', function () {
        $(this).parsley().validate();
    });

    $('#registroForm').on('submit', function(event){

        event.preventDefault();
        if ($(this).parsley().isValid()){ 
            const nroDoc = document.getElementById('nroDoc').value;
            console.log('Nro.Documento: ', nroDoc);
            const tipoDoc = document.getElementById('tipoDoc').value;
            console.log('Tipo Documento: ', tipoDoc);
            const nombres = document.getElementById('nombres').value;
            console.log('Nombre: ', nombres);
            console.log ('Formulario valido. Los datos se enviaran a donde tu le digas ....');

            $('#exampleModal').modal('hide'); 
            alert('Su perfil ha sido guardado con éxito');

            $('#exampleModal').on('hidden.bs.modal', function () {
                $('#registroForm')[0].reset(); // Restablece todos los campos del formulario a sus valores iniciales
                $('#registroForm').parsley().reset(); // Restablece cualquier mensaje de error de Parsley
            });
        }
    }); 
});

// Subir Imagen
document.getElementById('insertImageButton').addEventListener('click', () => {
    document.getElementById('insertImageUpload').click();
  });
  
  document.getElementById('insertImageUpload').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById('imagePreview').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Cambiar Imagen
  document.getElementById('changeImageButton').addEventListener('click', () => {
    document.getElementById('changeImageUpload').click();
  });
  
  document.getElementById('changeImageUpload').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById('imagePreview').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Limpia la imagen y el formulario al cerrar el modal (si aplica)
  const modal = document.getElementById("exampleModal");
  if (modal) {
    modal.addEventListener("hidden.bs.modal", () => {
      imagePreview.src = "https://via.placeholder.com/150"; // Imagen por defecto
      imageUpload.value = ""; // Resetea el archivo
      document.getElementById("registroForm").reset(); // Limpia el formulario
    });
    };  

    // Obtener los elementos
const insertImageButton = document.getElementById('insertImageButton');
const insertImageUpload = document.getElementById('insertImageUpload');
const imagePreview = document.getElementById('imagePreview');

// Cuando se haga clic en el botón "Subir Imagen"
insertImageButton.addEventListener('click', function() {
  insertImageUpload.click(); // Abrir el selector de archivos
});

// Manejar la carga de la imagen
insertImageUpload.addEventListener('change', function(event) {
  const file = event.target.files[0]; // Obtener el primer archivo seleccionado
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imagePreview.src = e.target.result; // Establecer la vista previa de la imagen
    };
    reader.readAsDataURL(file); // Leer la imagen como una URL de datos
  }
});
