<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Landing from './components/Landing.vue'
import RotatingCard from './components/RotatingCard.vue'
</script>

<template>

  <!--   <Landing /> -->
  <RotatingCard
      frontImg="https://res.cloudinary.com/dho8ay2wz/image/upload/v1723380290/esteveslisboeta-site/kjhbioetmkx5tu9zoxls.png"
      backImg="https://res.cloudinary.com/dho8ay2wz/image/upload/v1723380291/esteveslisboeta-site/ataumibfsl8wu3yvvhb3.png"
      frontAlt="Front of Card"
      backAlt="Back of Card"
    />
    <br>



    <v-row  justify="center">

    <!-- Bandcamp Icon -->
    <v-col  cols="auto" md="1" xs="1" class="text-center">
      <v-hover v-slot:default="{ isHovering }">
        <v-sheet>
          <a href="https://bandcamp.com" target="_blank" class="d-block">
            <img
              src="https://res.cloudinary.com/dho8ay2wz/image/upload/v1723403928/esteveslisboeta-site/bandcamp-blue_ispfjy.svg"
              alt="Bandcamp"
              width="50"
              height="50"
              class="icon"
            />
          </a>
        </v-sheet>
      </v-hover>
    </v-col>
    <!-- YouTube Icon -->
    <v-col  cols="auto" md="1" xs="1" class="text-center">
      <v-hover v-slot:default="{ isHovering }">
        <v-sheet>
          <a href="https://youtube.com" target="_blank" class="d-block">
            <img
              src="https://res.cloudinary.com/dho8ay2wz/image/upload/v1723402451/esteveslisboeta-site/youtube-red_qeizlc.svg"
              alt="YouTube"
              width="50"
              height="50"
              class="icon"
            />
          </a>
        </v-sheet>
      </v-hover>
    </v-col>
    <!-- Spotify Icon -->
    <v-col  cols="auto" md="1" xs="1" class="text-center">
      <v-hover v-slot:default="{ isHovering }">
        <v-sheet>
          <a href="https://spotify.com" >
            <img
              src="https://res.cloudinary.com/dho8ay2wz/image/upload/v1723408294/spotify-green_cbhdq6.svg"
              alt="Spotify"
              width="50"
              height="50"
              class="icon"
            />
          </a>
        </v-sheet>
      </v-hover>
    </v-col>
    <!-- Instagram Icon -->
    <v-col  cols="auto" md="1" xs="1" class="text-center">
      <v-hover v-slot:default="{ isHovering }">
        <v-sheet>
          <a href="https://spotify.com" target="_blank" class="d-block">
            <img
              src="https://res.cloudinary.com/dho8ay2wz/image/upload/v1723412632/instagram_ujtrtk.png"
              alt="Spotify"
              width="50"
              height="50"
              class="icon"
            />
          </a>
        </v-sheet>
      </v-hover>
    </v-col>
  </v-row>

  <br>
  <p class="left-aligned-text">
    <span style="text-decoration: underline; color:blue;text-decoration-color: orange;">"Sabes Que Adoro Sair Contigo"</span> é o EP de estreia do artista independente português Esteves Lisboeta. 
    Lançado em Setembro de 2024, reúne 5 temas originais, escritos, tocados e cantados pelo mesmo: <br><br>
  </p>

  <ul class="aligned-list">
    <li> Canção da Meretriz </li>
    <li> Inesquecível Inês </li>
    <li> Sabes Que Adoro Sair Contigo </li>
    <li> Joana (Chamei O Teu Nome) </li>
    <li> Numa Travessa Perdida de Lisboa </li>
  </ul> <br>

  <h3> Créditos</h3> <br>

  <p class="left-aligned-text">
    A bateria da "Joana (Chamei O Teu Nome)" e o kick do "Sabes Que Adoro Sair Contigo" são da autoria de Pedro Joaquim Borges que masterizou as 5 faixas, tendo misturado também 4 
    das 5 faixas com excepção da "Canção da Meretriz" (que foi misturada por Esteves Lisboeta). <br><br>

    As primeiras duas quadras de "Numa Travessa Perdida de Lisboa" são da autoria de El Appleton.  <br><br>

    A fotografia da capa e contra-capa foi tirada por Carlota Leite e a edição e lettering das mesmas é da autoria de Paulina Wykowszka.
  </p>



  <br><br><br>



  

</template>

<style>
body {
  background-image: url('https://res.cloudinary.com/dho8ay2wz/image/upload/v1723422013/tile-grayedout-5_zawjsb.png');
  background-repeat: repeat; /* Ensures the image repeats */
  background-size: auto; /* Keeps the image at its original size */
  background-attachment: fixed; /* Makes sure the background stays in place when scrolling */
}
</style>

<style scoped>

.left-aligned-text {
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
}

.icon {
  background: none !important; /* Ensures no background color is applied */
  background-color: transparent !important;
  transition: filter 300ms ease-in-out, transform 300ms ease-in-out;
}

.icon:hover {
  transform: scale(1.4); /* Increase size on hover */
  filter: none; /* Restore original color on hover */
}

.aligned-list {
  list-style-position: outside;
  padding-left: 20px;
  margin-left: 0;
  text-align: left;
  max-width: 700px;
  margin: 0 auto;
}

.aligned-list li {
  margin-bottom: 5px;
}
</style>