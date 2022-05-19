<template>
  <div class="w-full h-screen bg-white flex justify-center items-center">
    <div
      class="w-100 h-50 bg-gray-800 hover:bg-gray-800/95 flex relative justify-center space-x-5 items-center cursor-pointer overflow-hidden rounded-xl"
      @mouseover="show = true"
      @mouseleave="show = false"
    >
      <div
        class="absolute left-2 top-full w-10 h-20 bg-indigo-800 transform transition-transform eaease-out duration-300"
        :class="show ? '-translate-y-25' : ''"
      ></div>
      <bc class="w-2/3 text-white" />
      <div
        class="absolute right-2 bottom-full w-10 h-20 bg-red-500 transform transition-transform eaease-out duration-300"
        :class="show ? 'translate-y-25' : ''"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      show: false,
    }
  },

  mounted() {},
  methods: {},
}
</script>
