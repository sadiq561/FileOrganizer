import {defaults} from "chart.js/auto";
import {Pie, Bar} from "react-chartjs-2";
import $ from 'jquery';

defaults.color = '#000';

//TODO - load data dynamically

function DashboardGraphicView({data}) {

    const items = ["Documents", "Images", "Videos", "Others"];

    let totalSize = 0;
    data.forEach(item => {
        item.files.forEach(file => {
            totalSize += file.size;
        });
    })

    const docCount = data[0]?.files.length;
    const imgCount = data[1]?.files.length;
    const videoCount = data[2]?.files.length;
    const genericCount = data[3]?.files.length;
    const doc_l100 = data[0]?.files.filter(file => file.size < 1000000);
    const doc_l200 = data[0]?.files.filter(file => file.size < 2000000 && file.size > 1000000);
    const doc_g200 = data[0]?.files.filter(file => file.size > 2000000);

    const img_l100 = data[1]?.files.filter(file => file.size < 1000000);
    const img_l200 = data[1]?.files.filter(file => file.size < 2000000 && file.size > 1000000);
    const img_g200 = data[1]?.files.filter(file => file.size > 2000000);

    const vid_l100 = data[2]?.files.filter(file => file.size < 1000000);
    const vid_l200 = data[2]?.files.filter(file => file.size < 2000000 && file.size > 1000000);
    const vid_g200 = data[2]?.files.filter(file => file.size > 2000000);

    const generic_l100 = data[3]?.files.filter(file => file.size < 1000000);
    const generic_l200 = data[3]?.files.filter(file => file.size < 2000000 && file.size > 1000000);
    const generic_g200 = data[3]?.files.filter(file => file.size > 2000000);

    const legendClickHandler = (event,  legend) => {
        const $target = $(event.currentTarget);
        const index = legend[0]?.index;
        const group = items[index];
        const element = document.getElementsByClassName(group)[0];
        const galleryEle = element.getElementsByClassName('gallery')[0];
        if(galleryEle.classList.value.includes('hidden')) {
            galleryEle.classList.remove('hidden');
        }
        element.scrollIntoView({behavior:'smooth'});
    };

    return (
    data.length >0?<div className="graphicView">
        <div className="graph bar">
        <Bar data={{
                labels: ["> 2 Mb", "1 Mb - 2 Mb", "< 1 Mb" ],
                datasets: [{
                    label: "Documents",
                    data: [doc_g200.length, doc_l200.length,doc_l100.length ],
                    backgroundColor: ["#00A3EE"]
                },                {
                    label: "Images",
                    data: [img_g200.length, img_l200.length, img_l100.length ],
                    backgroundColor: ["#7FBA00"]
                },{
                    label: "Videos",
                    data: [ vid_g200.length, vid_l200.length, vid_l100.length],
                    backgroundColor: ["#FEB800"]
                },{
                    label: "Others",
                    data: [generic_g200.length, generic_l200.length,generic_l100.length ],
                    backgroundColor: ["#F14F21" ]
                }]
            }}
            options={{
                plugins:{
                    legend: {
                        display: false, 
                    },
                    title: {
                        display: true,
                        text: `Atlassian Data (${(totalSize/1000000000).toFixed(2)} Gb)`,
                        padding:{
                            top: 30
                        }
                    }
                }
            }}/>
        </div>
        <div className="graph pie">
        <Pie 
            data={{
                labels: items,
                datasets: [{
                    label: "Files",
                    data: [docCount, imgCount, videoCount, genericCount],
                    backgroundColor: ["#00A3EE", "#7FBA00", "#FEB800", "#F14F21" ]
                },]
            }}
            options={{
                onClick: legendClickHandler,
                onHover: (evt, activeEls) => {
                    activeEls.length > 0 ? evt.chart.canvas.style.cursor = 'pointer' : evt.chart.canvas.style.cursor = 'default';
                  },
                plugins:{
                    legend: {
                        position: "left"
                    },
                    title: {
                        display: true,
                        text: "Data",
                        padding:{
                            top: 30
                        }
                    }
                }
            }}
       />
        </div>
    </div>:<></>);
}

export default DashboardGraphicView;