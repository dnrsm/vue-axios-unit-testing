<template>
  <div class="hello">
    <ul>
      <li v-for="(user, index) in filteredUsers" :key="index">
        {{ user.id }}: {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      users: []
    };
  },
  computed: {
    filteredUsers() {
      if (Object.keys(this.users).length === 0) return;
      return this.users.slice(0, 3);
    }
  },
  created() {
    this.request();
  },
  methods: {
    request() {
      this.$axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
          this.users = res.data;
        });
    }
  }
};
</script>
