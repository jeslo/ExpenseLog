import {put} from 'redux-saga/effects'
import {NavigationActions} from 'react-navigation'
import Actions from '../Redux/LaunchScreenRedux'

const EXPENSE_URL = ''
const HISTORY_URL= ''

export function * setExpenses ({params}) {
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(params),
      
    }
    const result = yield fetch(EXPENSE_URL, postOptions)
      .then(resp => resp.json())
      .then(r => r)
      .catch(e => console.tron.log('>>>>>>eeeee', e))
    // if (result.Flag === 1) {
    //   yield put(Actions.getLoginDetailsSuccess(result))
    //   yield put(Actions.getNotificationRequest())
    // } else return yield put(Actions.getLoginDetailsFailure(result.Result))
  }

  export function * getExpenses ({params}) {
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(params),
      
    }
    const result = yield fetch(HISTORY_URL, postOptions)
      .then(resp => resp.json())
      .then(r => r)
      .catch(e => console.tron.log('>>>>>>eeeee', e))
    // if (result.Flag === 1) {
    //   yield put(Actions.getLoginDetailsSuccess(result))
    //   yield put(Actions.getNotificationRequest())
    // } else return yield put(Actions.getLoginDetailsFailure(result.Result))
  }

  