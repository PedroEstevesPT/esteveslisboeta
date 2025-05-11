<template>

    <v-toolbar class=" desktop-only transparent-toolbar" flat>

      <v-spacer />
      
  
      <!-- Centered Menu Buttons -->
      <div class="nav-links" >
        <v-btn to="/" class="menu-vuetify-button" text>Início</v-btn>
        <v-btn to="/discography" class="menu-vuetify-button" text>Discografia</v-btn>
        <v-btn to="/collab" class="menu-vuetify-button" text>Collab</v-btn> <br>
      </div>
      
  
      <!-- Right side: Socials -->
      <div class="socials-wrapper">
        <Socials />
      </div>
  
      <v-spacer />
    </v-toolbar>
  </template>
  
  <script setup>
  import Socials from './Socials.vue'
  </script>
  
  <style scoped>
  /* Make the toolbar occupy 0 height and position it absolutely */
  .v-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute; /* Use absolute positioning */
    top: 0; /* Position at the top of the viewport */
    left: 0; /* Align to the left */
    right: 0; /* Align to the right */
    height: 0; /* Set height to 0 */
    padding: 0; /* Remove any internal padding */
    z-index: 10; /* Ensure it stays above other content */
  }
  
  /* Ensure toolbar is hidden on small screens */
  .desktop-only {
    display: none;
    padding-top: 5px;
  }
  
  @media (min-width: 960px) {
    .desktop-only {
      display: flex !important; /* Show the toolbar on medium devices and up */
    }
  }
  
  .transparent-toolbar {
    background-color: transparent !important;
    box-shadow: none !important;
  }
  
  .nav-links {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    flex: 0 1 auto;
  }
  
  .socials-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 16px;
  }
  
  /* Button color customization */
  .menu-vuetify-button {
    color: white !important;
    transition: color 0.3s ease;
  }
  
  .menu-vuetify-button:hover {
    color: yellow !important;
  }
  </style>