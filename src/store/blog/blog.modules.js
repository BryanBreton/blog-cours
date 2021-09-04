import state from './blog.state'
import actions from './blog.actions'
import mutations from './blog.mutations'

const blogStore = {
    namespaced: true,
    state,
    actions,
    mutations
}

export default blogStore