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
  const [display, setDisplay] = useState([])
  // const [user, setUser] = useState([])


  useEffect(() => {
    Axios.get('http://localhost:7000/api/admin/getOrder')
      .then((res) => {
        console.log(res)
        if (res.data.success) {
          setDisplay(res.data.Order)
          // setUser(res.data.user)
          console.log(res.data.Order, 55555555)
          // console.log(display)
        }
      })

  }, [])
  //console.log(user, 111111111111)

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Order Table</strong> <small>view orders</small>
          </CCardHeader>
          <CCardBody>

            <DocsExample href="components/table">
              <CTable>
                <CTableHead>

                  <CTableRow>
                    <CTableHeaderCell scope="col">Sno.</CTableHeaderCell>
                    <CTableHeaderCell scope="col">user Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Shipping_id</CTableHeaderCell>

                    <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
                    <CTableHeaderCell scope="col">status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Grocery Id</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                  </CTableRow>

                </CTableHead>
                <CTableBody>
                  {display.map((item, index) => {
                    const cart=(item.cart).map((i)=>{
                        return i.grocery_id
                    })
                    return (
                      <>
                        <CTableRow key={index}>
                          <CTableDataCell>{index + 1}</CTableDataCell>
                          <CTableDataCell>{item.user_id.name}</CTableDataCell>
                          <CTableDataCell>{item.shipping_id}</CTableDataCell>
                          <CTableDataCell>{item.price}</CTableDataCell>
                          <CTableDataCell>{item.quantity}</CTableDataCell>
                          <CTableDataCell>{item.status}</CTableDataCell>
                          <CTableDataCell>{cart}</CTableDataCell>
                          <CTableDataCell>{item.date}</CTableDataCell>

                          {/* <CTableDataCell>{item.shipping_id  }</CTableDataCell> */}
                        </CTableRow>
                      </>
                    )
                  })}

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
