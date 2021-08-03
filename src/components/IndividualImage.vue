<template>
    <div class="col-12 col-md-3">
        <div class="col-img" @click="$emit('toggle')">
            <div class="img-name text-truncate">
                {{name}}
            </div>
            <img :src="path" :alt="name" class="w-100">
        </div>
    </div>
</template>

<style scoped>
    .img-name {
        background: linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .0));
        padding: 2px 8px;
        padding-bottom: 8px;
        position: absolute;
        left: 0px;
        right: 0px;
        color: white;
        opacity: 0;
        transition: opacity .2s;
        overflow: hidden;
    }

    .col-img {
        position: relative;
        cursor: pointer;
        margin-bottom: 20px;
        transition: box-shadow .15s
    }

    .col-img {
        box-shadow: 0 0 10px rgb(138, 43, 226, .8)
    }

    .col-img:hover {
        box-shadow: 0 0 10px rgba(22, 183, 228, .8)
    }

    .col-img:hover>.img-name {
        opacity: 1;
    }
</style>

<script>
    export default {
        props: {
            path: String,
            name: String
        }
    }
</script>