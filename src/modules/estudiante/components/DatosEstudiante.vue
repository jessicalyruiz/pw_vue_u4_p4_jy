<template>
<h3>Datos estudiante</h3>
<label for="cedula">Ingresa la cedula</label>
<input type="text" id="cedula" v-model="cedula">
<button @click="consultarEstudiante">Consultar</button>
 <label for="">Nombre</label>
  <input v-model ="nombre" name="" id="">
   <label for="">Apellido</label>
  <input v-model ="apellido" name="" id="">
</template>

<script>
import {obtenerEstudianteFachada2} from "../helpers/EstudianteCliente.js"
export default {
    props:{
      cedulac:String,
  },
    data(){
        return{
            cedula:null,
            
            apellido:null,
            nombre:null,
        }
    },
    methods:{
        async consultarEstudiante(){
            const estu=await obtenerEstudianteFachada2(this.cedulac);
            //this.estu=estu
            console.log("estudiante")
            //console.log(estu)

            this.nombre=estu.nombre
            this.apellido=estu.apellido

            console.log(this.apellido)

            



        }
    },
    mounted(){
       // this.consultarEstudiante()
        const {cedula}=this.$route.params
        const prov=this.$route.query.ciudad
        console.log(prov)

    }

}
</script>

<style>

</style>