<template>
  <div class="message-box-wrapper">
    <img class="logo" src="../assets/logo.svg" alt="DoWhile 2021" />

    <ul class="message-list">
      <li class="message">
        <p class="message-content">
          Não vejo a hora de começar esse evento,
          com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥
        </p>
        <div class="message-user">
          <div class="user-image">
            <img src="https://github.com/devweslen.png" alt="DevWeslen" />
          </div>
          <span>DevWeslen</span>
        </div>
      </li>
      <li class="message">
        <p class="message-content">
          Não vejo a hora de começar esse evento,
          com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥
        </p>
        <div class="message-user">
          <div class="user-image">
            <img src="https://github.com/devweslen.png" alt="DevWeslen" />
          </div>
          <span>DevWeslen</span>
        </div>
      </li>
      <li class="message">
        <p class="message-content">
          Não vejo a hora de começar esse evento,
          com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥
        </p>
        <div class="message-user">
          <div class="user-image">
            <img src="https://github.com/devweslen.png" alt="DevWeslen" />
          </div>
          <span>DevWeslen</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { MessageService } from '../services/messages';

export default defineComponent({
  setup() {
    onMounted(async () => {
      await MessageService.get(3);
    });
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
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 1;
  justify-content: center;

  .message {
    max-width: 440px;

    &:nth-child(2) {
      margin-left: 80px;
    }

    .message-content {
      font-size: 20px;
      line-height: 28px;
    }

    .message-user {
      margin-top: 16px;
      display: flex;
      align-items: center;

      .user-image {
        padding: 2px;
        background: linear-gradient(104.3deg, var(--PINK) 0.48%, var(--YELLOW) 100%);
        border-radius: 50%;
        line-height: 0;

        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 4px solid var(--BLACK-SECONDARY);
        }
      }

      span {
        margin-left: 12px;
        font-size: 16px;
      }
    }
  }
}
</style>
