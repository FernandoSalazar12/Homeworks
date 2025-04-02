import React from 'react';

export const Hijo = React.memo(({ numero, incrementar }) => {
  return (
    <button onClick={incrementar}>
      {numero}
    </button>
  );
});
