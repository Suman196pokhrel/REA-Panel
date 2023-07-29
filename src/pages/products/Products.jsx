import React from 'react'
import "./products.scss"
import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material';
import { Button } from '@mui/material';
import DataTable from '../../components/dataTable/DataTable'
import Add from '../../components/add/Add';
import { products } from '../../utils/data';



const darkTheme = createTheme({
  palette: {
      mode: 'dark'
  }
})

const productsColumns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];




const Products = () => {
  const [open, setOpen] = useState(false);


  return (
    <ThemeProvider theme={darkTheme}>
      <div className='products'>
        <div className="info">
          <h1>Products</h1>
          <Button variant="outlined" size='small' onClick={()=>setOpen(true)}>Add new products</Button>
        </div>

        <DataTable slug={"products"} columns={productsColumns} rows={products} />
        {open && <Add slug={"products"} columns={productsColumns} setOpen={setOpen}/>}
      </div>

    </ThemeProvider>
  )
}

export default Products