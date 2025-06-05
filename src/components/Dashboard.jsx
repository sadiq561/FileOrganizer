import DashboardMenu from "./DashboardMenu.jsx"
import Content from "./Content.jsx"
import GraphicalView from "./GraphicalView.jsx"

function Dashboard() {
    return (
        <div className="dashboard">
            <DashboardMenu />
            <Content />
            <GraphicalView />
        </div>
    )
}

export default Dashboard;