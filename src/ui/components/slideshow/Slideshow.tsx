import Slider_1 from '../../imgs/slider-1.png';
import Slider_2 from '../../imgs/slider-2.png';

const Slideshow:React.FC = () => {
    return (
        <swiper-container
            slides-per-view="1"
            navigation="true"
            pagination="true"
            pagination-clickable="true"
            loop="true"
            autoplay="true"
        >
            <swiper-slide><img src={Slider_1}/></swiper-slide>
            <swiper-slide><img src={Slider_2}/></swiper-slide>
        </swiper-container>
    )
}
export default Slideshow;