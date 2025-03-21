import React from 'react';
import { Stimulsoft } from "stimulsoft-dashboards-js-react";

async function saveDashboardPdf() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile("Dashboard.mrt");

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf);
    Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + ".pdf", "application/pdf");
}

function App() {
    return (
        <div>
            <button onClick={saveDashboardPdf}>Export and Save PDF dashboard to file</button>
        </div>
    );
}

export default App;