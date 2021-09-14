import React from 'react'
import StyleContext from './StyleContext'

export default function Portfolio() {
    return (
        <StyleContext.Consumer>
            {(styles) => (
                <div style={{ color: styles.palette.primary }}>
                    <p className='smalltext'>Пример коммерческой разработки. В проекте были реализованы сложные анимации, эффект параллакса по курсору и по скроллу.</p>
                    <iframe title='dreamlact' className='demos__frame' src='https://dreamlact.ru' />
                </div>
            )}
        </StyleContext.Consumer>
    )
}
