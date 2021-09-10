import { useState } from 'react'
import { PaletteTable } from './PaletteTable';
export default function Demos(props) {

    const { background, paperColor, primaryColor, accentColor, tabs, updatePalette } = props;
    const [activeDemo, setActiveDemo] = useState('');

    const DemoDreamlact = () => {
        return (
            <iframe id='dreamlact-frame' className='demos__frame' src="https://dreamlact.devsides.ru"></iframe>
        )
    }

    const DemoTable = () => {
        return (
            <PaletteTable {...{ background, paperColor, primaryColor, accentColor, updatePalette }} />
        )
    }

    const demos = [
        {
          component: DemoDreamlact,
          name: 'Дримлакт'
        },
        {
          component: DemoTable,
          name: 'Таблица'
        }
      ]

    function makeTabs(tabArray, styles) {
        return (
            <>
                {tabArray.map((tabData, index) => (
                    <button
                        key={'button_' + index}
                        className={styles.button}
                        style={{ color: primaryColor }}
                        onClick={() => { setActiveDemo(demos[index].component); }}>
                        {tabData.name}
                        <div
                            style={{ backgroundColor: accentColor }}
                            className={styles.indicator} />
                    </button>
                ))}
            </>
        )
    }

    return (
        <div className="Demos" style={{ backgroundColor: paperColor }}>
            <h2 style={{ color: primaryColor }} className='demos__title'>Демо</h2>
            <div>
                {makeTabs(demos, tabs)}
            </div>
            {activeDemo}
        </div>
    )
}
