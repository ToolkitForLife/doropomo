<template>
    <div class="layout">
        <slot />
    </div>
</template>

<style>
body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
}

a {
    text-decoration: none;
}
/* a:hover {
    text-decoration: underline;
} */

.container {
    max-width: 760px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
}

section {
    padding: 2rem 1rem;
}

header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.3);
    color: #fff;
    padding: 0.5rem;
}

button:focus,
button:active {
    border: none;
    background: none;
    outline: 1px solid rgba(0, 0, 0, 0.2);
}
button.active {
    background: rgba(0, 0, 0, 0.3);
}

.buttons {
    /* display: flex;
    justify-content: space-around;
    align-items: center; */
}

.time-break {
    color: #fff;
    background-color: #44958c;
}

.flex-inline {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav__link {
    margin-left: 20px;
}
</style>
