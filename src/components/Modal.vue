<template>
    <div class="modal" :class="{ active: isActive}">
        <button type="button" class="modal-background" @click="$emit('close')" />
        <div class="modal-content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        isActive: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style>
.modal,
.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.modal-content {
    position: relative;
    margin: 0 auto;
    max-width: 500px;
}

.modal-background {
    background: rgba(0, 0, 0, 0.3);
}

.modal {
    display: none;
}
.modal.active {
    display: block;
}
/* for mobile */
@media (max-width: 600px) {
    .modal-content {
        margin: 0 1rem;
    }
    .flex-inline{
        flex-direction: column;
    }
}
</style>
