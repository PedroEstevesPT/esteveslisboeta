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
  /* Ensure the body element takes up 100% height and has no scrolling */
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  
  /* Ensure the root element takes up the full viewport height */
  #app {
    height: 100vh; /* Occupy full height of the viewport */
  }
  </style>