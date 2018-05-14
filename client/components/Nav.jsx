import React from 'react'
import { connect } from 'react-redux'
import {flipNav} from '../actions/nav'

const Nav = (props)=> {
  console.log({props})
  console.log({nav: props.navVisible})
  return (
    <div>
    <a href="javascript:void(0);" className='close' onClick={props.closeNav}>&times;</a>
    {props.navVisible != true && <a href="javascript:void(0);" className='learn-more fade-in' onClick={()=>props.dispatch(flipNav(true))}>Learn More</a>}
    {props.navVisible && <a href="javascript:void(0);" onClick={() => props.dispatch(flipNav(false))} className='learn-more fade-in'>{props.texts.map(text => <p>{text.name}</p>)}</a>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    texts: state.texts,
    navVisible: state.navVisible
  }
}

export default connect(mapStateToProps)(Nav)
