<template>
  <div class="chat">
    <div class="messages">
      <div v-for="(message, index) in messages" :key="index">
        <strong>{{ message.role }}: </strong> {{ message.content }}
      </div>
    </div>
    <div class="input-area">
      <input v-model="userInput" @keyup.enter="sendMessage" />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      userInput: '',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.'
        },
        {
          role: 'user',
          content: 'Hello!'
        },
        {
          role: 'assistant',
          content: 'Hello! How can I assist you today?'
        },

      ]
    }
  },
  methods: {
    sendMessage() {
      this.messages.push({
        role: 'user',
        content: this.userInput
      })
      this.userInput = ''
      axios.post('https://ai.fakeopen.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: this.messages
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer pk-this-is-a-real-free-pool-token-for-everyone'
        }
      })
          .then((res) => {
            this.messages.push({
              role: 'assistant',
              content: res.data.choices[0].message.content
            })
          })
          .catch((err) => {
            console.log(err)
          })
    }
  }
}
</script>

<style scoped>
.messages {
  height: 400px;
  overflow-y: scroll;
}
.input-area {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
</style>