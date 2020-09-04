<template>
    <div>
        <template v-if="loading">Loading...</template>
        <template v-else-if="error">Error: {{error}}</template>
        <template v-else-if="result">Result: {{result}}, {{me}}</template>
    </div>
    <div>
        <button @click="start">Ok Zoomer</button>
    </div>
    <div>
        <template v-if="isMutationLoading">Loading Mutation...</template>
        <template v-else-if="mutationError">Mutation Error: {{mutationError}}</template>
    </div>
</template>

<script setup>
    import { gql } from '@apollo/client/core';
    import { useLazyQuery, useResult, useMutation } from './composables'; 

    export const { start, result, loading, error,  } = useLazyQuery(gql`
        query Me {
            test {
                id
                username
            }
        }
    `);

    export const me = useResult(result, {}, (r) => r.test);

</script>
