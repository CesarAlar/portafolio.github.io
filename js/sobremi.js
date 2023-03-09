const nombre = document.querySelector('.name');
const correo = document.querySelector('.email');
const telefono = document.querySelector('.phone');
const asunto = document.querySelector('.subject');
const mensaje = document.querySelector('.text');
const box = document.querySelector('.box');
const btn = document.querySelector('.btn');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input',validacion)
correo.addEventListener('input',validacion)
telefono.addEventListener('input',validacion)
asunto.addEventListener('input',validacion)
mensaje.addEventListener('input',validacion)
btn.addEventListener('click',validar)

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

const campos = {
  name : '',
  email : '',
  phone : '',
  subject : '',
  texto : ''
}
function validacion(e) {
  campos[e.target.name] = e.target.value
}

function validar(e) {
  e.preventDefault()
  if(Object.values(campos).includes('')){
    alerta('Faltan campos por llenar', 'error');
    return;
  }else{
    campos.name = '',
    campos.email = '',
    campos.phone = '',
    campos.subject = '',
    campos.texto = ''
    formulario.reset()
    alerta('Mensaje Enviado')
  }
}

function alerta(msn, tipo) {
  
  if(!document.querySelector('.alerta')){
    const p = document.createElement('p');
    if (tipo === 'error') {
      p.classList.add('alerta', 'error');
      p.textContent= msn;
      box.insertBefore(p , document.querySelector('.formulario'))
    }else{
      p.classList.add('alerta');
      p.textContent= msn;
      box.insertBefore(p , document.querySelector('.formulario'))
    }
    setTimeout(() => {
      p.remove()
    }, 3000);
  }
  
}