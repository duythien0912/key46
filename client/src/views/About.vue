<template>
  <div class="about">
    <HelloWorld msg="Welcome to about page" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'about',
  components: {
    HelloWorld,
  },
};
</script>
