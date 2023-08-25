import { useEffect, useRef,memo } from 'react'
import * as echarts from 'echarts'
import './index.less'
import Empty from '../Empty'
const Charts = ({ options, empty = false }) => {
    const echartsRef = useRef(null)
    const myChart = useRef()
    const echartsResize = () => {
        echartsRef && myChart?.current?.resize()
    }

    useEffect(() => {
        if (echartsRef?.current) {
            myChart.current = echarts.init(echartsRef.current)
        }
        options && myChart?.current?.setOption(options)
        window.addEventListener('resize', echartsResize, false)
        return () => {
            window.removeEventListener('resize', echartsResize)
            myChart?.current?.dispose()
        }
    }, [options])

    return <>{empty ? <Empty /> : <div ref={echartsRef} className="w-full h-full" ></div>}</>
}

export default memo(Charts)
