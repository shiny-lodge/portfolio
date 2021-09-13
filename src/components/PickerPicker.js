import { useState } from 'react'
import ColorPicker from './ColorPicker'
import StyleContext from './StyleContext';
import './PickerPicker.css'

export default function PickerPicker(props) {

    const { updatePalette } = props;
    const [activeSelection, setActiveSelection] = useState('background');

    return (
        <StyleContext.Consumer>
            {(styles) => {

                const buttonStyle = {
                    inactive: {
                        borderColor: styles.palette.primary,
                        color: styles.palette.primary,
                        backgroundColor: styles.palette.paper
                    },
                    active: {
                        borderColor: styles.palette.primary,
                        color: styles.palette.paper,
                        backgroundColor: styles.palette.primary
                    }
                }

                return (
                    <div>
                        <div className='picker'>
                            <button className='picker__button' onClick={() => { setActiveSelection('background') }} style={activeSelection === 'background' ? buttonStyle.active : buttonStyle.inactive} >
                                Фон
                            </button>
                            <button className='picker__button' onClick={() => { setActiveSelection('paper') }} style={activeSelection === 'paper' ? buttonStyle.active : buttonStyle.inactive} >
                                Подложка карточек
                            </button>
                            <button className='picker__button' onClick={() => { setActiveSelection('primary') }} style={activeSelection === 'primary' ? buttonStyle.active : buttonStyle.inactive} >
                                Основной цвет
                            </button>
                            <button className='picker__button' onClick={() => { setActiveSelection('accent') }} style={activeSelection === 'accent' ? buttonStyle.active : buttonStyle.inactive} >
                                Акцент
                            </button>
                        </div>
                        <ColorPicker {...{ activeSelection, updatePalette }} palette={styles.palette} ></ColorPicker>
                    </div>
                )
            }}
        </StyleContext.Consumer>
    )
}

