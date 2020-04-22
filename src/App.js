import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';

import Notation from './Notation';
import Piano from './Piano';

import { trebleNaturals, trebleSharps, trebleFlats, bassNaturals, bassSharps, bassFlats } from './notes';

import './App.css';

function App() {
  const [useTreble, setUseTreble] = useState(true);
  const [useBass, setUseBass] = useState(true);
  const [useSharps, setUseSharps] = useState(true);
  const [useFlats, setUseFlats] = useState(true);
  const [tempo, setTempo] = useState(80);

  const startTime = useRef();

  const [attempts, setAttempts] = useState(0);
  const [right, setRight] = useState(0);
  const [tooSlow, setTooSlow] = useState(0);
  const [wrong, setWrong] = useState(0);

  const notes = useMemo(() => {
    const included = [];

    if (useTreble) {
      included.push(...trebleNaturals);
      if (useSharps) {
        included.push(...trebleSharps);
      }
      if (useFlats) {
        included.push(...trebleFlats);
      }
    }

    if (useBass) {
      included.push(...bassNaturals);
      if (useSharps) {
        included.push(...bassSharps);
      }
      if (useFlats) {
        included.push(...bassFlats);
      }
    }
    
    return included;
  }, [useBass, useFlats, useSharps, useTreble])

  const [note, setNote] = useState(trebleNaturals[0]);
  const onNoteClicked = useCallback(clicked => {
    if (clicked.id === note.id) {
      const delay = new Date().getTime() - startTime.current;

      if (delay > 60000 / tempo) {
        setTooSlow(tooSlow => tooSlow + 1);
      }
      else {
        setRight(right => right + 1);
      }
    }
    else {
      setWrong(wrong => wrong + 1);
    }

    setAttempts(attempts => attempts + 1);

    const nextNote = notes[Math.floor(Math.random() * notes.length)];
    setNote(nextNote);
  }, [note, notes, tempo]);

  useEffect(() =>{
    startTime.current = new Date().getTime();
  }, [attempts]);

  return (
    <div className="app">
      <nav>
        <header>
          Piano Note Trainer
        </header>
      </nav>
      <main>
        <div className="name-me-later">
          <div>
            <h3>Settings</h3>
            <p>
              <label>
                <input type="checkbox" checked={ useTreble } onChange={ e => setUseTreble(e.target.checked) } /> 
                Treble Clef
              </label>
            </p>
            <p>
              <label>
                <input type="checkbox" checked={ useBass } onChange={ e => setUseBass(e.target.checked) } />
                Bass Clef
              </label>
            </p>
            <p>
              <label>
                <input type="checkbox" checked={ useSharps } onChange={ e => setUseSharps(e.target.checked) } />
                Sharps
              </label>
            </p>
            <p>
              <label>
                <input type="checkbox" checked={ useFlats } onChange={ e => setUseFlats(e.target.checked) } />
                Flats
              </label>
            </p>
            <p>
              <label>
                Tempo: 
                <input type="text" value={ tempo } onChange={ e => setTempo(e.target.value) } />
              </label>
            </p>
          </div>
          <div>
            <Notation note={note} />
          </div>
          <div>
            <h3>Results</h3>
            <p>Attempts: { attempts }</p>
            <p>Right: { right }</p>
            <p>Too slow: { tooSlow }</p>
            <p>Wrong: { wrong }</p>
          </div>
        </div>
        <div>
          <Piano onClick={onNoteClicked} />
        </div>
      </main>
    </div>
  );
}

export default App;
