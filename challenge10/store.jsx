import { configureStore, createSlice } from '@reduxjs/toolkit';

const contadorSlice = createSlice({
  name: 'contador',
  initialState: { valor: 0 },
  reducers: {
    incrementar: (state) => { state.valor += 1; },
    decrementar: (state) => { state.valor -= 1; },
    incrementarPor: (state, action) => { state.valor += action.payload; },
  },
});

const pilaSlice = createSlice({
  name: 'pila',
  initialState: [],
  reducers: {
    agregarPila: (state, action) => { state.push(action.payload); },
    quitarPila: (state) => { state.pop(); },
  },
});

export const { incrementar, decrementar, incrementarPor } = contadorSlice.actions;
export const { agregarPila, quitarPila } = pilaSlice.actions;

export const store = configureStore({
  reducer: {
    contador: contadorSlice.reducer,
    pila: pilaSlice.reducer,
  },
});
