import FPivot from '../src/pivot'

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
