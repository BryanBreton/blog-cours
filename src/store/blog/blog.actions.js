import axios from 'axios'
export default {
    getPosts({commit}) {
        axios.get('http://localhost:8081/posts').then(resp => {
            commit('getPosts', resp.data)
        })
        
    }
}