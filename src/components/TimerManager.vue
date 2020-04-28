<template>
    <div class="timer-manager">
        <Timer :phases="phases" :auto-start="autoStart" :long-work-interval="longWorkInterval" />
        <!-- TODO: show/hide settings -->
        <Modal :isActive="isSettingsVisible" @close="hideSettings">
            <div class="timer-settings">
                <div>
                    <h2>Settings</h2>
                    <div class="flex-inline">
                        <div class="input-group">
                            <label for="doropomo-minutes">Doropomo</label>
                            <input
                                id="doropomo-minutes"
                                type="number"
                                :min="minDoropomoValue"
                                max="60"
                                v-model.number="phases.DOROPOMO.minutes"
                            />
                            <p class="input-hint">{{ phases.DOROPOMO.phrase }}</p>
                        </div>
                        <div class="input-signal">&gt;</div>
                        <div class="input-group">
                            <label for="short-minutes">Short Work</label>
                            <input
                                id="short-minutes"
                                type="number"
                                min="1"
                                :max="maxShortWorkValue"
                                v-model.number="phases.SHORT_WORK.minutes"
                            />
                            <p class="input-hint">{{ phases.SHORT_WORK.phrase }}</p>
                        </div>
                        <div class="input-signal">+</div>
                        <div class="input-group">
                            <label for="long-minutes">Long Work</label>
                            <input
                                id="long-minutes"
                                type="number"
                                min="1"
                                :max="maxLongWorkValue"
                                v-model.number="phases.LONG_WORK.minutes"
                            />
                            <p class="input-hint">{{ phases.LONG_WORK.phrase }}</p>
                        </div>
                    </div>
                    <div class="flex-inline">
                        <!-- <div>
                            <label for="settings-auto-start">Auto start next?</label>
                            <input id="settings-auto-start" type="checkbox" v-model="autoStart" />
                        </div>-->
                        <div class="auto-start">
                            <label for="auto-start">Auto start next?</label>
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
                    <div class="flex-inline input-group">
                        <label for="long-work-intervals">Long work intervals</label>
                        <input
                            id="long-work-intervals"
                            type="number"
                            v-model.number="longWorkInterval"
                            min="1"
                        />
                    </div>
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
    data() {
        return {
            isSettingsVisible: false,
            autoStart: false,
            longWorkInterval: 4,
            phases: PHASES
        };
    },
    computed: {
        minDoropomoValue() {
            // always rest more than work
            return (
                this.phases.SHORT_WORK.minutes + this.phases.LONG_WORK.minutes
            );
        },
        maxShortWorkValue() {
            const minShortWork =
                this.phases.DOROPOMO.minutes - this.phases.LONG_WORK.minutes;
            return minShortWork > 0 ? minShortWork : 0;
        },
        maxLongWorkValue() {
            const maxLongWork =
                this.phases.DOROPOMO.minutes - this.phases.SHORT_WORK.minutes;
            return maxLongWork > 0 ? maxLongWork : 0;
        }
    },
    methods: {
        setAutorStart(newState) {
            this.autoStart = newState;
        },
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

.timer-settings h2 {
    text-align: center;
    margin-top: 0;
    font-weight: bold;
}

.timer-settings .flex-inline {
    margin-bottom: 1rem;
}

.timer-settings .input-group {
    display: flex;
    flex-direction: column;
}

.timer-settings .input-group input {
    height: 56px;
    min-width: 100px;
    background: rgba(0, 0, 0, 0.03);
    border: none;
    border-radius: 4px 4px 0px 0px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.36);
    font-size: 24px;
    line-height: 28px;
    padding: 14px;
    box-sizing: border-box;
}

.timer-settings .input-hint {
    margin: 0;
    font-size: 12px;
    line-height: 14px;
    color: rgba(0, 0, 0, 0.54);
}

.input-signal {
    color: var(--signal);
    font-size: 24px;
}

.flex-inline.input-group {
    flex-direction: row;
    justify-content: start;
}

.flex-inline.input-group input {
    flex-grow: 0;
    width: 50px;
    margin-left: 1rem;
}
</style>
