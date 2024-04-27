import biryani from './biryani.jpg'
import soups from './non-veg soups.jpg'
import nonvegcurrys from './non-veg currys.jpg'
import tiffins from './tiffins.jpg'
import vegcurrys from './vegcurrys.jpg'
import vegsoups from './vegsoups.jpg'
import shakes from './shakes.avif'
import cakes from './cakes.avif'
import vegsoupss from './vegsoups2.jpg'
import config from '../config';
const foodImages = [
  {
    type:'Tiffins',
    image:<img src={tiffins} className='img-fluid' alt="Pepperoni Pizza" style={{ height: "200px", width: "200px" }} />
  },
  {
    type:'biryani',
    
    image: <img src={biryani} className='img-fluid' alt="Pepperoni Pizza" style={{ height: "200px", width: "200px" }} />
  },
  
   
  {
    type:'pizzas',
    image:<img src="https://www.dominos.co.in/files/items/Veg_Extravaganz.jpg" className='img-fluid' alt="Pepperoni Pizza" style={{ height: "200px", width: "200px" }} />
  },

  {
    type:'Non-veg Soups',
    image:<img src={soups} className='img-fluid' alt="Pepperoni Pizza" style={{ height: "200px", width: "200px" }} />
  },
  {
    type:'Veg Soups',
    image:<img src={vegsoupss} className='img-fluid' alt="Pepperoni Pizza" style={{ height: "200px", width: "200px" }} />
  },
  {
    type:'Veg Currys',
    image:<img src={vegcurrys} className='img-fluid' alt="Pepperoni Pizza" style={{ height: "200px", width: "200px" }} />
  },
  {
    type:'Non-Veg Currys',
    image:<img src={nonvegcurrys} className='img-fluid' alt="Pepperoni Pizza" style={{ height: "200px", width: "200px" }} />
  },
  {
    type:'Shakes',
    image:<img src={shakes} className='img-fluid' alt="Shakes" style={{ height: "200px", width: "200px" }} />
  },
  {
    type:'cakes',
    image:<img src={cakes} className='img-fluid' alt="Shakes" style={{ height: "200px", width: "200px" }} />
  }
  // add more objects as needed
]
export default foodImages