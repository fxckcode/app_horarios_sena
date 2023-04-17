import React from 'react'
import './Base.scss'
import DropMenu from '../components/DropMenu/DropMenu'

function Base({children, user}) {
  return (
    <div>
        <DropMenu user={user} />
        <div className="container">
            {children}
        </div>
    </div>
  )
}

export default Base