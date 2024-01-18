'use client';

import { useState } from 'react';

export default function Button({ text }: { text: string }) {
  const [toggle, setToggle] = useState(false);

  return (
    <button
      onClick={() => setToggle(!toggle)}
      className="relative flex justify-center bg-red-500"
    >
      {toggle ? text : 'Click Me'}
    </button>
  );
}

