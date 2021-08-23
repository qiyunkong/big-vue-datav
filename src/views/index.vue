<template>
  <div id="index">
    <dv-full-screen-container>
      <GlobePage/>
    </dv-full-screen-container>
  </div>
</template>

<script>
import GlobePage from "./GlobePage";
export default {
  components: {
    GlobePage
  }
}
</script>
<style lang="scss">
@import '../assets/scss/index.scss';
</style>