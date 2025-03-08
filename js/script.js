/* CSS Reset */
body, h1, h2, h3, p, ul, li, form, input, textarea, button, img {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}

/* General Styles */
:root {
  --primary-color: #007bff;
  --secondary-color: #28a745;
  --text-color: #fff;  /* Changed text color to white for better contrast */
  --background-color: #f8f9fa;
  --font-family: sans-serif;
}

body {
  font-family: var(--font-family);
  background-color: var(--background-color);
  color: var(--text-color);
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--secondary-color);
  text-decoration: underline;
}

.button {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 12px 24px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: var(--secondary-color);
  text-decoration: none;
}

/* Header */
header {
  background-color: rgba(255, 255, 255, 0.9); /*  Slightly transparent header */
  padding: 20px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .logo {
  font-size: 1.5em;
  font-weight: bold;
}

header .logo img {
  height: 50px;
  vertical-align: middle;
  margin-right: 10px;
}

header nav ul {
  list-style: none;
  display: flex;
}

header nav ul li {
  margin-left: 20px;
}

/* Hero Section */
#hero {
    background-image: url('images/hero-image.jpg');  /* Set the background image */
    background-size: cover;  /* Cover the entire section */
    background-position: center;
    background-repeat: no-repeat;
    padding: 200px 0; /* Adjust padding as needed */
    text-align: center;
    color: var(--text-color); /* Set text color to white or a light color */
    position: relative;
    overflow: hidden;  /*  Important to hide the scaling overflow */
    animation: zoomIn 15s linear infinite; /* Zoom animation */
}

#hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);  /* Dark overlay for better text readability */
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;  /*  Ensure the text is above the overlay */
}

#hero h1 {
  font-size: 3em;
  margin-bottom: 20px;
}

@keyframes zoomIn {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2); /*  Adjust the zoom level */
    }
    100% {
        transform: scale(1);
    }
}

/* What We Do Section */
#what-we-do {
    padding: 60px 0;
    background-color: #f0f0f0;
    text-align: center;
}

#what-we-do h2 {
    margin-bottom: 20px;
}

#what-we-do h3 {
    margin-bottom: 10px;
}

/* Work Process Section */
#work-process {
    padding: 60px 0;
}

#work-process h2 {
    text-align: center;
    margin-bottom: 40px;
}

.work-process-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.work-process-item {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.work-process-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.work-process-item i {
    margin-bottom: 15px;
    color: var(--primary-color);
}


/* Services Section */
#services {
  padding: 60px 0;
}

#services h2 {
  text-align: center;
  margin-bottom: 40px;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.service-item {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.service-item i {
  margin-bottom: 15px;
  color: var(--primary-color);
}

/* About Section */
#about {
  padding: 60px 0;
  background-color: #f0f0f0;
}

#about h2 {
  text-align: center;
  margin-bottom: 20px;
}

#about img {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Case Studies Section */
#case-studies {
    padding: 60px 0;
}

#case-studies h2 {
    text-align: center;
    margin-bottom: 40px;
}

.case-study-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 30px;
}

.case-study-item {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.case-study-item img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 15px;
}

/* Testimonials Section */
#testimonials {
    padding: 60px 0;
    background-color: #f0f0f0;
}

#testimonials h2 {
    text-align: center;
    margin-bottom: 40px;
}

.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 30px;
}

.testimonial-item {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.testimonial-author {
    font-style: italic;
    margin-top: 10px;
    color: #777;
}

/* Contact Section */
#contact {
    padding: 60px 0;
}

#contact h2 {
  text-align: center;
  margin-bottom: 30px;
}

#contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: var(--font-family);
}

/* Footer */
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px 0;
}

.footer-nav ul {
    list-style: none;
    padding: 0;
    margin-bottom: 10px;
    text-align: center;
}

.footer-nav ul li {
    display: inline;
    margin: 0 10px;
}

.footer-nav ul li a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-nav ul li a:hover {
    color: var(--primary-color);
}

/* Media Queries (Responsive Design) */
@media (max-width: 768px) {
  header .container {
    flex-direction: column;
    align-items: flex-start;
  }

  header nav ul {
    margin-top: 10px;
    flex-direction: column;
  }

  header nav ul li {
    margin-left: 0;
    margin-bottom: 10px;
  }

  #hero h1 {
    font-size: 2.5em;
  }

  .work-process-grid {
    grid-template-columns: 1fr;  /* Stack items on smaller screens */
  }

    .case-study-grid,
    .testimonial-grid {
        grid-template-columns: 1fr; /* Stack items */
    }
}
