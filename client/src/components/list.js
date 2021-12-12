import React, { Component } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
class ListData extends Component {
    state = {
        rowData: null
    };
    
    componentDidMount() {
    this.callBackendAPI()
        .then(res => this.setState({ rowData: res.response }))
        .then(res => {
            console.log(this.state.rowData);
        })
        .catch(err => console.log(err));
    }
        // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/listdata');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message) 
        }
        return body;
    };
    render() {
        return <div className="ag-theme-alpine" style={{ height: '100vh', width: '100vw' }}>
            <AgGridReact
                rowData={this.state.rowData} defaultColDef={{
                    flex: 1,
                    minWidth: 150,
                    filter: true,
                    sortable: true
                  }}
                  suppressRowTransform={true}>
                <AgGridColumn field="operation"
                rowSpan={rowSpan}></AgGridColumn>
                <AgGridColumn field="scope"></AgGridColumn>
                <AgGridColumn field="timeStamp"></AgGridColumn>
                <AgGridColumn field="status"></AgGridColumn>
            </AgGridReact>
        </div>
    };
}
function rowSpan (params) {
    var grandChild = params.data.grandChild;
    console.log(params.data.operation, grandChild.length)
    if(grandChild.length > 0) {
        return grandChild.length + 1;
    }
    else return 1;
}
export default ListData;