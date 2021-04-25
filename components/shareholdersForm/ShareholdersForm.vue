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
          <b-steps
            v-model="shareholdersForm.currentFormStep"
            :label-position="'right'"
            :size="'is-small'"
            :has-navigation="false"
            :animated="false"
            vertical
            type="is-success"
          >
            <b-step-item label="General data" :clickable="false">
              <GeneralDataForm :index="index" />
            </b-step-item>

            <b-step-item label="Personal data" :clickable="false">
              <PersonalDataForm :index="index" />
            </b-step-item>

            <b-step-item label="Contact details" :clickable="false">
              <ContactDetailsForm :index="index" />
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
import PersonalDataForm from '~/components/shareholdersForm/PersonalDataForm.vue'
import ContactDetailsForm from '~/components/shareholdersForm/ContactDetailsForm.vue'
import { ShareholdersForm } from '~/typings/interface'

export default Vue.extend({
  name: 'ShareholdersForm',
  components: {
    GeneralDataForm,
    PersonalDataForm,
    ContactDetailsForm
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
