import React from 'react'
import {View, Text} from 'react-native'
import Textarea from 'react-native-textarea'
import OptionalView from '../OptionalView'

const styles = {
  textArea: {
    marginTop: 10,
    width: 290,
    height: 100,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },
  error: {
    color: 'red',
    marginRight: 65,
    
  },
}
export default class TextArea extends React.Component {
  onChangeText = text => {
    this.props.onChangeText && this.props.onChangeText(text)
  }

  onBlur = text => {
    this.props.onBlur && this.props.onBlur(text)
  }

  render () {
    const border = this.props.error ? {borderColor: 'red'} : {}
    return (
      <View style={{marginBottom: 5, alignSelf: 'stretch'}}>
        
        <OptionalView hide={!this.props.error}>
          <Text style={styles.error}>{this.props.error}</Text>
        </OptionalView>
        <Textarea
          onChangeText={this.onChangeText}
          placeholder={this.props.placeholder}
          style={[styles.textArea, border, this.props.style]}
          value={this.props.value}
          onBlur={this.onBlur}
          maxLength={200}
        />

      </View>
    )
  }
}
