import { useState } from 'react'
import { PaletteTable } from './PaletteTable';
import PickerPicker from './PickerPicker';
import StyleContext from './StyleContext';
import Select from './Select';

import './Demos.css'
import Quotewizard from './Quotewizard';
import RussianTravel from './RussianTravel';
import Vinyls from './Vinyls';
import NewsExplorer from './NewsExplorer';
import Portfolio from './Portfolio';
import Dreamlact from './Dreamlact';
import ThreeDee from './Threedee';

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
        },
        {
            name: 'Портфолио',
            value: 'portfolio'
        },
        {
            name: 'Дримлакт',
            value: 'dreamlact'
        },
        {
            name: '3D модель',
            value: 'threedee'
        }
    ]

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
                                return <Quotewizard />;
                            case "russia-travel":
                                return <RussianTravel />;
                            case "vinyls":
                                return <Vinyls />;
                            case "news-explorer":
                                return <NewsExplorer />;
                            case "portfolio":
                                return <Portfolio />;
                            case "dreamlact":
                                return <Dreamlact />;
                            case "threedee":
                                return <ThreeDee />;
                            default: return <></>
                        }
                    })()
                    }
                    <span className='smalltext'>© 2021 Daniil Lomovitsky</span>
                </div>
            )}
        </StyleContext.Consumer>
    )
}
