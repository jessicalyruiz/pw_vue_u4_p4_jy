<template>
<h1>Consulta</h1>
  <DatosEstudiante :cedulac="cedulac"/>
</template>

<script>
import DatosEstudiante from '../components/DatosEstudiante.vue'

export default {
  
  data(){
    return{
        cedulac:null
    }
  },
     components:{
        DatosEstudiante
     },
     mounted(){
      console.log("consultar")
      const {cedula}=this.$route.params
      console.log(cedula)
      this.cedulac=cedula
      console.log('cedula'+ this.cedulac)
      console.log(this.$route)
     }
}
</script>

<style>

</style>