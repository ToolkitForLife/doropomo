<template>
    <Layout>
        <div class="report">
            <header class="container">
                <Nav />
            </header>
            <section class="container">
              <h1>Report</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
            </section>
        </div>
    </Layout>
</template>

<script>
import Nav from '~/components/Nav.vue';

export default {
    metaInfo: {
      title: 'Report'
    },
    components: {
        Nav
    }
};
</script>