import React from 'react'
import './data.css'
import * as FileSaver from 'file-saver';
import './data.css'
import * as XLSX from 'xlsx';
import { MDBIcon } from 'mdb-react-ui-kit';



export const ExportCSV = ({csvData, fileName,children}) => {



    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

    const fileExtension = '.xlsx';



    const exportToCSV = (csvData, fileName) => {

        const ws = XLSX.utils.json_to_sheet(csvData);

        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };

        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

        const data = new Blob([excelBuffer], {type: fileType});

        FileSaver.saveAs(data, fileName + fileExtension);

    }



    return (

        <div className='navi borderI'  onClick={(e) => exportToCSV(csvData,fileName)}><MDBIcon fas icon="cloud-download-alt" /> {children}</div>

    )

}