<template>
  <section>
    <b-steps
      v-model="activeStep"
      :animated="false"
      :rounded="true"
      :has-navigation="false"
      :label-position="'right'"
    >
      <slot />
    </b-steps>
  </section>
</template>

<script>
export default {
  data () {
    return {
      activeStep: 0
    }
  }
}
</script>
