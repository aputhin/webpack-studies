const btn = document.createElement('button');
btn.innerText = 'Click it!';
button.onclick = () => {
    System.import('./image-viewer').then(module => {
         module.default();
    });
};

document.body.appendChild(btn);
