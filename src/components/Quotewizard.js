import React from 'react'
import StyleContext from './StyleContext'

export default function Quotewizard() {
    return (
        <StyleContext.Consumer>
            {(styles) => (
                <div style={{ color: styles.palette.primary }}>
                    <span className='smalltext'>Наработка дизайна анимированных карточек со случайными цитатами. По клику карточка переворачивается, по повторному клику переворачивается обратно на лицевую сторону с новой цитатой</span>
                    <p className='smalltext'>Планы по доработке:</p>
                    <ul>
                        <li className='smalltext'>Добавление адаптивности</li>
                        <li className='smalltext'>Создание API для получения случайных цитат</li>
                        <li className='smalltext'>Создание интерфейса для добавления цитат</li>
                        <li className='smalltext'>Создание интерфейса для персонализации</li>
                    </ul>
                    <p className='smalltext'>Ссылка на проект на <a target='_blank' style={{ color: styles.palette.primary }} href='https://github.com/shiny-lodge/quotewizard/'>Github</a></p>
                    <iframe title='quotewizard' className='demos__frame' src='https://shiny-lodge.github.io/quotewizard/' />
                </div>
            )}
        </StyleContext.Consumer>
    )
}
