<template>
  <b-navbar
    class="is-primary navBarSpacing"
    :mobile-burger="false"
  >
    <template #brand>
      <b-image
        class="logo"
        :src="require('@/assets/logo_firm24.svg')"
        alt="Firm24"
      />
    </template>

    <template #end>
      <div class="media">
        <div class="media-left rounded">
          <figure class="image is-48x48">
            <img class="is-rounded" src="@/assets/profile.jpg" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4 has-text-white">Nicol</p>
          <p class="subtitle is-6 has-text-white">@realNicolBolas</p>
        </div>
      </div>
    </template>
  </b-navbar>
</template>

<style>
  .navBarSpacing {
    padding: 30px 48px;
  }
  .logo {
    width: 120px;
    height: 56px;
  }
</style>
