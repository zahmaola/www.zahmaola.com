<template>
  <div class="container py-5">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col">
        <ul class="list-inline">
          <a
            class="text-dark"
            title="Promotion Efficieny"
            href="https://www.promoe.com.sa/en/"
          >
            <li class="list-inline-item fw-light px-5">
              {{ $t("footeroperated") }}
            </li>
          </a>
          

          <li class="list-inline-item fw-light px-2">

             <a style="text-decoration: none; color: black"  :href="localePath('/privacy')"  >
              {{ $t("footerprivacy") }}
            </a>


           
          </li>
        </ul>
      </div>

      <div class="col">
        <ul 
            class="list-inline fw-light fs-4"
            :class="this.$dir() == 'rtl'
                ? 'text-start'
                : 'text-end'">
          <li class="list-inline-item mx-2">
            <a
              class="text-dark"
              href="https://instagram.com/zahma_ola?igshid=YmMyMTA2M2Y="
              title="Zahma O La instagram"
            >
              <i class="bi bi-instagram"></i>
            </a>
          </li>
          <li class="list-inline-item mx-2">
            <a
              class="text-dark"
              href="https://twitter.com/zahma_ola"
              title="Zahma O La twitter"
            >
              <i class="bi bi-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item mx-2">
            <a class="text-dark" href="https://www.linkedin.com/company/86810077/admin/analytics/followers/"> <i class="bi bi-linkedin"></i> </a>
          </li>
        </ul>
      </div>
    </div>
    <hr />
    <p class="fw-light text-center py-2">
      {{ $t("footercopyrights") }}
    </p>
  </div>
</template>
