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
            v-model="$store.state.shareholdersForm.shareholders[0].generalData.naturalPerson"
            name="naturalPersonRadio"
            :native-value="true"
            type="is-success"
            required
          >
            Natural person
          </b-radio>
          <b-radio
            v-model="$store.state.shareholdersForm.shareholders[0].generalData.naturalPerson"
            name="naturalPersonRadio"
            :native-value="false"
            type="is-success"
            required
          >
            Company
          </b-radio>
        </b-field>
        <b-field
          label="Are you fluent in the Dutch language?"
          message="It is not legally possible to translate for someone. This may only be done by a sworn interpreter."
        >
          <b-radio
            v-model="props.shareholder.generalData.fluent"
            name="fluentRadio"
            :native-value="true"
            type="is-success"
            required
          >
            yes
          </b-radio>
          <b-radio
            v-model="props.shareholder.generalData.fluent"
            name="fluentRadio"
            :native-value="false"
            type="is-success"
            required
          >
            no
          </b-radio>
        </b-field>
        <b-field label="Do you officially live in the Netherlands?">
          <b-radio
            v-model="props.shareholder.generalData.resident"
            name="residentRadio"
            :native-value="true"
            type="is-success"
            required
          >
            yes
          </b-radio>
          <b-radio
            v-model="props.shareholder.generalData.resident"
            name="residentRadio"
            :native-value="false"
            type="is-success"
            required
          >
            no
          </b-radio>
        </b-field>
        <b-field
          label="Will you become a director in the BV?"
          message="At least one shareholder must also become a director in the BV."
        >
          <b-radio
            v-model="props.shareholder.generalData.director"
            name="directorRadio"
            :native-value="true"
            type="is-success"
            required
          >
            yes
          </b-radio>
          <b-radio
            v-model="props.shareholder.generalData.director"
            name="directorRadio"
            :native-value="false"
            type="is-success"
            required
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
          v-if="firstStepIsValid"
          type="is-primary"
          class="navigation-next"
          rounded
          outlined
          @click.prevent="currentFormStep = 1"
        >
          Personal data
        </b-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Shareholder } from '~/typings/interface'

export default Vue.extend({
  name: 'GeneralDataForm',
  props: {
    shareholder: {
      type: Object as () => Shareholder,
      default: () => (
        {
          title: '',
          generalData: {
            naturalPerson: null,
            fluent: null,
            resident: null,
            director: null
          }
        }
      )
    }
  }
})
</script>
