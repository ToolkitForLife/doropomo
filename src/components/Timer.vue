<template>
    <div class="timer">
        <div class="buttons">
            <button type="button" :class="{ active: isDoropomo}" @click="setPhaseDoropomo">Doropomo</button>
            <button type="button" :class="{ active: isShortWork }" @click="setPhaseShort">Short Work</button>
            <button type="button" :class="{ active: isLongWork }" @click="setPhaseLong">Long Work</button>
        </div>
        <div class="timer-number">{{ now }}</div>
        <button type="button" @click="handleClick">{{ btnLabel }}</button>
        <div>{{ phase.phrase }}</div>
    </div>
</template>

<script>
const WAIT_MS = 1000;

const audio = new Audio('kichen-timer.mp3');
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
            return this.phase.minutes - this.timeRunned;
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
        }
    }
};
</script>

<style>
.timer {
    background-color: rgba(255, 255, 255, 0.1);
    margin-bottom: 20px;
    width: 100%;
    padding: 20px 0px 30px;
    border-radius: 6px;
    text-align: center;
}

.timer-number {
    font-size: 4rem;
    font-weight: bold;
}
</style>
