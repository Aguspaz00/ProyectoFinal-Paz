const confirmado = [];
const user = JSON.parse(localStorage.getItem('login_success')) || false;


if(!user){
    window.location.href = 'login.html';
}else{
    Swal.fire(`Bienvenido ${user.nombre}`);
}

const logout = () => {
    Swal.fire(` Hasta luego ${user.nombre}`);
    localStorage.removeItem('login_success');
    window.location.href = 'login.html';
};

const logoutt = document.querySelector ('#logoutt');
logoutt.addEventListener('click',logout);


function calcular() {  

    let dia1 = document.getElementById("diaInp1").value;  
    let dia2 = document.getElementById("diaInp2").value;  
    if(dia1>dia2){
        return Swal.fire({
            icon: 'error',
            title: 'Ops',
            text: 'Por favor, corrobora las fechas ingresadas',
          })
    }else if( (dia1 && dia2)=== '' ){
        return Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'No se ha ingresado ninguna fecha. Intentalo nuevamente.',
          })
    }else{
        let diaE = new Date(dia1);  
        let diaS = new Date(dia2);  
        let diferenciaTiempo = diaS.getTime() - diaE.getTime();  
        let precioPorDia = 5000; 
        let resultado = diferenciaTiempo / (1000 * 60 * 60 * 24);
        Swal.fire(`Precio total por ${resultado} Dia/s $
        ${resultado*precioPorDia}`);
        document.getElementById("result").innerHTML = ` <h3>Precio total por ${resultado} Dia/s $
        ${resultado*precioPorDia} </h3> `;  
    }
}  


const confimar = document.getElementById('confirmar');
confimar.addEventListener('click', ()=> {
    let dia1 = document.getElementById("diaInp1").value;  
    let dia2 = document.getElementById("diaInp2").value;  
    if(dia1>dia2){
        return Swal.fire({
            icon: 'error',
            title: 'Ops',
            text: 'Por favor, corrobora las fechas ingresadas',
          })
    }else if( (dia1 && dia2)=== '' ){
        return Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'No se ha ingresado ninguna fecha. Intentalo nuevamente.',
          })
    }else{
        Swal.fire(`Gracias ${user.nombre}. Pronto le llegara la info a su mail :) `);confirmado.push(dia1,dia2);
    }
});

let bienvenida = document.getElementById('titulo');
bienvenida.innerHTML = 
`<h1> Bienvenidos a Alquileres de cabañas</h1> `;

////////


