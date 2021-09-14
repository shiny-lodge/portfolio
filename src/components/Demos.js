import { useState } from 'react'
import { PaletteTable } from './PaletteTable';
import PickerPicker from './PickerPicker';
import StyleContext from './StyleContext';
import Select from './Select';

import './Demos.css'

export default function AltDemos(props) {

    const { updatePalette } = props;
    const [activeDemo, setActiveDemo] = useState("palette-table");

    const options = [
        {
            name: 'Таблица цветовых схем',
            value: 'palette-table'
        },
        {
            name: 'Настройка цветовой схемы',
            value: 'color-picker'
        },
        {
            name: 'Карточки с цитатами',
            value: 'quotes'
        },
        {
            name: 'Путешествие по России',
            value: 'russia-travel'
        },
        {
            name: 'Винилы',
            value: 'vinyls'
        },
        {
            name: 'Новостной поисковик',
            value: 'news-explorer'
        }
    ]

    function handleClick(e) {
        setActiveDemo(e.target.value);
    }

    return (
        <StyleContext.Consumer>
            {(styles) => (
                <div className="Demos" style={{ backgroundColor: styles.palette.paper }}>
                    <div className="demos__header">
                        <h2 style={{ color: styles.palette.primary }} className="demos__title">Демо</h2>
                        <Select placeholder={"Таблица цветовых схем"} options={options} callback={setActiveDemo}></Select>
                    </div>
                    {(() => {
                        switch (activeDemo) {
                            case "palette-table":
                                return <PaletteTable updatePalette={updatePalette} palette={styles.palette} />;
                            case "color-picker":
                                return <PickerPicker updatePalette={updatePalette} />;
                            case "quotes": 
                                return <iframe className='demos__frame' src='https://shiny-lodge.github.io/quotewizard/' />;
                            case "russia-travel":
                                return <iframe className='demos__frame' src='https://shiny-lodge.github.io/russian-travel/' />;
                            case "vinyls":
                                return <iframe className='demos__frame' src='https://codepen.io/shiny-lodge/full/eYRvvML' />;
                            case "news-explorer":
                                return <iframe className='demos__frame' src='https://lomovitsky.ru' />;
                            default: return <></>
                        }
                    })()
                    }
                </div>
            )}
        </StyleContext.Consumer>
    )
}
