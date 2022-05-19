<template>
  <div class="w-full h-full bg-gray-200 flex justify-center shadow-md">
    <!-- dashbroad -->
    <div class="flex justify-center flex-col fixed">
      <div class="shadow-lg bg-white w-490px">
        <header class="items-center">
          <h1 class="text-red-500 text-stroke-1 text-xl flex justify-center">
            Now playing :
          </h1>
          <h2 class="flex justify-center text-2xl mb-3">
            {{ data.name || 'Welcome to music' }}
          </h2>
        </header>
        <!-- cd -->
        <audio id="myAudio" :src="data.path"></audio>
        <div class="flex justify-center w-full" id="cdThumb">
          <!-- animate-spin-slow -->
          <img
            id="cd-thumb-image"
            :src="
              data.image ||
              'https://thumbs.dreamstime.com/z/error-page-not-found-vector-vinyl-music-broken-graphic-error-page-not-found-vector-vinyl-music-broken-graphic-background-156624909.jpg'
            "
            alt=""
            class="w-200px h-200px rounded-full bg-red-500 cursor-pointer animate-spin-slow"
          />
        </div>

        <!-- control -->
        <div class="flex justify-center space-x-8 mt-6">
          <div class="cursor-pointer flex flex-col justify-center" @click="">
            <Replay v-if="!isRepeat" class="w-10 h-10 p-2 rounded-full" />
            <Replay v-else class="w-10 h-10 p-2 rounded-full text-red-500" />
          </div>
          <div @click="" class="cursor-pointer flex flex-col justify-center">
            <Back class="w-10 h-10 p-2 rounded-full" />
          </div>
          <div
            class="cursor-pointer flex flex-col justify-center"
            @click="togglePlay"
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
          <div class="cursor-pointer flex flex-col justify-center" @click="">
            <Next class="w-10 h-10 p-2 rounded-full" />
          </div>
          <div class="cursor-pointer flex flex-col justify-center" @click="">
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
    <div class="bg-gray-200 h-screen shadow-md mt-400px">
      <div v-for="item in songs" :key="item.id" @click="selectMusic(item)">
        <Music v-bind:data="item" />
      </div>
    </div>
    <!-- playlist -->
  </div>
</template>

<!-- <script>
import Back from '~/icons/back.vue'
import Replay from '~/icons/replay.vue'
import Play from '~/icons/play.vue'
import Pause from '~/icons/pause.vue'
import Next from '~/icons/next.vue'
import Random from '../icons/random.vue'
import Music from '../components/music.vue'
import { type } from 'os'
import { log } from 'console'
import { faBalanceScaleLeft } from '@fortawesome/free-solid-svg-icons'

export default {
  data() {
    return {
      currentIndex: 0,
      isPlaying: false,
      isRandom: false,
      isRepeat: false,
      isTimeUpdate: false,
      songs: [
        {
          id: 1,
          name: 'Có điều gì sao không nói cùng anh ',
          singer: 'Trung Quân Idol',
          path: 'https://nguyentamthanh.github.io/music-nuxt/assets/music/Trot-Yeu-Trung-Quan-Idol.mp3',
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
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    handleEvent = function () {
      const _this = this
      //Xử lý CD quay/dừng
      const cdThumbAnimate = cdThumb.animate(
        [{ transform: 'rotate(360deg)' }],
        {
          duration: 13000, // quay trong 13s thì hết 1 vòng
          iterations: Infinity, // lặp vòng quay vô cùng
        }
      )
      cdThumbAnimate.pause()
      //Xử lý phóng to thu nhỏ CD
      const cdWidth = cd.offsetWidth
      document.onscroll = function () {
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        const newCdWidth = cdWidth - scrollTop

        cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
        cd.style.opacity = newCdWidth / cdWidth
      }

      //Xử lý khi click play
      playBtn.onclick = function () {
        if (_this.isPlaying) {
          audio.pause()
        } else {
          audio.play()
        }
      }
      // Khi song được play
      audio.onplay = function () {
        _this.isPlaying = true
        player.classList.add('playing')
        cdThumbAnimate.play()
      }
      // Khi song bị pause
      audio.onpause = function () {
        _this.isPlaying = false
        player.classList.remove('playing')
        cdThumbAnimate.pause()
      }

      //khi thanh tiến độ Song thay đổi
      audio.ontimeupdate = function () {
        if (audio.duration) {
          const progressPercent = Math.floor(
            (audio.currentTime / audio.duration) * 100
          )
          progress.value = progressPercent
        }
      }
    }
  },
  methods: {},

  components: { Back, Replay, Play, Pause, Next, Random, Music },
}
</script> -->
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
