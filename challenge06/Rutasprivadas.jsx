import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './Authcontext';

export const RutasPrivadas = () => {
  const { usuario } = useAuth();
  return usuario ? <Outlet /> : <Navigate to="/login" />;
};
