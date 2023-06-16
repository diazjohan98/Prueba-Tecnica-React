import React from 'react'
import './BestSellingStyle.css'
import { AiFillCaretDown } from 'react-icons/ai'
import pieBarchart from '../../assets/img/pieCharts.png'
import lineBarchart from '../../assets/img/lines.png'

const BestSellingPage = () => {
    return (
        <div className='containerBestSelling'>
            <div className='divisionDosContainerBest'>
                <div className='titlesPrincipalesBest'>
                    <p className='titleBestSelling'>
                        Best Selling
                    </p>
                    <p className='weekTitle'>
                        This Week <AiFillCaretDown className='iconoFillBest' />
                    </p>


                </div>
                <div className='TuesdayContainer'>
                    <p className='tuesday'>Tuesday</p>
                    <p className='tuesday'>215,523 pcsxs</p>
                </div>

                <div className='containerBarchar'>
                    <img src={pieBarchart} alt="" className='imgPie'/>
                    <img src={lineBarchart} alt="" className='imgLines'/>
                </div>
                
                {/* <div className='containerBarchar'>
                </div> */}

            </div>
        </div>
    )
}

export default BestSellingPage
