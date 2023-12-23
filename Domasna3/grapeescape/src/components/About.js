import React, {useEffect} from "react";
import { Slide } from 'react-slideshow-image';
import '../stylesheet/About.css'
import 'react-slideshow-image/dist/styles.css'
function About(){
    const images = [
        "https://img.delicious.com.au/AlCusyLC/del/2023/01/summer-181923-3.jpg",
        "https://winecountrytable.com/wp-content/uploads/2017/06/2017-6-5-Hawkes-Alexander-Valley-Sonoma-Wineries-Cheese-Pairing-Wine-Tasting-BLOG-SIZE-2584-1600x950.jpg",
        "https://www.visitvictoria.com/-/media/images/yarra-valley-and-dandenong-ranges/food-and-wine/wineries/bulong-estate-winery_yvdr_r_1348226_1150x863.jpg?ts=20151009081149"
    ];
    useEffect(() => {
        // Set the ID to the body tag
        document.body.className = "wave-container";

    }, []);
    return(
        <div id='c'>
        <div className="about-container">
            <div>
                <Slide id="slide-container">
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                        </div>
                    </div>
                </Slide>
            </div>
            <div className='about-text'>
                <h1 id="about-title">About</h1>
                <p className="about-p">Welcome to Grape Escape, your ultimate guide to exploring the rich winemaking culture of Macedonia! Our app is meticulously crafted to offer you an immersive experience through the picturesque landscapes and exquisite wines this beautiful region has to offer.</p>
                <h3 className="about-subtitle">Explore Vineyards and Wineries</h3>
                <p className="about-p">
                    Indulge in the artistry of winemaking as you explore our interactive map, guiding you to charming vineyards and world-class wineries. Uncover
                    hidden gems and renowned estates, each offering a unique taste of Macedonia's winemaking traditions.
                </p>
                <h3 className="about-subtitle">Expert Recommendations and Reviews</h3>
                <p className='about-p'>
                    Discover insider tips and expert recommendations to make the most of your winery visits. Read reviews,
                    learn about wine varieties, and uncover the distinct characteristics that define Macedonian wines.
                </p>
                <h3 className="about-subtitle">Experience the Essence of Macedonian Wine</h3>
                <p>
                    Grape Escape is your passport to an unforgettable journey through
                    Macedonia's wine regions. Whether you're a wine enthusiast, a curious traveler, or a seasoned connoisseur, let our app be your guide to savoring the essence of Macedonian wine.
                </p>

            </div>
        </div>
        </div>
    );
}
export default About;