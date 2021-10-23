<template>
  <main :class="{'content-wrapper': true, 'content-logged': isLogged}">
    <message-box />
    <router-view />
  </main>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import MessageBox from '../components/MessageBox/index.vue';

export default defineComponent({
  components: {
    MessageBox,
  },
  setup() {
    const store = useStore();
    const isLogged = computed<boolean>(() => store.getters['auth/getIsLogged']);

    return { isLogged };
  },
});
</script>

<style lang="scss" scoped>
.content-wrapper {
  background: var(--BLACK-SECONDARY);

  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;

  padding: 0 32px;

  display: grid;
  grid-template-columns: 1fr 453px;
  column-gap: 120px;
  position: relative;

  @media screen and (max-width: 1080px){
    grid-template-columns: 1fr;
    row-gap: 32px;
  }
}

.content-logged::before {
  content: '';
  height: 100vh;
  width: 420px;
  background: url('../assets/background.svg') no-repeat;
  background-size: cover;
  position: absolute;
  right: -200px;

  @media screen and (max-width: 1080px){
    display: none;
  }
}
</style>
