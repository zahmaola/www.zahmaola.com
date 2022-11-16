<template>
  <section id="hero" class="py-5">
    <div class="container" style="">
      <div class="row flex-md-row-reverse align-items-center g-4 g-md-5">
        <div class="col col-md-6">
          <img
            class="herobg"
            style="z-index: -1; position: absolute"
            :style="
              this.$dir() == 'rtl'
                ? 'transform: scaleX(-1);left:0;'
                : 'right:0;'
            "
            src="~/assets/img/herobackground.svg"
            alt=""
          />
          <img
            v-if="this.$dir() == 'rtl'"
            style="z-index: 1; margin-right:-10%"
            class="img-fluid herobg"
            :style="
              this.$dir() == 'ltr ' ? 'margin-right: -10%;  ' : 'margin-left: 0%;'
            "
            src="~/assets/img/zahmaOLaAr.svg"
            alt=""
          />

          <img
            v-else
            style="z-index: 1; margin-left:-10%"
            class="img-fluid herobg"
            :style="
              this.$dir() == 'rtl' ? 'margin-right: 0%;  ' : 'margin-left: -10%;'
            "
            src="~/assets/img/zahmahero.svg"
            alt=""
          />
          <div></div>
        </div>

        <div class="col-md-6">
          <h1 class="fw-bold lh-1 mb-3 animate__animated animate__fadeInLeft">
            {{ $t("herotitle") }}
          </h1>
          <p
            class="
              lead
              py-2 py-md-5
              fs-3
              fw-light
              animate__animated animate__fadeInLeft
            "
          >
            {{ $t("herodesc") }}
          </p>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a
                href="https://apps.apple.com/us/app/%D8%B2%D8%AD%D9%85%D8%A9-%D8%A3%D9%88-%D9%84%D8%A7-zahma-o-la/id654895985"
              >
                <img
                  src="~/assets/img/AppStore.svg"
                  height="auto"
                  alt="App Store"
              /></a>
            </li>

            <li class="list-inline-item pt-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.zahmaola.zahma"
              >
                <img
                  src="~/assets/img/GooglePlay.svg"
                  height="auto"
                  alt="Google Store"
              /></a>
            </li>
          </ul>
        </div>
        <hr class="myhrline" />
      </div>
    </div>
  </section>
</template>
