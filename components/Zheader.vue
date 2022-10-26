<template>

  <nav class="navbar navbar-expand-lg bg-white">
    <div class="container">
      <a class="navbar-brand py-5" href="/">
        <img
          v-if="this.$dir() == 'rtl'"
          src="~/img/arlogo.svg"
          alt="Zahma O La"
        />
        <img v-else src="~/img/zahmaolalogo.svg" alt="Zahma O La" />
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" :dir="this.$dir()">
          <li class="nav-item">
            <a
              style="color: #595959"
              class="nav-link active"
              aria-current="page"
              href="#about"
              >{{ $t("navabout") }}</a
            >
          </li>
          <li class="nav-item">
            <a style="color: #595959" class="nav-link" href="#features">{{
              $t("navfeatures")
            }}</a>
          </li>
          <li class="nav-item">
            <a style="color: #595959" class="nav-link" href="#download">{{
              $t("navdownload")
            }}</a>
          </li>
          <li class="nav-item">
            <a style="color: #595959" class="nav-link" href="#contact">{{
              $t("navcontact")
            }}</a>
          </li>
        </ul>
       <span class="navbar-text">
           <nuxt-link
            class="btn btn-lg fw-normal"
            style="background: #38b980; color: white"
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
          >
            {{ $t("navlang") }}
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
