<template>
    <Layout>
        <div class="login">
            <header class="container">
                <Nav />
            </header>
            <section class="container">
                <h1>Login</h1>
            </section>
        </div>
    </Layout>
</template>

<script>
import Nav from '~/components/Nav.vue';

export default {
    metaInfo: {
        title: 'Login'
    },
    components: {
        Nav
    }
};
</script>

