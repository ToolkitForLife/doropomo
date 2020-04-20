<template>
    <Layout>
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

        <h1>Doropomo</h1>

        <TimerManager />
    </Layout>
</template>

<script>
import TimerManager from '~/components/TimerManager.vue';

export default {
    metaInfo: {
        title: 'Doropomo'
    },
    components: {
        TimerManager
    }
};
</script>

<style>
.home-links a {
    margin-right: 1rem;
}
</style>
