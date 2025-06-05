import Dashboard from "./components/Dashboard.jsx"
import "./styles.css"
import contentData from "./assets/contentData.js";
import { useState } from "react";

const docEx = ['pptx', 'docx', 'xlsx', 'wsdl', 'xls', 'pdf'];
const vidEx = ['mp4','m4v', 'avi', 'flv'];
const imgEx = ['png'];

const docFiles = contentData.results.filter(result => {
                    const title = result.title;
                    const ext  = title.substring(title.lastIndexOf('.')+1, title.length);
                    return docEx.includes(ext);
                }).map(result => {
                    return {id: result.id,
                            size: result.fileSize,
                            name: result.title,
                            href: `https://technia.jira.com/wiki${result._links?.download}`
                        };
                });

const genericFiles = contentData.results.filter(result => {
                    const title = result.title;
                    const ext  = title.substring(title.lastIndexOf('.')+1, title.length);
                    return !docEx.includes(ext) && !imgEx.includes(ext) && !vidEx.includes(ext);
                }).map(result => {
                    return {id: result.id,
                            size: result.fileSize,
                            name: result.title,
                            href: `https://technia.jira.com/wiki${result._links?.download}`
                        };
                });

const imageFiles = contentData.results.filter(result => {
                    const title = result.title;
                    const ext  = title.substring(title.lastIndexOf('.')+1, title.length);
                    return imgEx.includes(ext);
                }).map(result => {
                    return {id: result.id,
                            size: result.fileSize,
                            name: result.title,
                            href: `https://technia.jira.com/wiki${result._links?.download}`
                        };
                });

const videoFiles = contentData.results.filter(result => {
        const title = result.title;
        const ext  = title.substring(title.lastIndexOf('.')+1, title.length);
        return vidEx.includes(ext);
        }).map(result => {
            return {id: result.id,
                    size: result.fileSize,
                    name: result.title,
                    href: `https://technia.jira.com/wiki${result._links?.download}`
                };
        });

const data = [  {type: "Documents", color: "blue", files: docFiles},
                {type: "Images", color: "green", files: imageFiles},
                {type: "Videos", color: "orange", files: videoFiles},
                {type: "Others", color: "red", files: genericFiles}];

function App() {
    const [initialLoad, setInitialLoad] = useState(true); 
  return <Dashboard data={data} initialLoad={initialLoad} setInitialLoad={setInitialLoad}/>
}

export default App;