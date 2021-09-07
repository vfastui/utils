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
### 测试页面
[文件链接](/tests/test_watermark.html)

## function pivot
- 后台返回json数据的行列转置
### example
```js
import { FPivot } from "../dist/fastutils.es.js";
let data = [
    {
        date: '2021-09-01',
        metric1: 1,
        metric2: 1000
    },
    {
        date: '2021-09-02',
        metric1: 2,
        metric2: 99
    },
    {
        date: '2021-09-03',
        metric1: 3,
        metric2: 199
    },
    {
        date: '2021-09-04',
        metric1: 4,
        metric2: 1008
    },
    {
        date: '2021-09-05',
        metric1: 5,
        metric2: 23
    }
]
console.log(FPivot(data, 'date'))
/*
[
    {
        '指标名称': 'metric1',
        '2021-09-01': 1,
        '2021-09-02': 2,
        '2021-09-03': 3,
        '2021-09-04': 4,
        '2021-09-05': 5
    },
    {
        '指标名称': 'metric2',
        '2021-09-01': 1000,
        '2021-09-02': 99,
        '2021-09-03': 199,
        '2021-09-04': 1008,
        '2021-09-05': 23
    }
]
*/

```
