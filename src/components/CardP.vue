<script>
export default {
  name: "CardP",
  data() {
    return {
      inputNome: ''

    }
  },
  props: {
    nomePokemon: String,
    numeroPokemon: String,
    abilidade1: String,
    abilidade2: String,
    imagePokemon: String

  },
  methods: {
    buscarPokemon(inputNome){
      this.$emit('buscarPokemon', inputNome)

    }
  }
};
</script>
<template>
  <div id="card-pokemon">
    <Card style="width: 25rem; overflow: hidden">
        <template #header>
            <div class="id-pokemon">
              <h2>{{ numeroPokemon }}</h2>
            </div>
            <img alt="user header" :src="imagePokemon" />
        </template>
        <template #title>
          <h2>Nome</h2>
          <p>{{ nomePokemon }}</p>
        </template>
        <template #subtitle>
          <h2>Abilidades</h2>
          <p>{{ abilidade1 }}</p>
          <p>{{ abilidade2 }}</p>
        </template>
        <template #footer>
            <div class="flex gap-3 mt-1">
              <FloatLabel>
                <InputText id="username" v-model="inputNome" />
                <label for="username">Nome ou Numero</label>
              </FloatLabel>
              <Button
                label="Buscar"
                text raised
                @click="buscarPokemon(inputNome)" />                
            </div>
        </template>
    </Card>    
  </div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&family=Work+Sans&display=swap');

  #card-pokemon{
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);

    .p-card{
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      .p-card-header{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        div{
          width: 100%;
          text-align: right;

          h2{
            color: black;
            font-size: 1.5rem;
            font-family: 'Work Sans', sans-serif;
            
          }
        }
        img{
          height: 10rem;

        }
      }
      .p-card-body{
        h2{
          color: #333;
          font-size: 1.2rem;
          font-weight: bold;
          font-family: 'Work Sans', sans-serif;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        }
        p{
          padding: .4rem 0 0 0;
          color: #333;
          font-size: 1rem;
          font-weight: normal;
          font-family: 'Work Sans', sans-serif;

        }
        .p-card-caption{
          margin: 1rem;
          display: flex;
          justify-content: space-evenly;

          .p-card-title{
            border-left: 1px solid rgba(0, 0, 0, 0.2);
            padding: .5rem;

          }
          .p-card-subtitle{
            border-left: 1px solid rgba(0, 0, 0, 0.2);
            padding: .5rem;

          }          
        }
        .p-card-footer{
          margin: 2rem 0;

          div{
            display: flex;
            justify-content: center;
            font-family: 'Work Sans', sans-serif;

            input{
              margin: 0 .2rem;
              padding-left: .3rem;
              height: 100%;
              box-shadow: -1px 1px 5px 1px rgba(0, 0, 0, 0.1);

            }
          }
        }
      }
    }
  }
</style>