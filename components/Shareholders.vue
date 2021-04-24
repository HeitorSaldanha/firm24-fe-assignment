<template>
  <section>
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
          <div class="columns">
            <b-steps
              :label-position="'right'"
              :size="'is-small'"
              :has-navigation="false"
              vertical
            >
              <b-step-item label="General data" icon="account-key">
                Lorem Ipsum Dolor Sit Amet
              </b-step-item>

              <b-step-item label="Personal data" icon="account">
                Lorem Ipsum Dolor Sit Amet
              </b-step-item>

              <b-step-item label="Contact details" icon="account-plus">
                Lorem Ipsum Dolor Sit Amet
              </b-step-item>
            </b-steps>
          </div>
        </div>
      </div>
    </b-collapse>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isOpen: 0,
      shareholders: [
        {
          title: 'Shareholder 1 (applicant)',
          text: 'Text 1'
        }
      ]
    }
  }
}
</script>
