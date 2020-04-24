<template>
    <Layout>
        <div class="time-break">
            <header class="container">
                <Nav />
            </header>
            <section class="container">
                <TimerManager />
            </section>
            <section class="container">
                <Explaining />
            </section>    
            <section class="bg-testimonial">        
                <div class="container">
                    <Testimonial />
                </div>
            </section>
        </div>
    </Layout>
</template>

<script>
import Nav from '~/components/Nav.vue';
import TimerManager from '~/components/TimerManager.vue';
import Explaining from '~/components/Explaining.vue';
import Testimonial from '~/components/Testimonial.vue';

export default {
    metaInfo: {
        title: 'Doropomo'
    },
    components: {
        Nav,
        TimerManager,
        Explaining,
        Testimonial
    }
};
</script>