<template>
    <Layout>
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

        <div class="time-break">
            <header class="container">
                <Nav />
            </header>
            <section class="container">
                <TimerManager />
            </section>
        </div>
    </Layout>
</template>

<script>
import Nav from '~/components/Nav.vue';
import TimerManager from '~/components/TimerManager.vue';

export default {
    metaInfo: {
        title: 'Doropomo'
    },
    components: {
        Nav,
        TimerManager
    }
};
</script>

