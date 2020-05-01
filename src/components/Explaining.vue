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
                    <h3><span class="number">1</span> Relax</h3>
                    <p>Start with a break and enjoy your time with nothing but <strong>yourself</strong>.</p>        
              
                </div>
                <div class="content-item"> 
                    <h3><span class="number">2</span> Prepare</h3>
                    <p>Do something for a while and prepare to go back relax.</p>                
                </div>
                <div class="content-item"> 
                    <h3><span class="number">3</span> Work</h3>
                    <p>Working periods should be shorter than the break.</p>  
                </div>
            </div>
        </div>    
        <div class="explain-item">
            <h2>Does it work?</h2>
            <div class="content">
                <p>We believe that we should be truly relaxed before working. The main idea is to have a longer break period than work periods. So we “inverted” the Pomodoro timer and called it Doropomo, that is, by default, a 25 minutes break time followed by a 5 minutes work time, then a longer work period. We want to question the quality of the time you spend working and also during the breaks.</p> 
                <p>Check our <a href="https://www.instagram.com/doropomo.app/" target="_blank">Instagram</a> and keep in touch!</p>
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
.content-item{
    padding-right: 1rem;
}

.content-item:last-child{
    padding-right: 0;
}
.explain a{
    color: #2F56B0;
}

.explain a:after {
  border-top: .1em solid #2F56B0;
}

.explain h2 {
    color: var(--primary);
    text-align: center;
}

.explain .colunas{
    display: flex;
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
/* for mobile */
@media (max-width: 600px) {
    .explain .colunas {
        flex-direction: column;
    }
    .content-item{
        padding-right: 0rem;
    }
}
</style>
