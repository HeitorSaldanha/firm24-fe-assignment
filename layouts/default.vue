<template>
  <div>
    <TopNav />
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav'
export default {
  name: 'HomePage',

  components: {
    TopNav
  }
}
</script>
