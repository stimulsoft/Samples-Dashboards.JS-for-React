import React from 'react';
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-react/viewer";

function App() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile("Dashboards/Orders.mrt");
    report.dictionary.clear();

    var database = new Stimulsoft.Report.Dictionary.StiJsonDatabase("Orders", "Data/Orders.json");
    report.dictionary.databases.add(database);
    report.dictionary.synchronize();

    return (
        <Viewer report={report} />
    );
}

export default App;