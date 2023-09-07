
const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const contraseña = document.querySelector('#contraseña').value;
    const Usuarios = JSON.parse(localStorage.getItem ('usuarios')) || [];

    const validacionUsuario = Usuarios.find(usuario => usuario.email === email && usuario.contraseña === contraseña);
    try{
        if(!validacionUsuario){
            return Swal.fire({
                icon: 'error',
                title: 'Ops',
                text: 'Los datos ingresados son incorrectos',
              });
        }
    }catch(error){
        Swal.fire({
            icon: 'error',
            title: 'Ops',
            text: 'ERROR. Recargue la pagina.',
        });
    }
    localStorage.setItem('login_success', JSON.stringify(validacionUsuario));
    window.location.href = 'index.html';
});