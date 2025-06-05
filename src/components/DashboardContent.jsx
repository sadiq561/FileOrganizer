import ContentGallery from "./ContentGallery.jsx";

//TODO - load data dynamically
function DashboardContent({data, setSearchTerm}) {
   
    return (data.length?
        <div className="content">
            <ContentGallery data = {data} 
                            setSearchTerm={setSearchTerm}
                            />
        </div> : <>
        <div className="welcome" >
            <p><strong>Hello User!</strong></p>
            <h1>Welcome to Clean up tool</h1>
            <h2>Please select a drive to check files.</h2>
        </div>
    </>);
}

export default DashboardContent;