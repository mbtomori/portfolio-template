import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { Header } from "./pages/header";
import { Homepage } from "./pages/homepage/homepage";
import { Footer } from "./pages/footer";
import { About } from "./pages/about/about";
import { Resume } from "./pages/resume/resume";
import { Contact } from "./pages/contact/contact";
import { Samples } from "./pages/samples/samples";
import { Container } from "react-bootstrap";
export const App = () => {
    return (
        <BrowserRouter>
            <div id="Main" className="min-vh-100 min-vw-100 d-flex flex-column">
                <Header/>
                <Container className="ps-0 m-0 w-100">
                    <Routes>
                        <Route path="resume" element={<Resume/>}/>
                    </Routes>
                </Container>
                <Container className="position-relative h-auto">
                    <Routes>
                        <Route index element={<Homepage/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="contact" element={<Contact/>}/>
                        <Route path="samples" element={<Samples/>}/>
                    </Routes>
                </Container>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};
export default App;
