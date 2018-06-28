<template>
  <div class="clips">
    <HelloWorld msg="Welcome to clips page" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'clips',
  components: {
    HelloWorld,
  },
};
</script>
