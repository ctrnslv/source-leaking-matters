import React, {Component } from 'react';
//import React, { useState, Component } from 'react';
//import { Document, Page } from 'react-pdf'; 

import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import file from '../pdf/indagine-ambientale-aria-val-agri.pdf';
import './pdf.css';


const url = `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
pdfjs.GlobalWorkerOptions.workerSrc = url

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

class Pdfview extends Component{
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div id="doc">
        <Document
          file={file}
          onLoadSuccess={this.onDocumentLoad}
          options={options}
        >
          <Page pageNumber={pageNumber} />
        
        <div id= "navigation">
          <button className="button-atmo"
          onClick={() => this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }))}
           disabled={pageNumber === numPages}
          >
            &#62;
          </button>
          <p>{pageNumber} of {numPages}</p>
          <button className="button-atmo"
          onClick={() => this.setState(prevState => ({ pageNumber: prevState.pageNumber - 1 }))}
          disabled={pageNumber === 1}
          >
            &#60;
          </button>
        </div>
        </Document>
      </div>  
    );
  }
}
 export default Pdfview;
