<template>
  <div class="login-box-wrapper">
    <strong>Entre e compartilhe sua mensagem</strong>
    <a
      :href="loginGithubUrl"
      class="button"
    >
      <box-icon
        type="logo"
        name="github"
        size="md"
      />
      Entrar com Github
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { GITHUB_OAUTH_LINK } from '../configs/Environment';

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const loginGithubUrl = ref(GITHUB_OAUTH_LINK);

    onMounted(async () => {
      const { code } = route.query;
      const token = window.localStorage.getItem('@nlwheat:token');

      if (!token && code) {
        await store.dispatch('auth/handleGithubLogin', code);
        await store.dispatch('users/handleGetUser');
        router.push({ name: 'Message' });
      }
    });

    return {
      loginGithubUrl,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-box-wrapper {
  height: 100vh;
  width: 100%;

  background: #17171A url(../assets/banner-girl.png) no-repeat top center;

  padding: 440px 80px 0;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    width: 900px;
    height: 900px;
    position: absolute;
    background: radial-gradient(50% 50% at 50% 50%, #FF3D6E 0%, rgba(18, 18, 20, 0) 100%);
    transform: translate(-60%, -50%);
  }

  strong {
    font-size: 32px;
    line-height: 36px;
    display: block;
  }

  .button {
    background: var(--YELLOW);
    margin-top: 32px;
    padding: 0 40px;
    height: 56px;
    color: var(--BLACK-PRIMARY);
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    svg {
      margin-right: 16px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
}
</style>
