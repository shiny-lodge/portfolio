import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import MOCK_DATA from '../utils/MOCK_DATA.json'
import { COLUMNS } from '../utils/columns'
import './PaletteTable.css'
import { PaletteTableFilter } from './PaletteTableFilter'

export const PaletteTable = (props) => {

    const [selectedPalette, setSelectedPalette] = React.useState(props.palette)

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data,
        initialState: { pageSize: 50 }
    },
        useGlobalFilter, useSortBy, usePagination)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        prepareRow,
        setPageSize,
        state,
        setGlobalFilter
    } = tableInstance

    const { globalFilter, pageIndex, pageSize } = state

    return (
        <>
            <PaletteTableFilter textColor={selectedPalette.primary} filter={globalFilter} setFilter={setGlobalFilter} />

            <table className='palette-table' style={{ color: selectedPalette.primary }} {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup, index) => (
                            <tr key={index} {...headerGroup.getHeaderGroupProps}>
                                {headerGroup.headers.map((column, index) => (
                                    <th
                                        className='palette-table__header'
                                        key={index}
                                        {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ?
                                                <svg className='palette-table__sort-icon' viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17 14H20L16 18L12 14H15V0H17V14ZM0 14H10V16H0V14ZM4 2V4H0V2H4ZM0 8H7V10H0V8Z" fill={selectedPalette.accent} />
                                                </svg>
                                                :
                                                <svg className='palette-table__sort-icon' viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17 4H20L16 0L12 4H15V18H17V4ZM0 14H10V16H0V14ZM4 2V4H0V2H4ZM0 8H7V10H0V8Z" fill={selectedPalette.accent} />
                                                </svg>
                                            ) : ''}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map((row, index) => {
                            prepareRow(row)
                            return (
                                <tr key={index} style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        props.updatePalette(row.original);
                                        setSelectedPalette(row.original)
                                    }} {...row.getRowProps()}>
                                    {row.cells.map((cell, index) => {
                                        return <td key={index} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <div style={{ color: selectedPalette.primary }} className='palette-table__footer'>
                <button style={{ color: selectedPalette.primary, borderColor: selectedPalette.primary }} className='palette-table__button' onClick={() => { gotoPage(0) }} disabled={!canPreviousPage}>{'<<'}</button>
                <button style={{ color: selectedPalette.primary, borderColor: selectedPalette.primary }} className='palette-table__button' onClick={() => { previousPage() }} disabled={!canPreviousPage}>{'<'}</button>
                <span>Страница <strong>{pageIndex + 1}</strong> из <strong>{pageOptions.length}</strong></span>
                <span>| Перейти на страницу: {' '}</span>
                <input className='palette-table__input' style={{ width: '40px', color: selectedPalette.primary, borderColor: selectedPalette.primary }} type='number' defaultValue={pageIndex + 1} onChange={e => {
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(pageNumber);
                }}></input>
                <button style={{ color: selectedPalette.primary, borderColor: selectedPalette.primary }} className='palette-table__button' onClick={() => { nextPage() }} disabled={!canNextPage}>{'>'}</button>
                <button style={{ color: selectedPalette.primary, borderColor: selectedPalette.primary }} className='palette-table__button' onClick={() => { gotoPage(pageCount - 1) }} disabled={!canNextPage}>{'>>'}</button>

            </div>
        </>
    )
}
