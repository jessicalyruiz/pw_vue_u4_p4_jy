<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h2>App</h2>
  <GuardaEstudiante/>
  <Estudiante/>
  <ActualizarEstudiante/>
  <EliminarEstudiante/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ActualizarEstudiante from './modules/estudiante/pages/ActualizarEstudiante.vue'
import EliminarEstudiante from './modules/estudiante/pages/EliminarEstudiante.vue'
import Estudiante from './modules/estudiante/pages/Estudiante.vue'
import GuardaEstudiante from './modules/estudiante/pages/GuardaEstudiante.vue'


export default {
  name: 'App',
  components: {

    Estudiante,
    GuardaEstudiante,
    ActualizarEstudiante,
EliminarEstudiante
  }
}
</script>

    Estudiate
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
