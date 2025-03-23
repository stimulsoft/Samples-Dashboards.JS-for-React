import React from 'react';
import { Stimulsoft } from "stimulsoft-dashboards-js-react";

async function saveDashboardHtml() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile("Dashboards/Dashboard.mrt");

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Html);
    Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + ".html", "text/html;charset=utf-8");
}

function App() {
    return (
        <div>
            <button onClick={saveDashboardHtml}>Export and Save HTML dashboard to file</button>
        </div>
    );
}

export default App;