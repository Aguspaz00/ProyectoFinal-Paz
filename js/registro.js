const registroForm = document.querySelector('#registroForm');

registroForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const contraseña = document.querySelector('#contraseña').value;

    const Usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuariosRegistrados = Usuarios.find(usuario => usuario.email === email);


    if(usuariosRegistrados){
        return Swal.fire('Este usuario esta registrado');
    }

    Usuarios.push({nombre: nombre, email: email, contraseña: contraseña});

    localStorage.setItem('usuarios', JSON.stringify(Usuarios));

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '¡Felicitaciones, te registraste exitosamente!',
        showConfirmButton: false,
        timer: 1500,
      });

    window.location.href= 'login.html';
});