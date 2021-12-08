<template>
  <Nav-main />
  <Home />
</template>

<script>
import NavMain from '@/components/NavMain.vue'
import Home from '@/components/Home.vue'
export default {
  components: {
    NavMain,
    Home
  },
  created() {
    this.$store.dispatch('loadData')
  }
}
</script>