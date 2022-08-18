import React from 'react'
import StyleContext from './StyleContext'

export default function ThreeDee() {
    return (
        <StyleContext.Consumer>
            {(styles) => (
                <div style={{ color: styles.palette.primary }}>
                    <span className='smalltext'>Веб-интерфейс для управления некоторыми параметрами 3d модели и освещения. Управление:</span>
                    <ul>
                        <li className='smalltext'> При движении мыши с зажатой левой кнопкой мыши камера вращается вокруг модели.</li>
                        <li className='smalltext'> При прокрутке колеса мыши камера приближается/удаляется.</li>
                        <li className='smalltext'> При движении мыши с зажатой левой кнопкой мыши и кнопкой shift камера сдвигается относительно модели.</li>
                        <li className='smalltext'> По клику левой кнопкой мыши на объект модели (ствол дерева, камень, вода и т.д.) в меню слева открывается настройка цвета этого объекта.</li>
                    </ul>
                    <p className='smalltext'>Планы по доработке:</p>
                    <ul>
                        <li className='smalltext'>Добавление адаптивности - <span style={{ color: styles.palette.accent }}>на данный момент тестировалось только десктопное разрешение. Для оптимальной работы демо, пожалуйста, перейдите по <a target='_blank' style={{ color: styles.palette.primary }} href='https://3d.lomovitsky.ru'>ссылке</a>.</span></li>
                        <li className='smalltext'>Доработка освещения и теней</li>
                        <li className='smalltext'>Загрузка дополнительных моделей и добавление опции переключения между разными моделями</li>
                        <li className='smalltext'>Опция экспорта gtlf-моделей</li>
                        <li className='smalltext'>Опция настройки прозрачности каждого объекта</li>
                    </ul>
                    <p className='smalltext'>Ссылка на проект на <a target='_blank' style={{ color: styles.palette.primary }} href='https://github.com/shiny-lodge/3d-demo/'>Github</a></p>
                    <iframe title='quotewizard' className='demos__frame' src='https://3d.lomovitsky.ru' />
                </div>
            )}
        </StyleContext.Consumer>
    )
}
