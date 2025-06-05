function GraphicView() {
    return (<div className="graphicView w-72 p-4">
        <img src="https://placehold.co/150x150" alt="Pie chart displaying data categories like Documents, Videos, Images, Free" className="mx-auto" />
        <ul className="mt-4 text-sm">
            <li className="text-blue-500">Documents</li>
            <li className="text-orange-500">Videos</li>
            <li className="text-green-500">Images</li>
            <li className="text-gray-500">Free</li>
        </ul>
    </div>);
}

export default GraphicView;