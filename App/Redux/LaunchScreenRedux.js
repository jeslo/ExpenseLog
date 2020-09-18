import {createActions, createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

const {Types, Creators} = createActions({
  setExpenseDetailsRequest: ['params'],
  setExpenseDetailsSuccess: ['data'],
  setExpenseDetailsFailure: ['data'],

  getExpenseDetailsRequest: ['params'],
  getExpenseDetailsSuccess: ['data'],
  getExpenseDetailsFailure: ['data'],

  getExpenceHistory: [],

  getUpdateAmount: ['key', 'value'],
  getUpdateDescription: ['key', 'value'],
  getExpenceHistory: ['key', 'value'],

})
export const expenseTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  description : {
    value: '',
    error: ''
  },
  amount: {
    value: '',
    error: ''
  },
  catagory: '',
  history: false
  })
  /* ---------------------Reducers---------------------- */
  export const setExpenseUpload = state =>
  state.merge({
    loader: true,
  })
export const handleExpenseUploadSuccess = (state, {data}) =>
   state.merge({
    
  })

export const handleExpenseUploadfailure = (state, {data}) =>
  state.merge({
    
  })
export const getExpenseHistory = (state, {data}) =>
  state.merge({
    
  })
export const handleExpenseHistorySuccess = (state, {data}) =>
  state.merge({
    
  })
export const handleExpenseHistoryfailure = (state, {data}) =>
  state.merge({
    
  })

export const handleupdateAmount = (state, {key, value}) =>
  state.merge({
    amount: state.amount.merge({
      [key]: value,
      error: key === 'error' ? value : '',
    }),
  })
export const handleupdateDescription = (state, {key, value}) =>
  state.merge({
    description: state.description.merge({
      [key]: value,
      error: key === 'error' ? value : '',
    }),
  })
export const handleExpenceHistory = (state) =>
  state.merge({
    history: true
  })

  export const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_EXPENSE_DETAILS_REQUEST]: setExpenseUpload,
    [Types.SET_EXPENSE_DETAILS_SUCCESS]: handleExpenseUploadSuccess,
    [Types.SET_EXPENSE_DETAILS_FAILURE]: handleExpenseUploadfailure,
  
    [Types.GET_EXPENSE_DETAILS_REQUEST]: getExpenseHistory,
    [Types.GET_EXPENSE_DETAILS_SUCCESS]: handleExpenseHistorySuccess,
    [Types.GET_EXPENSE_DETAILS_FAILURE]: handleExpenseHistoryfailure,

    [Types.GET_EXPENCE_HISTORY]: handleExpenceHistory,

    [Types.GET_UPDATE_AMOUNT]: handleupdateAmount,
    [Types.GET_UPDATE_DESCRIPTION]: handleupdateDescription,
  })