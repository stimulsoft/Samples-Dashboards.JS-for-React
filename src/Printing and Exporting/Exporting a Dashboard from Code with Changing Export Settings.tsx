import React from 'react';
import { Stimulsoft } from 'stimulsoft-dashboards-js-react';
import '../styles.css';

async function saveDashboardPdf() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Dashboards/Dashboard.mrt');

    var settings = new Stimulsoft.Dashboard.Export.Settings.StiPdfDashboardExportSettings();
    settings.orientation = Stimulsoft.Report.Components.StiPageOrientation.Portrait;
    settings.paperSize = Stimulsoft.System.Drawing.Printing.PaperKind.A3;

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf, null, settings);
    Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + '.pdf', 'application/pdf');
}

function App() {
    return (
        <div className='container'>
            <h4>This example shows how to export a dashboard to a PDF file and adjust the export settings via code:</h4>
            <div className='container-button'>
                <button onClick={saveDashboardPdf} className='button' title='Export Dashboard to PDF File'>
                    Export PDF
                </button>
            </div>
        </div>
    );
}

export default App;
