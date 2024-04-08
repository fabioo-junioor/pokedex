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
    <Card>
        <template #header>
            <div class="id-pokemon">
              <h2>#{{ numeroPokemon }}</h2>
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
                text raised
                @click="buscarPokemon(inputNome)">
                  <img src="../assets/icon/bx-search.svg" />
                </Button>
            </div>
        </template>
    </Card>    
  </div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&family=Work+Sans&display=swap');

  #card-pokemon{
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    border-radius: 11px;
    transition: all .3s;
    width: 35rem;
    height: 35rem;

    .p-card{
      background-color: #1a1a1a;
      transition: all .2s;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;

      .p-card-header{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 0 1rem 0;

        div{
          width: 100%;
          text-align: right;

          h2{
            color: white;
            font-size: 1.5rem;
            margin: .5rem .7rem 0 0;
            font-family: 'Work Sans', sans-serif;
            
          }
        }
        img{
          height: 13rem;

        }
      }
      .p-card-body{
        width: 100%;

        h2{
          color: white;
          font-size: 1.2rem;
          font-weight: bold;
          font-family: 'Work Sans', sans-serif;
          border-bottom: 1px solid white;

        }
        p{
          padding: .4rem 0 0 0;
          color: rgba(255, 255, 255, .8);
          font-size: 1rem;
          font-weight: normal;
          font-family: 'Work Sans', sans-serif;

        }
        .p-card-caption{
          margin: 1rem 0;
          padding: 1rem 0;
          display: flex;
          justify-content: space-evenly;

          .p-card-title{
            border-left: 1px solid rgba(255, 255, 255, .8);
            padding: .5rem;

          }
          .p-card-subtitle{
            border-left: 1px solid rgba(255, 255, 255, .8);
            padding: .5rem;

          }          
        }
        .p-card-footer{
          margin: 2rem 0 0 0;

          div{
            width: 100%;
            display: flex;
            justify-content: space-around;
            font-family: 'Work Sans', sans-serif;
          
            span{
              width: 70%;

              input{
                margin: 0 .2rem;
                padding-left: .3rem;
                height: 100%;
                width: 100%;
                color: #1a1a1a;
                font-weight: 600;
                box-shadow: -1px 1px 5px 1px rgba(0, 0, 0, 0.1);

                &:focus + label{
                  color: rgba(255, 255, 255, .8);

                }
              }
              label{
                color: #1a1a1a;
                font-weight: 600;

              }
            }
            .p-button{
              width: 25%;
              display: flex;
              justify-content: center;
              background-color: white;
              border: none;
              
              img{
                text-align: center;
                width: 2rem;
                
              }
              &:hover{
                background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
                box-shadow: 0px 0px 10px 1px rgba(0, 255, 117, 0.30);

              }
            }
          }
        }
      }
      &:hover{
        transform: scale(0.98);
        border-radius: 10px;

      }
    }
    &:hover{
      box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
    
    }
  }
</style>