
const sr = ScrollReveal ({
    distance: '90px' , 
    duration: 2400,
    reset: true
});


sr.reveal('.about-head', {delay:210, origin: "top"});
sr.reveal('.earth', {delay:210, origin:"bottom"});
sr.reveal('.main-img', {delay:210, origin: "left"});
sr.reveal('.main-text h1', {delay:310, origin: "top"});
sr.reveal('.main-text h4', {delay:310, origin: "left"});
sr.reveal('.social', {delay:210, origin: "bottom"});
sr.reveal('.row', {delay:510, origin: "left"});

sr.reveal('.work-head', {delay:210, origin: "top"});
sr.reveal('.gallery img', {delay:310, origin: "left"});

sr.reveal('.tooltip-container', {delay:410, origin: "left"});

sr.reveal('#skill-section h1', {delay:210, origin: "top"});
sr.reveal('.skills-area', {delay:210, origin: "left"});

sr.reveal('input[type=text], select, textarea', {delay:310, origin: "left"});
sr.reveal('input[type=submit]', {delay:310, origin: "left"});
sr.reveal('.cube-container', {delay:210, origin:"bottom"})
sr.reveal('#container h2', {delay:210, origin:"top"})

sr.reveal('.coffee-text', {delay:210, origin: "top"});
sr.reveal('.flip-card', {delay:310, origin: "left"});


// function submit() {
    // $.ajax({
      // url: "https://script.google.com/macros/s/AKfycbw5RplaPIGxoEH4M3kWVfBObC6V44wsuuOPMtxB-S28SMbEn0AX1tCSzrAh07vt9VJy/exec",
      // data: $("#submit-form").serialize(),
      // method: "POST",
      // success: function (response) {
        // alert("Form submitted successfully");
        // window.location.reload();
        // return true
        // window.location.reload();

      // },
      // error: function (err) {
        // alert("Something Error");
        // return false
      // },
    // }); 
  // }

  function submitForm() {
    var form = document.getElementById("submit-form");

    form.action = "https://script.google.com/macros/s/AKfycbxdffKjVLgvcznz-Vg2AUcUfqP0Zj8INR4DGCpjwHnek0lairFEUQNpqx3V1Szf4YIU4w/exec";

    form.method = "post";

    let formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        alert("Form submitted successfully!");
        window.location.reload();
        return response.text();
    })
    .catch(error => {
        alert("Error: " + error.message);
    });

    return false;
}

const express = require('express');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');
const redis = require('redis');

const app = express();
const port = process.env.PORT || 3000;

// Create a Redis client
const redisClient = redis.createClient();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Rate limiting middleware
const limiter = rateLimit({
  store: new RedisStore({ client: redisClient }),
  windowMs: 60 * 1000, // 1 minute
  max: 5, // Allow 5 requests per minute
  message: 'Too many requests from this IP, please try again later.',
});
app.use('/submit-form', limiter);

// Handle form submission
app.post('/submit-form', (req, res) => {
  // Your existing code for form submission goes here
  // ...

  res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});