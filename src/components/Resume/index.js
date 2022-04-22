import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { saveAs } from "file-saver";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from '../../assets/resume/resume0422.pdf'
import { AiOutlineDownload } from "react-icons/ai";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


// ADD DOWNLOAD LINK TO RESUME 
// ALSO BUILD OUT SOME KIND OF RESUME ON THIS PAGE



<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.8.335/pdf.worker.min.js" integrity="sha512-A7+amkzh0+2k5IVc5RRZ5vjeCaTm3mZlLQJwiYzS/wa0JyDD6bsrJMtE773tYByLH143/rDtD4+rrdXpt18q/Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>




// const resumeLink = 
//      "https://github.com/TannerReed29/React-Pro-Portfolio/raw/main/src/assets/resume/resume-pdf.pdf"



function Resume() {
    const saveFile = () => {
        saveAs(
            "https://github.com/TannerReed29/React-Pro-Portfolio/raw/main/src/assets/resume/resume0422.pdf",
            "resume-TB.pdf"
        );
    };

    const [width, setWidth] = useState(1200);


    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);


    
    return (
        <section>
            <button onClick={saveFile} ><AiOutlineDownload />Download Resume</button>



            <Row className="resume">
                <Document file={pdf} className="d-flex justify-content-center">
                    <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                </Document>
            </Row>

        </section>
    );
}

export default Resume;

