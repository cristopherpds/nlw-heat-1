<template>
  <transition name="pop">
    <li
      class="message"
    >
      <p class="message-content">
        {{ text }}
      </p>
      <div class="message-user">
        <div class="user-image">
          <img
            :src="avatarUrl"
            :alt="name"
          >
        </div>
        <span>{{ name }}</span>
      </div>
    </li>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    text: { type: String, required: true },
    avatarUrl: { type: String, required: true },
    name: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
.message {
  background: #1b1b1f;
  padding: 24px;
  max-width: 440px;

  @media screen and (max-width: 1080px){
    max-width: 100%;
  }

  &:nth-child(2) {
    margin-left: 80px;
  }

  .message-content {
    word-wrap: break-word;
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

</style>
