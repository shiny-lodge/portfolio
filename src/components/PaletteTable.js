import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import MOCK_DATA from '../utils/MOCK_DATA.json'
import { COLUMNS } from '../utils/columns'
import './PaletteTable.css'
import { PaletteTableFilter } from './PaletteTableFilter'

export const PaletteTable = (props) => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data
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
        state,
        setGlobalFilter
    } = tableInstance

    const { globalFilter, pageIndex } = state

    return (
        <>
            <PaletteTableFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table style={{ maxWidth: '100%', color: props.primaryColor }} {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        className='palette-table__header'
                                        {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ?
                                                <svg className='palette-table__sort-icon' viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17 14H20L16 18L12 14H15V0H17V14ZM0 14H10V16H0V14ZM4 2V4H0V2H4ZM0 8H7V10H0V8Z" fill={props.accentColor} />
                                                </svg>
                                                :
                                                <svg className='palette-table__sort-icon' viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17 4H20L16 0L12 4H15V18H17V4ZM0 14H10V16H0V14ZM4 2V4H0V2H4ZM0 8H7V10H0V8Z" fill={props.accentColor} />
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
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr style={{ cursor: 'pointer' }} onClick={() => props.updatePalette(row.original)} {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <div style={{ display: 'flex', flexDirection: 'row', height: '25px', alignItems: 'center', columnGap: '6px', justifyContent: 'center' }}>
                <button onClick={() => { previousPage() }} disabled={!canPreviousPage}>Назад</button>
                <button onClick={() => { gotoPage(0) }} disabled={!canPreviousPage}>{'<<'}</button>
                <span>Страница <strong>{pageIndex + 1}</strong> из <strong>{pageOptions.length}</strong></span>
                <span>| Перейти на страницу: {' '}</span>
                <input style={{ width: '40px' }} type='number' defaultValue={pageIndex + 1} onChange={e => {
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(pageNumber);
                }}></input>
                <button onClick={() => { gotoPage(pageCount - 1) }} disabled={!canNextPage}>{'>>'}</button>
                <button onClick={() => { nextPage() }} disabled={!canNextPage}>Вперед</button>
            </div>
        </>
    )
}
