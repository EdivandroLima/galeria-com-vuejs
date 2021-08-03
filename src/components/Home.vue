<template>
    <div class="container">
        <div class="d-flex justify-content-between mb-3">
            <h1 class="h4 font-weight-bold">Galeria de Imagens com Vue.js</h1>
            <AddImage/>
        </div>
        <Images/>
    </div>
</template>

<script>
import Images from './Images'
import AddImage from './AddImage'
export default {
    components: {
        Images,
        AddImage
    },
}
</script>