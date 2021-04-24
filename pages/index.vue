<template>
  <section class="section">
    <Stepper>
      <b-step-item step="1" label="Shareholders">
        <Shareholders />
      </b-step-item>

      <b-step-item step="2" label="BV Data">
        <h1 class="title has-text-centered">
          BV Data
        </h1>
        Lorem ipsum dolor sit amet.
      </b-step-item>

      <b-step-item step="3" label="Documents">
        <h1 class="title has-text-centered">
          Documents
        </h1>
        Lorem ipsum dolor sit amet.
      </b-step-item>
    </Stepper>
  </section>
</template>

<script>
import Stepper from '~/components/Stepper'
import Shareholders from '~/components/Shareholders'
export default {
  name: 'HomePage',

  components: {
    Stepper,
    Shareholders
  }
}
</script>
