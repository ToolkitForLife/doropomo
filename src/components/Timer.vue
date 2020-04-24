<template>
    <div class="timer">
        <h2 class="timer-phrase">{{ phase.phrase }}</h2>
        <div class="timer-container">
            <div
                class="timer-item"
                :class="{ active: isDoropomo }"
                style="background-color:var(--primary)"
                @click="setPhaseDoropomo"
            >
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
                    type="button"
                    @click.stop="handleClick"
                >
                    {{ btnLabel }}
                </button>
            </div>
            <div
                class="timer-item"
                :class="{ active: isShortWork }"
                style="background-color:var(--secondary)"
                @click="setPhaseShort"
            >
                <div class="timer-label">{{ phases.SHORT_WORK.label }}</div>
                <div class="timer-number">
                    {{
                        isShortWork
                            ? now
                            : formatMinutes(phases.SHORT_WORK.minutes)
                    }}
                </div>
                <button
                    class="start-stop"
                    type="button"
                    @click.stop="handleClick"
                >
                    {{ btnLabel }}
                </button>
            </div>
            <div
                class="timer-item"
                :class="{ active: isLongWork }"
                style="background-color:var(--tertiary)"
                @click="setPhaseLong"
            >
                <div class="timer-label">{{ phases.LONG_WORK.label }}</div>
                <div class="timer-number">
                    {{
                        isLongWork
                            ? now
                            : formatMinutes(phases.LONG_WORK.minutes)
                    }}
                </div>
                <button
                    class="start-stop"
                    type="button"
                    @click.stop="handleClick"
                >
                    {{ btnLabel }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
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
    data() {
        return {
            isRunning: false,
            timerInterval: null,
            timeRunned: 0,
            phase: this.phases.DOROPOMO
        };
    },
    mounted() {
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
        timeLeft() {
            return this.phase.minutes * 60 - this.timeRunned;
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
            if (this.timeRunned < this.phase.minutes) {
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
        setPhaseDoropomo() {
            this.phase = this.phases.DOROPOMO;
            this.reset();
        },
        setPhaseShort() {
            this.phase = this.phases.SHORT_WORK;
            this.reset();
        },
        setPhaseLong() {
            this.phase = this.phases.LONG_WORK;
            this.reset();
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

.timer-item {
    border-radius: var(--borda);
}

.start-stop {
    display: none;
    font-weight: 500;
    background-color: var(--secondary);
    box-shadow: 0 0.25rem 0px 0px var(--tertiary);
}

.timer-number {
    font-size: 2rem;
    font-weight: 500;
    margin: 2rem 0;
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
        margin: 1rem 0;
    }
}
</style>
