import { useState } from 'react'
import { PaletteTable } from './PaletteTable';
import PickerPicker from './PickerPicker';
import StyleContext from './StyleContext';

import './Demos.css'

export default function AltDemos(props) {

    const { updatePalette } = props;
    const [activeDemo, setActiveDemo] = useState("palette-table");

    function handleClick(e) {
        setActiveDemo(e.target.value);
    }

    return (
        <StyleContext.Consumer>
            {(styles) => (
                <div className="Demos" style={{ backgroundColor: styles.palette.paper }}>
                        <select className='demos__select' onChange={(e) => { handleClick(e) }}>
                            <option className='demos__select-option' value='palette-table'>Таблица цветовых схем</option>
                            <option className='demos__select-option' value='color-picker'>Настройка цветовой схемы</option>
                        </select>
                    {
                        activeDemo === "palette-table" ?
                            <PaletteTable updatePalette={updatePalette} palette={styles.palette} />
                            :
                            activeDemo === "color-picker" ?
                                <PickerPicker updatePalette={updatePalette} />
                                :
                                ""
                    }
                </div>
            )}
        </StyleContext.Consumer>
    )
}
