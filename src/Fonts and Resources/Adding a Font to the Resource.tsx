import React from 'react';
import { Designer, Stimulsoft } from "stimulsoft-dashboards-js-react/designer";

function App() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile("Dashboards/CusomFontDashboard.mrt");

    var fileContent = Stimulsoft.System.IO.File.getFile("Fonts/LongCang-Regular.ttf", true);
    var resource = new Stimulsoft.Report.Dictionary.StiResource("LongCang", "LongCang", false, Stimulsoft.Report.Dictionary.StiResourceType.FontTtf, fileContent);
    report.dictionary.resources.add(resource);

    var designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
    designerOptions.appearance.fullScreenMode = true;

    return (
        <Designer options={designerOptions} report={report} />
    );
}

export default App;