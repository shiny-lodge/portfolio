import React from 'react'

export const PaletteTableFilter = ( { filter, setFilter }) => {
    return (
        <span>
            Фильтр {' '}
            <input value={filter || ''}
            onChange={e => setFilter(e.target.value)}></input>
        </span>
    )
}
