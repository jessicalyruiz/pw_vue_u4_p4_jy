<template>
<h3>Datos estudiante</h3>
<label for="cedula">Ingresa la cedula</label>
<input type="text" id="cedula" v-model="cedula">
<button @click="consultarEstudiante">Consultar</button>
  
</template>

<script>
import {obtenerEstudianteFachada} from "../helpers/EstudianteCliente.js"
export default {
    data(){
        return{
            cedula:null,
            estu:null,
        }
    },
    methods:{
        async consultarEstudiante(){
            const estu=await obtenerEstudianteFachada(this.cedula);
            this.estu=estu
            console.log("estudiante")
            console.log(estu)
        }
    }

}
</script>

<style>

</style>