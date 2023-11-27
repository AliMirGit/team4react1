import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import About from '../pages/About.js';
import Form from '../pages/Form.js';


function MyRouter(){
    return (     
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/feedback-form" element={<Form />} />
        </Routes>       
    )
}

export default MyRouter;