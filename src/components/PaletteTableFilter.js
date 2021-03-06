import React from 'react'

export const PaletteTableFilter = ( { textColor, filter, setFilter } ) => {
    return (
        <span style={{ color: textColor }}>
            Фильтр {' '}
            <input className='palette-table__input' style={{ color: textColor }} value={filter || ''}
            onChange={e => setFilter(e.target.value)}></input>
        </span>
    )
}
