<template>
  <div class="hello">
    <ul>
      <li>{{ userId }}</li>
      <li>{{ title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      userId: "",
      title: ""
    };
  },
  created() {
    this.request();
  },
  methods: {
    request() {
      this.$axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => {
          this.userId = res.data.userId;
          this.title = res.data.title;
        });
    }
  }
};
</script>
