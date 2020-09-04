import { createApp } from 'vue'
import App from './App.vue'
import { DefaultApolloClient } from './composables';

import { client } from './gql';
// import './index.css'

createApp(App)
    .provide(DefaultApolloClient, client)
    .mount('#app')
