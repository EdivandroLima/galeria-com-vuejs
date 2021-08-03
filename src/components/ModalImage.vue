<template>
    <div class="modal-img d-flex py-5 align-items-center" @click.prevent="$emit('toggle')">
        <button class="close " data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <div class="modal-img-content card col-12 col-md-7 mx-auto card-body py-5" @click.stop>

            <div class="row">
                <div class="col-12 col-md-6">
                    <img :src="dataimg.path" :alt="dataimg.name" class="w-100">
                </div>
                <div class="col-12 col-md-6">
                    <h3>{{ dataimg.name.indexOf('http') == -1 ? dataimg.name : 'Imagem' }}</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum libero sint eum sapiente veniam
                        dignissimos voluptatibus praesentium iusto quisquam. Molestias distinctio quidem illum at dicta
                        quia modi sunt laborum magni.
                    </p>
                    <div>
                        <div class="form-group">
                            <input class="form-control rounded-0 border-danger" id="id-copy-img" type="text" name=""
                                :value="dataimg.path">
                            <a href="#" class="btn btn-danger btn-sm rounded-0 btn-block"
                                @click.prevent="copyLInk">Copiar Link da imagem</a>
                            <div class="text-right">
                                <a href="#" class="small" @click="removeImage">Remover Imagem</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <transition enter-active-class="animate__animated animate__backInUp"
            leave-active-class="animate__animated animate__backOutDown">
            <div class="link-copiado btn btn-success px-4" v-if="linkCopied" key="copyLInk">
                Link copiado
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                linkCopied: false
            }
        },
        props: {
            dataimg: Object
        },
        methods: {
            copyLInk() {
                document.getElementById('id-copy-img').select();
                document.execCommand('copy');
                document.getElementById('id-copy-img').blur();
                this.linkCopied = true;
                setTimeout(() => {
                    this.linkCopied = false;
                }, 2000);
            },
            removeImage() {
                let imgs = localStorage.getItem('data-imgs')
                imgs = JSON.parse(imgs)

                imgs = imgs.filter((childObj) => {
                    if (childObj.path === this.dataimg.path) {
                        return false
                    }
                    return true
                })
                localStorage.setItem('data-imgs', JSON.stringify(imgs))
                this.$router.go()
            }
        }
    }
</script>

<style scoped>
    .modal-img {
        background: rgba(0, 0, 0, .2);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        min-height: 100vh;
        position: fixed;
    }

    .close {
        top: 15px;
        right: 24px;
        font-size: 2em;
        color: white;
        text-shadow: 0px 0px 3px #000;
        position: absolute
    }

    .link-copiado {
        position: fixed;
        bottom: 30px;
        right: 30px
    }

    @media (max-width: 576px) {
        .modal-img-content {
            overflow: scroll;
            height: 100vh;
        }
    }
</style>