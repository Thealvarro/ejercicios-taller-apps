const loginbuton = window.document.querySelector("#loginbutt");
loginbuton.addEventListener("click", validar);

function validar(){

    const input1 = window.document.querySelector("#mail");
    const email = input1.value;
    input1.value = '';
    input1.focus();
    const input2 = window.document.querySelector("#pass");
    const contraseña = input2.value;
    input2.value = '';
    input2.focus();

    //email correctos
    if (email === "alvaro@gmail.com" && contraseña === "123123"){
        alert("Iniciando sesion...")    
    } else{
        alert("Email y/o contraseña incorrecta")
    }   
}