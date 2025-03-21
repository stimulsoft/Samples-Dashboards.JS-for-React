import React from 'react';
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-react/viewer";

function App() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile("Dashboard.mrt");

    var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
    viewerOptions.appearance.theme = Stimulsoft.Viewer.StiViewerTheme.Office2022WhiteViolet;
    viewerOptions.appearance.fullScreenMode = true;

    return (
        <Viewer options={viewerOptions} report={report} />
    );
}

export default App;