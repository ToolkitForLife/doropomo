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
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgb(227, 229, 230) 100%) no-repeat;
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
    padding: 1rem;
}

header {
}

footer{
    background-color: #000;
    color: #FFF;
    padding: .5rem;
}

h2 {
    font-weight: 250;
    font-size: 2rem;
}

p{
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
    padding: .75rem 1.25rem;
    font-size: 1.2rem;
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

.time-break {
    color: #000;
}

.flex-inline {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav__link {
    margin-left: 20px;
}

/* color */
:root {
--primary: #D50000;
--secondary: #00C853;
--tertiary: #5B4036;
--borda:8px;
}
</style>
