import React from "react";
import '../Styles/Certificates.css';
import courseraCertificate_1 from '../Media/Certificates/Sethuraj-(Coursera-Guided Project-CRUD Operations using MangoDB NoSQL)_page-0001.jpg';
import courseraCertificate_2 from '../Media/Certificates/Sethuraj-(Coursera-Hong Kong University-Programming with Scratch)_page-0001.jpg';
import courseraCertificate_3 from '../Media/Certificates/Sethuraj-(Coursera-KGiSL-Basics of Java Programming)_page-0001.jpg';
import courseraCertificate_4 from '../Media/Certificates/Sethuraj-(Coursera-KGiSL-CSS Style Sheets for SP)_page-0001.jpg';
import courseraCertificate_5 from '../Media/Certificates/Sethuraj-(Coursera-KGiSL-HTML for SP)_page-0001.jpg';
import courseraCertificate_6 from '../Media/Certificates/Sethuraj-(Coursera-KGiSL-Tech Foundation for SP)_page-0001.jpg';
import courseraCertificate_7 from '../Media/Certificates/Sethuraj-(Coursera-Meta-HTML&CSS-inDepth)_page-0001.jpg';

export function Certificates()
{
    return (
        <div id="certificatesSection">
            <div className="certificates">
                <div className="col-lg-12 col-12 slider">
                    <span style={{"--i":"1"}}><img src={courseraCertificate_1} alt="Coursera-Guided Project-CRUD Operations using MangoDB NoSQL"/></span>
                    <span style={{"--i":"2"}}><img src={courseraCertificate_2} alt="Coursera-Hong Kong University-Programming with Scratch"/></span>
                    <span style={{"--i":"3"}}><img src={courseraCertificate_3} alt="Coursera-KGiSL-Basics of Java Programming"/></span>
                    <span style={{"--i":"4"}}><img src={courseraCertificate_4} alt="Coursera-KGiSL-CSS Style Sheets for SP"/></span>
                    <span style={{"--i":"5"}}><img src={courseraCertificate_5} alt="Coursera-KGiSL-HTML for SP"/></span>
                    <span style={{"--i":"6"}}><img src={courseraCertificate_6} alt="Coursera-KGiSL-Tech Foundation for SP"/></span>
                    <span style={{"--i":"7"}}><img src={courseraCertificate_7} alt="Coursera-Meta-HTML&CSS-inDepth"/></span>
                    <span style={{"--i":"8"}}><img src={courseraCertificate_7} alt="Coursera-Meta-HTML&CSS-inDepth"/></span>
                    <span style={{"--i":"9"}}><img src={courseraCertificate_7} alt="Coursera-Meta-HTML&CSS-inDepth"/></span>
                    <span style={{"--i":"10"}}><img src={courseraCertificate_7} alt="Coursera-Meta-HTML&CSS-inDepth"/></span>
                </div>                
            </div>
        </div>
    );
}