<template>
  <div class="home">
      <component :is="layout">
        <router-view />
      </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'

export default {
  name: 'Home',
  computed:{
    layout(){
      console.log(this.$route.meta)
      return 'empty-layout'
    }
  },
  components: {
    EmptyLayout,
    MainLayout
  }
}
</script>
