import React from 'react'
import {TextInput, View,Text} from 'react-native'
import OptionalView from '../OptionalView'

const styles = {
  textInput: {
    marginTop: 10,
    minHeight: 50,
    marginBottom: 5,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    
  },
  error: {
    
    color: 'red',
    marginRight: 5,
    textAlign: 'right'
  }
}
export default class InputText extends React.Component {
  onChangeText = text => {
    this.props.onChangeText && this.props.onChangeText(text)
  }

  onBlur = text => {
    this.props.onBlur && this.props.onBlur(text)
  }

  render () {
    const border = this.props.error ? { borderColor: 'red' } : {}
    return (
      <View style={{ marginBottom: 5, alignSelf: 'stretch' }}>
        <TextInput
          onChangeText={this.onChangeText}
          placeholder={this.props.placeholder}
          style={[styles.textInput, border, this.props.style]}
          value={this.props.value}
          onBlur={this.onBlur}
          keyboardType= 'numeric'

        />
        <OptionalView hide={!this.props.error}>
          <Text style={styles.error}>{this.props.error}</Text>
        </OptionalView>
      </View>
    )
  }
}