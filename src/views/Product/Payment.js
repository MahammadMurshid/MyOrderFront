import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Tables = () => {
    const [payment,setPayment]=useState([])
   // const [status,setStatus]=useState([])
    
    useEffect(()=>{
        Axios.get('http://localhost:7000/api/admin/getPayment')
        .then((res)=>{
            if(res.data.success){
                console.log(res)
                setPayment(res.data.Payment)
               // setStatus(res.data.status)
               // console.log(status)
                //console.log(res.data.Payment[0].status)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    


  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Payment Table</strong> <small>view payment</small>
          </CCardHeader>
          <CCardBody>

            <DocsExample href="components/table">
              <CTable>
                <CTableHead>

                  <CTableRow>
                    <CTableHeaderCell scope="col">Sno.</CTableHeaderCell>
                    <CTableHeaderCell scope="col">user Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Order_id</CTableHeaderCell>

                    <CTableHeaderCell scope="col">Payment Type</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Total</CTableHeaderCell>
                  </CTableRow>

                </CTableHead>
                <CTableBody>
                    
                      <>
                      {payment.map((item,index)=>{
                        return(

                        <CTableRow key={index}>
                          <CTableDataCell>{index+1}</CTableDataCell>
                          <CTableDataCell>{item.user_id.name}</CTableDataCell>
                          <CTableDataCell>{item.order_id  }</CTableDataCell>
                          <CTableDataCell>{item.payment_type}</CTableDataCell>
                          <CTableDataCell>{item.status}</CTableDataCell>
                          <CTableDataCell>{item.user_id.phone}</CTableDataCell>
                          <CTableDataCell>{item.total}</CTableDataCell>
                          {/* <CTableDataCell>{item.shipping_id  }</CTableDataCell> */}
                        </CTableRow>
                        )
                      })}
                        
                      </>
                    

                </CTableBody>
                
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>

    </CRow>
  )
}

export default Tables
