<template lang="pug">
.root-component
  h1 hello pug
  h2 {{ $data.sample }}
  input(type="text" v-model="$data.sample")

</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class lIndex extends Vue {
  public sample!: string = '';
}

</script>

<style lang="scss" scoped>
.root-component {
  background: #aaa;
}
</style>
