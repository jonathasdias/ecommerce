import Banner_1 from '../../ui/imgs/banners/banner-1.png';
import Banner_2 from '../../ui/imgs/banners/banner-2.png';
import Banner_3 from '../../ui/imgs/banners/banner-3.png';
import Banner_4 from '../../ui/imgs/banners/banner-4.png';
import Banner_5 from '../../ui/imgs/banners/banner-5.png';
import Banner_6 from '../../ui/imgs/banners/banner-6.png';
import Banner_7 from '../../ui/imgs/banners/banner-7.png';

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
            <swiper-slide><img className='' src={Banner_1}/></swiper-slide>
            <swiper-slide><img className='' src={Banner_2}/></swiper-slide>
            <swiper-slide><img className='' src={Banner_3}/></swiper-slide>
            <swiper-slide><img className='' src={Banner_4}/></swiper-slide>
            <swiper-slide><img className='' src={Banner_5}/></swiper-slide>
            <swiper-slide><img className='' src={Banner_6}/></swiper-slide>
            <swiper-slide><img className='' src={Banner_7}/></swiper-slide>
        </swiper-container>
    )
}
export default Slideshow;