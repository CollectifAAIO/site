window.onscroll = () => {
  const nav = document.querySelector('#menu-top');
  if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scrolled';
};