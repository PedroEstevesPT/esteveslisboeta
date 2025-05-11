<template>
    <div>
        <TopNav />
        <router-view />
    </div>
</template>
  
  <script setup>
  import TopNav from './components/TopNav.vue'
  </script>
  
<style>
* {
  box-sizing: border-box;
}

html, body {
  overflow-x: hidden;
  width: 100%;
}

#app {
  overflow-x: hidden;
}
</style>