<template>
  <div class="message-form-wrapper">
    <button
      class="sign-out-button"
      @click="handleLogout"
    >
      <box-icon
        type="regular"
        name="log-out"
        size="md"
        color="#FF008E"
      />
    </button>

    <header class="user-information">
      <div class="user-image">
        <img
          :src="user?.avatarUrl"
          :alt="user?.name"
        >
      </div>
      <strong class="user-name">{{ user?.name }}</strong>
      <span class="user-github">
        <box-icon
          type="logo"
          name="github"
          size="md"
          color="#FFF"
        />
        {{ user?.login }}
      </span>
    </header>

    <form
      class="message-form"
      @submit.prevent="handleSubmit"
    >
      <label for="message">Mensagem</label>

      <textarea
        id="message"
        v-model="message.text"
        name="message"
        placeholder="Qual sua expectativa para o evento?"
      />

      <button type="submit">
        Enviar mensagem
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { UserType } from '../@types';

type NewMessageType = {
  text: string;
}

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const user = computed<UserType>(() => store.getters['users/getUser']);
    const message = computed<NewMessageType>(() => store.getters['messages/getMessage']);

    onMounted(async () => {
      if (!user.value) {
        await store.dispatch('users/handleGetUser');
        await store.dispatch('auth/handleSetIsLogged');
      }
    });

    async function handleLogout() {
      await store.dispatch('auth/handleLogout');
      router.push({ name: 'Login' });
    }

    async function handleSubmit() {
      await store.dispatch('messages/handleCreateMessage');
      message.value.text = '';
    }

    return {
      message, user, handleLogout, handleSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
.message-form-wrapper {
  background: #1b1b1f;
  padding: 24px;
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  position: relative;
}

.sign-out-button {
  background: transparent;
  border: 0;
  color: var(--GRAY-SECONDARY);

  position: absolute;
  left: 24px;
  top: 24px;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
}

.user-information {
  display: flex;
  flex-direction: column;
  align-items: center;

  .user-image {
    padding: 3px;
    background: linear-gradient(100deg, var(--PINK) 0%, var(--YELLOW) 100%);
    border-radius: 50%;
    line-height: 0;

    img {
      width: 94px;
      height: 94px;
      border-radius: 50%;
      border: 6px solid var(--BLACK-SECONDARY);
    }
  }

  .user-name {
    font-size: 24px;
    line-height: 30px;
    margin-top: 16px;
  }

  .user-github {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-top: 8px;
    color: var(--GRAY-SECONDARY);
  }
}

.message-form {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-top: 48px;

  background: #202024;

  label {
    padding: 18px 24px;
    font-size: 20px;
    background: #29292e;
    font-weight: bold;
    text-align: left;
  }

  textarea {
    background: transparent;
    border: 0;
    padding: 24px;
    resize: none;
    height: 160px;
    color: #e1e1e6;
    font-size: 16px;
    line-height: 24px;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: #8d8d99;
    }
  }

  button {
    align-self: flex-end;
    border: 0;
    background: var(--PINK);
    margin: 24px;
    cursor: pointer;
    padding: 0 32px;
    height: 40px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.9);
    }
  }
}
</style>
