<template>
    <div class="timer">
        <h2 class="timer-phrase">{{ phase.phrase }}</h2>
        <div class="timer-container">
            <div
                class="timer-item"
                :class="{ active: isDoropomo, left: isShortWork||isLongWork }"
                style="background-color:var(--primary)"
                @click="setPhaseDoropomo"
            >
                        <button
                type="button"
                class="btn btn-link"
                @click="$parent.showSettings"
                >
                <IconSettings />Settings
            </button>
               <Progress :max="totalInSeconds" :value="timeRunned" />
                </header>
                <div class="timer-label">{{ phases.DOROPOMO.label }}</div>
                <div class="timer-number">
                    {{
                    isDoropomo
                    ? now
                    : formatMinutes(phases.DOROPOMO.minutes)
                    }}
                </div>
                <button
                    class="start-stop"
                    style="background-color:var(--secondary)"
                    type="button"
                    @click.stop="handleClick"
                >{{ btnLabel }}</button>
                <div class="auto-start">
                    <p>Auto start next?</p>
                    <span class="ui-switch is-animated">
                        <input
                            id="auto-start"
                            type="checkbox"
                            :value="autoStart"
                            class="ui-checkbox"
                        />
                        <span class="ui-button"></span>
                    </span>
                </div>
            </div>
            <div
                class="timer-item"
                :class="{ active: isShortWork, right: isDoropomo, left: isLongWork  }"
                style="background-color:var(--secondary)"
                @click="setPhaseShort"
            >
                <Progress :max="totalInSeconds" :value="timeRunned" />
                <div class="timer-label">{{ phases.SHORT_WORK.label }}</div>
                <div class="timer-number">
                    {{
                    isShortWork
                    ? now
                    : formatMinutes(phases.SHORT_WORK.minutes)
                    }}
                </div>
                <button class="start-stop" type="button" @click.stop="handleClick">{{ btnLabel }}</button>
            </div>
            <div
                class="timer-item"
                :class="{ active: isLongWork, right: isShortWork||isDoropomo }"
                style="background-color:var(--tertiary)"
                @click="setPhaseLong"
            >
                <Progress :max="totalInSeconds" :value="timeRunned" />
                <div class="timer-label">{{ phases.LONG_WORK.label }}</div>
                <div class="timer-number">
                    {{
                    isLongWork
                    ? now
                    : formatMinutes(phases.LONG_WORK.minutes)
                    }}
                </div>
                <button class="start-stop" type="button" @click.stop="handleClick">{{ btnLabel }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import Progress from '~/components/Progress.vue';
import IconSettings from '~/components/icons/IconSettings.vue';

const WAIT_MS = 1000;

let audio;

if (process.isClient) {
    audio = new Audio('kichen-timer.mp3');
}
const formatNumber = n => (n < 10 ? `0${n}` : n);

export default {
    name: 'Timer',
    props: {
        phases: {
            type: Object
        },
        autoStart: {
            type: Boolean,
            default: false
        },
        longWorkInterval: {
            type: Number,
            default: 4
        }
    },
    components: {
        Progress,
        IconSettings
    },
    data() {
        return {
            isRunning: false,
            timerInterval: null,
            timeRunned: 0,
            phase: this.phases.DOROPOMO
        };
    },
    mounted() {
        this.$root.isSettingsVisible = false;

        if (this.autoStart) {
            this.start();
        }
    },
    destroyed() {
        this.clearInterval();
    },
    computed: {
        btnLabel() {
            return this.isRunning ? 'Stop' : 'Start';
        },
        totalInSeconds() {
            return this.phase.minutes;
        },
        timeLeft() {
            return this.totalInSeconds - this.timeRunned;
        },
        now() {
            const minutes = formatNumber(Math.floor(this.timeLeft / 60));
            const seconds = formatNumber(Math.floor(this.timeLeft % 60));

            return `${minutes}:${seconds}`;
        },
        isDoropomo() {
            return this.phase === this.phases.DOROPOMO;
        },
        isShortWork() {
            return this.phase === this.phases.SHORT_WORK;
        },
        isLongWork() {
            return this.phase === this.phases.LONG_WORK;
        }
    },
    methods: {
        clearInterval() {
            if (this.timerInterval) {
                clearInterval(this.timerInterval);
                this.timerInterval = null;
            }
        },
        start() {
            this.clearInterval();
            this.timerInterval = setInterval(() => this.tick(), WAIT_MS);
            this.isRunning = true;

            this.$emit('started');
        },
        stop() {
            this.clearInterval();
            this.isRunning = false;

            this.$emit('stopped');
        },
        tick() {
            if (this.timeLeft > 0) {
                this.timeRunned++;
                this.$emit('tick', this.timeRunned);
                this.updateTitle();
            } else {
                this.end();
            }
        },
        end() {
            this.timeRunned = 0;
            this.stop();
            this.$emit('ended', { phase: this.phase });
            this.handleEnded();
        },
        reset() {
            this.stop();
            this.timeRunned = 0;
            this.updateTitle();
        },
        updateTitle() {
            document.title = `${this.now} - ${this.phase.phrase}`;
        },
        playSound() {
            // if enabled?
            try {
                audio.play();
            } catch (error) {
                console.error(error);
            }
        },
        setPhase(newPhase) {
            if (this.phase !== newPhase) {
                this.phase = newPhase;
                this.reset();
            }
        },
        setPhaseDoropomo() {
            this.setPhase(this.phases.DOROPOMO);
        },
        setPhaseShort() {
            this.setPhase(this.phases.SHORT_WORK);
        },
        setPhaseLong() {
            this.setPhase(this.phases.LONG_WORK);
        },
        selectNextPhase() {
            if (this.phase === this.phases.DOROPOMO) {
                if (this.phase.countRuns % (this.longWorkInterval + 1) === 0) {
                    this.phase = this.phases.LONG_WORK;
                } else {
                    this.phase = this.phases.SHORT_WORK;
                }
            } else {
                this.phase = this.phases.DOROPOMO;
            }

            this.updateTitle();
        },
        handleEnded() {
            this.phase.countRuns++;

            const { label, minutes, countRuns } = this.phase;
            console.info(
                `1 Doro finished | ${label} | Minutes ${minutes} | Total runs: ${countRuns}`
            );

            this.playSound();

            this.selectNextPhase();

            if (this.autoStart) {
                this.start();
            }
        },
        handleClick() {
            if (this.isRunning) {
                this.stop();
            } else {
                this.start();
            }
        },
        formatMinutes(minutes) {
            return `${formatNumber(minutes)}:00`;
        }
    }
};
</script>

<style>
.timer {
    color: #fff;
}
.timer-container {
    display: flex;
    color: #fff;
}

.timer-container header {
    margin-bottom: 1rem;
}

.timer h2.timer-phrase {
    color: var(--tertiary);
    text-align: center;
    margin: 0 0 2rem 0;
}

.timer-item {
    background-color: #808080;
    margin: 1rem 0;
    width: 100%;
    padding: 1rem;
    text-align: center;
    border-radius: var(--borda);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.timer-item.right {
    border-radius: 0 var(--borda) var(--borda) 0;
}

.timer-item.left {
    border-radius: var(--borda) 0 0 var(--borda);
}

.timer-item {
    border-radius: var(--borda);
    position: relative;
}

.start-stop {
    display: none;
    font-weight: 500;
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}

.timer-number {
    font-size: 2rem;
    font-weight: 500;
    margin: 3rem 0;
}

/* card ativo */
.timer-item.active * {
    opacity: 1;
}

.timer-container .timer-item:nth-child(2) {
    margin: 0.5rem 0;
}

.timer-container .timer-item.active {
    width: 400%;
    margin: 0rem;
}

.timer-item.active .start-stop {
    display: inline-flex;
}

.timer-item.active .timer-number {
    font-size: 4rem;
    margin: 1rem 0;
    font-weight: 700;
}

/* switch */

.auto-start {
    display: flex;
    align-items: center;
}

.auto-start label {
    margin-right: 0.5rem;
}
.auto-start input {
    display: none;
}

 .timer-container .auto-start {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    display: none;
}

 .timer-container .auto-start p{
    line-height: 1rem;
    font-size: .75rem;
 }

.ui-switch {
    display: inline-block;
    position: relative;
    background-color: rgba(0, 0, 0, 0.25);
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 16px;
}
.is-animated .ui-button {
    transition: margin ease-out 0.2s, border ease-in 0.2s;
}

.timer-item.active .ui-checkbox {
    opacity: 0;
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
}
.ui-button {
    display: block;
    width: 1rem;
    height: 1rem;
    margin: 0px 24px 2px 2px;
    background-color: #fff;
    border-radius: 50%;
}
.ui-checkbox:checked + .ui-button {
    margin: 0px 2px 2px 24px;
    background-color: var(--secondary);
}

.timer-item.active .timer-progess-bar,
.timer-item.active .auto-start {
    display: block;
}

.btn-link {
    background: none;
    padding: 0;
}

/* for mobile */
@media (max-width: 600px) {
    .timer-container {
        flex-direction: column;
    }
    .timer-container .timer-item,
    .timer-container .timer-item.active {
        width: inherit;
    }
    .timer-item {
        margin: 0 1rem;
    }
    .timer-container .timer-item:nth-child(2) {
        margin: 0 0.5rem;
    }
    .timer-number {
        margin: 0;
    }
    .timer-item.right {
        border-radius: 0 0 var(--borda) var(--borda);
    }

    .timer-item.left {
        border-radius: var(--borda) var(--borda) 0 0;
    }
}
</style>
