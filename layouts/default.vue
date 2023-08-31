<template>
  <div :class="this.$dir()">
    <Header />
    <Nuxt />
    <a style="color: inherit;"
      href="https://api.whatsapp.com/send?phone=+966599753977&text=أرغب في الاستفسار عن تطبيق زحمة أو لا"
      class="layer_999 float d-flex align-items-center justify-content-center" target="_blank">
      <i class="bi text-white bi-whatsapp my-float"></i>
    </a>
    <Footer />

  </div>
</template>


<script>
export default {
  name: 'default',
}
</script>

<style>
.float {
  position: fixed;
  z-index: 999;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  text-decoration: none;
}
</style>


