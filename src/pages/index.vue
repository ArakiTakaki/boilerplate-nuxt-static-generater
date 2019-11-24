<template lang="pug">
.root-component
  h1 hello pug
  h2 {{ $data.sample }}
  input(type="text" v-model="$data.sample")
  .sp-only sp

</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class Index extends Vue {
  public sample: string = '';
}

</script>

<style lang="sass" scoped>
@import '../assets/css/resouces/mixins.sass'

.root-component 
  background: #aaa

.sp-only
  display: block

  +tb
    display: none
</style>
