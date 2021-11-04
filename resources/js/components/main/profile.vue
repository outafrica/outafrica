<template>
    <div>
       <h1 class="text-green-400">Here we go again ...</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                error: true,
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
