import './Product.css'
import Images from '../ui/Images'

const Product = ({product:{name,imageUrl}, element:{element:Element, className}={element:"div"}}) => {
 return(
     <Element className={className}>
         <h2>{name}</h2>
         {/* HW1: key necesary?
            Nu avem nevoie de key in cazul dat deoarece componente <Images/> nu se modifica in interiorul componentei date, chiar daca <Product\> va fi apelata in cadrul unui Array componenta <Images/> va fi unica in cadrul fiecarui element.
         */}
         <Images url={imageUrl} alt={name}/>
     </Element>
 )
}

export default Product