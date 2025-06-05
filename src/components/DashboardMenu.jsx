import * as Icon from 'react-icons/fa';

//TODO - load data dynamically
function DashboardMenu({data, setFilteredData}) {

    const openAtlassianDashboard = () => {
        setFilteredData(data);
    };

    return (
    <div className="dashboardMenu text-white">
        <h1 className="dashboardHeader text-lg font-bold">Files</h1>
        <div className="commands">
            <div  className="menuItem" onClick={openAtlassianDashboard}><Icon.FaAtlassian className="icon"/>  Atlassian</div>
            <div  className="menuItem"><Icon.FaGoogleDrive className="icon"/>  One Drive</div>
            <div  className="menuItem"><Icon.FaMicrosoft className="icon" />  Sharepoint</div>
            <div className="menuItem"><Icon.FaQuestionCircle className="icon"/>  Help</div>
            <div className="menuItem"><Icon.FaBars className="icon"/>  Settings</div>
        </div>
    </div> );
}

export default DashboardMenu;