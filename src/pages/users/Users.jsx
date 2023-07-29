import React, { useState } from 'react'
import "./users.scss"
import DataTable from '../../components/dataTable/DataTable'
import { userRows } from '../../utils/data';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import Add from '../../components/add/Add';




const darkTheme = createTheme({
  palette: {
      mode: 'dark'
  }
})


const userColumns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img', headerName: 'Avatar', width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="user dp" />
    }

  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
    type:"string"
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
    type:"string"

  },
  {
    field: 'email',
    headerName: 'Email',
    width: 160,
    type:"string"

  },
  {
    field: 'phone',
    headerName: 'Phone-Number',
    width: 160,
    type:"string"

  },
  {
    field: 'createdAt',
    headerName: 'Joined At',
    width: 160,
    type:"string"
  },
  {
    field: 'verified',
    headerName: 'Verified',
    width: 160,
    type: "boolean"
  }

];

const Users = () => {

  const [open, setOpen] = useState(false)


  return (
    <ThemeProvider theme={darkTheme}>
      <div className='users'>
        <div className="info">
          <h1>Users</h1>
          <Button variant="outlined" size='small' onClick={()=>setOpen(true)}>Add new User</Button>
        </div>

        <DataTable slug={"users"} columns={userColumns} rows={userRows} />
        {open && <Add slug={"user"} columns={userColumns} setOpen={setOpen}/>}
      </div>

    </ThemeProvider>

  )
}

export default Users