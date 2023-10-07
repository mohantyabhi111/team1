const http = require('http');
 
const hostname = '127.0.0.1';
const port = 2000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-16x16.png">
      <link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-32x32.png">
      <link rel="manifest" href="./favicon/site.webmanifest">
      <link rel="mask-icon" href="./favicon/safari-pinned-tab.svg" color="#5bbad5">
      <meta name="msapplication-TileColor" content="#da532c">
      <meta name="theme-color" content="#ffffff">
      <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
      <link rel="stylesheet" href="./styles.css">
      <title>Hackathon</title>
  </head>
  <body>
      <header class="header" id="header">
          <div class="h__border"></div>
              <nav class="nav container">
                  <a href="#" class="logo">
                      <img id="image" src="./logo.png" alt="logo">
                      Abhishek
                  </a>
                  <div class="menu">
                      <ul class="list">
                          <li class="item">
                              <a href="#home" class="link active-link">
                                  <i class="ri-home-smile-fill"></i>
                                  <span>Home</span>
                              </a>
                          </li>
  
                          <li class="item">
                              <a href="#about" class="link">
                                  <i class="ri-award-fill"></i>
                                  <span>About</span>
                              </a>
                          </li> 
                          <li class="item">
                              <a href="#services" class="link">
                                  <i class="ri-customer-service-line"></i>
                                  <span>Services</span>
                              </a>
                          </li>
  
                          <li class="item">
                              <a href="#testimonals" class="link">
                                  <i class="ri-questionnaire-fill"></i>
                                  <span>Testimonals</span>
                              </a>
                          </li>
                      </ul>
                  </div>
              </nav>
      </header>
      <main class="main">
          <section class="home section" id="home">
              <div class="home_container container grid">
                  <div class="home_data">
                      <h3 class="home_sub">JAI HIND</h3>
                      <h1 class="home_title">We present our <br> website.<img src="./car.png" alt="home image"></h1>
                      <p class="home_description">This is our website for our hackathon competition. This is the first time we are taking part in Atrang. </p>
                      <a href="#" class="button">
                          Let's go.<i class="ri-arrow-right-fill"></i>
                      </a>
                  </div>
                  <img src="./car2.png" alt="home image" class="home_img">
              </div>
          </section>
          <section class="about" id="about">
              <div class="about_bg section">
                  <div class="about_container container grid">
                      <div class="about_data">
                          <a href="#about" class="about_button">Scroll down<i class="ri-arrow-down-fill"></i></a>
                          <p class="about_description">This is just the layout of or website and nothing else. We will deploy it on github.</p>
                      </div>
                    
                      <div class="about_content">
                          <article class="about_card">
                              <img src="./image.jpg" alt="about image" class="about_img">
                              <h3 class="about_name">ABC</h3>
                              <span class="about_well">JAI SHRI RAM</span>
                          </article>
  
                          <article class="about_card">
                              <img src="./image1.jpg" alt="about image" class="about_img">
                              <h3 class="about_name">ABC</h3>
                              <span class="about_well">JAI SHRI RAM</span>
                          </article>
  
                          <article class="about_card">
                              <img src="./image2.jpg" alt="about image" class="about_img">
                              <h3 class="about_name">ABC</h3>
                              <span class="about_well">JAI SHRI RAM</span>
                          </article>
                      </div>
                  </div>
              </div>
          </section>
          <section class="services" id="services">
              <div class="services_bg section">
                  <div class="services_container container grid">
                      <div class="services_data">
                          <h2 class="section__title">
                              Hmara desh mahan
                          </h2>
                          <p class="services_description">
                              Abra ka dabra gilli gilli happa .
                              Billo bagge billiyan da ki garegi bagge
                              bagge billiyan da ki kregi billo bage billiyan da 
                              ki karegi.
                          </p>
                          <img src="./car.png" alt="services image" class="services_img">
                      </div>
                  </div>
              </div>
          </section>
          <section class="steps" id="steps">
              <div class="steps_bg section">
                  <h2 class="section__title">
                      How to study??
                  </h2>
                  <div class="steps_container container grid">
                      <img src="./stars.png" alt="steps image" class="steps_bg-img">
                      <div class="steps_content">
                          <img src="./steps-curve-line.svg" alt="steps image" class="steps_border">
                          <div class="steps_card">
                              <div class="steps_circle">
                                  <div class="steps_sub">
                                      1.
                                  </div>
                                  <img src="./car2.png" alt="steps image" class="steps_img">
                              </div>
                              <p class="steps_description">
                                  Khudh padh le.Khudh se padhle saale time waste matt kr.
                              </p>
                          </div>
  
                          <div class="steps_card steps_card-move">
                              <div class="steps_circle">
                                  <div class="steps_sub">
                                      2.
                                  </div>
                                  <img src="./car2.png" alt="steps image" class="steps_img">
                              </div>
                              <p class="steps_description">
                                  Youtube se padh le.Youtube se padh ke beda par hoga vats.
                              </p>
                          </div>
  
                          
                          <div class="steps_card">
                              <div class="steps_circle">
                                  <div class="steps_sub">
                                      3.
                                  </div>
                                  <img src="./car2.png" alt="steps image" class="steps_img">
                              </div>
                              <p class="steps_description">
                                  Padhayi chor de. Kuchh nhi hone wala zindagi mein sab moh maya hai abhi hi chor de sab.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section class="testimonals" id="testimonals">
              <div class="testimonals_bg section">
                  <div class="testimonals_container container grid">
                      <div class="testimonals_data">
                          <h2 class="section__title">
                              Testimonals of our website.
                          </h2>
                          <span class="testimonals_name">
                              RAVI KI JAI
                          </span>
                      </div>
                      <img src="./car.png" alt="testimonals image" class="testimonals_img">
                  </div>
              </div>
          </section>
      </main>
      
      <footer class="footer">
          <div class="footer_bg">
              <img src="./stars2.png" alt="footer image" class="footer_bg-img">
              <div class="footer_container container grid">
                  <div class="footer_data grid">
                      <div>
                          <a href="#" class="footer_logo">
                              <img src="./car2.png" alt="logo">
                              MSD07
                          </a>
                          <h3 class="footer_title">
                              Sign up for our website
                          </h3>
                      </div>
                      <form action="" class="footer_form grid">
                          <input type="email" placeholder="Enter the email" class="footer_input">
                          <button class="button footer_button" type="submit">
                              Sign up <i class="ri-arrow-right-double-line"></i>
                          </button>
                          <p class="footer_description">
                              We don't care about your data. Visit
                              <a href="#" class="footer_privacy">Policy for scam</a>
                          </p>
                      </form>
                  </div>
  
                  <div class="footer_content grid">
                      <div class="footer_social">
                          <a href="www.facebook.com" target="_blank" class="footer_social-link">
                              <i class="ri-facebook-fill"></i>
                          </a>
                          <a href="www.instagram.com" target="_blank" class="footer_social-link">
                              <i class="ri-instagram-fill"></i>
                          </a>
                          <a href="www.linkedin.com" target="_blank" class="footer_social-link">
                              <i class="ri-linkedin-fill"></i>
                          </a>
                      </div>
                      <span class="footer_copy">
                          @#jaldi wahan se hato. Copywrights
                      </span>
                  </div>
              </div>
          </div>
      </footer>
      <a href="#" class="scrollup" id="scroll-up">
          <i class="ri-arrow-up-line"></i>
      </a>
      <script src="./scrollreveal.min.js"></script>
      <script src="./main.js"></script>
  </body>
  </html>`);
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});