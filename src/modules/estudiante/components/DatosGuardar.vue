<template>
  <h3>Datos estudiante</h3>
<label for="cedula">Ingresa la cedula</label>
<input type="text" id="cedula" v-model="cedula">
 <label for="">Nombre</label>
  <input v-model ="nombre" name="" id="">
   <label for="">Apellido</label>
  <input v-model ="apellido" name="" id="">
  <label for="">Provincia</label>
  <input v-model ="provincia" name="" id="">
  <button @click="guardarEstudiante">Guardar</button>

</template>

<script>

import {ingresarEstudianteFachada} from "../helpers/EstudianteCliente.js"

export default {
     data(){
        return{
            cedula:null,
            
            apellido:null,
            nombre:null,
            provincia:null,
        }
    },
    methods:{
         guardarEstudiante(){

            const estudiante={
                nombre: this.nombre,
                apellido: this.apellido,
                cedula: this.cedula,
                provincia: this.provincia
            }
             ingresarEstudianteFachada(estudiante);
            console.log("Estudiante guardado")

        }
    }

}
</script>

<style>

</style>