<template>
  <section>
    <h1 class="title has-text-centered">
      Who will be the shareholders?
    </h1>
    <b-collapse
      v-for="(shareholder, index) of shareholdersForm.shareholders"
      :key="index"
      class="card"
      animation="slide"
      :open="shareholdersForm.isOpen == index"
      @open="shareholdersForm.isOpen = index"
    >
      <template #trigger="props">
        <div
          class="card-header"
          role="button"
        >
          <p class="card-header-title">
            {{ shareholder.title }}
          </p>
          <a class="card-header-icon">
            <b-icon
              :icon="props.open ? 'menu-down' : 'menu-up'"
            />
          </a>
        </div>
      </template>
      <div class="card-content">
        <div class="content">
          <ShareholdersFormComponent :index="index" />
        </div>
      </div>
    </b-collapse>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import ShareholdersFormComponent from '~/components/shareholdersForm/ShareholdersForm.vue'
import { ShareholdersForm } from '~/typings/interface'

export default Vue.extend({
  name: 'ShareholdersList',
  components: {
    ShareholdersFormComponent
  },
  computed: {
    shareholdersForm ():ShareholdersForm {
      return { ...this.$store.state.shareholdersForm }
    }
  },
  mounted () {
    if (localStorage.shareholders) {
      this.$store.commit('shareholdersForm/loadShareholders', JSON.parse(localStorage.shareholders))
    }
  }
})
</script>
