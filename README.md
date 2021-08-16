# utils
## function watermark
- 指定字符串水印
- 简单的防止去掉功能，君子型防范(容器样式更改，class变动，删除容器节点都会重新渲染)

### 使用方法
```js
import { FWatermark } from "../dist/fastutils.es.js";

FWatermark({
        content: 'fastui.dev',
    })
```

### 支持参数
```js
{
    container = document.body, //容器
    width = '400px',
    height = '300px',
    font = '14px microsoft yahei',
    fillStyle = '#ddd', //水印颜色
    content = '请勿外传',
    rotate = -30,
    zIndex = 3,
    render = true //是否生效
}

```
