import React, { useEffect, useState } from 'react'
import { Page1, Page2, Page3, Page4 } from './Pages'
import Navbar from '../Navbar'
import "./os.css"

const Os = () => {
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        window.scrollTo(0, 0);
        //window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage])
    const renderPage = () => {
        switch (currentPage) {
            case 1: return <Page1 />
            case 2: return <Page2 />
            case 3: return <Page3 />
            case 4: return <Page4 />
            default: return <Page1 />
        }
    }

    return (
        <>
            
            <div className='content'>
                {renderPage()}
                <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} maxPages={4} />
            </div>
        </>
    )
}

export default Os