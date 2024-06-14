import Slideshow from "../../ui/components/slideshow/Slideshow";
import Logo from '../../ui/imgs/logo.png';
import 'swiper/swiper-bundle.css';

const Home: React.FC = ()=> {

    const items = Array.from( {length: 10}, (_,index)=> ({
        id: index + 1,
        content: `Item ${index + 1}`,
    }));

    return (
        <main className="flex flex-col flex-nowrap gap-20">
            <section>
                <Slideshow />
            </section>
            
            <section className=" bg-white">
                <h2 className="p-6 text-3xl">Mais relevantes</h2>

                <swiper-container
                    slides-per-view="4"
                    navigation="true"
                    pagination="true"
                    space-between="10"
                    slides-per-group= "4"
                >

                    {items.map((_, index)=> (
                        <swiper-slide key={index}>
                            <div className="p-4">
                                <img src={Logo}/>

                                <div>
                                    <span>Freete Grates</span>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione sapiente assumenda illo, voluptatibus, sequi ab debitis reprehenderit reiciendis dicta officia harum autem aspernatur excepturi molestias facilis eius, ad eligendi maxime.</p>

                                    <span>R$ 200,99</span>
                                </div>

                            </div>
                        </swiper-slide>
                    ))}
                </swiper-container>
             
            </section>

            <section className="p-6 bg-white">

                <p>Alguma informação que leve para About.</p>

            </section>

            <section className="p-6 bg-white">

                <p>Alguma informação que leve para Products.</p>

            </section>
        </main>
    )
}
export default Home;