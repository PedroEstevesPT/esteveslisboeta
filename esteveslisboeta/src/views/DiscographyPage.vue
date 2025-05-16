<template>
  <div class="app-wrapper">
    <!-- Background Video -->
    <video autoplay muted loop id="background-video">
      <source src="https://res.cloudinary.com/dho8ay2wz/video/upload/v1747009772/color-grading4_hlq08h.mp4" type="video/mp4" />
    </video>

    <!-- Page Content -->
    <div class="page-container">
      <div class="discografia-container">
        <Hamburguer />
        <h1 class="page-title">Discografia</h1>

        <section v-for="album in albums" :key="album.title" class="album-section">
          <div class="album-header">
            <div style="max-width: 300px; width: 100%;">
              <RotatingCard
                :frontImg="album.cover"
                :backImg="album.backCover"
                :frontAlt="album.title"
                :backAlt="album.title"
              />
            </div>

            <div class="album-info">
              <h2 class="album-title">{{ album.title }}</h2>
              <p class="album-description">{{ album.description }}</p>
              <div class="album-links">
                <a
                  v-for="link in album.links"
                  :key="link.label"
                  :href="link.url"
                  target="_blank"
                >
                  <img
                    :src="link.icon"
                    :alt="link.label"
                    class="platform-icon"
                  />
                </a>
              </div>
            </div>
          </div>

          <ul class="tracklist">
            <li v-for="(track, index) in album.tracks" :key="index" class="track">
              <div class="track-header">
                <div
                  class="track-title-wrapper"
                  @click="toggleLyrics(album.title, index)"
                >
                  <span class="track-title">{{ track.title }}</span>
                  <div class="songwriter"><b>Letra:</b> {{ track.songwriter }}</div>
                </div>
                <div class="track-icons">
                  <span
                    class="spotify-icon"
                    @click.stop="toggleSpotify(album.title, index)"
                    title="Play on Spotify"
                  >
                    🎵
                  </span>
                  <span
                    class="toggle-icon"
                    @click.stop="toggleLyrics(album.title, index)"
                    title="Show/Hide Lyrics"
                  >
                    {{ isLyricsExpanded(album.title, index) ? '−' : '+' }}
                  </span>
                </div>
              </div>

              <!-- Lyrics Display -->
              <div v-if="isLyricsExpanded(album.title, index)" class="lyrics-text">
                {{ track.lyrics }}
              </div>

              <!-- Spotify Embed -->
              <div v-if="isSpotifyVisible(album.title, index)" class="spotify-embed">
                <iframe
                  style="border-radius:12px"
                  width="100%"
                  height="80"
                  :src="getSpotifyEmbedURL(track.spotify)"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Hamburguer from '../components/Hamburguer.vue'
import RotatingCard from '../components/RotatingCard.vue'

const expanded = reactive({})

const toggleLyrics = (albumTitle, trackIndex) => {
  const key = `${albumTitle}-${trackIndex}-lyrics`
  expanded[key] = !expanded[key]
}

const isLyricsExpanded = (albumTitle, trackIndex) => {
  return expanded[`${albumTitle}-${trackIndex}-lyrics`]
}

const toggleSpotify = (albumTitle, trackIndex) => {
  const key = `${albumTitle}-${trackIndex}-spotify`
  expanded[key] = !expanded[key]
}

const isSpotifyVisible = (albumTitle, trackIndex) => {
  return expanded[`${albumTitle}-${trackIndex}-spotify`]
}

const getSpotifyEmbedURL = (spotifyURL) => {
  if (!spotifyURL) return ''
  const match = spotifyURL.match(/track\/([a-zA-Z0-9]+)/)
  return match
    ? `https://open.spotify.com/embed/track/${match[1]}?utm_source=generator`
    : ''
}


const albums = [
  {
    title: "Sabes Que Adoro Sair Contigo",
    cover: "https://res.cloudinary.com/dho8ay2wz/image/upload/v1724005660/esteveslisboeta-site/nzzdvqu043viblg5xih1.jpg",
    backCover: "https://res.cloudinary.com/dho8ay2wz/image/upload/v1724005665/esteveslisboeta-site/kdajhtnq9w8r2yok8hjb.jpg",
    description: "1º EP com 5 canções originais arranjadas, cantadas e tocadas por Esteves Lisboeta.",
    links: [
      {
        label: "Spotify",
        url: "https://open.spotify.com/album/7ruRgT7n8LX0HGNkMwJI8J",
        icon: "https://res.cloudinary.com/dho8ay2wz/image/upload/v1723408294/spotify-green_cbhdq6.svg",
      },
      {
        label: "Bandcamp",
        url: "https://esteveslisboeta.bandcamp.com/album/sabes-que-adoro-sair-contigo",
        icon: "https://res.cloudinary.com/dho8ay2wz/image/upload/v1723584042/esteveslisboeta-site/bandcamp-blue_szs36d.svg",
      },
    ],
    tracks: [
      {
        title: "Canção da Meretriz",
        songwriter: "Esteves Lisboeta",
        lyrics: "A maldita meretriz do D. Luís (queria)\nSer atriz mas não foi nada\nVi-a ontem a sangrar do nariz\nCom um nite em cada mão\nToda engasgada\nPara quem era a melhor, de casta superior\nAgora a cena está deveras...\nCom-pli-ca-da\nAntes eras o centro das atenções\nPorém puseram-te no banco (foste isolada)\nAntes contagiavas todos com as tuas ambições\nMas agora afastas multidões como uma c****\nTrocaste o palco de teatro por um monte de ilusões\nVais em direcção à décima rodada e eu...\nEstou mais perto de ir para longe\nEstou mais perto de ir para longe de ti\nEu estou mais perto de ir para longe\nMuito mais perto de ir para longe\nIsto não são só palavras, isto é um ultimato\nEu não vou ficar aqui para ver o último ato\nEu não vou ficar aqui para ver o fim desta peça\nTal desfecho não me interessa, não há nada que me impeça\nPeça por peça tombas como um dominó\nQuerias ser Ofélia e Julieta, mas agora metes dó\nVai para casa, dá o baza, pensa no que estás a fazer\nVai para casa, dá o baza, porque é que estás a tremer?\nDeve ser de andares por aí... Aos trambolhões\nPerdidas nos teus ideais e opiniões\nSe é assim que queres viver, não te irei demover\nCortamos relações, não me voltarás a ver porque eu estou...\nMais perto de ir para longe\nMais perto de ir para longe de ti\nMais perto de ir para longe\nMais perto de ir para longe de ti\nMais perto de ir para longe eu estou\nMais perto de ir para longe eu vou\nMais perto de ir para longe eu sou\nMais esperto do que tu",
        spotify: "https://open.spotify.com/track/1QDTNp6iZio4Uvo1eywNof"
      },
      {
        title: "Inesquecível Inês",
        songwriter: "Esteves Lisboeta",
        lyrics: "Inesquecível Inês, vou dizer-te outra vez\nTu pões-me bem, fazes sentir-me como alguém\nNunca pensei.. voltar a ser feliz, refém\nMas como vês tudo se refez\n\nDá-me uma hipótese e provo-a agora\nSe chumbar então vou-me embora\nEstudar Matemática até ter prática\nPra veres que não estou à nora\nÉs a musa que me dá inspiração\nÉs a hipotenusa da minha equação\nResolvo todos os teus sistemas, sem problemas\nO que digo não é em vão.. são teoremas!\n\nNão há mal nenhum em esperar no fim da fila\nConsigo ordená-la com Bubblesort\n'Mas olha, esse algoritmo não vacila?\n'Tens razão vou usar um que se comporte\nA complexidade vai baixar\nE isso não poderás negar!\nO linear será logaritmo\nO Merge Sort é o melhor algoritmo\nO Merge Sort é o melhor algoritmo\n\nInesquecível Inês, vou dizer-te outra vez\nTu pões-me bem, fazes sentir-me como alguém\nNunca pensei.. sou burro okay?\nSó conto até três\nUm, dois, três, cinco Inês\n\nNão vês?\nO nosso tempo está-se a acabar\nSó quero levar-te ao altar\nNa lua de mel vamos programar\nEspero que não leves isto da forma errada\nSe a canção tiver sido inesperada\nPois esse não era de todo o meu plano\nAntes estava triste, quando surgiste eu ri mano (Riemann)\n\nNão há mal nenhum em esperar no fim da fila\nConsigo ordená-la com Bubblesort\n'Mas olha, esse algoritmo não vacila?\n'Tens razão vou usar um que se comporte\nA complexidade vai baixar\nSe não percebes então vai estudar!\nO linear será logaritmo\nO Quick Sort é o melhor algoritmo\nO Quick Sort é o melhor algoritmo\n\nInesquecível Inês, vou dizer-te outra vez\nTu pões-me bem, fazes sentir-me como alguém\nNunca pensei.. voltar a ser feliz, refém\nMas como vês, tudo se refez, Inês",
        spotify: "https://open.spotify.com/track/3JrKqCebWyhhSMPNDRxqru"

      },
      {
        title: "Sabes Que Adoro Sair Contigo",
        songwriter: "Esteves Lisboeta",
        lyrics: "Sabes que adoro sair contigo\nPara ajudar a restauração\nPerdi a carteira e os meus sentidos\nNo Pavilhão quando agarrei na tua mão\nMas hoje proponho fazermos algo diferente\nEm vez de estarmos frente a frente a dar ao dente\nSei que queres, consigo ler-te a mente\n\nLentamente junta a tua voz\nAos acordes que trino nesta guitarra\nEm cima da cama, nós os dois a sós\nApós breves momentos algo começara\nA ganhar contornos duma nova canção\nCai no ouvido esta nossa composição\nTem tanto sentido como uma oração\n\nAgora sabes o que oiço nos transportes\nDe manhã cedo quando vou pró emprego\nSinceramente espero que não te importes\nNem que te cause nenhum desassossego\nEstar sempre a ouvir esta mesma melodia\nEla faz-me sorrir e completa-me o dia\nNem sabia a falta que me fazia",
        spotify: "https://open.spotify.com/track/690wwiCtEDrTiIsc5LTQpJ"

      },
      {
        title: "Joana (Chamei O Teu Nome)",
        songwriter: "Esteves Lisboeta",
        lyrics: "Joana, eu disse Joana\nAjuda-me por favor Joana\nJá não sei o que hei de fazer\nJá não sei o que hei de dizer\n\nTentei fazer por ti o que mais nenhum fazia ... mas\nTu foste ficando cada vez mais fria ... e\nAinda assim juro que repetia tudo\nDava-te a minha pessoa, tempo, energia\nSou sortudo e o mais azarado\nPor te ter encontrado, por te ter tocado\nJoana, Joana\n\nChamei o teu nome Joana\nAjuda-me por favor Joana\nJá não sei o que hei de fazer\nJá não sei o que hei de dizer\n\nEstou a ser honesto, não estou a ser dramático\nPara mim amar-te é um reflexo quase automático\nProvavelmente tu já tens outro alguém\nSe assim for manda cumprimentos à tua mãe\nEu tento seguir o meu caminho\nVou morrer sozinho\nVou morrer sozinho\n\nJoana, Joana\nJoana, chamei o teu nome Joana\nAjuda-me por favor Joana\nJá não sei o que hei de fazer\nJá não sei o que hei de dizer\nJá não sei o que hei de fazer\nJá não sei o que hei de dizer",
        spotify: "https://open.spotify.com/track/3NTwIBCZdeOnxGlG1YEGQK"
      },
      {
        title: "Numa Travessa Perdida de Lisboa",
        songwriter: "Miguel Appleton/Esteves Lisboeta",
        lyrics: "Numa Travessa Perdida de Lisboa\nLá em cima sob o azul gasto das portadas\nDa janela dumas quaisquer águas-furtadas\nPousa uma gaivota como numa proa\n\nVai guiando imponente, sem vaidade\nCorta as ondas, a névoa e o peito seu\nDá branco ao mar, à terra e ao céu\nE vai comandando este navio-cidade\n\nEntre paredes forradas de azulejo\nInvade-me fatalmente uma saudade\nPor quem já não vejo há uma eternidade\nCaem lágrimas que desaguam no Tejo\n\nCom a cabeça quente do vinho tragado\nTrago numa memória o teu sеmblante\nQuem me dеra poder vê-lo doravante\nMas tu navegas em direcção ao passado\n\nNuma Travessa Perdida de Lisboa\nLá em cima sob o azul gasto das portadas\nDa janela dumas quaisquer águas-furtadas\nPousa uma gaivota como numa proa\n\nVai guiando imponente, sem vaidade\nCorta as ondas, a névoa e o peito seu\nDá branco ao mar, à terra e ao céu\nE vai comandando este navio-cidade",
        spotify: "https://open.spotify.com/track/6TIQIQLe76g2KFQLYTtmd4"


      }
    ],
  },
]


</script>

<style scoped>

/* ========== Base Reset ========== */
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

.mobile-only {
  display: none;
}

/* ========== Layout Containers ========== */
.app-wrapper {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

.page-container {
  position: relative;
  padding: 2rem 1rem;
  z-index: 2;
}

.discografia-container {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .discografia-container {
    margin-top: 3rem;
  }

  .page-title {
    display: none;
  }
}

/* ========== Background Video ========== */
#background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}

/* ========== Typography ========== */
.page-title {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: bold;
}

.album-title {
  color: white;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}

.album-description {
  color: white;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.track-title {
  color: white;
}

.track-title-wrapper {
  display: flex;
  flex-direction: column;
  color: white;
}

.songwriter {
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: normal;
  text-align: left;
  align-self: flex-start;
}

/* ========== Album Layout ========== */
.album-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.album-cover {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.album-info {
  flex: 1;
  min-width: 240px;
  max-width: 600px;
  text-align: left;
}

/* ========== Album Links ========== */
.album-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.platform-icon {
  width: 28px;
  height: 28px;
  filter: brightness(0) saturate(100%) invert(100%);
  transition: filter 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.platform-icon:hover {
  filter: none;
  transform: scale(1.2);
}

/* ========== Tracklist ========== */
.tracklist {
  list-style: none;
  padding: 0;
}

.track {
  border-top: 1px solid #ccc;
  padding: 0.75rem 0;
}

.track-header {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
}

.toggle-icon {
  font-size: 1.5rem;
  color: white;
}

/* ========== Lyrics ========== */
.lyrics {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: #333;
  text-align: center;
  white-space: pre-wrap;
}

.lyrics-text {
  color: white;
  font-family: monospace;
  text-align: center;
  white-space: pre-wrap;
}

/* ========== Responsive Styles ========== */
@media (max-width: 768px) {
  .album-header {
    flex-direction: column;
    align-items: center;
  }

  .album-info {
    text-align: center;
  }

  .mobile-only {
    display: block;
    position: relative;
  }


  .page-title {
    font-size: 2rem;
  }

  .album-title {
    font-size: 1.5rem;
  }

  .album-description {
    font-size: 0.9rem;
  }

  .track-header {
    font-size: 1rem;
  }

  .lyrics {
    font-size: 0.85rem;
    padding: 0 1rem;
  }

  .mobile-socials-bottom {
    position: fixed;
    bottom: 2vh;
    left: 0;
    width: 100%;
    z-index: 100;
    display: flex;
    justify-content: center;
    padding: 30px 0;
  }
}


</style>