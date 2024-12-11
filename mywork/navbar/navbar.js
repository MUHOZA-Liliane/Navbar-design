
  
  document.addEventListener('DOMContentLoaded',()=>{
const headerElement=document.querySelector('header');
    headerElement.innerHTML=`
    <nav>
        <img src="navbarlogo.jpg" alt="">
        <ul>
            <li><a id="home" href="home.html">home<a></li>
            <li><a id="company" href="company.html">company<a></li>
            <li><a id="about" href="about.html">about<a></li>
            <li><a id="contact" href="contact.html">contact<a></li>
        </ul>
    </nav>

 `
  })
  const campanyLink = document.getElementById('company');
  const homeLink = document.getElementById('home');
  const aboutLink = document.getElementById('about');
  const contactLink = document.getElementById('contact');
  
  


