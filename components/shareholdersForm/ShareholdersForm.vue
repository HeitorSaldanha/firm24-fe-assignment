<template>
  <section>
    <h1 class="title has-text-centered">
      Who will be the shareholders?
    </h1>
    <b-collapse
      v-for="(shareholder, index) of $store.state.shareholdersForm.shareholders"
      :key="index"
      class="card"
      animation="slide"
      :open="$store.state.shareholdersForm.isOpen == index"
      @open="$store.state.shareholdersForm.isOpen = index"
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
          <b-steps
            v-model="$store.state.shareholdersForm.currentFormStep"
            :label-position="'right'"
            :size="'is-small'"
            :has-navigation="false"
            :animated="false"
            vertical
            type="is-success"
          >
            <b-step-item label="General data">
              <GeneralDataForm />
            </b-step-item>

            <b-step-item label="Personal data">
              Lorem Ipsum Dolor Sit Amet
            </b-step-item>

            <b-step-item label="Contact details">
              Lorem Ipsum Dolor Sit Amet
            </b-step-item>
          </b-steps>
        </div>
      </div>
    </b-collapse>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import GeneralDataForm from '~/components/shareholdersForm/GeneralDataForm.vue'

export default Vue.extend({
  name: 'ShareholdersForm',

  components: {
    GeneralDataForm
  }
})
</script>
