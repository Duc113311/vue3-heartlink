<template>
  <div class="hello">
    <div>{{ name }}</div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <el-button type="primary">Primary</el-button>

    <button class="bg-teal-600 w-7 h-7" @click="changeName">Hello</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  name = "Duc";

  changeName() {
    this.name = "Name";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
