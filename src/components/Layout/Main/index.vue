<template>
  <main id="layout-main" >
    <section class="main-item pie">
      <dv-border-box-13><slot name="pie"></slot></dv-border-box-13>
    </section>
    <section class="main-item gl">
      <slot name="gl"></slot>
      <section class="panel">
         <dv-border-box-13><slot name="panel"></slot> </dv-border-box-13>
      </section>
    </section>
    <section class="main-item sort">
      <dv-border-box-13><slot name="sort"></slot></dv-border-box-13>
    </section>
    <section class="main-item dva">
      <dv-border-box-13><slot name="dva"></slot></dv-border-box-13>
    </section>
    <section class="main-item data">
      <dv-border-box-13><slot name="data"></slot></dv-border-box-13>
    </section>
    <section class="main-item line">
      <dv-border-box-13><slot name="line"></slot></dv-border-box-13>
    </section>
  </main>
</template>

<script>
export default {
  name: 'LayoutMain',
}
</script>

<style lang="scss">
#layout-main {
  display: grid;
  grid-template-columns: 1.1fr 2fr 1fr;
  grid-template-rows: 1fr 1.2fr 1fr;
  grid-template-areas:
  "pie gl sort"
  "dva gl sort"
  "data gl line";
  .main-item{
    display:flex;
    &.pie{
      grid-area: pie;
    }
    &.gl{
      grid-area: gl;
      position:relative;
      width: 100%;
      .panel{
        position: absolute;
        z-index: 2;
        height:3.789363rem;
        width: 100%;
        padding:0 .0125rem;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
      }
    }
    &.sort{
      grid-area: sort;
    }
    &.dva{
      grid-area: dva;
    }
    &.data{
      grid-area: data;
    }
    &.line{
      grid-area: line;
    }
  } 
}
</style>
