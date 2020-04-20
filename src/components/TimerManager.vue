<template>
    <div class="timer-container">
        <Timer
            :phases="phases"
            :auto-start="autoStart"
            :long-work-interval="longWorkInterval"
        />
        <div class="timer-settings">
            <div>
                <h2>Times</h2>
                <label for="doropomo-minutes">
                    <input
                        id="doropomo-minutes"
                        type="number"
                        min="1"
                        max="60"
                        v-model.number="phases.DOROPOMO.minutes"
                    />
                    Doropomo
                </label>
                <label for="short-minutes">
                    <input
                        id="short-minutes"
                        type="number"
                        min="1"
                        max="60"
                        v-model.number="phases.SHORT_WORK.minutes"
                    />
                    Short Work
                </label>
                <label for="long-minutes">
                    <input
                        id="long-minutes"
                        type="number"
                        min="1"
                        max="60"
                        v-model.number="phases.LONG_WORK.minutes"
                    />
                    Long Work
                </label>
            </div>
            <div>
                <h2>Auto start next round?</h2>
                <label for="auto-start">
                    <input
                        id="auto-start"
                        type="checkbox"
                        v-model="autoStart"
                    />
                    Auto start
                </label>
            </div>
            <div>
                <h2>Long Work Intervals</h2>
                <label for="long-work-intervals">
                    <input
                        id="long-work-intervals"
                        type="number"
                        v-model.number="longWorkInterval"
                        min="1"
                    />
                    Long work intervals
                </label>
            </div>
        </div>
    </div>
</template>

<script>
import Timer from '~/components/Timer.vue';

const PHASES = {
    DOROPOMO: {
        label: 'Doropomo',
        phrase: 'Time for a break',
        countRuns: 0,
        minutes: 25
    },
    SHORT_WORK: {
        label: 'Short Work',
        phrase: 'Time to (short) work',
        countRuns: 0,
        minutes: 5
    },
    LONG_WORK: {
        label: 'Long Work',
        phrase: 'Time to (long) work',
        countRuns: 0,
        minutes: 15
    }
};

export default {
    name: 'TimerManager',
    components: {
        Timer
    },
    props: {
        // TODO: load settings
    },
    data() {
        return {
            autoStart: false,
            longWorkInterval: 4,
            phases: PHASES
        };
    }
};
</script>

<style></style>
