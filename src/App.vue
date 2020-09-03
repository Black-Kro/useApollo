<template>
    <div>
        <template v-if="loading">Loading...</template>
        <template v-else-if="error">Error: {{error}}</template>
        <template v-else-if="result">Result: {{result}}, {{me}}</template>
        <template v-else>An unknown error ocurred</template>
    </div>
    <div>
        <button @click="mutate">Ok Zoomer</button>
    </div>
    <div>
        <template v-if="isMutationLoading">Loading Mutation...</template>
        <template v-else-if="mutationError">Mutation Error: {{mutationError}}</template>
    </div>
</template>

<script setup>
    import { gql } from '@apollo/client/core';
    import { useQuery, useResult, useMutation } from './composables'; 

    export const { mutate, loading: isMutationLoading, error: mutationError } = useMutation(gql`
        mutation Ok {
            kill
        }
    `);

    export const { result, loading, error } = useQuery(gql`
        query Me {
            test {
                id
                username
            }
        }
    `);

    export const me = useResult(result, {}, (r) => r.test);

</script>
