enum BlendMode {
    Normal = 'source-over',
    Multiply = 'multiply',
    Screen = 'screen',
    Overlay = 'overlay',
    Darken = 'darken',
    Lighten = 'lighten',
    ColorDodge = 'color-dodge',
    ColorBurn = 'color-burn',
    Difference = 'difference',
    Exclusion = 'exclusion',
    Hue = 'hue',
    Saturation = 'saturation',
    Color = 'color',
    Luminosity = 'luminosity'
}

function setBlendMode(context: CanvasRenderingContext2D, mode: BlendMode) {
    context.globalCompositeOperation = mode;
}

// Example usage:
const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const context = canvas.getContext('2d');

if (context) {
    setBlendMode(context, BlendMode.Multiply);
    // Now any drawing on this context will use the multiply blend mode
}
