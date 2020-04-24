<template>
    <div class="explain">
        <div class="explain-item">
            <h2>Why Doropomo?</h2>
            <div class="content">
                <p>We created Domopomo as a criticism of the high productivity in most people’s lives. We are not saying that Pomodoro Technique doesn’t work and it’s a great time management method. Our desire was to show a different approach to manage your time and work. We really believe in a work/life balance and you can do it using Doropomo.</p>                
            </div>
        </div>
        <div class="explain-item">
            <h2>How to use Doropomo?</h2>
            <div class="content colunas">
                <div class="content-item"> 
                    <h3><span class="number">1</span> Work</h3>
                    <p>The working period should be shorter than the sum of breaks.</p>                
                </div>
                <div class="content-item"> 
                    <h3><span class="number">2</span> Rest</h3>
                    <p>Do something you like for a while and prepare to go back relaxed.</p>                
                </div>
                <div class="content-item"> 
                    <h3><span class="number">3</span> Relax</h3>
                    <p>Do a long break and enjoy your time with nothing but <strong>yourself</strong>.</p>                
                </div>
            </div>
        </div>    
        <div class="explain-item">
            <h2>Does it work?</h2>
            <div class="content">
                <p>We believe that a 5 minutes break isn't long enough to do something you like, or to truly relax. The main idea is to have a longer break time than work time. So we “inverted” the Pomodoro timer and called it Doropomo, that is a 5 minutes work followed by a 25 minutes break time. Of course that 5 minutes is too short to have anything done, but we want to question the quality of the time you spend working and also during the breaks.</p>                
            </div>
        </div>
        <div class="explain-item">
            <h2>What is Pomodoro Technique?</h2>
            <div class="content">
                <p>Pomodoro is a method created by Francesco Cirillo that uses a timer to break down work into intervals, traditionally 25 minutes long, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - Wikipedia</p>                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Explaining'
};
</script>

<style>
.explain h2 {
    color: var(--primary);
    text-align: center;
}

.explain .colunas{
    display: flex;
}

/* for mobile */
@media (max-width: 600px) {
    .explain .colunas {
        flex-direction: column;
    }
}

.number{
    background-color: var(--secondary);
    font-size: 1rem;
    color: #FFF;
    border-radius: var(--borda);
    padding: 0 .5rem;
    display: inline-block;
    width: .5rem;
    text-align: center;
}

.explain .colunas h3{
    font-weight: 250;
    color: var(--tertiary);
    font-size: 1.5rem;
}

</style>
