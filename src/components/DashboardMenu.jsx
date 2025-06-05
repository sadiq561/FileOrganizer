function DashboardMenu() {
    return (
    <div className="dashboardMenu text-white">
        <h1 className="dashboardHeader text-lg font-bold">File Manager</h1>
        <ul className="space-y-4">
            <li  className="menuItem"><i className="fa-th-large mr-2"></i>Dashboard</li>
            <li className="menuItem"><i className="fa-question-circle mr-2"></i>Help</li>
            <li className="menuItem"><i className="fa-cog mr-2"></i>Settings</li>
        </ul>
    </div> );
}

export default DashboardMenu;