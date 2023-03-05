//Ejemplo rotacion: https://codepen.io/mondal10/pen/WNNEvjV
//funcion automaticamente ejecutada cuando el dom carga
window.onload = () => {
    cargarComponente("tarjetaRegistro", "registro-copy.html")
};

//@param target es el elemento html donde se va a cargar el componente
//@param component el componente que se va a cargar en la pagina 
function cargarComponente(target, component) {
    $(function () {
        $(`#${target}`).load(component);
    });
}

function rotar(){
    var card = document.getElementById('tarjeta');
    card.classList.toggle('is-flipped')
}

function validarCampos(){
    //preventDefault()
    const nombre=document.getElementById('nombre').value
    const apellido=document.getElementById('apellido').value
    const identificacion=document.getElementById('identificacion').value
    const edad=document.getElementById('edad').value
    const telefono=document.getElementById('telefono').value
    const email=document.getElementById('email').value
    const pass=document.getElementById('pass').value
    const pass2=document.getElementById('pass2').value
    if(!nombre || !apellido || !identificacion ||!edad || !telefono || !email ||!pass || !pass2)
        return
    else
        rotar()
}

function sesionCorrecta(){
    alert("correcto")
}
