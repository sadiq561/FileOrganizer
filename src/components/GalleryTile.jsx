import $ from 'jquery';
import * as Icon from 'react-icons/fa';
import parser from 'html-react-parser';

function GalleryTile({color, files}) {
    const sortedFiles = files.sort((aFile, bFile) => {
        return aFile.size > bFile.size? -1 : aFile.size < bFile.size?1:0;
    });

    const toggleActiveClass = (event) => {
        const $target = $(event.currentTarget);
        const $selection = $target.find('.selection')
        if($selection.hasClass('selected')) {
            $selection.removeClass('selected');
        } else {
            $selection.addClass('selected');
        }
    };

    return (<>
        {sortedFiles.map(({name, size, id, href}) => {
            return (
            <div className={`tile ${color}`}  key = {id} onClick={toggleActiveClass}>
                <div className="selection" id={id}>
                    <Icon.FaDotCircle />
                </div>
                <p className="details name">
                    <b className="bold">Name: </b>
                    {parser(name)}
                </p>
                
                <p className="details size">
                    <b className="bold">Size: </b>
                    {(size/1000000).toFixed(2)} Mb
                    <a href={href} title="Click to download" target="_blank" className="download">
                        <Icon.FaDownload  />
                    </a>
                     &nbsp;&nbsp;
                     <Icon.FaArchive />
                     &nbsp;&nbsp;
                     <Icon.FaTrash />
                </p>
            </div>
        )})}
    </>);
}

export default GalleryTile;