<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-link class="navbar-brand" to="/">{{ $t('HomeNav.Home') }}</router-link>

    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item active">

          <router-link class="nav-link" to="/">Home</router-link>
          <span class="sr-only">(current)</span>

        </li>
        <li class="nav-item">

          <router-link class="nav-link" to="/clips">{{ $t('HomeNav.Clips') }}</router-link>

        </li>
        <li class="nav-item">

          <router-link class="nav-link" to="/rankings">{{ $t('HomeNav.Rankings') }}</router-link>

        </li>

        <li class="nav-item">

          <router-link class="nav-link" to="/goods">{{ $t('HomeNav.Goods') }}</router-link>

        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">{{ $t('HomeNav.About') }}</router-link>

        </li>
      </ul>

    </div>
    <button class="btn" v-on:click="switchLocale()">{{ displayLocale }}</button>

  </nav>

</template>

<script>
export default {
  name: 'HomeNav',
  methods: {
    switchLocale () {
      if (this.$i18n.locale === 'vi') {
        this.$i18n.locale = 'en'
      } else {
        this.$i18n.locale = 'vi'
      }
    }
  },
  computed: {
    displayLocale () {
      let other = 'vi'
      if (this.$i18n.locale === 'vi') {
        other = 'en'
      }
      return other
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
