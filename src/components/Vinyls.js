import React from 'react'
import StyleContext from './StyleContext'

export default function Vinyls() {
    return (
        <StyleContext.Consumer>
            {(styles) => (
                <div style={{ color: styles.palette.primary }}>
                    <span className='smalltext'>Наработка дизайна виниловых дисков в обложке. По наведению курсора срабатывает анимация.</span>
                    <p className='smalltext'>Планы по доработке:</p>
                    <ul>
                        <li className='smalltext'>Корректировка теней на мобильных разрешениях</li>
                        <li className='smalltext'>Разработка проекта каталога плейлистов, использующего этот дизайн</li>
                    </ul>
                    <p className='smalltext'>Ссылка на код на <a target='_blank' style={{ color: styles.palette.primary }} href='https://codepen.io/shiny-lodge/pen/eYRvvML'>Codepen</a></p>
                    <iframe title='vinyls' className='demos__frame' src='https://codepen.io/shiny-lodge/full/eYRvvML' />
                </div>
            )}
        </StyleContext.Consumer>
    )
}
