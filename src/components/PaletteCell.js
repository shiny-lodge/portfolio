import React from 'react'
import './PaletteCell.css'

export default function PaletteCell (props) {
    const { background, paper, primary, accent } = props;
    return (
        <ul className='palette-cell'>
            <li className='palette-cell__color' style={{ backgroundColor: background }} />
            <li className='palette-cell__color' style={{ backgroundColor: paper }} />
            <li className='palette-cell__color' style={{ backgroundColor: primary }} />
            <li className='palette-cell__color' style={{ backgroundColor: accent }} />
        </ul>
    )
}


