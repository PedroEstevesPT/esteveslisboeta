<!-- src/components/Hamburguer.vue -->
<template>
    <div class="mobile-menu">
      <button class="hamburger" @click="toggleMenu">☰</button>
      <div v-if="isMenuOpen" class="dropdown-menu animate__animated animate__fadeInDown">
        <router-link to="/" class="menu-link" @click="toggleMenu">Início</router-link>
        <router-link to="/discography" class="menu-link" @click="toggleMenu">Discografia</router-link>
        <router-link to="/collab" class="menu-link" @click="toggleMenu">Collab</router-link>
      </div>
    </div>
  </template>


  <script setup>
  import { ref } from 'vue'
  
  const isMenuOpen = ref(false)
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  </script>
  
  <style scoped>
  .mobile-menu {
    display: none;
  }
  
  @media (max-width: 768px) {
    .mobile-menu {
      display: flex;
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 2;
      flex-direction: column;
      align-items: flex-end;
    }
  
    .hamburger {
      color: white;
      font-size: 28px;
      padding: 10px 15px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  
    .dropdown-menu {
      width: 100%;
      min-width: 150px;
      background-color: rgba(255, 255, 255, 0.9);
      padding: 10px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: absolute;
      top: 50px;
      right: 0;
      z-index: 999;
      text-align: right;
      align-items: flex-end;
    }
  
    .menu-link {
      color: #333;
      text-decoration: none;
      font-size: 18px;
      transition: color 0.3s;
    }
  
    .menu-link:hover {
      color: #0077aa;
    }
  }
  </style>