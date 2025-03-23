import React from 'react';
import { Stimulsoft } from "stimulsoft-dashboards-js-react";

async function saveDashboardPdf() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile("Dashboards/Dashboard.mrt");

    var settings = new Stimulsoft.Dashboard.Export.Settings.StiPdfDashboardExportSettings();
    settings.orientation = Stimulsoft.Report.Components.StiPageOrientation.Portrait;
    settings.paperSize = Stimulsoft.System.Drawing.Printing.PaperKind.A3;

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf, null, settings);
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