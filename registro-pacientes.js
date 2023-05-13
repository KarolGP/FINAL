// Se obtienen los campos del formulario
const formularioRegistro = document.getElementById("registro-pacientes-form")
const nombrePaciente = document.getElementById("nombrePaciente")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const edad = document.getElementById("edad")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")

formularioRegistro.addEventListener("submit", function(event){
    event.preventDefault()

    const paciente = {
        nombrePaciente: nombrePaciente.value,
        apellido: apellido.value,
        cedula: cedula.value,
        edad: edad.value,
        telefono: telefono.value,
        especialidad: especialidad.value,

    }
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }
    pacientes.push(paciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    formularioRegistro.reset()
    alert("Paciente registrado con exito")
})
