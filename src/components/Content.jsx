function Content() {
    return (<div className="content p-6 bg-white">
        <div>
            <h2 className="font-bold text-blue mb-4">Documents</h2>
            <div className="gallery grid-cols-3 gap-4 mb-3">
                <div className="tile blue h-20 rounded-lg"></div>
                <div className="tile blue h-20 rounded-lg"></div>
                <div className="tile blue h-20 rounded-lg"></div>
                <div className="tile blue h-20 rounded-lg"></div>
                <div className="tile blue h-20 rounded-lg"></div>
                <div className="tile blue h-20 rounded-lg"></div>
            </div>
        </div>
        <div className="mt-8">
            <h2 className="font-bold text-lg text-orange mb-4">Videos</h2>
            <div className="gallery grid-cols-3 gap-4" >
                <div className="tile orange h-20 rounded-lg"><p>TestVideoName.mp4</p></div>
                <div className="tile orange h-20 rounded-lg"></div>
                <div className="tile orange h-20 rounded-lg"></div>
                <div className="tile orange h-20 rounded-lg"></div>
                <div className="tile orange h-20 rounded-lg"></div>
                <div className="tile orange h-20 rounded-lg"></div>
            </div>
        </div>
    </div>);
}

export default Content;