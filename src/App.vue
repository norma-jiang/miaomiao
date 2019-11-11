<template>
  <div id="app">
    <Header title="喵喵电影"/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <TagBar/>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import TagBar from "@/components/TagBar";
  export default {
    components:{
      Header,TagBar
    }
  }
</script>

<style>

</style>
