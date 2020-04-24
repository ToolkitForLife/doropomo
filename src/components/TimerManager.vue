<template>
    <div class="timer-manager">
        <Timer
            :phases="phases"
            :auto-start="autoStart"
            :long-work-interval="longWorkInterval"
        />
        <!-- TODO: show/hide settings -->
        <Modal :isActive="isSettingsVisible" @close="hideSettings">
            <div class="timer-settings">
                <div>
                    <h2>Settings</h2>
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
        </Modal>
    </div>
</template>

<script>
import Timer from '~/components/Timer.vue';
import Modal from '~/components/Modal.vue';

const PHASES = {
    DOROPOMO: {
        label: 'Doropomo',
        phrase: 'Time to work',
        countRuns: 0,
        minutes: 25
    },
    SHORT_WORK: {
        label: 'Short break',
        phrase: 'Time to rest...',
        countRuns: 0,
        minutes: 5
    },
    LONG_WORK: {
        label: 'Long break',
        phrase: 'Time to relax!',
        countRuns: 0,
        minutes: 15
    }
};

export default {
    name: 'TimerManager',
    components: {
        Modal,
        Timer
    },
    props: {
        // TODO: load settings
    },
    data() {
        return {
            isSettingsVisible: false,
            autoStart: false,
            longWorkInterval: 4,
            phases: PHASES
        };
    },
    methods: {
        showSettings() {
            this.isSettingsVisible = true;
        },
        hideSettings() {
            this.isSettingsVisible = false;
        }
    }
};
</script>

<style>
.timer-settings {
    background-color: #fff;
    border-radius: var(--borda);
    padding: 2rem;
    margin-top: 2rem;
}
</style>
