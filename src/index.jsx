import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import Error from './pages/Error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyle from './utils/style/global-style';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/housing/:id" element={<Housing />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
);
