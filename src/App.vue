<template>
    <div>
        <template v-if="loading">Loading...</template>
        <template v-else-if="error">Error: {{error}}</template>
        <template v-else-if="result">Result: {{result}}, {{me}}</template>
    </div>
    <div>
        <input type="text" v-model="query">
        <button @click="getResults">Ok Zoomer</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { gql } from '@apollo/client/core';
    import { useLazyQuery, useResult, useMutation } from './composables'; 

    export const query = ref('');

    export const getResults = () => {
        fetch({ query: query.value });
    }

    export const { fetch, result, loading, error,  } = useLazyQuery(gql`
        query Search($query: String!) {
            search(query: $query) {
                nodes {
                    id
                    username
                }
            }
        }
    `);

    export const me = useResult(result, {}, (r) => r.test);

</script>
