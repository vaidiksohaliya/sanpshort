import React from 'react';

function Header() {
    return (
        <>  
        <div className='main_width'>
            <div>
            <h1>snapshot</h1>

            <input type="text" placeholder='search...'/>
            </div>
            
        
        <div className='d-flex'>
                <button className='btn1'></button> 
        </div>
        </div>
        </>

    );
}

export default Header;