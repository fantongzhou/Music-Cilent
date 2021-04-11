<template>
  <div class="page">
      <nav-header></nav-header>
      <router-view></router-view>
      <nav-footer></nav-footer>
  </div>
</template>

<script>
import navHeader from '../components/navheader'
import navFooter from '../components/navfooter'
export default {
    data(){
        return{
            
        }
    },
    components:{
        navHeader,
        navFooter
    }
}
</script>

<style>
body{
  margin:0;
}
</style>