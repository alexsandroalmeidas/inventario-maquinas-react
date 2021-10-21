import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        Copyright
        <span className="ml-1">
          &copy;
          {new Date().getFullYear()}
          Tino Tech Informática
        </span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
