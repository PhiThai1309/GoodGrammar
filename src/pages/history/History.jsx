import React, { useState, useEffect } from 'react'
import { Document } from '../../components'
import './History.css'

const History = () => {
    const [selected, setSelected] = useState(null);

    // Use for updating document ig
    useEffect(() => console.log(selected));

    return (
        <div className='history'>
            <div className='history-bar'>
                <h1>History</h1>
                <h2>Today</h2>
                <Document id='1' title='Document #1' onClick={e => setSelected(e.target.id)}/>
                <Document id='2' title='Document #2' onClick={e => setSelected(e.target.id)}/>
                <Document id='3' title='Document #3' onClick={e => setSelected(e.target.id)}/>
            </div>
            <div className='history-text'>
                <textarea placeholder='Corrected text will be shown here' disabled></textarea>
                <div className="input-buttons">
                    <button className='download-button'>Download</button>
                </div>
            </div>
        </div>
    )
}

export default History