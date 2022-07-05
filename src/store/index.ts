import { createStore } from 'vuex'

import LangsModule from './modules/langs'
import AuthModule from './modules/auth'
import ResultsModule from './modules/results'

const store = {
  modules: {
    LangsModule,
    AuthModule,
    ResultsModule,
  },
}

export default createStore(store)
