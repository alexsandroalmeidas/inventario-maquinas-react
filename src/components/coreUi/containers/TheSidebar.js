import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

// sidebar nav config
import navigation from './_nav';

const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector(state => state.sidebarShow);

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <div className="pt-3 mr-3 float-left">
          <div className="c-avatar">
            <CImg
              src={'./logos/logo_tino.jpg'}
              className="c-sidebar-brand-full"
              height={80}
            />
            <CIcon
              className="c-sidebar-brand-minimized"
              style={{ paddingLeft: '0.6rem' }}
              src={'./logos/logo_tino_ico.ico'}
              height={40}
            />
          </div>

        </div>
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  )
}

export default React.memo(TheSidebar);
