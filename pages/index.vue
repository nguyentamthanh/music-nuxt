<template>
  <div
    class="w-full h-full flex justify-center !bg-gradient-to-r !from-red-500 !via-yellow-500 !to-blue-500"
  >
    <!-- dashbroad -->
    <div
      class="flex justify-center flex-col fixed backdrop-filter backdrop-blur-md"
    >
      <div class="shadow-lg w-480px pb-2">
        <header class="items-center">
          <h1 class="text-red-500 text-stroke-1 text-xl flex justify-center">
            Now playing :
          </h1>
          <h2 class="flex justify-center text-2xl mb-3 text-white">
            {{ cdname }}
          </h2>
        </header>
        <!-- cd -->
        <audio id="myAudio" :src="data.path"></audio>
        <div class="flex justify-center w-full" id="cdThumb">
          <!-- animate-spin-slow -->
          <img
            id="cd-thumb-image"
            :src="cd"
            alt=""
            class="w-200px h-200px rounded-full bg-red-500 cursor-pointer animate-spin-slow"
          />
        </div>

        <!-- control -->
        <div class="flex justify-center space-x-8 mt-6">
          <div
            class="cursor-pointer flex flex-col justify-center"
            @click="replayAudio()"
          >
            <Replay v-if="!isRepeat" class="w-10 h-10 p-2 rounded-full" />
            <Replay v-else class="w-10 h-10 p-2 rounded-full text-red-500" />
          </div>
          <div
            @click="backAudio()"
            class="cursor-pointer flex flex-col justify-center"
          >
            <Back class="w-10 h-10 p-2 rounded-full" />
          </div>
          <div
            class="cursor-pointer flex flex-col justify-center"
            @click="togglePlay()"
          >
            <Play
              v-if="!is_playing"
              class="w-15 h-15 border p-3 rounded-full bg-red-500 text-white"
            />

            <Pause
              v-else
              class="w-15 h-15 border p-3 rounded-full bg-red-500 text-white"
            />
          </div>
          <div
            class="cursor-pointer flex flex-col justify-center"
            @click="nextAudio()"
          >
            <Next class="w-10 h-10 p-2 rounded-full" />
          </div>
          <div
            class="cursor-pointer flex flex-col justify-center"
            @click="randomAudio()"
          >
            <Random v-if="!isRandom" class="w-10 h-10 p-2 rounded-full" />
            <Random v-else class="w-10 h-10 p-2 rounded-full text-red-500" />
          </div>
        </div>
        <div class="px-5 my-2">
          <input
            id="progress"
            class="slider"
            type="range"
            value="0"
            step="2"
            min="0"
            max="100"
          />
        </div>

        <!-- music -->
      </div>
    </div>
    <div class="h-screen shadow-md mt-400px">
      <div
        v-for="(item, index) in songs"
        :key="item.id"
        @click="selectMusic(item)"
      >
        <Music v-bind:data="item" />
      </div>
    </div>
    <!-- playlist -->
  </div>
</template>

<script>
import Back from '~/icons/back.vue'
import Replay from '~/icons/replay.vue'
import Play from '~/icons/play.vue'
import Pause from '~/icons/pause.vue'
import Next from '~/icons/next.vue'
import Random from '../icons/random.vue'
import Music from '../components/music.vue'
import { type } from 'os'
import { log } from 'console'

export default {
  name: 'IndexPage',
  data() {
    return {
      cd: 'https://thumbs.dreamstime.com/z/error-page-not-found-vector-vinyl-music-broken-graphic-error-page-not-found-vector-vinyl-music-broken-graphic-background-156624909.jpg',
      cdname: 'Welcome to music',
      data: '',
      player: '',
      is_playing: false,
      isActive: false,
      currentIndex: 0,
      isPlaying: false,
      isRandom: false,
      isRepeat: false,
      isTimeUpdate: false,
      is_playing: false,
      songs: [
        {
          id: 1,
          name: 'Có điều gì sao không nói cùng anh ',
          singer: 'Trung Quân Idol',
          path: 'https://nguyentamthanh.github.io/music-nuxt/assets/music/Co-Dieu-Gi-Sao-Khong-Noi-Cung-Anh-Trung-Quan-Idol.mp3',
          image:
            'https://giaithuongtinhnguyen.vn/tieu-su-trung-quan-idol/imager_1_5795_700.jpg',
        },
        {
          id: 2,
          name: 'Phía sau một cô gái ',
          singer: 'Soobin Hoàng Sơn',
          path: 'https://nguyentamthanh.github.io/music-nuxt/assets/music/Phia-Sau-Mot-Co-Gai-SOOBIN.mp3',
          image: 'https://vnn-imgs-f.vgcloud.vn/2019/02/22/09/img-3722.jpg',
        },
        {
          id: 3,
          name: 'Trót yêu',
          singer: 'Trung Quân Idol',
          path: 'https://nguyentamthanh.github.io/music-nuxt/assets/music/Trot-Yeu-Trung-Quan-Idol.mp3',
          image:
            'https://image.thanhnien.vn/w2048/Uploaded/2022/jhvabun/2021_08_20/mmg0914_2_eykf.png',
        },

        {
          id: 4,
          name: 'Xin đừng lặng im ',
          singer: 'Soobin Hoàng Sơn',
          path: 'https://nguyentamthanh.github.io/music-nuxt/assets/music/Xin-Dung-Lang-Im-SOOBIN.mp3',
          image:
            'https://livestream.vn/wp-content/uploads/2019/02/1532919878451_600.jpg',
        },
      ],
    }
  },

  mounted() {
    const x = document.querySelector.bind(document)
    const cdthumbing = x('#cd-thumb-image')
    const cdthumb = x('#cdThumb')
    const cdWidth = cdthumbing.offsetWidth
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const newCdWidth = cdWidth - scrollTop
      cdthumbing.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
      cdthumbing.style.height = newCdWidth > 0 ? newCdWidth + 'px' : 0
      cdthumbing.style.opacity = newCdWidth / cdWidth
    }
    this.player = this.$el.querySelector('#myAudio')
    let self = this
    this.player.onplay = function () {
      self.is_playing = true
    }
    this.player.onpause = function () {
      self.is_playing = false
    }
    this.player.ontimeupdate = function () {
      if (self.player.duration) {
        const progressPercent = Math.floor(
          (self.player.currentTime / self.player.duration) * 100
        )
        progress.value = progressPercent
      }
    }
    progress.onchange = function (e) {
      const seekTime = (self.player.duration / 100) * e.target.value
      self.player.currentTime = seekTime
    }
  },
  methods: {
    selectMusic(item) {
      if (this.is_playing) {
        this.player.pause()
      }
      this.cd = item.image
      this.cdname = item.name

      this.data = item
      let self = this
      setTimeout(function () {
        self.player.play()
      }, 150)
    },
    togglePlay() {
      if (this.player) {
        console.log(this.player.paused)
        if (this.is_playing) {
          console.log('pause')
          this.player.pause()
        } else {
          console.log('play')
          this.player.play()
        }
      } else {
        console.log('player null')
      }
    },

    nextAudio() {
      this.currentIndex++

      if (this.currentIndex >= this.songs.length) {
        this.currentIndex = -1
      } else {
        this.player.src = this.songs[this.currentIndex].path
        this.cd = this.songs[this.currentIndex].image
        this.cdname = this.songs[this.currentIndex].name
        this.player.play()
      }
    },
    backAudio() {
      this.currentIndex--
      if (this.currentIndex < 0) {
        this.currentIndex = 4
      } else {
        this.player.src = this.songs[this.currentIndex].path
        this.cd = this.songs[this.currentIndex].image
        this.cdname = this.songs[this.currentIndex].name
        this.player.play()
      }
    },
    replayAudio() {
      this.isRepeat = !this.isRepeat
      if (this.isRepeat) {
        this.player.loop = true
        this.player.play()
      } else {
        this.player.pause()
      }
    },
    randomAudio() {
      this.isRandom = !this.isRandom
      if (this.isRandom) {
        let random
        this.player.play()
        this.player.src = random
        random = this.songs[[Math.floor(Math.random() * this.songs.length)]]
        console.log(random.path)
        this.nextAudio()
        this.replayAudio()
      } else {
        this.player.pause()
      }

      // var audio = new Audio(random_file())

      // this.player.play()

      // this.player.addEventListener(
      //   'ended',
      //   function () {
      //     audio.play(random_file())
      // }
      // audio_files[Math.floor(Math.random() * audio_files.length)]
      // this.player.src = this.data.path
      // this.player.play()
    },
  },

  components: { Back, Replay, Play, Pause, Next, Random, Music },
}
</script>
<style>
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 7px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  cursor: pointer;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 7px;
  background: red;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 7px;
  background: red;
  cursor: pointer;
}
</style>
