<template>
  <div class="w-480px p-3">
    <!-- transform transition-all duration-500 -->
    <div
      class="w-full flex h-80px font-sans rounded-md bg-white hover:(text-white bg-purple-600 cursor-pointer transform transition-all duration-2000)"
    >
      <div class="w-1/3 flex justify-start items-center">
        <div class="flex justify-center w-full">
          <img
            class="rounded-full w-12 h-12 items-center"
            :src="data.image"
            alt=""
          />
        </div>
      </div>
      <div class="w-full flex">
        <div class="flex w-full flex-col justify-center pr-2">
          <h1 class="text-xl font-sans">{{ data.name }}</h1>
          <span class="text-xs">{{ data.singer }}</span>
        </div>
        <div class="flex flex-col justify-center pr-3">
          <More class="w-20px h-20px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import More from '~/icons/more.vue'
import More1 from '~/icons/more.vue'
export default {
  props: ['data'],
  components: { More, More },
}
</script>
