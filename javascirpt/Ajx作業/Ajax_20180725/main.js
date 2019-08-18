const vm = new Vue({
    el: '#app',
    data: {
        size: 40,
    },
    computed: {
        h1Style() {
            return {
                fontSize: `${this.size}px`,
            };
        },
    },
    methods: {
        shrink() {
            this.size--;
        },
    },
})