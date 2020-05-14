<template>
    <div class="testimonial">
        <div class="testimonial-item">
            <h2>This reverse-pomodoro can be used to slow down...</h2>
            <p class="who"><strong>Leonardo Merlin,</strong> co-founder of garagethinking</p>
            <a href="https://www.garagethinking.com/" target="_blank" class="link">https://www.garagethinking.com/</a>
        </div>
        <div class="testimonial-item">
            <h2>Don’t be productive!</h2>
            <p class="who"><strong>Felipe Dário,</strong> creator of Doropomo</p>
            <a href="http://www.doropomo.com" target="_blank" class="link">http://www.doropomo.com</a>
        </div>
        <div class="testimonial-item">
            <h2>Now “productivity” is a dirty word</h2>
            <p class="who"><strong>Jake Knapp,</strong>  creator of design sprints</p>
            <a href="https://www.invisionapp.com/inside-design/jake-knapp-make-time-design-sprints-productivity/" target="_blank" class="link">https://www.invisionapp.com/inside-design/jake-knapp-make-time-design-sprints-productivity/</a>
        </div>
        <div>
            <a href="https://www.producthunt.com/posts/doropomo?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-doropomo" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=196628&theme=dark" alt="Doropomo - Inverted Pomodoro focused for a truly work/life balance | Product Hunt Embed" style="width: 250px; height: 54px;" width="250px" height="54px" /></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Testimonial'
};
</script>

<style>
.bg-testimonial {
    background: url('../../static/timer-footer.png') top left repeat-x var(--primary);
    color: #FFF;
}

.testimonial a{
    color: #FFF;
}

.testimonial{
    text-align: center;
}

.testimonial-item{
    margin-bottom:4rem;
}

.testimonial h2{
    margin-bottom: 0;
}

.testimonial p{
    margin: .5rem 0 0 0;
    line-height: 1.25rem;
}
</style>
