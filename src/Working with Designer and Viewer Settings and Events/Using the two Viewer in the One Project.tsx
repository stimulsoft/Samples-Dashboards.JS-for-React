import React from 'react';
import { Viewer, Stimulsoft } from 'stimulsoft-dashboards-js-react/viewer';
import '../styles.css';

function App() {
    var report1 = new Stimulsoft.Report.StiReport();
    report1.loadFile('Dashboards/Dashboard.mrt');

    var report2 = new Stimulsoft.Report.StiReport();
    report2.loadFile('Dashboards/Orders.mrt');

    return (
        <div className='container'>
            <h4>This sample demonstrates how to add two viewers to one page:</h4>
            <div className='container-viewer'>
                <Viewer report={report1} />
                <Viewer report={report2} />
            </div>
        </div>
    );
}

export default App;
