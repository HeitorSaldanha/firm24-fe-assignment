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
          Personal data
        </h3>
        <h2>
          Official data
        </h2>
        <p>
          Fill in the details as officially stated on the identity document
        </p>
        <b-field grouped>
          <b-field label="Salutation">
            <b-select
              v-model="personalData.salutation"
              name="salutationInput"
              required
              @input="(e) => $store.commit('shareholdersForm/changeSalutation', { index, value: e })"
            >
              <option>Mr.</option>
              <option>Ms.</option>
            </b-select>
          </b-field>
          <b-field label="First Name" expanded>
            <b-input
              v-model="personalData.firstName"
              name="firstNameInput"
              required
              @input="(e) => $store.commit('shareholdersForm/changeFirstName', { index, value: e })"
            />
          </b-field>
        </b-field>
        <b-field label="Surname">
          <b-input
            v-model="personalData.surname"
            name="surnameInput"
            required
            @input="(e) => $store.commit('shareholdersForm/changeSurname', { index, value: e })"
          />
        </b-field>
        <b-field label="Date of Birth">
          <b-datepicker
            v-model="formatedBirthDate"
            placeholder=""
            icon="calendar-today"
            trap-focus
            @input="(e) => $store.commit('shareholdersForm/changeDateOfBirth', { index, value: e })"
          />
        </b-field>
        <b-field label="Country of Birth">
          <b-autocomplete
            v-model="personalData.countryOfBirth"
            placeholder="e.g. Portugal"
            :data="filteredCountryList"
            field="name"
            @input="(e) => $store.commit('shareholdersForm/changeCountryOfBirth', { index, value: e })"
            @select="(e) => $store.commit('shareholdersForm/changeCountryOfBirth', { index, value: e })"
          />
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
          @click.prevent="$store.commit('shareholdersForm/changeStep', { index, step:2 })"
        >
          Contact details
        </b-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { PersonalData } from 'typings/interface'
import ReturnStep from '~/components/shareholdersForm/ReturnStep.vue'

export default Vue.extend({
  name: 'PersonalDataForm',
  components: {
    ReturnStep
  },
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      countryList: [''],
      error: null
    }
  },
  computed: {
    personalData ():PersonalData {
      return { ...this.$store.state.shareholdersForm.shareholders[this.index].personalData }
    },
    formatedBirthDate ():Date {
      return new Date(this.personalData.dateOfBirth)
    },
    filteredCountryList ():string[] {
      return this.countryList.filter((query:string) => {
        return query
          .toString()
          .toLowerCase()
          .includes(this.personalData.countryOfBirth.toLowerCase())
      })
    },
    formIsFilled ():boolean {
      if (this.personalData.salutation !== null &&
      this.personalData.salutation !== '' &&
          this.personalData.firstName !== null &&
      this.personalData.firstName !== '' &&
          this.personalData.surname !== null &&
      this.personalData.surname !== '' &&
          this.personalData.dateOfBirth !== null &&
      this.personalData.countryOfBirth !== null &&
          this.personalData.countryOfBirth !== '') {
        return true
      }
      return false
    }
  },
  created () {
    this.fetchCountryList()
  },
  methods: {
    fetchCountryList () {
      fetch('https://restcountries.eu/rest/v2/all')
        .then((resp) => {
          return resp.json()
        })
        .then((list) => {
          this.countryList = list.map((el:{name:string}) => el.name)
        })
        .catch((err) => {
          this.error = err.toString()
        })
    }
  }
})

</script>
