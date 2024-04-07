<script>
import CardP from "./components/CardP.vue"
import { getPokemons } from './utils/connectApi.js'

export default{
  name: "App",
  components: {CardP},
  data(){
    return{
      dadosPokemon: {},
      nomePokemon: '',
      numeroPokemon: '',
      imagePokemon: null,
      abilidade1: '',
      abilidade2: ''

    }
  },
  methods: {
    async buscarPokemon(nomePokemon){
      this.dadosPokemon = await getPokemons(nomePokemon)
      //console.log(this.dadosPokemon)
      this.nomePokemon = this.dadosPokemon.name
      this.numeroPokemon = this.dadosPokemon.id
      this.abilidade1 = this.dadosPokemon.abilities[0].ability.name
      this.abilidade2 = this.dadosPokemon.abilities[1].ability.name
      this.imagePokemon = this.dadosPokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

    }
  },
  mounted(){
    this.buscarPokemon('1')

  }
}
</script>

<template>
  <div id="app">
    <CardP
      :nomePokemon="nomePokemon"
      :numeroPokemon="numeroPokemon"
      :abilidade1="abilidade1"
      :abilidade2="abilidade2"
      :imagePokemon="imagePokemon"
      @buscarPokemon="buscarPokemon" />
  </div>
</template>

<style lang="scss" scoped>
#app{
  background-color: #212121;
  height: 100vh;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
