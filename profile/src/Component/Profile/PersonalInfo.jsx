import React, { Component } from 'react'
import Name from './Name'
import Adress from './Adress'
import Email from './Email'

 class PersonalInfo extends Component {
  render() {
    return (
      <div><h1>PersonalInfo</h1>
      <Name/>
      <Adress/>
      <Email/>
      </div>
    )
  }
}
export default PersonalInfo