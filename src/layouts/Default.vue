<template>
    <div class="layout">
        <slot />
    </div>
</template>

<style>
@import 'https://cdn.rawgit.com/h-ibaldo/Raleway_Fixed_Numerals/master/css/rawline.css';

body {
    font-family: 'Rawline', 'Helvetica', Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
    background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 1) 0%,
            rgb(227, 229, 230) 100%
        )
        no-repeat;
}

a {
    text-decoration: none;
    position: relative;
}

a:after {
    border-radius: 1em;
    border-top: 1px solid #FFF;
    content: "";
    position: absolute;
    right: 100%;
    bottom: 0;
    left: 0;
    transition: right .4s cubic-bezier(0,.5,0,1);
}

a:hover:after {
    right: 0;
}

.container {
    max-width: 760px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
}

section {
    padding: 1rem;
}

header {
}

footer {
    background-color: #000;
    color: #fff;
    padding: 0.5rem;
}

h2 {
    font-weight: 250;
    font-size: 2rem;
}

p {
    line-height: 2.5rem;
}

button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: var(--borda);
    background: rgba(255, 255, 255, 0.3);
    color: #fff;
    padding: 0.75rem 1.25rem;
    font-size: 1.2rem;
}

button:focus,
button:active {
    border-color: transparent;
    background: none;
}
button.active {
    background: rgba(0, 0, 0, 0.5);
}

.time-break {
    color: #000;
}

.flex-inline {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.nav__link {
    margin-left: 20px;
}

svg {
    margin: 0.5rem;
}

/* color */
:root {
    --primary: #d50000;
    --secondary: #00c853;
    --tertiary: #5b4036;
    --signal: #2196f3;
    --borda: 8px;
}
</style>
