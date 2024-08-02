import React, { useEffect } from 'react';
import './home.css';
import video from '../../../Assets/Video1.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiZalo } from 'react-icons/si';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    //lets create a react hook to add a scroll animation....

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        Du lịch Huế
                    </span>
                    <h1 data-aos="fade-up" className="homeTitle">
                        Tra cứu nhanh - Du lịch gọn
                    </h1>
                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Ní muốn đi đâu:</label>
                        <div className="input flex">
                            <input type="text" placeholder="Nhập địa điểm..." id="city" />
                            <GrLocation className="icon" />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Chọn ngày đi ní:</label>
                        <div className="input flex">
                            <input type="date" id="date" />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Tầm giá:</label>
                            <h3 className="total">10.000.000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="10000000" min="0" id="price" />
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <HiFilter className="icon" />
                        <span>MORE FILTERS</span>
                    </div>
                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <a href="https://www.facebook.com/">
                            <FiFacebook className="icon" />
                        </a>
                        <AiOutlineInstagram className="icon" />
                        <SiZalo className="icon" />
                    </div>

                    <div className="leftIcons">
                        <BsListTask className="icon" />
                        <TbApps className="icon" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
