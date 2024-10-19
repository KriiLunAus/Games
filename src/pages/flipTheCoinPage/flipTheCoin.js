import { useState } from 'react';

export default function PlayGame() {
  const [result, setResult] = useState(null);

  setResult(Math.random());

  return result;
}
