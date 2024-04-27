import hyderabadichicekbiryani from './Images/HyderabadiChickenBiryani.jpg'
import vegitablebiryani from './Images/vegitableBiryani.jpg'
import muttonbiryani from './Images/MuttonBiryani.jpg'
import config from './config';
const biryanis = [
    {
        name: "Hyderabadi Chicken Biryani",
        varients: ["full", "half"],
        prices: [
            {full: 300, half: 180}
        ],
        category: "non-veg",
        image: hyderabadichicekbiryani,
        description: "Aromatic and flavorful chicken biryani from Hyderabad."
    },
    {
        name: "Vegetable Biryani",
        varients: ["full", "half"],
        prices: [
            {full: 250, half: 150}
        ],
        category: "veg",
        image: vegitablebiryani,
        description: "A delicious mix of vegetables and spices cooked with basmati rice."
    },
    {
        name: "Mutton Biryani",
        varients: ["full", "half"],
    prices: [
            {full: 350, half: 200}
        ],
        category: "non-veg",
        image: muttonbiryani,
        description: "A rich and aromatic mutton biryani from Lucknow."
    }
];

export default biryanis;
