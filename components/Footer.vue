<template>
  <div class="container">
    <div class="row py-5">
      <div class="col-md-8 col-sm-6 col-xs-12">
        <ul class="list-inline">
          <a class="text-dark" title="Promotion Efficieny" href="https://www.promoe.com.sa/en/">
          <li class="list-inline-item fw-light px-5">
            {{ $t("footeroperated") }}
          </li>
          </a>


          <li class="list-inline-item fw-light px-2" >
            <NuxtLink to="privacy" style="text-decoration:none; color:black" >

            {{ $t("footerprivacy") }}
             </NuxtLink>
          </li>


              <!-- <a class="text-dark" title="" href="#">
          <li class="list-inline-item fw-light">
            {{ $t("footerterms") }}
          </li>
              </a> -->
        </ul>
      </div>

      <div class="col col-md-2 col-sm-6 col-xs-12">
        <p class="fw-light">
          {{ $t("footercopyrights") }}
        </p>
      </div>
    </div>
  </div>
</template>
