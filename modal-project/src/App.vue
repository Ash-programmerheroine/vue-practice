<template>
  <div>
    <h1>{{title}}</h1>
    <br>
    <div v-if="showModal">
      <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/>
    </div>
    <br>
    <button @click.alt="toggleModal">open modal(alt)</button>
    <br>
    <!-- <input type="text" ref="name">
    <button @click="handleClick">Click me</button> -->
    
  </div>
  
</template>

<script>

import Modal from './components/Modal'
export default {
  name: 'App',
  components:{ Modal },
   data(){
    return{
      title: 'My First vue App',
      header:'Sign up for the giveaway!',
      text:'Grab Your ninja swag for half price!',
      showModal:false
    }
    },
    methods:{
      toggleModal(){
        this.showModal=!this.showModal
      },
      handleClick()
      {
        console.log(this.$refs.name)
        this.$refs.name.classList.add('active')
        this.$refs.name.focus()
      }
    }
 }

</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display:inline-block;
  padding-bottom:10px;
}
</style>
