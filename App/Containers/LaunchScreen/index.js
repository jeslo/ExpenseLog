import React, {Component, useState} from 'react'
import {View, Text, Image, SafeAreaView} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import {styles} from './styles'
import TextButton from '../../Components/Button'
import {connect} from 'react-redux'
import Actions from '../../Redux/LaunchScreenRedux'
import Popup from '../../Components/Popup'
import OptionalView from '../../Components/OptionalView'
import TextArea from '../../Components/TextArea'
import InputText from '../../Components/InputText'
import ImagePicker from 'react-native-image-crop-picker'
import {isEmpty} from 'lodash'

// const takePhotoFromCamera = () => {
//   // const [image, setImage] = useState('https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhuman&psig=AOvVaw3FBbJ3PAdCKWbSTywWWJB7&ust=1600405155940000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLD08Piz7-sCFQAAAAAdAAAAABAD')
//   // console.warn('Take photo')
//   ImagePicker.openCamera({
//     width: 300,
//     height: 400,
//     cropping: true,
//   }).then(image => {
//     console.log(image)
//     setState({
//       photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhuman&psig=AOvVaw3FBbJ3PAdCKWbSTywWWJB7&ust=1600405155940000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLD08Piz7-sCFQAAAAAdAAAAABAD'
//     })
//   })
// }
// const choosePhotoFromLibrary = () => {
//   // const [image, setImage] = useState('https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhuman&psig=AOvVaw3FBbJ3PAdCKWbSTywWWJB7&ust=1600405155940000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLD08Piz7-sCFQAAAAAdAAAAABAD')
//   ImagePicker.openPicker({
//     width: 300,
//     height: 400,
//     cropping: true,
//   }).then(image => {
//     console.log(image)
//     setState({
//       photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhuman&psig=AOvVaw3FBbJ3PAdCKWbSTywWWJB7&ust=1600405155940000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLD08Piz7-sCFQAAAAAdAAAAABAD'
//     })
//   })
// }

class LaunchScreen extends Component {
  state = {
    show: false,
    catagory: ''
  }

  saveExpenses = () => {
    this.props.uploadExpenses({
      description: this.props.description,
      catagory: this.state.catagory,
      amount: this.props.amount,
    })
  }
  expenseHistory = () => {
    this.props.viewExpenseHistory()
  }
  onChangeAmount = text => {
    this.props.updateAmount('value', text)
  }
  validateAmount = () => {
    if (isEmpty(this.props.amount)) {
      this.props.updateAmount('error', 'Amount can not be empty')
    }
  }
  onChangeDescription = text => {
    this.props.updateDescription('value', text)
  }
  validateDescription = () => {
    if (isEmpty(this.props.description)) {
      this.props.updateDescription('error', 'Descrption can not be empty')
    }
  }
  // renderPopup = () => {
  //   return (
  //     <Popup
  //       title='Upload Receipt'
  //       isVisible={this.state.show}
  //       onBack={() => this.setState({show: false})}>
  //       <View style={{padding: 20, justifyContent: 'center'}}>

  //         <TextButton
  //           buttonName='TakePhoto'
  //           onPress={takePhotoFromCamera}
  //           style={styles.button}
  //         />
  //         <TextButton
  //           buttonName='Upload from library'
  //           onPress={choosePhotoFromLibrary}
  //           style={styles.button}
  //         />
  //       </View>
  //     </Popup>
  //   )
  // }
  render () {
    return (
      <View style={styles.conatiner}>
        <OptionalView hide={this.props.history}>

        
        <View style={{flexDirection: 'column'}}>
          <TextButton 
          buttonName= 'History' 
          style={styles.historyButton}
          onPress={this.expenseHistory}/>
         
        </View>
        <Text>EXPENSE LOGGER</Text>
        <View style={styles.mainCard}>
          <TextArea
            placeholder={'Enter your comment'}
            underlineColorAndroid={'transparent'}
            onChangeText={this.onChangeDescription}
            onBlur={this.validateDescription}
            value={this.state.description}
            error= {this.props.descriptionError}
          />
          <DropDownPicker
            items={[
              {label: 'Food', value: 'food'},
              {label: 'Travel', value: 'travel'},
              {label: 'Shopping', value: 'shopping'},
              {label: 'Film', value: 'film'},
            ]}
            defaultValue={this.state.catagory}
            containerStyle={{height: 40}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item =>
              this.setState({
                catagory: item.value,
              })
            }
          />
          <InputText
            placeholder='Enter Amount'
            value={this.props.amount}
            error={this.props.amountError}
            onChangeText={this.onChangeAmount}
            onBlur={this.validateAmount}
          />
          {/* <View style={styles.uploadPhotoCard}>
            <TextButton
              buttonName='Upload Photo'
              onPress={() =>
                this.setState({
                  show: true,
                })
              }
            />
            <OptionalView >
            <Image
                source={photoUrl}
                style={{
                  height: 30,
                  width: 30,
                  resizeMode: 'contain',
                }}
              />
            </OptionalView>
          </View> */}
          {/* <this.renderPopup /> */}
          <TextButton
            buttonName='SUBMIT'
            onPress={this.saveExpenses}></TextButton>
        </View>
        </OptionalView>

        <OptionalView hide={!this.props.history}>
        <this.renderHistory />
        </OptionalView>
      </View>
    )
  }
  renderHistory = () => {
     {
      return (
        <FlatList
          style={{
            paddingLeft: 10,
            paddingRight: 10,
          }}
          scrollEventThrottle={true}
          ItemSeparatorComponent={() => <View style={{margin: 10}} />}
          data={this.props.notificationDetails}
          renderItem={this.renderItem}
        />
      )
    }
  }
}
const mapStateToProps = state => ({
  amount: state.launchscreen.amount,
  description: state.launchscreen.description,
  history: state.launchscreen.history,
  

  description: state.launchscreen.description.value,
  descriptionError: state.launchscreen.description.error,
  amount: state.launchscreen.amount.value,
  amountError: state.launchscreen.amount.error,
})
const mapDispatchToProps = dispatch => ({

  uploadExpenses: params => dispatch(Actions.setExpenseDetailsRequest(params)),
  viewExpenseHistory: () => dispatch(Actions.getExpenceHistory()),

  updateAmount: (key, value) => dispatch(Actions.getUpdateAmount(key, value)),
  updateDescription: (key, value) =>
    dispatch(Actions.getUpdateDescription(key, value)),
})
export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
