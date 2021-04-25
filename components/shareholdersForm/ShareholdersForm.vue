<template>
  <b-steps
    v-model="shareholders[index].currentFormStep"
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
</template>

<script lang="ts">
import Vue from 'vue'
import GeneralDataForm from '~/components/shareholdersForm/GeneralDataForm.vue'
import PersonalDataForm from '~/components/shareholdersForm/PersonalDataForm.vue'
import ContactDetailsForm from '~/components/shareholdersForm/ContactDetailsForm.vue'
import { Shareholder } from '~/typings/interface'

export default Vue.extend({
  name: 'ShareholdersList',
  components: {
    GeneralDataForm,
    PersonalDataForm,
    ContactDetailsForm
  },
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    shareholders ():Shareholder[] {
      return { ...this.$store.state.shareholdersForm.shareholders }
    }
  }
})
</script>
