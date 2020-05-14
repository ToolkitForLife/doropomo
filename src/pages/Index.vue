<template>
    <Layout>
        <div class="time-break">
            <header class="container">
                <Nav />
            </header>
            <section class="container">
                <TimerManager />
            </section>
            <section class="container explaining">
                <Explaining />
            </section>    
            <section class="bg-testimonial">        
                <div class="container">
                    <Testimonial />
                </div>
            </section>
            <footer>
                <Footer /> 
            </footer>
        </div>
    </Layout>
</template>

<script>
import Nav from '~/components/Nav.vue';
import TimerManager from '~/components/TimerManager.vue';
import Explaining from '~/components/Explaining.vue';
import Testimonial from '~/components/Testimonial.vue';
import Footer from '~/components/Footer.vue';

export default {
    metaInfo: {
        title: 'Doropomo'
    },
    components: {
        Nav,
        TimerManager,
        Explaining,
        Testimonial,
        Footer
    }
};
</script>