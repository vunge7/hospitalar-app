import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import AuthProvider from '../src/contexts/auth';
import Login from '../src/pages/Login';
import RoutesApp from './routes';
//Alterado no github
//Alterado no VSCODE

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <RoutesApp />
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
