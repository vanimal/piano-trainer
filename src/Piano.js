import React from 'react';

import { trebleNaturals, trebleSharps, bassNaturals, bassSharps } from './notes';

import './Piano.css';

export default function Piano({ showLabel, onClick }) {
  const whiteKeys = bassNaturals.slice(0, bassNaturals.length - 1).concat(trebleNaturals);
  const sharps  = bassSharps.concat(trebleSharps);

  const findSharp = key => sharps.find(k => k.id === key.id + '#');

  return <ul className="piano">
    { whiteKeys.map(key => (
      <li key={key.id}>
        <div className="anchor" onClick={() => onClick(key)} />
        { findSharp(key) && <span onClick={() => onClick(findSharp(key))} /> }
        { showLabel && <div className="note">{ key.name }</div> }
      </li>
    ))}
  </ul>;
}