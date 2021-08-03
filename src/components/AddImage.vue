<template>
    <div class="form-inline">
        <transition name="fade-add-img">
            <div class="div-add-img card" v-if="inputImg" key="inputImg">
                <div class="card-body">
                    <form action="#" method="post" @submit.prevent="setImg">
                        <button type="button" class="close" @click="inputImg= !inputImg">&times;</button>
                        <div>
                            <label for="img-name" class="float-left">Titulo da IMG</label>
                        </div>
                        <input id="img-name" class="form-control w-100 mb-2" type="text" name="" placeholder="Titulo"
                            v-model="imgName">
                        <div>
                            <label for="img-url" class="float-left">URL da IMG</label>
                        </div>
                        <input id="img-url" class="form-control w-100 mb-3" type="url" name=""
                            placeholder="http://site.com/img.jpg" v-model="imgUrl" required>
                        <div>
                            <button class="btn btn-info" type="submit">Adicionar</button>
                            <a href="https://imgur.com/upload" target="_blank" class="ml-2 text-danger">
                                Upload (imgur)
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <button type="button" class="btn btn-danger px-3 btn-sm animate__animated animate__jackInTheBox" v-else
                key="btnAddImg" @click="inputImg= !inputImg">
                <i class="fas fa-plus"></i> <span class="d-none d-md-inline-block">Adicionar Imagem</span>
            </button>

        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputImg: false,
                imgName: null,
                imgUrl: null
            }
        },
        methods: {
            setImg() {

                if (!this.imgName && !this.imgUrl) {
                    return;
                }
                let data = JSON.parse(localStorage.getItem('data-imgs'))
                data.push({
                    path: this.imgUrl,
                    name: (this.imgName == null ? this.imgUrl : this.imgName)
                })

                data = JSON.stringify(data)
                localStorage.setItem('data-imgs', data)
                this.inputImg = !this.inputImg
                this.$store.getters.getDataImgs
                this.$router.go()
            }
        },
    }
</script>

<style scoped>
    .div-add-img {
        position: fixed;
        top: 40px;
        right: 50px;
        z-index: 2;
        min-width: 280px;
    }

    .close {
        top: 0px;
        position: absolute;
        right: 5px
    }

    .fade-add-img-enter,
    .fade-add-img-leave-to {
        opacity: 0
    }

    .fade-add-img-enter-active,
    .fade-add-img-leave-active {
        transition: opacity .15s ease-in-out
    }

    @media (max-width: 576px) {
        .div-add-img {
            right: 20px;
        }
    }
</style>