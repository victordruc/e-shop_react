import './Product.css'
import Images from '../ui/Images'
import Money from '../ui/Money'
import React from 'react'


const Product = ({product:{name,imageUrls,price,description,attributes}}) => {
    const [slide,changeSlide] = React.useState(0)

    const carousel = imageUrls.map(url=>
        <div>
            <Images url={url} alt={name}/>
        </div>)

    function prevSlide() {
        slide>0?changeSlide(slide-1):changeSlide(imageUrls.length-1)
    }

    function nextSlide() {
        slide<imageUrls.length-1?changeSlide(slide+1):changeSlide(0)
    }

 return(
     <>
        <h2>{name}</h2>
        <div className="imageProduct">
         {/* {imageUrls.map((url,index)=>
            <div  key={index}>
                <Images url={url} alt={name}/>
            </div>
         )} */}
         {carousel[slide]}
         </div>
         <button onClick={prevSlide}>prev</button><button onClick={nextSlide}>next</button>

         <p>Description: {description}</p>

         <div className="information">
            Information:
          <ul>
            {attributes.map((atr,index)=>
                <li key={index}><span>{atr.name}:</span> <span>{atr.value}</span></li>
            )}
          </ul>
         </div>

         {price.discount?
         <div>
             <div>
                <Money price={{amount:price.standard.amount, value:price.standard.currency}} type="old">Old price: </Money>
             </div>
             <div>
                <Money price={{amount:price.discount.amount, value:price.discount.currency}} type="act">Actual price: </Money>
             </div>
         </div>:
            <div>
                <Money price={{amount:price.standard.amount, value:price.standard.currency}} type="std">Price: </Money>
            </div>
            }
     </>
 )
}

export default Product