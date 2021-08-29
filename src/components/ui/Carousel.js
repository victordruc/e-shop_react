import {useState, useEffect} from "react"

const Carousel = ({ imageUrls, runSlider }) => {
    const [leftPosition, setleftPosition] = useState(0)

    useEffect(()=>{
        const timer = setInterval(()=>{
            if(imageUrls.length===leftPosition/100+1) {
                setleftPosition(0)
            } else if (runSlider) {
                setleftPosition(leftPosition+100)
            }
        },2000)
        return ()=>{clearInterval(timer)}
    })

    const style = {
        root: {
            width: `${imageUrls.length*100}%`, 
            height:"100%", 
            display:"flex",
            position: "relative",
            transitionDuration: "1s"
        },
        sliderLine: {
            height:"100%",
            width:`${100/imageUrls.length}%`
        }
    }
  return (
    <div style={{...style.root, left:`-${leftPosition}%`}}>
      {imageUrls.map((url, index) => 
      <div style = {style.sliderLine}>
            <img src={url} style={{width: "100%", height:"100%"}} alt={index} />
      </div>
      )}
    </div>
  );
};

export default Carousel