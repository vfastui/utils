/*type option = {
    container?: HTMLElement
    width?: string,
    height?: string,
    font?: string,
    fillStyle?: string,
    content?: string,
    rotate?: number,
    zIndex?: number,
    render?: boolean
}*/

function FWatermark({
    container = document.body,
    width = '400px',
    height = '300px',
    font = '14px microsoft yahei',
    fillStyle = '#ddd',
    content = '请勿外传',
    rotate = -30,
    zIndex = 3,
    render = true
} = {}) {
    let canvas: HTMLCanvasElement = document.createElement('canvas')
    canvas.setAttribute('width', width)
    canvas.setAttribute('height', height)
    let ctx: CanvasRenderingContext2D = canvas.getContext('2d')!
    ctx.font = font
    ctx.fillStyle = fillStyle
    ctx.translate(parseFloat(width) / 2, parseFloat(height) / 2)
    ctx.rotate((Math.PI / 180) * rotate)
    ctx.fillText(content, 0, 0)
    if (render) {
        let base64Url = canvas.toDataURL()
        let watermarkDom = document.querySelector('#ffwatermark')
        if (watermarkDom) watermarkDom.parentElement?.removeChild(watermarkDom)
        const watermarkMask = document.createElement('div')
        watermarkMask.id = 'ffwatermark'
        let divStyle = `
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            z-index:${zIndex};
            pointer-events:none;
            background-repeat:repeat;
            background-image:url('${base64Url}')`
        watermarkMask.setAttribute('style', divStyle)
        container.style.position = 'relative'
        container.insertBefore(watermarkMask, container.firstChild)
        // prevent dom change to renew watermark
        const MutationObserver = window.MutationObserver
        if (MutationObserver) {
            let mo = new MutationObserver(() => {
                const watermarkDom: HTMLElement = document.querySelector('#ffwatermark')!
                // 1. style change  2. no dom  3. add a class use !import
                if (
                    (watermarkDom && watermarkDom.getAttribute('style') !== divStyle) ||
                    !watermarkDom ||
                    (watermarkDom && watermarkDom.className !== '')
                ) {
                    if (watermarkDom) watermarkDom.parentElement?.removeChild(watermarkDom)
                    mo.disconnect()
                    FWatermark(arguments[0])
                }
            })
            const config = {
                attributes: true,
                childList: true,
                subtree: true
            }
            mo.observe(container, config)
        }
    }
}

export default FWatermark
