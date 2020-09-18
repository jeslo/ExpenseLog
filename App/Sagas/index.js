
import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */


import expenseTypes from '../Redux/LaunchScreenRedux'

/* ------------- Sagas ------------- */

import { setExpenses, getExpenses } from './LaunchScreenSaga'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(expenseTypes.SET_EXPENSE_DETAILS_REQUEST, setExpenses),
    takeLatest(expenseTypes.GET_EXPENSE_DETAILS_REQUEST, getExpenses),
  ])
}
