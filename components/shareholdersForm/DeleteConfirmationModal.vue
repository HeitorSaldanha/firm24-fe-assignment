<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title has-text-centered has-text-danger">
        Atention!
      </p>
    </header>
    <section class="modal-card-body">
      <p class="has-text-centered mb-5">
        Are you sure you want to remove {{ title }}
        {{
          `${firstName !== '' ? `, ${firstName}` : ''} ${surname !== '' ? `${surname}, ` : ''}`
        }} as a shareholder?
      </p>
      <div class="columns">
        <div
          class="column is-4 is-offset-4"
        >
          <b-button
            type="is-primary"
            class="mb-2"
            rounded
            expanded
            outlined
            @click="$emit('close')"
          >
            No, do not delete
          </b-button>
          <b-button
            type="is-danger"
            expanded
            rounded
            @click.prevent="deleteShareholder(index)"
          >
            Yes, remove
          </b-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DeleteConfirmationModal',
  props: {
    title: {
      type: String,
      default: ''
    },
    firstName: {
      type: String,
      default: ''
    },
    surname: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    deleteShareholder (index:number) {
      this.$store.commit('shareholdersForm/removeShareholder', index)
      localStorage.shareholders = JSON.stringify(this.$store.state.shareholdersForm.shareholders)
      this.$emit('close')
    }
  }
})
</script>
