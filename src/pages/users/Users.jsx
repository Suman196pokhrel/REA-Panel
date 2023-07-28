import React from 'react'
import "./users.scss"
import DataTable from '../../components/dataTable/DataTable'
import { userRows } from '../../utils/data';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';


const darkTheme = createTheme({
  palette: {
      mode: 'dark'
  }
})


const userColumns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'avatr', headerName: 'Avatar', width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="user dp" />
    }

  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 160,
  },
  {
    field: 'phone',
    headerName: 'Phone-Number',
    width: 160,
  },
  {
    field: 'createdAt',
    headerName: 'Joined At',
    width: 160,
  },
  {
    field: 'verified',
    headerName: 'Verified',
    width: 160,
    type: "boolean"
  }

];

const Users = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className='users'>
        <div className="info">
          <h1>Users</h1>
          <Button variant="outlined" size='small'>Add new User</Button>
        </div>

        <DataTable slug={"users"} columns={userColumns} rows={userRows} />
      </div>

    </ThemeProvider>

  )
}

export default Users