import React from 'react'
import "./dataTable.scss"
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Link } from 'react-router-dom';








const DataTable = ({ slug ,columns, rows }) => {


    const handleDelete = (id)=>{
        // delete The Item
        console.log(id + " has been deleted ")
    }   


    const actionColumn = {
        field: "action",
        headerName: "Action",
        width: 160,
        renderCell: (params) => {
            return <div className="action">
                {console.log("Users page => ", `${slug}/${params.row.id}`)}
                <Link to={`${slug}/${params.row.id}`}>
                    <img src={`${process.env.PUBLIC_URL}/view.svg`} alt="view" />
                </Link>
                <div className="delete" onClick={()=> handleDelete(params.row.id)}>
                    <img src={`${process.env.PUBLIC_URL}/delete.svg`} alt="view" />
                </div>

            </div>
        }
    }

    return (
        <div className='dataTable'>

                <DataGrid
                    className='dataGrid'
                    rows={rows}
                    columns={[...columns,actionColumn]}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 }
                        }
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    disableColumnFilter
                    disableDensitySelector
                    disableColumnSelector
                />


        </div>
    )
}

export default DataTable