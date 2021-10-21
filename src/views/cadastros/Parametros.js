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
import CIcon from '@coreui/icons-react';

const Parametros = () => {
    return (
        <>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            PARÂMETROS
                        </CCardHeader>
                        <CCardBody>
                            <CFormGroup row className="my-0">
                                <CCol xs="6">
                                    <CFormGroup>
                                        <CLabel htmlFor="city">Tempo de coleta de hardware</CLabel>
                                        <CInput id="city" placeholder="Tempo de coleta de hardware" />
                                    </CFormGroup>
                                </CCol>
                                <CCol xs="6">
                                    <CFormGroup>
                                        <CLabel htmlFor="postal-code">Tempo de coleta de automações</CLabel>
                                        <CInput id="postal-code" placeholder="Tempo de coleta de automações" />
                                    </CFormGroup>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row className="my-0">
                                <CCol xs="6">
                                    <CFormGroup>
                                        <CLabel htmlFor="city">Tempo de coleta de negócio</CLabel>
                                        <CInput id="city" placeholder="Tempo de coleta de negócio" />
                                    </CFormGroup>
                                </CCol>
                                <CCol xs="6">
                                    <CFormGroup>
                                        <CLabel htmlFor="postal-code">Tamanho máximo Arquivo Log</CLabel>
                                        <CInput id="postal-code" placeholder="Tamanho máximo Arquivo Log" />
                                    </CFormGroup>
                                </CCol>
                            </CFormGroup>

                            <CFormGroup row className="my-0">
                                <CCol xs="8">
                                    <CFormGroup>
                                        <CLabel htmlFor="city">Exetensões Arquivo Log</CLabel>
                                        <CInput id="city" placeholder="Exetensões Arquivo Log" />
                                    </CFormGroup>
                                </CCol>
                            </CFormGroup>


                            <CFormGroup className="form-actions">
                                <CButton type="submit" size="sm" color="success">Salvar</CButton>
                            </CFormGroup>


                        </CCardBody>

                        <CCardFooter>
                            <CButton shape="pill" type="submit" size="sm" color="success">Salvar</CButton>
                            &nbsp;
                            <CButton type="reset" size="sm" color="danger">Cancelar</CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default Parametros;
