import React from 'react';
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-react/viewer";

function App() {
    var report1 = new Stimulsoft.Report.StiReport();
    report1.loadFile("Dashboards/Dashboard.mrt");

    var report2 = new Stimulsoft.Report.StiReport();
    report2.loadFile("Dashboards/Orders.mrt");

    return (
        <div>
            <div style={{ width: "50%", display: "inline-block" }}>
                <Viewer report={report1} />
            </div>
            <div style={{ width: "50%", display: "inline-block" }}>
                <Viewer report={report2} />
            </div>
        </div>
    );
}

export default App;