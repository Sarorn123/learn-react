import React from 'react'
import "../test.css"
import About from './About'

type Props = {
  nameProps: string
}

const Header = (props: Props) => {

  return (
    <div className='header'>
      <About nameProps1={props.nameProps} />
    </div>
  )
}

export default Header