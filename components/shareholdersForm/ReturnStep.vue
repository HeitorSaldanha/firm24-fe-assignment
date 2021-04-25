<template>
  <a
    @click.prevent="handleReturn"
  >
    &#8592; Go Back
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ReturnStep',
  methods: {
    handleReturn () {
      const nextStep = this.$store.state.shareholdersForm.currentFormStep - 1
      this.$store.commit('shareholdersForm/changeStep', nextStep)
    }
  }
})
</script>
