<template>
  <div class="message-box-wrapper">
    <img
      class="logo"
      src="../../assets/logo.svg"
      alt="DoWhile 2021"
    >

    <ul class="message-list">
      <message
        v-for="message in messages.slice().reverse()"
        :key="message.id"
        :text="message.text"
        :avatar-url="message.user.avatarUrl"
        :name="message.user.name"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Socket } from 'socket.io-client';
import {
  computed, defineComponent, inject, onMounted,
} from 'vue';
import { useStore } from 'vuex';
import { MessageType } from '../../@types';
import Message from './Message.vue';

export default defineComponent({
  components: { Message },
  setup() {
    const store = useStore();
    const socket: Socket = inject('socket') as Socket;

    socket.on('newMessage', async (message: MessageType) => {
      await store.dispatch('messages/handleNewMessage', message);
    });

    const messages = computed<MessageType[]>(() => store.getters['messages/getMessages']);

    onMounted(async () => {
      await store.dispatch('messages/handleGetMessages', 3);
    });

    return {
      messages,
    };
  },
});
</script>

<style lang="scss" scoped>
.message-box-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .logo {
    height: 28px;
    margin: 32px 0;
  }
}

.message-list {
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 1;
  justify-content: center;
}
</style>
