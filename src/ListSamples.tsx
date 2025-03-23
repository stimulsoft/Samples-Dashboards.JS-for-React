import React from 'react';
import { NavLink } from 'react-router-dom';

function ListSamples() {
    return (
        <nav>
            Localization and Globalization
            <ul>
                <li>
                    <NavLink to="/Localizing_the_Designer">Localizing the Designer</NavLink>
                </li>
                <li>
                    <NavLink to="/Localizing_the_Viewer">Localizing the Viewer</NavLink>
                </li>
                <li>
                    <NavLink to="/Globalizing_Dashboard">Globalizing Dashboard</NavLink>
                </li>
            </ul>
            Fonts and Resources
            <ul>
                <li>
                    <NavLink to="/Using_Custom_Font">Using a Custom Font</NavLink>
                </li>
                <li>
                    <NavLink to="/Adding_a_Font_to_the_Resource">Adding a Font to the Resource</NavLink>
                </li>
            </ul>
            Printing and Exporting
            <ul>
                <li>
                    <NavLink to="/Printing_the_Dashboard_Template_from_Code">Printing the Dashboard Template from Code</NavLink>
                </li>
                <li>
                    <NavLink to="/Exporting_a_Dashboard_to_PDF">Exporting a Dashboard to PDF</NavLink>
                </li>
                <li>
                    <NavLink to="/Exporting_a_Dashboard_to_HTML">Exporting a Dashboard to HTML</NavLink>
                </li>
                <li>
                    <NavLink to="/Exporting_a_Dashboard_from_Code_with_Changing_Export_Settings">Exporting a Dashboard from Code with Changing Export Settings</NavLink>
                </li>
            </ul>
            Data Connection and Registration
            <ul>
                <li>
                    <NavLink to="/Creating_a_new_Data_Connection_from_code">Creating a new Data Connection from code</NavLink>
                </li>
                <li>
                    <NavLink to="/Registering_Data_from_Code">Registering Data from Code</NavLink>
                </li>
                <li>
                    <NavLink to="/Using_SQL_Data_Sources">Using SQL Data Sources</NavLink>
                </li>
                <li>
                    <NavLink to="/Using_Parameters_in_SQL_Query">Using Parameters in SQL Query</NavLink>
                </li>
                <li>
                    <NavLink to="/Using_a_Custom_Data_Adapter">Using a Custom Data Adapter</NavLink>
                </li>
                <li>
                    <NavLink to="/Supply_Custom_Headers_for_JSON_Database">Supply Custom Headers for JSON Database</NavLink>
                </li>
            </ul>
            Designer and Viewer Settings and Events
            <ul>
                <li>
                    <NavLink to="/Customizing_the_Designer">Customizing the Designer</NavLink>
                </li>
                <li>
                    <NavLink to="/Changing_the_Designer_Theme">Changing the Designer Theme</NavLink>
                </li>
                <li>
                    <NavLink to="/Customizing_the_Viewer">Customizing the Viewer</NavLink>
                </li>
                <li>
                    <NavLink to="/Changing_the_Viewer_Theme">Changing the Viewer Theme</NavLink>
                </li>
                <li>
                    <NavLink to="/Using_Designer_Events">Using Designer Events</NavLink>
                </li>
                <li>
                    <NavLink to="/Using_Viewer_Events">Using Viewer Events</NavLink>
                </li>
                <li>
                    <NavLink to="/Working_with_onDesign_and_onExit_Events">Working with onDesign and onExit Events</NavLink>
                </li>
                <li>
                    <NavLink to="/Using_the_two_Viewer_in_the_One_Project">Using the two Viewer in the One Project</NavLink>
                </li>
                <li>
                    <NavLink to="/Get_a_modified_Dashboard_from_the_Designer">Get a modified Dashboard from the Designer</NavLink>
                </li>
                <li>
                    <NavLink to="/Using_the_Right-To-Left_Mode_in_the_Viewer">Using the Right-To-Left Mode in the Viewer</NavLink>
                </li>
            </ul>
            Working with Dashboard and Advanced Features
            <ul>
                <li>
                    <NavLink to="/How_to_Activate_the_Product">How to Activate the Product</NavLink>
                </li>
                <li>
                    <NavLink to="/Using_Dashboard_Variables_in_Code">Using Dashboard Variables in Code</NavLink>
                </li>
                <li>
                    <NavLink to="/Creating_Dashboard_at_Runtime">Creating Dashboard at Runtime</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default ListSamples