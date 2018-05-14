import React from 'react'
import { connect } from 'react-redux'

function WindInfo ({weather}) {
  return (
    <div>
      <div className='logo'>AR_ATUA</div>
      <div>Wind Direction: {weather.wind_dir}</div>
      <div>Wind Speed in kph: {weather.wind_kph}</div>
    </div>
  )
}

var mapStateToProps = ({weather}) => ({weather})

export default connect(mapStateToProps)(WindInfo)
