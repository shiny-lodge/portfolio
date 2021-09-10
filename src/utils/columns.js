import PaletteCell from "../components/PaletteCell"

export const COLUMNS = [
    {
        Header: '№',
        accessor: 'id',
    },
    {
        Header: 'Палитра',
        accessor: 'paletteName',
    },
    {
        Header: 'Автор',
        accessor: 'author',
    },
    {
        Header: 'Пользователи',
        accessor: 'users',
    },
    {
        Header: 'Цвета',
        accessor: 'colors',
        Cell: props => <PaletteCell
                        background = {props.row.original.background}
                        paper = {props.row.original.paper}
                        accent = {props.row.original.accent}
                        primary = {props.row.original.primary} />
    }
]