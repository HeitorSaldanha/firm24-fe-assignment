<template>
  <section>
    <div
      class="columns"
    >
      <div
        class="column is-three-fiths is-offset-1"
      >
        <ReturnStep :index="index" />
        <h3 class="title has-text-primary">
          Contact Details
        </h3>
        <b-field label="Telephone Number">
          <b-input
            v-model="contactDetails.telephoneNumber"
            type="number"
            name="telephoneNumberInput"
            :controls="false"
            required
            @input="(e) => $store.commit('shareholdersForm/changeTelephoneNumber', { index, value: e })"
          />
        </b-field>
        <b-field label="E-mail Address">
          <b-input
            v-model="contactDetails.emailAddress"
            name="emailAddressInput"
            required
            @input="(e) => $store.commit('shareholdersForm/changeEmailAddress', { index, value: e })"
          />
        </b-field>
        <b-field grouped>
          <b-field label="Postal Code">
            <b-input
              v-model="contactDetails.postalCode"
              name="postalCodeInput"
              required
              @input="(e) => $store.commit('shareholdersForm/changePostalCode', { index, value: e })"
            />
          </b-field>
          <b-field label="House Number" expanded>
            <b-input
              v-model="contactDetails.houseNumber"
              name="houseNumberInput"
              required
              @input="(e) => $store.commit('shareholdersForm/changeHouseNumber', { index, value: e })"
            />
          </b-field>
          <b-field label="Complement" expanded>
            <b-input
              v-model="contactDetails.complement"
              name="complementInput"
              required
              @input="(e) => $store.commit('shareholdersForm/changeComplement', { index, value: e })"
            />
          </b-field>
        </b-field>
        <b-field grouped>
          <b-field label="Street name">
            <b-input
              v-model="contactDetails.streetName"
              name="streetNameInput"
              required
              @input="(e) => $store.commit('shareholdersForm/changeStreetName', { index, value: e })"
            />
          </b-field>
          <b-field label="Place name" expanded>
            <b-input
              v-model="contactDetails.placeName"
              name="placeNameInput"
              required
              @input="(e) => $store.commit('shareholdersForm/changePlaceName', { index, value: e })"
            />
          </b-field>
        </b-field>
      </div>
    </div>
    <div
      class="columns"
    >
      <div
        v-if="formIsFilled && isLastShareholder"
        class="column is-three-fiths is-offset-1"
      >
        <h4>
          Do you want to add another shareholder?
        </h4>
        <b-button
          type="is-success"
          rounded
          outlined
          @click.prevent="addNewShareholder"
        >
          Yes
        </b-button>
        <b-button
          type="is-danger"
          rounded
          outlined
          @click.prevent="closeAllShareholders"
        >
          No
        </b-button>
      </div>
      <div
        v-if="formIsFilled && !isLastShareholder"
        class="column is-three-fiths is-offset-1"
      >
        <b-button
          type="is-success"
          rounded
          outlined
          @click.prevent="saveToLocalStorage"
        >
          save
        </b-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { ContactDetails } from 'typings/interface'
import ReturnStep from '~/components/shareholdersForm/ReturnStep.vue'

export default Vue.extend({
  name: 'ContactDetailsForm',
  components: {
    ReturnStep
  },
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    contactDetails ():ContactDetails {
      return { ...this.$store.state.shareholdersForm.shareholders[this.index].contactDetails }
    },
    formIsFilled ():boolean {
      if (this.contactDetails.telephoneNumber !== null &&
      this.contactDetails.telephoneNumber !== '' &&
          this.contactDetails.emailAddress !== null &&
      this.contactDetails.emailAddress !== '' &&
          this.contactDetails.postalCode !== null &&
      this.contactDetails.postalCode !== '' &&
          this.contactDetails.houseNumber !== null &&
      this.contactDetails.houseNumber !== '' &&
          this.contactDetails.complement !== null &&
      this.contactDetails.complement !== '' &&
          this.contactDetails.streetName !== null &&
      this.contactDetails.streetName !== '' &&
          this.contactDetails.placeName !== null &&
      this.contactDetails.placeName !== '') {
        return true
      }
      return false
    },
    isLastShareholder ():boolean {
      return this.index + 1 === this.$store.state.shareholdersForm.shareholders.length
    }
  },
  methods: {
    saveToLocalStorage () {
      localStorage.shareholders = JSON.stringify(this.$store.state.shareholdersForm.shareholders)
    },
    addNewShareholder () {
      this.saveToLocalStorage()
      this.$store.commit('shareholdersForm/addShareholder')
    },
    closeAllShareholders () {
      this.saveToLocalStorage()
      this.$store.commit('shareholdersForm/open', null)
    }
  }
})

</script>
