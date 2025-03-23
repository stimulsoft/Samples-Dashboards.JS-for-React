import React from 'react';
import { Designer, Stimulsoft } from "stimulsoft-dashboards-js-react/designer";

var report = new Stimulsoft.Report.StiReport();
report.loadFile("Dashboards/Dashboard.mrt");

function App() {
    function onAssignedReport(args: Stimulsoft.Designer.AssignedReportArgs) {
        alert("The link to the dashboard has been changed");
        report = args.report;
    }

    var designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
    designerOptions.appearance.fullScreenMode = true;

    return <Designer options={designerOptions} report={report} onAssignedReport={onAssignedReport} />;

}

export default App;

