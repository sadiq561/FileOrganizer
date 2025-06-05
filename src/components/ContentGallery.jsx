import $ from 'jquery';
import GalleryTile from "./GalleryTile.jsx";
import * as Icon from 'react-icons/fa';
import { useState } from "react";


function ContentGallery({data, setSearchTerm}) {
    const [scrollClass, setScrollClass] = useState('hidden');

    const onSearchValueChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const onHeaderClick = (event) => {
        const $target = $(event.currentTarget);
        const $gallery = $target.siblings('.gallery');
        if($gallery.hasClass('hidden')) {
            $gallery.removeClass('hidden');
        } else {
            $gallery.addClass('hidden');
        }
    }

    const getTotalSize = (files) => {
            let tSize = 0;
            files.forEach(file => {
                tSize += file.size;
            });
            return (tSize/1000000).toFixed(2);
    };

    const scrollToTop = () => {
        const ele = document.getElementsByClassName('contentScroll')[0];
        ele.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    };

    const toggleScrollClass = () => {
        const ele = document.getElementsByClassName('contentScroll')[0];
        if(ele.scrollTop > 100) {
            setScrollClass('visible');
        } else {
            setScrollClass('hidden');
        }
    };

    return (<>
        <div className="content-search">
            <input className="search-box" type="search" placeholder="Filter files" 
                onChange={onSearchValueChange}/>
            <Icon.FaArchive className="archive" title="Archive files"/>
            <Icon.FaTrash className="delete" title="Delete files"/>
            <Icon.FaArrowUp className={`scrollTop ${scrollClass}`} onClick={scrollToTop} title="Scroll To Top"/>
        </div>
        <div className="contentScroll" onScroll={toggleScrollClass}>
            {data.map(({type,color, files}) => {
                return (
                <div key = {`${type}`} className = {`${type} group`} >
                    <h2 className={`font-bold text-${color} header`} onClick={onHeaderClick}>{type}
                        <div className="ui small label">{files.length}</div>
                        <div className="ui small label">{getTotalSize(files)} Mb</div>
                    </h2>
                    <div className="gallery">
                        <GalleryTile color={color} files={files} />
                    </div>
                </div>)
            })}
        </div>
        </>
    );
}

export default ContentGallery;