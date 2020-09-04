***NOTE: This is a fork of [Vue Apollo V4 Composable](https://github.com/vuejs/vue-apollo/tree/v4/packages/vue-apollo-composable)***

# useApollo
useApollo is a "fork" of vue-apollo that removes support from Vue 2.x and adds support for Apollo 3.x and Vue 3.x 

Since this library is a fork of the original vue-apollo and only includes the `apollo-composable` portion of the library, only certain portions of the docs will be helpful to you.

**Relevant Documentation**

[Vue Apollo - Composition API](https://v4.apollo.vuejs.org/api/use-query.html)

## Why?
The reason for this library fork is the Vue Apollo library does not currently support Apollo 3 and the support for Vue 3.x is not very good either. This fork hopes to resolve those issues until the official library has proper support for both Apollo 3 and Vue 3.x. This library will try its best to use the same API as the Vue Apollo library so when the official library is up to date it will be easy to switch back to it.

## Installing
```
yarn add @black-kro/useApollo @apollo/client
```

## Using

*apollo.ts*
```ts
import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core';

export const client = new ApolloClient({
    uri: 'MY SERVER URL',
    cache: new InMemoryCache()
});
```

*main.ts*
```ts
import { createApp } from 'vue'
import App from './App.vue'

// Import DefaultApollo symbol from package and import your client.
import { DefaultApolloClient } from './composables';
import { client } from './apollo';

createApp(App)
    // Provide your client to the useApollo library.
    .provide(DefaultApolloClient, client)
    .mount('#app')
```

*App.vue*
```html
<template>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{error}}</div>
    <div v-else-if="result">{{result}}</div>
</template>

<script setup>
    import { useQuery } from '@black-kro/useApollo';
    import { gql } from '@apollo/client/core';

    export const { loading, error, result } = useQuery(gql`
        query Me {
            me {
                id
                username
            }
        }
    `);
</script>
```

## Non-Standard API's

- `useLazyQuery`
    
    This works the same as `useQuery` except it will not auto run. To run the query you must use the `start` function on the object.

    ```ts
    const { start, result, loading, error } = useLazyQuery(...);
    ```

## Troubleshooting

### Vite
If you are using vite you may run into some troubles when attempting to create your Apollo Client, to resolve this create a `vite.config.ts` file like below to resolve the issues.

```ts
import { UserConfig } from 'vite';

const config: UserConfig = {
    optimizeDeps: {
        include: [
            'fast-json-stable-stringify',
            'zen-observable',
            'graphql-tag'
        ]
    },
    rollupInputOptions: {
        external: [
            'react',
        ]
    },
}

export default config;
```

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, Black Kro