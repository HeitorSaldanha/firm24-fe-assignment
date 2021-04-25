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
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleReturn () {
      const nextStep = this.$store.state.shareholdersForm.shareholders[this.index].currentFormStep - 1
      this.$store.commit('shareholdersForm/changeStep', { index: this.index, step: nextStep })
    }
  }
})
</script>
