// import axios from 'axios'

const retour = [
    {
        "id": 4,
        "title": "titre",
        "content": "Ceci est un contenu",
        "id_user": 1
    },
    {
        "id": 5,
        "title": "titre",
        "content": "Ceci est un contenu",
        "id_user": 1
    }
]

export default {
    getPosts({commit}) {
       /* axios.get('http://localhost:8081/posts').then(resp => {
            commit('getPosts', resp.data)
        })*/
        commit('getPosts', retour)
    }
}