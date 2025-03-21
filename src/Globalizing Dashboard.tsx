import React, { useState } from 'react';
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-react/viewer";


function App() {
    const [selectedCountry, setSelectedCountry] = useState('en-US');

    const locFile = selectedCountry.substring(0, 2) + ".xml";
    Stimulsoft.Base.Localization.StiLocalization.setLocalizationFile(locFile);

    var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
    viewerOptions.height = "800px";

    var report = new Stimulsoft.Report.StiReport();
    report.loadFile("Globalization.mrt");
    report.culture = selectedCountry;

    return (
        <div>
            <label style={{ fontSize: '14px' }} >
                Select Country
                <select value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)}>
                    <option value="en-US">United States</option>
                    <option value="de-DE">Germany</option>
                    <option value="ru-RU">Russia</option>
                </select>
            </label>
            <Viewer key={selectedCountry} report={report} options={viewerOptions} />
        </div >
    );
}

export default App;