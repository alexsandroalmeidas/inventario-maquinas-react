import React, { lazy } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CCollapse,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFade,
    CForm,
    CFormGroup,
    CFormText,
    CValidFeedback,
    CInvalidFeedback,
    CTextarea,
    CInput,
    CInputFile,
    CInputCheckbox,
    CInputRadio,
    CInputGroup,
    CInputGroupAppend,
    CInputGroupPrepend,
    CDropdown,
    CInputGroupText,
    CLabel,
    CSelect,
    CRow,
    CSwitch
} from '@coreui/react';

const Perfil = () => {
    return (
        <>

            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            PERFIL
                        </CCardHeader>
                        <CCardBody>
                            <CFormGroup>
                                <CLabel htmlFor="company">Company</CLabel>
                                <CInput id="company" placeholder="Enter your company name" />
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="vat">VAT</CLabel>
                                <CInput id="vat" placeholder="DE1234567890" />
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="street">Street</CLabel>
                                <CInput id="street" placeholder="Enter street name" />
                            </CFormGroup>
                            <CFormGroup row className="my-0">
                                <CCol xs="8">
                                    <CFormGroup>
                                        <CLabel htmlFor="city">City</CLabel>
                                        <CInput id="city" placeholder="Enter your city" />
                                    </CFormGroup>
                                </CCol>
                                <CCol xs="4">
                                    <CFormGroup>
                                        <CLabel htmlFor="postal-code">Postal Code</CLabel>
                                        <CInput id="postal-code" placeholder="Postal Code" />
                                    </CFormGroup>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="country">Country</CLabel>
                                <CInput id="country" placeholder="Country name" />
                            </CFormGroup>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default Perfil;
