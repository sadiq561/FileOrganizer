import { useState, useEffect } from "react";
import DashboardMenu from "./DashboardMenu.jsx"
import DashboardContent from "./DashboardContent.jsx"
import DashboardGraphicalView from "./DashboardGraphicalView.jsx"


//TODO - load data dynamically
function Dashboard({data, initialLoad, setInitialLoad}) {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect( () => {
        if(searchTerm) {
            const fData = data.map((item) => {
                const regEx = new RegExp(searchTerm, "ig");
                var replaceMask = `<span className="highlight">${searchTerm}</span>`;    
                const nfiles = item.files
                            .filter(file => file.name.toLowerCase().includes(searchTerm.toLowerCase()))
                            .map((file) => {
                                const name = `${file.name.replaceAll(regEx, replaceMask)}`;
                                return {...file, name}
                            });
                return {...item, files: nfiles};
            });
            setFilteredData(fData);
        } else if (initialLoad){
            setFilteredData([]);
            setInitialLoad(false);
        } else {
            setFilteredData(data);
        }
    },[searchTerm]);

    return (
        <div className="dashboard">
            <DashboardMenu data={data} setFilteredData={setFilteredData}/>
            <div className="main-content" >
                <DashboardGraphicalView data={filteredData}/>
                <DashboardContent data={filteredData}
                                    setSearchTerm={setSearchTerm}
                                    />
            </div>
        </div>
    )
}

export default Dashboard;