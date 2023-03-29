import InsuranceDetailInfo from './InsuranceDetailInfo'
import { useState } from 'react'
import EditAccount from './EditAccount'
import EditInsuranceDetail from './EditInsuranceDetail'

const InsuranceDetail = () => {
  const [editInsurance, setEditInsurance] = useState(false)
  return (
    <>
      {editInsurance ? <EditInsuranceDetail editState={[editInsurance, setEditInsurance]} /> : <InsuranceDetailInfo editState={[editInsurance, setEditInsurance]} />}
    </>
  )
}

export default InsuranceDetail
