<script>
import { getPokemons } from "./utils/connectApi.js";

export default{
  data(){
    return{
      dadosPokemon: {},
      nomePokemon: '',
      imagePokemon: null

    }
  },
  async mounted(){
    this.dadosPokemon = await getPokemons('17')
    this.nomePokemon = this.dadosPokemon.name
    this.imagePokemon = this.dadosPokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

  }
}
</script>

<template>
  <div id="app">
    <p>Em desenvolvimento!!</p>
    <img height="100" :src="imagePokemon" :alt="nomePokemon">
    <p>{{nomePokemon}}</p>
  </div>
</template>

<style scoped>
#app{
  background-color: #e0e0e0;
  height: 100vh;
  padding: 1rem;

}
</style>
