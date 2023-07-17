<template>
  <section>
    <div class="container-fluid card border-0 py-5 px-5">
      <div class="row row-cols-1  ">
        <div
          class=""
          id="contact"
          :style="
            this.$dir() == 'rtl'
              ? 'background-position:right top;'
              : 'background-position:left top;'
          "
        >
          <div class="card py-3  border-0 bg-transparent">
            <div class="card-body">
              <div class="row row-cols-1 row-cols-md-2">
                <div class="col col-md-6 px-3 py-3">
                  <h1 class="fw-bolder py-5 ">{{ $t("contacttitle") }}</h1>
                  <div class="ps-4">
                    <a
                      style="text-decoration: none; color: #222222"
                      href="tel:+966-599753977"
                    >
                      <i class="bi bi-telephone fs-5 p-2" style="color: #38b980"></i
                      ><span dir="ltr">+966 59 975 3977</span></a
                    >
                    <hr width="50%" />
                    <a
                      style="text-decoration: none; color: #222222"
                      href="mailto:contact@zahmaola.com"
                    >
                      <i class="bi bi-envelope fs-5  p-2" style="color: #38b980"></i>
                      Contact@zahmaola.com</a
                    >
                    <hr width="50%" />
                  </div>
                </div>

                <div class="col col-md-4 offset-md-1 pt-5">
                  <div
                    class="pipedriveWebForms"
                    data-pd-webforms="https://webforms.pipedrive.com/f/c5i7sl5a3lzZ9K4lw6FjstOyUn7L1YqbD0L3wRFt4P7xqTlKTTcmYQK5YmF0DnQShd"
                  >
                    <script src="https://webforms.pipedrive.com/f/loader"></script>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  created() {
    window.addEventListener("load", () => {
      // https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
      console.log(this.$el.clientHeight);
      this.getForm();
    });
  },
  methods: {
    async make_me_wait(ms) {
      return new Promise((res) => setTimeout(res, ms));
    },
    async getForm() {
      var form = document.getElementById("#app");
      await this.make_me_wait(10000);
      console.log("haha");

      console.log(form);
    },
  },
};
</script>
