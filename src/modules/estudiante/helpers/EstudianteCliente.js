import axios from "axios"

export const obtenerEstudianteFachada = async (cedula) => {
  return await obtenerEstudianteAPI(cedula);
}

export const obtenerEstudianteFachada2 = async (cedula) => {
  return await obtenerEstudianteAPIAxios(cedula);
}


export const ingresarEstudianteFachada = (bodyEstudiante) => {
  ingresarEstudiante(bodyEstudiante);
}
export const actualizarEstudianteFachada = (bodyEstudiante, id) => {
  actualizarEstudiante(bodyEstudiante,id);
}

export const eliminarEstudianteFachada = (id) => {
 return eliminarEstudiante(id);
}

const obtenerEstudianteAPI = async (cedula) => {




  const data = await fetch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r => r.json())
  console.log(data)
  return data;

}


const headers ={
  "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqZXNzaTIiLCJpYXQiOjE2OTI4NDEzNTYsImV4cCI6MTY5MzIwMTM1Nn0.Y1vIv10fo5fNXXOWT9xHHTC7arX0TM836y2fB_WBBtc6RzyLuaiIWuyU9hyCHvknq-P_O9Cihdsm8zkX3TBCIw",
  "Mensaje": "casdf"
}

const obtenerEstudianteAPIAxios = async (cedula) => {
  //en el config vamos a enviar todos los dartos de cabecera

  const data = axios.get(`http://localhost:8082/API/v1.0/Matricula/estudiantes/${cedula}`,{headers:headers}).then(r => r.data)
  console.log(data)
  return data
}


const ingresarEstudiante = (bodyEstudiante) => {

  
  axios.post(`http://localhost:8082/API/v1.0/Matricula/estudiantes`, bodyEstudiante, {headers:headers}).then(r => r.data)
}

const actualizarEstudiante = (bodyEstudiante, id) => {

 
  axios.put(`http://localhost:8082/API/v1.0/Matricula/estudiantes/${id}`, bodyEstudiante, {headers:headers}).then(r => r.data)

}

const eliminarEstudiante = (id) => {
 
 return  axios.delete(`http://localhost:8082/API/v1.0/Matricula/estudiantes/${id}`, {headers:headers}).then(r => r.data)

}