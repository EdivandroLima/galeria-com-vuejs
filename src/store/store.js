import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        appTitle: 'Galeria',
    },
    getters: {
        getAppTitle(state) {
            return state.appTitle
        },
        getDataImgs() {
            let data = localStorage.getItem('data-imgs')
            if (data == null) {
                localStorage.setItem(
                    'data-imgs',
                    '[]'
                )
                data = localStorage.getItem('data-imgs')
            }
            if (data == '[]') {
                return '[{"path":"https://i.imgur.com/NfDFw6L.png","name":"https://i.imgur.com/NfDFw6L.png"},{"path":"https://i.imgur.com/NfDFw6L.png","name":"https://i.imgur.com/NfDFw6L.png"},{"path":"https://i.imgur.com/NfDFw6L.png","name":"https://i.imgur.com/NfDFw6L.png"},{"path":"https://i.imgur.com/NfDFw6L.png","name":"https://i.imgur.com/NfDFw6L.png"},{"path":"https://i.imgur.com/NfDFw6L.png","name":"https://i.imgur.com/NfDFw6L.png"},{"path":"https://i.imgur.com/NfDFw6L.png","name":"https://i.imgur.com/NfDFw6L.png"},{"path":"https://i.imgur.com/NfDFw6L.png","name":"https://i.imgur.com/NfDFw6L.png"},{"path":"https://i.imgur.com/NfDFw6L.png","name":"https://i.imgur.com/NfDFw6L.png"},{"path":"https://i.imgur.com/NfDFw6L.png","name":"https://i.imgur.com/NfDFw6L.png"},{"path":"https://i.imgur.com/NfDFw6L.png","name":"https://i.imgur.com/NfDFw6L.png"},{"path":"https://i.imgur.com/NfDFw6L.png","name":"https://i.imgur.com/NfDFw6L.png"},{"path":"https://i.imgur.com/NfDFw6L.png","name":"https://i.imgur.com/NfDFw6L.png"}]'
            }
            return data
        }
    },
});