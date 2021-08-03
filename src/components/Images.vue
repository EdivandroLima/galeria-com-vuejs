<template>
    <div>
        <section>
            <div class="row">
                <IndividualImage v-for="(img, index) in JSON.parse(dataImgs).reverse()" :key="`img-${index}`"
                    :path="img.path" :name="img.name" @toggle="imageToggle(img)" />
            </div>
        </section>
        <transition name="fade-img">
            <ModalImage @toggle="imageToggle" v-if="imgModal" :dataimg="dataModal" key="imgModal" />
        </transition>
    </div>
</template>

<script>
    import IndividualImage from './IndividualImage'
    import ModalImage from './ModalImage'
    export default {
        data() {
            return {
                dataImgs: '[{}]',
                imgModal: false,
                dataModal: {
                    path: null,
                    name: null
                }
            }
        },
        components: {
            IndividualImage,
            ModalImage
        },
        methods: {
            imageToggle(img = {
                path: null,
                name: null
            }) {
                this.imgModal = !this.imgModal
                this.dataModal = img
            }
        },
        created() {
            this.dataImgs = this.$store.getters.getDataImgs
        }
    }
</script>

<style scoped>
    .fade-img-enter,
    .fade-img-leave-to {
        opacity: 0
    }

    .fade-img-enter-active,
    .fade-img-leave-active {
        transition: opacity .2s;
    }
</style>