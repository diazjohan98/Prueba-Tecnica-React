import logo from '../../assets/img/Logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BiMessageDetail } from 'react-icons/bi';
import { AiOutlineGift } from 'react-icons/ai';
import './navbarStyle.css'
import ImgApi from '../ImgApi/ImgApi';
import ImageComponent from '../ImgApi/ImgApi';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbarContainer">
                <GiHamburgerMenu className='iconoGiHamburguesa' />
                <img className='logoNavbar' src={logo} alt="Logo" />
                <div className='input-wrapper'>
                    <input type="text" placeholder='Search here' className='styleInput' />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="input-icon"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
                <AiOutlineSetting className='iconoSettings' />

                <div className='tresIconosNotifica'>
                    <IoIosNotificationsOutline className='iconoNotificaciones iconoCampana' />
                    <BiMessageDetail className='iconoNotificaciones iconoMensaje' />
                    <AiOutlineGift className='iconoNotificaciones1' />
                </div>
                <div className='perfilPhoto'>
                    <ImageComponent className='imgPerfil' />
                </div>
            </div>
        </div>
    )
}
export default Navbar
