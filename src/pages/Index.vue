<template>
    <Layout>
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

