import React from 'react';
import CIcon from '@coreui/icons-react';

const TheHeaderDropdown = () => {
  return (
    <>
      Nome do usuário

      <div className="c-avatar">
        <CIcon
          name="cil-user"
          className="c-avatar-img"
          alt="nome do usuário"
          title="Nome do usuário">

        </CIcon>
      </div>
    </>
  )
}

export default TheHeaderDropdown;
