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
          <a
            v-if="index > 0"
            class="card-header-icon"
          >
            <b-button
              type="is-ghost"
              @click.stop="openModal(index, shareholder.title, shareholder.personalData.firstName, shareholder.personalData.surname)"
            >
              <b-icon
                type="is-danger"
                :icon="'delete'"
              />
            </b-button>
          </a>
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
    <b-modal
      v-model="showDeleteConfirmationModal"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <template #default="props">
        <DeleteConfirmationModal
          :index="modalProps.index"
          :title="modalProps.title"
          :first-name="modalProps.firstName"
          :surname="modalProps.surname"
          @close="props.close"
        />
      </template>
    </b-modal>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import ShareholdersFormComponent from '~/components/shareholdersForm/ShareholdersForm.vue'
import DeleteConfirmationModal from '~/components/shareholdersForm/DeleteConfirmationModal.vue'
import { ShareholdersForm } from '~/typings/interface'

export default Vue.extend({
  name: 'ShareholdersList',
  components: {
    ShareholdersFormComponent,
    DeleteConfirmationModal
  },
  data () {
    return {
      showDeleteConfirmationModal: false,
      modalProps: {
        index: 0,
        title: '',
        firstName: '',
        surname: ''
      }
    }
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
  },
  methods: {
    openModal (index:number, title:string, firstName:string, surname:string) {
      this.modalProps.index = index
      this.modalProps.title = title
      this.modalProps.firstName = firstName
      this.modalProps.surname = surname
      this.showDeleteConfirmationModal = true
    }
  }
})
</script>
