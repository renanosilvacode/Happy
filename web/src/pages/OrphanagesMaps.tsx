import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

export default function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Choose an Orphanage on the Map</h2>
                    <p>Children are waiting for your visit</p>
                </header>

                <footer>
                    <strong>São Bernardo do Campo</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <div></div>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    )
}