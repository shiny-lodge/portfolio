import { useState, useRef, useEffect } from 'react'
import StyleContext from './StyleContext'
import './Select.css'

export default function Select(props) {
    const { options, callback, placeholder } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [headerText, setHeaderText] = useState(placeholder);
    const dropdownRef = useRef();

function handleOptionClick(value, text) {
    callback(value);
    setIsOpen(false);
    setHeaderText(text);
}

function handleSelectOpen() {
    setIsOpen(!isOpen)
}

return (
    <StyleContext.Consumer>
        {(styles) => (
            <div ref={dropdownRef} className='select__wrapper'>
                <div onClick={() => { handleSelectOpen() }}
                    className='select__header'
                    style={{
                        borderColor: styles.palette.primary,
                        color: styles.palette.primary
                    }}
                >
                    <span>
                        {headerText}
                    </span>
                    <svg className='select__arrow' style={{ transform: `rotate(${isOpen ? 0 : "90deg"})` }} width="13" height="7" viewBox="0 0 13 7" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 7L12.9952 0.25H0.00480938L6.5 7Z" fill={styles.palette.accent} />
                    </svg>
                </div>
                <ul className='select__dropdown' style={{ visibility: (isOpen ? 'visible' : 'hidden') }}>
                    {
                        options.map((option, index) => (
                            <li
                                style={{
                                    opacity: (isOpen ? '1' : '0'),
                                    transition: (isOpen ? `opacity 0.4s ease-in ${(index) * 0.1}s` : 'none'),
                                    animation: (isOpen ? `0.4s ease-in ${index * 0.1}s translateX` : "none"),
                                    backgroundColor: styles.palette.accent,
                                    color: styles.palette.paper
                                }}
                                key={index}
                                onClick={() => { handleOptionClick(option.value, option.name) }}
                                className='select__option'>
                                {option.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )}
    </StyleContext.Consumer>
)
}
