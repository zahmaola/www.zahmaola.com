<template>
  <div>
    <SectionsHero />
    <SectionsAbout />
    <SectionsFeatures />
    <SectionsDownload />
    <SectionsContact />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",
  head() {
    return {
      title: this.$t("title") + " - " + this.$t("description"),

      //titleTemplate: null
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("description"),
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$t("title"),
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("description"),
        },
      ],
    };
  },
};
</script>
