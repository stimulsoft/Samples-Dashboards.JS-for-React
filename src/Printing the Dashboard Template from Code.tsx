import React from 'react';
import { Stimulsoft } from "stimulsoft-dashboards-js-react";

var report: Stimulsoft.Report.StiReport;

function printPdf_Click() {
    report.printToPdf();
}

function printHtml_Click() {
    report.print();
}

function App() {
    report = new Stimulsoft.Report.StiReport();
    report.loadFile("Dashboard.mrt");

    return (
        <div>
            <button onClick={printPdf_Click}>Print Dashboard as PDF</button>
            <button onClick={printHtml_Click}>Print Dashboard as HTML</button>
        </div>
    );
}

export default App;