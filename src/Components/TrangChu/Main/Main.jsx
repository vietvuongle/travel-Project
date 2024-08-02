import React, {useEffect} from 'react'
import './main.css'
import img from '../../../Assets/img(1).webp' 
import img2 from '../../../Assets/img(2).webp' 
import img3 from '../../../Assets/img(3).webp' 
import img4 from '../../../Assets/img(4).webp' 
import img5 from '../../../Assets/img(5).webp' 
import img6 from '../../../Assets/img(6).webp' 
import img7 from '../../../Assets/img(7).webp' 
import img8 from '../../../Assets/img(8).webp' 
import img9 from '../../../Assets/img(9).webp'
import img10 from '../../../Assets/img(10).webp'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Lăng Minh Mạng',
    location: 'Hương Thọ, Hương Trà',
    grade: 'Di tích lịch sử',
    fees: '700.000',
    description: 'Lăng Minh Mạng Huế gây ấn tượng với kiến trúc truyền thống cổ xưa, mang đậm bản sắc Nho Giáo. Đây là điểm đến hấp dẫn mà du khách không nên bỏ lỡ trong hành trình về thăm cố đô để chiêm ngưỡng nghệ thuật kiến trúc lăng tẩm và hiểu hơn về các giai đoạn lịch sử quan trọng của đất nước.'
  },
  
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Biển Thuận An',
    location: 'Thị trấn Thuận An',
    grade: 'Bãi biển',
    fees: '500.000',
    description: 'Là một trong những bãi biển đẹp nhất tại Huế, bãi biển Thuận An thu hút khách du lịch bởi vẻ hoang sơ với bờ cát trắng mịn trải dài và làn nước biển trong xanh. Đây là điểm đến lý tưởng cho du khách tận hưởng không gian mát lạnh, yên bình của biển cả.'
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Biển Cảnh Dương',
    location: 'Lộc Vĩnh, Phú Lộc',
    grade: 'Bãi biển',
    fees: '650.000',
    description: 'Biển Cảnh Dương đủ gần để hội tụ mọi dịch vụ du lịch biển sôi động và đủ xa để du khách đi trốn khỏi sự xô bồ, đông đúc của thành phố. Du khách đến đây ngoài tắm biển, thưởng thức hải sản còn có cơ hội tham gia vô số trò vui chơi, giải trí thú vị hoặc cắm trại qua đêm bên bờ biển.'
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Cung An Định',
    location: 'Thành Phố Huế',
    grade: 'Di tích lịch sử',
    fees: '350.000',
    description: 'Một trong những cung điện của triều Nguyễn với kiến trúc độc đáo, kết hợp giữa phong cách Việt và Pháp.'
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Biển Lăng Cô',
    location: 'Thị trấn Lăng Cô',
    grade: 'Bãi biển',
    fees: '700.000',
    description: 'Bãi biển hoang sơ với cát trắng mịn và nước biển trong xanh, lý tưởng cho nghỉ dưỡng..'
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Đại Nội Huế',
    location: 'Đường 23/08 Thành Phố Huế',
    grade: 'Di tích lịch sử',
    fees: '500.000',
    description: 'Khu di tích lịch sử lớn nhất của triều Nguyễn, bao gồm các cung điện, đền thờ và các công trình khác.'
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'Chùa Thiên Mụ',
    location: 'Hương Long, Thành Phố Huế',
    grade: 'Di tích văn hóa',
    fees: '400.000',
    description: 'Ngôi chùa nổi tiếng với tháp Phước Duyên, nằm bên bờ sông Hương, là biểu tượng của Huế.'
  },
  
  {
    id:8,
    imgSrc: img8,
    destTitle: 'Lăng Tự Đức',
    location: 'Xuân Thủy, Thành Phố Huế',
    grade: 'Di tích lịch sử',
    fees: '700.000',
    description: 'Lăng mộ của vua Tự Đức với kiến trúc thanh bình, hòa quyện cùng thiên nhiên.'
  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Suối Khe Su',
    location: 'Lộc Hòa, Phú lộc',
    grade: 'Du lịch',
    fees: '600.000',
    description: ' Suối nước mát lạnh, nằm giữa rừng cây xanh mướt, điểm đến lý tưởng để thư giãn.'
  },

  {
    id:10,
    imgSrc: img10,
    destTitle: 'Thác Nhị Hồ',
    location: 'Lộc Trì, Phú lộc',
    grade: 'Du lịch',
    fees: '550.000',
    description: ' Thác nước hai tầng đẹp mê hồn, với dòng nước trong vắt chảy giữa rừng núi.'
  },
]


const Main = () => {

  //lets create a react hook to add a scroll animation....

  useEffect(() =>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-right"className="title">
          Xem thêm địa điểm
        </h3>
      </div>

      <div className="secContent grid">
        {/*High ordfer array method(map)*/}

      {
  Data.map(({id, imgSrc, destTitle, location, grade,fees, description}) => {
          return(
            <div key={id} data-aos ="fade-up" className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt= {destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className='icon'/>
                  <span className="name">{location}</span>
                </span>
                <div className="fees flex">
                <span>{grade}</span>
                  <div className="grade">   
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>
                <button className='btn flex'> CHI TIẾT <HiOutlineClipboardCheck className="icon"/>
                </button>
              </div>              
            </div>
          )
        })
      }
        </div>
    </section>
  )
}

export default Main