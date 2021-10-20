<script lang="ts">
import { defineComponent } from 'vue';
import MessageBox from '../components/MessageBox.vue';

export default defineComponent({
  components: {
    MessageBox,
  },
});
</script>

<template>
  <main class="content-wrapper">
    <message-box />
    <router-view/>
  </main>
</template>

<style lang="scss" scoped>
.content-wrapper {
  background: var(--BLACK-SECONDARY);

  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 453px;
  column-gap: 120px;
  position: relative;
}

.content-signed::before {
  content: '';
  height: 100vh;
  width: 420px;
  background: url('./assets/background.svg') no-repeat;
  background-size: cover;
  position: absolute;
  right: -200px;
}
</style>
