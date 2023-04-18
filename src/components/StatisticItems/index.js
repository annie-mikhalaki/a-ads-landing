import React, { useState, useEffect } from 'react'
import Typography from '../Typography'
import { statisticItemsToRender } from '../../entities'
import classes from './statisticItems.module.css'

const StatisticItems = () => {
    const [statisticData, setStatisticData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://www.blockchain.com/ticker')
            .then(response => response.json())
            .then(result => {
                setStatisticData(result)
                setIsLoading(false)
            })

    }, [])

    return (
        <div className={classes.statisticItems}>
        {isLoading && 
            <Typography Element="h4" color="text">Loading...</Typography>
        }
        {!isLoading && Object.keys(statisticData).length > 0 &&
            statisticItemsToRender.map(item =>
                <div key={item.name} className={classes.statisticItem}>
                    <Typography Element="h3" color="secondary">{statisticData[item.name]?.last}</Typography>
                    <Typography color="text">{item.text}</Typography>
                </div>
            )
        }
        </div>
    )
}

export default StatisticItems