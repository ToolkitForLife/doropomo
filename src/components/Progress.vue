<template>
    <div class="timer-progess-bar">
        <div class="timer-progess-bar-gone" :style="{ width: progressPercentage}"></div>
    </div>
</template>

<script>
export default {
    name: 'Progress',
    props: {
        max: {
            type: Number
        },
        value: {
            type: Number
        }
    },
    computed: {
        progressPercentage() {
            return Math.floor(100 - (this.value / this.max) * 100) + '%';
        }
    }
};
</script>

<style>
.timer-progess-bar,
.timer-progess-bar-gone {
    width: 100%;
    height: 0.5rem;
    border-radius: var(--borda);
}
.timer-progess-bar {
    background-color: rgba(0, 0, 0, 0.25);
    margin-bottom: 1rem;
    display: none;
    border-top: 1px solid rgba(0, 0, 0, 0.25);
}

.timer-progess-bar-gone {
    max-width: 100%;
    width: 99%;
    background-color: #fff;
    margin-top: -1px;
    height: calc(0.5rem + 1px);
}
</style>
