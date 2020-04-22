import React, { useEffect } from 'react';

import abcjs from 'abcjs';

export default function Notation({ note }) {
  useEffect(() => {
    abcjs.renderAbc('abc', note.notation, { scale: 2, staffwidth: 200 });
  }, [note]);

  return <div id="abc"></div>;
}