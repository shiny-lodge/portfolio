import React from 'react'
import StyleContext from './StyleContext'

export default function NewsExplorer() {
    return (
        <StyleContext.Consumer>
            {(styles) => (
                <div style={{ color: styles.palette.primary }}>
                    <span className='smalltext'>Мой сайт-портфолио по веб-разработке.</span>

                    <p className='smalltext'>Планы по доработке:</p>
                    <ul>
                        <li className='smalltext'>Улучшение адаптивности</li>
                        <li className='smalltext'>Добавление демо-проектов</li>
                        <li className='smalltext'>Расширение функционала существующих демо-проектов</li>
                        <li className='smalltext'>Написание документации</li>
                    </ul>

                    <p className='smalltext'>Ссылка на проект на <a target='_blank' style={{ color: styles.palette.primary }} href='https://github.com/shiny-lodge/portfolio'>Github</a></p>
                    <iframe title='news-explorer' className='demos__frame' src='https://lomovitsky.ru' />
                </div>
            )}
        </StyleContext.Consumer>
    )
}
