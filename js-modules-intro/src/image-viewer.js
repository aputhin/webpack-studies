import big from '../assets/big.jpg';
import small from '../assets/small.jpg';

import '../styles/image-viewer.css';

export default = () => {
    const imageSm = document.createElement('img');
    imageSm.src = small;
    document.body.appendChild(imageSm);

    const imageBg = document.createElement('img');
    imageBg.src = big;
    document.body.appendChild(imageBg);
};
