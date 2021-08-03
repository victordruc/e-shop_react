import './Product.css'
let Product = ({product:{id,name,image}}) => {
 return(
     <li className="card">
         <h2>{name}</h2>
         <img src={image} alt={id}/>
     </li>
 )
}

export default Product