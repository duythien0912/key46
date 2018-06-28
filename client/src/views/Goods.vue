<template>
  <div class="goods">
    <HelloWorld msg="Welcome to goods page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'goods',
  components: {
    HelloWorld,
  },
};
</script>
