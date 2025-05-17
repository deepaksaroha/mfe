<template>
    <div>
        <h1>{{ message }}</h1>
        <button @click="changeMessage">Change Message</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "Hello, Dashboard!",
            };
        },
        methods: {
            changeMessage() {
                this.message = "Message Changed!";
            },
        },
    };
</script>

<style scoped>
h1 {
    color: blue;
}
</style>
