import Slider_1 from '../../imgs/slider-1.png';
import Slider_2 from '../../imgs/slider-2.png';

const Slideshow:React.FC = () => {

    interface ObjTypes {
        slidesPerView: number,
        navigation: boolean,
        pagination: boolean,
        loop: boolean,
        autoplay: boolean,
    }

    const obj:ObjTypes = {
        slidesPerView: 1,
        navigation: true,
        pagination: true,
        loop: true,
        autoplay: true,
    }
    
    return (
        <swiper-container {...obj}
            // slides-per-view="1"
            // navigation="true"
            // pagination="true"
            // loop="true"
            // autoplay="true"
            // slides-per-group= "4"
        >
            <swiper-slide><img src={Slider_1}/></swiper-slide>
            <swiper-slide><img src={Slider_2}/></swiper-slide>
        </swiper-container>
    )
}
export default Slideshow;