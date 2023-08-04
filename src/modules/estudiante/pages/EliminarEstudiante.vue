<template>
  <h3>Eliminar</h3>
  <div class="container">
  <label for="id">Ingresa id</label>
<input type="text" id="id" v-model="id">
<button @click="eliminarEstudiante">Eliminar</button>



<label for="">Nombre</label>
  <input v-model ="nombre" name="" id="">
   <label for="">Apellido</label>
  <input v-model ="apellido" name="" id="">
  <label for="">Provincia</label>
  <input v-model ="provincia" name="" id="">
</div>

</template>

<script>
import {eliminarEstudianteFachada} from '../helpers/EstudianteCliente'
export default {

data(){
    return{
        id:null,
        cedula:null,
            
            apellido:null,
            nombre:null,
            provincia:null,
    }
},
methods:{
    async eliminarEstudiante(){
       const estu=  await   eliminarEstudianteFachada(this.id)
       this.apellido=estu.apellido
       this.cedula=estu.cedula
       this.nombre=estu.nombre
       this.provincia=estu.provincia
    }
}
}
</script>

<style>

</style>