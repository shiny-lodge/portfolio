import { useEffect, useState } from 'react';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui'
import './ColorPicker.css'

export default function ColorPicker(props) {

    const { activeSelection, palette, updatePalette } = props;


    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    useEffect(() => {
        function hexFromRGB(r, g, b) {

            var hex = [
                r.toString(16),
                g.toString(16),
                b.toString(16)
            ];
            $.each(hex, function (nr, val) {
                if (val.length === 1) {
                    hex[nr] = "0" + val;
                }
            });
            return hex.join("").toUpperCase();
        }

        function refreshSwatch() {
            var red = $("#red").slider("value"),
                green = $("#green").slider("value"),
                blue = $("#blue").slider("value"),
                hex = hexFromRGB(red, green, blue);
            updatePalette({
                ...palette,
                [activeSelection]: `#${hex}`,
            });
            $("#swatch").css("background-color", "#" + hex);
            $("#colorName").text("#" + hex)
        }

        $("#red, #green, #blue").slider({
            orientation: "horizontal",
            range: "min",
            max: 255,
            value: 127,
            slide: refreshSwatch,
            change: refreshSwatch
        });
        $("#red").slider("value", hexToRgb(palette[activeSelection]).r);
        $("#green").slider("value", hexToRgb(palette[activeSelection]).g);
        $("#blue").slider("value", hexToRgb(palette[activeSelection]).b);
    }, [activeSelection])

    return (
        <div className='color-picker' style={{ border: "0" }}>
            <div className='color-picker__sliders'>
                <div id="red"></div>
                <div id="green"></div>
                <div id="blue"></div>
            </div>
            <div className='color-picker__info'>
                <div id="swatch" className="ui-widget-content ui-corner-all"></div>
                <div id="colorName" style={{ color: palette.primary }}></div>
            </div>
        </div>
    )
}