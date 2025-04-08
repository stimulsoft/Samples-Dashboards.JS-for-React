import React, { useState } from 'react';
import { Viewer, Stimulsoft } from 'stimulsoft-dashboards-js-react/viewer';
import '../styles.css';

function App() {
    const [selectedCountry, setSelectedCountry] = useState('en-US');

    const locFile = `Localizations/` + selectedCountry.substring(0, 2) + '.xml';
    Stimulsoft.Base.Localization.StiLocalization.setLocalizationFile(locFile);

    var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
    viewerOptions.height = '800px';

    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Dashboards/Globalization.mrt');
    report.culture = selectedCountry;

    return (
        <div className='container'>
            <div className='container-control'>
                <label className='label-globalization'>Select Language</label>
                <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className='select-globalization'
                >
                    <option value='en-US'>English</option>
                    <option value='de-DE'>Deutsch</option>
                    <option value='ru-RU'>Russian</option>
                </select>
            </div>
            <div>
                <Viewer key={selectedCountry} report={report} options={viewerOptions} />
            </div>
        </div>
    );
}

export default App;
