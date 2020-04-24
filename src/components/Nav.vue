<template>
    <div class="flex-inline">
        <h1>
            <g-link to="/">
                <g-image :src="$url('/logo.svg')" width="140" />
            </g-link>
        </h1>
        <!-- <div class="flex-inline">
            <g-link class="nav__link" to="/report">Report</g-link>
            <g-link class="nav__link" to="/?settings=true">Settings</g-link>
            <g-link class="nav__link" to="/login">Login</g-link>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'Nav'
};
</script>

<style>
header a {
    color: #000;
}
</style>
