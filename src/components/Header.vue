<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white mb-4 shadow-sm">
        <div class="container">
            <a class="navbar-brand">
                <i class="far fa-image"></i>
                {{ getAppTitle }}
            </a>
            <button class="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="my-nav" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/EdivandroLima" target="_blank">
                            <i class="fab fa-github"></i> Edivandro Lima
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: mapGetters(['getAppTitle']),
        metaInfo() {
            return {
                title: this.getAppTitle
            }
        }
    }
</script>