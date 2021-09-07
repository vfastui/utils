/**
 * 行转列功能
 * @param data 需要转换的数据
 * @param dimension 在数据中需要转成列的字段名称
 * @param metricName 第一列列头名称，默认值：指标名称
 */
function FPivot(data: object[], dimension: string, metricName: string = '指标名称') {
    if (!Array.isArray(data)) return data

    if (data.length === 0) return []

    let columnNames: string[] = [metricName] // 第一个是 metricName
    data.forEach((obj: Record<string, any>) => {
        columnNames.push(obj[dimension])
    })

    let result: object[] = []
    let metrics = Object.keys(data[0]).filter((v: string) => v !== dimension)
    // 一共多少条记录
    metrics.forEach((metric) => {
        let ret: Record<string, any> = {}
        ret[metricName] = metric
        columnNames.forEach((column) => {
            data.forEach((obj: Record<string, any>) => {
                if (column === obj[dimension]) {
                    ret[column] = obj[metric]
                }
            })
        })
        result.push(ret)
    })
    return result
}

export default FPivot
