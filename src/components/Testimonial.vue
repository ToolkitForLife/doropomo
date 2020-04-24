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
    </div>
</template>

<script>
export default {
    name: 'Testimonial'
};
</script>

<style>
.bg-testimonial {
    background-color: var(--primary);
    color: #FFF;
}

a{
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
    margin: .5rem 0;
}


</style>
