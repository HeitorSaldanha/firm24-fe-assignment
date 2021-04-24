<template>
  <section>
    <h1 class="title has-text-centered">
      Who will be the shareholders?
    </h1>
    <b-collapse
      v-for="(shareholder, index) of shareholders"
      :key="index"
      class="card"
      animation="slide"
      :open="isOpen == index"
      @open="isOpen = index"
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
            v-model="currentFormStep"
            :label-position="'right'"
            :size="'is-small'"
            :has-navigation="firstStepIsValid"
            :animated="false"
            vertical
            type="is-success"
          >
            <b-step-item label="General data">
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
                      v-model="shareholder.generalData.naturalPerson"
                      name="naturalPersonRadio"
                      :native-value="true"
                      type="is-success"
                      required
                    >
                      Natural person
                    </b-radio>
                    <b-radio
                      v-model="shareholder.generalData.naturalPerson"
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
                      v-model="shareholder.generalData.fluent"
                      name="fluentRadio"
                      :native-value="true"
                      type="is-success"
                      required
                    >
                      yes
                    </b-radio>
                    <b-radio
                      v-model="shareholder.generalData.fluent"
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
                      v-model="shareholder.generalData.resident"
                      name="residentRadio"
                      :native-value="true"
                      type="is-success"
                      required
                    >
                      yes
                    </b-radio>
                    <b-radio
                      v-model="shareholder.generalData.resident"
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
                      v-model="shareholder.generalData.director"
                      name="directorRadio"
                      :native-value="true"
                      type="is-success"
                      required
                    >
                      yes
                    </b-radio>
                    <b-radio
                      v-model="shareholder.generalData.director"
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
            </b-step-item>

            <b-step-item label="Personal data">
              Lorem Ipsum Dolor Sit Amet
            </b-step-item>

            <b-step-item label="Contact details">
              Lorem Ipsum Dolor Sit Amet
            </b-step-item>

            <template
              v-if="firstStepIsValid"
              #navigation="{previous, next}"
            >
              <div
                class="step-navigation columns"
              >
                <b-button
                  v-if="currentFormStep > 0"
                  type="is-primary"
                  class="navigation-previous"
                  rounded
                  outlined
                  :disabled="previous.disabled"
                  @click.prevent="previous.action"
                >
                  Back
                </b-button>
                <div
                  class="column is-one-fith is-offset-one-fifth"
                >
                  <b-button
                    v-if="currentFormStep === 0"
                    type="is-primary"
                    class="navigation-next"
                    rounded
                    outlined
                    :disabled="next.disabled"
                    @click.prevent="next.action"
                  >
                    Personal data
                  </b-button>
                </div>
              </div>
            </template>
          </b-steps>
        </div>
      </div>
    </b-collapse>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

interface GeneralData {
  naturalPerson: boolean|null,
  fluent: boolean|null,
  resident: boolean|null,
  director: boolean|null
}

interface Shareholder {
  title: string,
  generalData: GeneralData
}

interface ShareholdersForm {
  isOpen: number,
  currentFormStep: number,
  shareholders: [Shareholder]
}

export default Vue.extend({
  name: 'ShareholdersFormComponent',

  data ():ShareholdersForm {
    return {
      isOpen: 0,
      currentFormStep: 0,
      shareholders: [
        {
          title: 'Shareholder 1 (applicant)',
          generalData: {
            naturalPerson: null,
            fluent: null,
            resident: null,
            director: null
          }
        }
      ]
    }
  },

  computed: {
    firstStepIsValid (): boolean {
      if (this.shareholders[this.isOpen].generalData.naturalPerson !== null &&
          this.shareholders[this.isOpen].generalData.fluent !== null &&
          this.shareholders[this.isOpen].generalData.resident !== null &&
          this.shareholders[this.isOpen].generalData.director !== null) {
        return true
      }
      return false
    }
  }
})
</script>
