import React from 'react'
import StyleContext from './StyleContext'

export default function RussianTravel() {
    return (
        <StyleContext.Consumer>
            {(styles) => (
                <div style={{ color: styles.palette.primary }}>
                    <span className='smalltext'>Учебный проект - практика адаптивной вёрстки и БЭМ.</span>
                    <p className='smalltext'>Ссылка на проект на <a target='_blank' style={{ color: styles.palette.primary }} href='https://github.com/shiny-lodge/russian-travel/'>Github</a></p>
                    <iframe title='russian-travel' className='demos__frame' src='https://shiny-lodge.github.io/russian-travel/' />
                </div>
            )}
        </StyleContext.Consumer>
    )
}
