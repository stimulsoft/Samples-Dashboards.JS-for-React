import React from 'react';
import { Stimulsoft } from 'stimulsoft-dashboards-js-react';
import '../styles.css';

async function saveDashboardHtml() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Dashboards/Dashboard.mrt');

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Html);
    Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + '.html', 'text/html;charset=utf-8');
}

function App() {
    return (
        <div className='container'>
            <h4>This sample demonstrates how to export a dashboard to an HTML file and save it:</h4>
            <div className='container-button'>
                <button onClick={saveDashboardHtml} className='button' title='Export Dashboard to HTML File'>
                    Export to HTML
                </button>
            </div>
        </div>
    );
}

export default App;
