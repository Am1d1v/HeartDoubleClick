

const love = document.querySelector('.loveMe');
const times = document.querySelector('#times');

// Like the image
love.addEventListener('dblclick', (e) => {
    createHeart(e);

    
})

// Create Heart
const createHeart = (e) => {
   const heart = document.createElement('i');
   heart.classList.add('fas')
   heart.classList.add('fa-heart');

   // Client Coordinates
   const x = e.clientX;
   const y = e.clientY;
   //console.log((`X:${x} Y:${y}`));

   // Heart Offsets
   const leftOffset = e.target.offsetLeft;
   const topOffset = e.target.offsetTop;
   //console.log(leftOffset, topOffset);

   // Difference between offsets and client coords.
   const innerX = x - leftOffset;
   const innerY = y - topOffset;
   console.log(innerX, innerY);

   // Heart Style
   heart.style.top = `${innerY}px`;
   heart.style.left = `${innerX}px`;

   love.append(heart);

}