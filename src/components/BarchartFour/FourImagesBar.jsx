import React from 'react'
import imgProgress from '../../assets/img/progressBar.jpg'
import imgWave from '../../assets/img/waveChart.jpg'
import imgWaveLine from '../../assets/img/waveLineChart.jpg'
import imgPieChat from '../../assets/img/pieChart.jpg'
import './fourImagesStyle.css'

const FourImagesBar = () => {
    return (
        <div className='fourContainerImages'>
            <div class="grid-item">
                <img className='fourImagesChat' src={imgProgress} alt="" />
            </div>
            <div class="grid-item">
                <img className='fourImagesChat' src={imgWave} alt="" />
            </div>
            <div class="grid-item">
                <img className='fourImagesChat' src={imgWaveLine} alt="" />
            </div>
            <div class="grid-item">
                <img className='fourImagesChat' src={imgPieChat} alt="" />
            </div>
        </div>
    )
}

export default FourImagesBar
