<template>
  <section id="hero" class="py-5">
    <div class="container">
      <div class="row flex-md-row-reverse align-items-center g-4 g-md-5">
        <div class="col col-md-6">
          <img
            style="z-index: -1; position: absolute"
            :style="
              this.$dir() == 'rtl'
                ? 'transform: scaleX(-1);left:0;'
                : 'right:0;'
            "
            src="~/img/herobackground.svg"
            alt=""
          />
          <img
            style="z-index: 1"
            class="img-fluid"
            :style="
              this.$dir() == 'rtl'
                ? 'margin-right: 0%;  -webkit-transform: scaleX(-1);'
                : 'margin-left: 0%;'
            "
            src="~/img/zahmahero.svg"
            alt=""
          />

        </div>


        <div class="col-md-6">
          <h1 class="fw-bold lh-1 mb-3">{{ $t("herotitle") }}</h1>
          <p class="lead py-2 py-md-5 fs-3 fw-light">{{ $t("herodesc") }}</p>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a
                href="https://apps.apple.com/us/app/%D8%B2%D8%AD%D9%85%D8%A9-%D8%A3%D9%88-%D9%84%D8%A7-zahma-o-la/id654895985"
              >
                <img src="~/img/AppStore.svg" alt=""
              /></a>
            </li>

            <li class="list-inline-item pt-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.zahmaola.zahma"
              >
                <img src="~/img/GooglePlay.svg" alt=""
              /></a>
            </li>
          </ul>
        </div>
        <hr
          style="
            background: linear-gradient(
              90deg,
              #38b980 0%,
              rgba(235, 224, 104, 0.9) 31.25%,
              rgba(208, 103, 65, 0.97) 74.48%,
              #c73c34 100%
            );
          "
          size="5px"
        />
      </div>
    </div>
  </section>
</template>
