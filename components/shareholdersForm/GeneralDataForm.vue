<template>
  <section>
    <div
      class="columns"
    >
      <div
        class="column is-three-fiths is-offset-1"
      >
        <h3 class="title has-text-primary">
          General data
        </h3>
        <b-field label="Will you become a shareholder as a person or an (existing) company?">
          <b-radio
            v-model="generalData.naturalPerson"
            name="naturalPersonRadio"
            :native-value="true"
            type="is-success"
            required
            @input="$store.commit('shareholdersForm/toggleNaturalPerson', { index, value: true })"
          >
            Natural person
          </b-radio>
          <b-radio
            v-model="generalData.naturalPerson"
            name="naturalPersonRadio"
            :native-value="false"
            type="is-success"
            required
            @input="$store.commit('shareholdersForm/toggleNaturalPerson', { index, value: false })"
          >
            Company
          </b-radio>
        </b-field>
        <b-field
          label="Are you fluent in the Dutch language?"
          message="It is not legally possible to translate for someone. This may only be done by a sworn interpreter."
        >
          <b-radio
            v-model="generalData.fluent"
            name="fluentRadio"
            :native-value="true"
            type="is-success"
            required
            @input="$store.commit('shareholdersForm/toggleFluent', { index, value: true })"
          >
            yes
          </b-radio>
          <b-radio
            v-model="generalData.fluent"
            name="fluentRadio"
            :native-value="false"
            type="is-success"
            required
            @input="$store.commit('shareholdersForm/toggleFluent', { index, value: false })"
          >
            no
          </b-radio>
        </b-field>
        <b-field label="Do you officially live in the Netherlands?">
          <b-radio
            v-model="generalData.resident"
            name="residentRadio"
            :native-value="true"
            type="is-success"
            required
            @input="$store.commit('shareholdersForm/toggleResident', { index, value: true })"
          >
            yes
          </b-radio>
          <b-radio
            v-model="generalData.resident"
            name="residentRadio"
            :native-value="false"
            type="is-success"
            required
            @input="$store.commit('shareholdersForm/toggleResident', { index, value: false })"
          >
            no
          </b-radio>
        </b-field>
        <b-field
          label="Will you become a director in the BV?"
          message="At least one shareholder must also become a director in the BV."
        >
          <b-radio
            v-model="generalData.director"
            name="directorRadio"
            :native-value="true"
            type="is-success"
            required
            @input="$store.commit('shareholdersForm/toggleDirector', { index, value: true })"
          >
            yes
          </b-radio>
          <b-radio
            v-model="generalData.director"
            name="directorRadio"
            :native-value="false"
            type="is-success"
            required
            @input="$store.commit('shareholdersForm/toggleDirector', { index, value: false })"
          >
            no
          </b-radio>
        </b-field>
      </div>
    </div>
    <div
      class="columns"
    >
      <div
        class="column is-three-fiths is-offset-1"
      >
        <b-button
          v-if="formIsFilled"
          type="is-primary"
          rounded
          outlined
          @click.prevent="$store.commit('shareholdersForm/changeStep', { index, step:1 })"
        >
          Personal data
        </b-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { GeneralData } from 'typings/interface'

export default Vue.extend({
  name: 'GeneralDataForm',
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    generalData ():GeneralData {
      return { ...this.$store.state.shareholdersForm.shareholders[this.index].generalData }
    },
    formIsFilled ():boolean {
      if (this.generalData.naturalPerson !== null &&
          this.generalData.fluent !== null &&
          this.generalData.resident !== null &&
          this.generalData.director !== null) {
        return true
      }
      return false
    }
  }
})

</script>
