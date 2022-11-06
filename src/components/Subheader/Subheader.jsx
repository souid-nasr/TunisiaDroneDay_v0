import React from 'react';
import './Subheader.css'
import { Link } from 'react-router-dom';
function Subheader ({subtitle}) {
        return (
            <div className="sigma_subheader style-5 bg-gray">
                <div className="container">
                    <div className="sigma_subheader-inner">
                        <h1>{subtitle}</h1>
                    </div>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/" className="ba">Home</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">{subtitle}</li>
                    </ol>
                </div>
                <img src="" className="br" alt="subheader" />
                <img src="" className="bl" alt="subheader" />
                <img src="" className="tr" alt="subheader" />
            </div>
        );
    }


export default Subheader;