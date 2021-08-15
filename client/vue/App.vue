<template>
    <div>
        <h2>App.vue</h2>
        <router-link to="/sample">/sample</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import sample from './sample.vue';

    export default {
        components: {
            'sample': sample
        }
    };
</script>