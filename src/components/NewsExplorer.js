import React from 'react'
import StyleContext from './StyleContext'

export default function NewsExplorer() {
    return (
        <StyleContext.Consumer>
            {(styles) => (
                <div style={{ color: styles.palette.primary }}>
                    <span className='smalltext'>Дипломный проект по курсу веб-разработки на React.</span>
                    <p className='smalltext'>Ссылка на проект на Github: <a target='_blank' style={{ color: styles.palette.primary }} href='https://github.com/shiny-lodge/news-explorer-frontend'>фронт</a> и <a target='_blank' style={{ color: styles.palette.primary }} href='https://github.com/shiny-lodge/news-explorer-api'>бэк</a></p>
                    <iframe title='news-explorer' className='demos__frame' src='https://news.lomovitsky.ru' />
                </div>
            )}
        </StyleContext.Consumer>
    )
}
