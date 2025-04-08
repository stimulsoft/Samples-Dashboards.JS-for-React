import React from 'react';
import { Stimulsoft } from 'stimulsoft-dashboards-js-react';
import '../styles.css';

var report: Stimulsoft.Report.StiReport;

function printPdf_Click() {
    report.printToPdf();
}

function printHtml_Click() {
    report.print();
}

function App() {
    report = new Stimulsoft.Report.StiReport();
    report.loadFile('Dashboards/Dashboard.mrt');

    return (
        <div className='container'>
            <h4>This sample demonstrates how to print a dashboard:</h4>
            <div className='container-button'>
                <button onClick={printPdf_Click} className='button' title='Print Dashboard as PDF File'>
                    Print PDF
                </button>
                <button onClick={printHtml_Click} className='button' title='Print Dashboard as HTML File'>
                    Print HTML
                </button>
            </div>
        </div>
    );
}

export default App;
