function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.innerHTML = '❄';
  
  snowflake.style.left = Math.random() * 100 + 'vw';
  const animationDuration = 5 + Math.random() * 5;
  snowflake.style.animationDuration = animationDuration + 's';
  const size = 10 + Math.random() * 15;
  snowflake.style.fontSize = size + 'px';
  snowflake.style.opacity = 0.4 + Math.random() * 0.6;
  
  document.body.appendChild(snowflake);
  
  setTimeout(() => {
    snowflake.remove();
  }, animationDuration * 1000);
}

setInterval(createSnowflake, 100);