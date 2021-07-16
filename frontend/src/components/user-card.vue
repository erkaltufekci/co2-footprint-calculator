<script>
export default {
  name: 'UserCard',
  props: ['user'],
  data() {
    return {
      // defaultBio: 'This user has no bios.',
    };
  },
};
</script>

<template lang="pug">
.box
  h1 {{ user.name }} ({{ user.email }})
  p {{ user }}
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #333;
  background: #dd0;
  border-radius: 0.3rem;
}
</style>
