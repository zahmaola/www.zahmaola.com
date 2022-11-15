<template>
  <nav class="navbar navbar-expand-lg bg-white">
    <div class="container">
      <a class="navbar-brand py-5" :href="`${localePath('/')}`"  >
        <img
          v-if="this.$dir() == 'rtl'"
          src="~/assets/img/arlogo.svg"
          alt="Zahma O La"
          width="93.18px"
          height="100px"
        />
        <img v-else src="~/assets/img/zahmaolalogo.svg" alt="Zahma O La"   width="93.18px"
          height="100px" />
      </a>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

         


          <li class="nav-item">
            <a
              style="color: #595959"
              class="nav-link active"
              aria-current="page"
             :href="localePath('/#about')" 
              >{{ $t("navabout") }}</a
            >
          </li>
          <li class="nav-item">
            <a style="color: #595959" class="nav-link" :href="localePath('/#features')">{{
              $t("navfeatures")
            }}</a>
          </li>
          <li class="nav-item">
            <a style="color: #595959" class="nav-link" :href="localePath('/#download')" >{{
              $t("navdownload")
            }}</a>
          </li>
          <li class="nav-item">
            <a style="color: #595959" class="nav-link" :href="localePath('/#contact')"  >{{
              $t("navcontact")
            }}</a>
          </li>
        </ul>
        <span >
          <nuxt-link
            class="btn btn-lg fw-normal lang "
           
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
          >
            <span class="">{{ $t("navlang") }}</span>
          </nuxt-link>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "IndexPage",
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>
