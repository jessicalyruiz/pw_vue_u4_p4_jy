<template>
<label for="id">Ingresa id</label>
<input type="text" id="id" v-model="id">
  <label for="cedula">Ingresa la cedula</label>
<input type="text" id="cedula" v-model="cedula">
 <label for="">Nombre</label>
  <input v-model ="nombre" name="" id="">
   <label for="">Apellido</label>
  <input v-model ="apellido" name="" id="">
  <label for="">Provincia</label>
  <input v-model ="provincia" name="" id="">
  <button @click="actualizarEstudiante">Actualizar</button>

</template>

<script>

import {actualizarEstudianteFachada} from "../helpers/EstudianteCliente.js"

export default {
 data(){
        return{
            cedula:null,
            id:null,
            apellido:null,
            nombre:null,
            provincia:null,
        }
    },
    methods:{
        async actualizarEstudiante(){

            const estudiante={
                nombre: this.nombre,
                apellido: this.apellido,
                cedula: this.cedula,
                provincia: this.provincia
            }
            await actualizarEstudianteFachada(estudiante, this.id);
         

        }
    }

}
</script>

<style>

</style>