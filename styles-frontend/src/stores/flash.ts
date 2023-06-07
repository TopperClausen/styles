import { defineStore } from 'pinia';

export const useFlashStore = defineStore('flash', {
    state: () => {
        return {
            message: '',
            type: '',
            time: 0
        }
    },
    actions: {
        setMessage(message: string) {
            this.message = message;
            this.type = 'message';
            this.time = 4000;
            this.reset();
        },
        setError(message: string) {
            this.message = message;
            this.type = 'error';
            this.time = 4000;
            this.reset();
        },
        reset() {
            setTimeout(() => {
                this.message = '';
                this.type = '';
                this.time = 0;
            }, this.time);
        }
    }
});