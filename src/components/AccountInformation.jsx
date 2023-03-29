import { useState } from 'react'
import AccountDetail from './AccountDetail'
import EditAccount from './EditAccount'

const AccountInformation = () => {
  const [editAccount, setEditAccount] = useState(false)
  return (
    <>
      {editAccount ? <EditAccount editState={[editAccount, setEditAccount]} /> : <AccountDetail editState={[editAccount, setEditAccount]} />}
    </>
  )
}

export default AccountInformation
