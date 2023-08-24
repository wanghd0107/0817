// curl https://api.openai.com/v1/chat/completions \
//     -H "Content-Type: application/json" \
//   -H "Authorization: Bearer $OPENAI_API_KEY" \
//   -d '{
// "model": "gpt-3.5-turbo",
//     "messages": [
//     {
//         "role": "system",
//         "content": "You are a helpful assistant."
//     },
//     {
//         "role": "user",
//         "content": "Hello!"
//     }
// ]
// }'












const axios = require('axios')

axios.post('https://ai.fakeopen.com/v1/chat/completions', {
    "model": "gpt-3.5-turbo",
    "messages": [
        {
            "role": "system",
            "content": "You are a helpful assistant."
        },
        {
            "role": "user",
            "content": "Hello!"
        },
        { "role": 'assistant',
            "content": 'Hello! How can I assist you today?'
        },
        {
            "role": "user",
            "content": "Help me calculate 2+2!"
        }
    ]
},{
    headers:{
        'Content-Type': 'application/json',
        'Authorization':'Bearer pk-this-is-a-real-free-pool-token-for-everyone'
    }
}).then((res) => {
    console.log(res.data.choices[0].message)
}).catch((err) => {
    console.log(err)
})
