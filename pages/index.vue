<template lang="html">
  <div>
    <h1>hello nuxt</h1>
    <input id="" type="text" v-model="sample">
    <div>{$data.sample}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  public sample!: string;
}

</script>

