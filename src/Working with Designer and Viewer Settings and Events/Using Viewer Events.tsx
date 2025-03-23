import React from 'react';
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-react/viewer";

function onBeginExportReport(args: Stimulsoft.Viewer.BeginExportReportArgs) {
    alert(`onBeginExportReport`);
}

function App() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile("Dashboards/Dashboard.mrt");

    var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
    viewerOptions.toolbar.showSendEmailButton = true;

    return (
        <Viewer options={viewerOptions} report={report} onBeginExportReport={onBeginExportReport} />
    );
}

export default App;