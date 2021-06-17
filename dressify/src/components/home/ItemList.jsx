import React from 'react'
import "../../assets/css/ItemList.css"
export const ItemList = () => {
    return (
        <div className="container b-widget--background">
       <div className="items-title" data-aos="zoom-out">New arrivals</div>
        <div className="row">
           <div className="col-md-3 col-sm-6" data-aos="fade-up">
            <a href="/items"><img className="b-owl_carousel-image" src="https://www.dolcegabbana.com/dw/image/v2/AAGA_PRD/on/demandware.static/-/Sites-15/default/dw0550da6c/images/zoom/BM1834AO309_8B963_0.jpg?sw=1200&sh=1528&sm=fit"/></a>
            </div>
            <div className="col-md-3 col-sm-6" data-aos="fade-up">
            <a href="/items"><img className="b-owl_carousel-image" src="https://www.dolcegabbana.com/dw/image/v2/AAGA_PRD/on/demandware.static/-/Sites-15/default/dw1cab4768/images/zoom/FS209AG3SD0_HV3BB_0.JPG?sw=1200&sh=1528&sm=fit"/></a>
            </div>
            <div className="col-md-3 col-sm-6" data-aos="fade-up">
            <a href="/items"><img className="b-owl_carousel-image" src="https://www.dolcegabbana.com/dw/image/v2/AAGA_PRD/on/demandware.static/-/Sites-15/default/dwd20c6473/images/zoom/BB6891AO041_8B031_0.jpg?sw=640&sh=816&sm=fit"/></a>
            </div>
            <div className="col-md-3 col-sm-6" data-aos="fade-up">
            <a href="/items"><img className="b-owl_carousel-image" src="https://www.dolcegabbana.com/dw/image/v2/AAGA_PRD/on/demandware.static/-/Sites-15/default/dwfbd97a58/images/zoom/BB6002A1095_80002_0.jpg?sw=640&sh=816&sm=fit"/></a> 
            </div>
            
            
            </div>
        </div>
    )
}