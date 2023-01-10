import { Carousel } from 'react-responsive-carousel'
import './index.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Highlights = () => {
    // const ImgData = {
    //     img1: '/images/a.png',
    //     img2: '/images/b.png',
    //     img3: '/images/c.png',
    //     img4: '/images/d.png',
    // }

    const ImgData = [
        '/images/a.png',
        '/images/b.png',
        '/images/c.png',
        '/images/d.png'
    ]

    const ImgComp = ImgData.map((img) => (
        <div className='img-cont'>
            <img src={img} alt="img" />
        </div>
    ))

    return (
        <div className="highlights">
            <h1 className='title'>Highlights</h1>

            <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showIndicators={true} interval={3000} showArrows={true}    dynamicHeight = {false} swipeable={true} useKeyboardArrows = {true} className="main-slider">
                {ImgComp}
            </Carousel>
            
        </div>
    )
}

export default Highlights