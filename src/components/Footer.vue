<template>
    <div class="container">
        <p>Made with ❤ using <span>{{ (Math.random() * 10).toFixed(2) }}</span> Doropomos by <a href="http://felipedario.com.br/" target="_blank">Felipe Dário</a> and <a href="https://leonardomerlin.com.br/" target="_blank">Leonardo Merlin</a></p>
        <p class="cc-license"><a class="cc-license" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" /></a></p>
    </div>
</template>

<script>
export default {
    name: 'Footer'
};

</script>
<style>
footer p{
    margin:0;
    font-size: .75rem;
    text-align: center;
    line-height: 1rem;
}

footer p a{
    text-decoration: underline;
}

footer .cc-license {
text-align: center;
margin-top: 1em;
}
</style>
