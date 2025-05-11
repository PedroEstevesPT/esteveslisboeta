<template>
    <div class="socials">
      <div class="toolbar animate__animated animate__fadeIn">
        <a
          href="https://www.instagram.com/esteves.lisboeta/"
          target="_blank"
          class="toolbar-item svg-wrapper"
        >
          <img
            src="https://res.cloudinary.com/dho8ay2wz/image/upload/v1723412632/instagram_ujtrtk.png"
            alt="Instagram"
            class="toolbar-icon"
          />
        </a> 
        <a
          href="https://open.spotify.com/album/7ruRgT7n8LX0HGNkMwJI8J"
          target="_blank"
          class="toolbar-item svg-wrapper"
        >
          <img
            src="https://res.cloudinary.com/dho8ay2wz/image/upload/v1723408294/spotify-green_cbhdq6.svg"
            alt="Spotify"
            class="toolbar-icon"
          />
        </a>
        <a
          href="https://esteveslisboeta.bandcamp.com/album/sabes-que-adoro-sair-contigo"
          target="_blank"
          class="toolbar-item svg-wrapper"
        >
          <img
            src="https://res.cloudinary.com/dho8ay2wz/image/upload/v1723584042/esteveslisboeta-site/bandcamp-blue_szs36d.svg"
            alt="Bandcamp"
            class="toolbar-icon"
          />
        </a>
        <a
          href="https://www.youtube.com/playlist?list=OLAK5uy_lwNsjq8B1IHtGpTP_DtvGMBT8qGdGEoic"
          target="_blank"
          class="toolbar-item svg-wrapper"
        >
          <img
            src="https://res.cloudinary.com/dho8ay2wz/image/upload/v1723402451/esteveslisboeta-site/youtube-red_qeizlc.svg"
            alt="YouTube"
            class="toolbar-icon"
          />
        </a>
      </div>
    </div>
  </template>
  
  <style scoped>
  .socials {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 0;
    position: relative;
    z-index: 1;
  }
  
  .toolbar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .toolbar-item {
    display: inline-block;
  }
  
  .toolbar-icon {
    width: 25px;
    height: 25px;
    object-fit: contain;
    transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
  }
  
  .svg-wrapper img {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(1901%) hue-rotate(179deg) brightness(95%) contrast(88%);
    transition: filter 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
  
  .svg-wrapper:hover img {
    filter: none;
    transform: scale(1.2);
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .toolbar {
      gap: 16px;
    }
  
    .toolbar-icon {
      width: 30px;
      height: 30px;
    }
  }
  </style>