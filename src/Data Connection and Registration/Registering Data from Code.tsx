import React, { useState } from 'react';
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-react/viewer";

function App() {
    const [report, setReport] = useState(Stimulsoft.Report.StiReport.createNewDashboard());

    function updateReport(dataSet: Stimulsoft.System.Data.DataSet) {
        var report = new Stimulsoft.Report.StiReport();
        report.loadFile("Dashboards/Orders.mrt");
        report.dictionary.databases.clear();
        report.regData("Orders", "Orders", dataSet);
        setReport(report);
    }

    function buttonXmlClick() {
        var dataSet = new Stimulsoft.System.Data.DataSet();
        dataSet.readXmlSchemaFile("Data/Orders.xsd");
        dataSet.readXmlFile("Data/Orders.xml");

        updateReport(dataSet);
    }

    function buttonJsonClick() {
        var dataSet = new Stimulsoft.System.Data.DataSet();
        dataSet.readJsonFile("Data/Orders.json");

        updateReport(dataSet);
    }

    return (
        <div>
            <button onClick={buttonXmlClick}>Register XML Data</button>
            <button onClick={buttonJsonClick}>Register JSON Data</button>
            <Viewer report={report} />
        </div>
    );
}

export default App;