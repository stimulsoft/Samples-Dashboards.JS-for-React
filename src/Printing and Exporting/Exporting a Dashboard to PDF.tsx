import React from 'react';
import { Stimulsoft } from 'stimulsoft-dashboards-js-react';
import '../styles.css';

async function saveDashboardPdf() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Dashboards/Dashboard.mrt');

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf);
    Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + '.pdf', 'application/pdf');
}

function App() {
    return (
        <div className='container'>
            <h4>This sample demonstrates how to export a dashboard to a PDF file and save it:</h4>
            <div className='container-button'>
                <button onClick={saveDashboardPdf} className='button' title='Export Dashboard to PDF File'>
                    Export to PDF
                </button>
            </div>
        </div>
    );
}

export default App;
