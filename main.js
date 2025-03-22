import './style.css'
import { setupWorkoutBuilder } from './js/workoutBuilder.js'
import { setupWorkoutCategories } from './js/workoutCategories.js'
import { setupWorkoutPlans } from './js/workoutPlans.js'
import { setupWorkoutTimer } from './js/workoutTimer.js'

document.querySelector('#app').innerHTML = `
  <header>
    <div class="container">
      <nav>
        <div class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M20.57 14.86L<pivotalAction type="file" filePath="main.js">import './style.css'
import { setupWorkoutBuilder } from './js/workoutBuilder.js'
import { setupWorkoutCategories } from './js/workoutCategories.js'
import { setupWorkoutPlans } from './js/workoutPlans.js'
import { setupWorkoutTimer } from './js/workoutTimer.js'

document.querySelector('#app').innerHTML = `
  <header>
    <div class="container">
      <nav>
        <div class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
          </svg>
          <span>FitTrack</span>
        </div>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#categories">Workouts</a></li>
          <li><a href="#plans">Workout Plans</a></li>
          <li><a href="#builder">Workout Builder</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <button class="mobile-menu-toggle" id="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  </header>

  <div class="mobile-menu" id="mobile-menu">
    <ul class="mobile-menu-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#categories">Workouts</a></li>
      <li><a href="#plans">Workout Plans</a></li>
      <li><a href="#builder">Workout Builder</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </div>

  <main>
    <section id="home" class="hero">
      <div class="container">
        <h1>Transform Your Body, Transform Your Life</h1>
        <p>Track your workouts, set goals, and achieve the results you've always wanted with our personalized fitness platform.</p>
        <a href="#builder" class="btn">Build Your Workout</a>
      </div>
    </section>

    <section id="categories" class="categories">
      <div class="container">
        <div class="section-title">
          <h2>Workout Categories</h2>
          <p>Explore our collection of workouts designed for different fitness levels and goals.</p>
        </div>
        <div class="category-grid" id="category-grid">
          <!-- Categories will be loaded here -->
        </div>
      </div>
    </section>

    <section id="plans" class="workout-plans">
      <div class="container">
        <div class="section-title">
          <h2>Ready-to-Go Workout Plans</h2>
          <p>Follow these expertly designed workout plans to reach your fitness goals faster.</p>
        </div>
        <div class="plans-grid" id="workout-plans-container">
          <!-- Workout plans will be loaded here -->
        </div>
      </div>
    </section>

    <section id="builder" class="workout-builder">
      <div class="container">
        <div class="section-title">
          <h2>Create Your Custom Workout</h2>
          <p>Design a workout that fits your schedule, goals, and preferences.</p>
        </div>
        <div class="workout-form">
          <div class="form-group">
            <label for="workout-name">Workout Name</label>
            <input type="text" id="workout-name" placeholder="e.g., Monday Upper Body">
          </div>
          <div class="form-group">
            <label for="workout-type">Workout Type</label>
            <select id="workout-type">
              <option value="">Select a type</option>
              <option value="strength">Strength Training</option>
              <option value="cardio">Cardio</option>
              <option value="hiit">HIIT</option>
              <option value="flexibility">Flexibility</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exercise-name">Add Exercise</label>
            <input type="text" id="exercise-name" placeholder="e.g., Push-ups">
          </div>
          <div class="form-group">
            <label for="exercise-sets">Sets</label>
            <input type="number" id="exercise-sets" min="1" value="3">
          </div>
          <div class="form-group">
            <label for="exercise-reps">Reps</label>
            <input type="number" id="exercise-reps" min="1" value="10">
          </div>
          <button id="add-exercise" class="btn">Add Exercise</button>
          
          <div class="exercises-list" id="exercises-list">
            <h3>Your Exercises</h3>
            <div id="exercise-items"></div>
          </div>
          
          <button id="save-workout" class="btn" style="margin-top: 1rem; background-color: #4F46E5; color: white;">Save Workout</button>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-column">
          <h3>FitTrack</h3>
          <p>Your personal workout companion for achieving your fitness goals.</p>
        </div>
        <div class="footer-column">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#categories">Workouts</a></li>
            <li><a href="#plans">Workout Plans</a></li>
            <li><a href="#builder">Workout Builder</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Resources</h3>
          <ul class="footer-links">
            <li><a href="#">Workout Tips</a></li>
            <li><a href="#">Nutrition Guide</a></li>
            <li><a href="#">Recovery Strategies</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; 2023 FitTrack. All rights reserved.</p>
      </div>
    </div>
  </footer>
`

// Initialize workout categories
setupWorkoutCategories()

// Initialize workout plans
setupWorkoutPlans()

// Initialize workout builder
setupWorkoutBuilder()

// Initialize workout timer
setupWorkoutTimer()

// Add scroll reveal animation for sections
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  
  // Create intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  // Observe each section
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
  
  // Add revealed class
  document.addEventListener('scroll', () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    });
  });
  
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      
      // Toggle hamburger animation
      const spans = mobileMenuToggle.querySelectorAll('span');
      spans.forEach(span => span.classList.toggle('active'));
      
      // Prevent body scrolling when menu is open
      document.body.classList.toggle('menu-open');
      
      if (document.body.classList.contains('menu-open')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-menu-links a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
        
        // Reset hamburger icon
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans.forEach(span => span.classList.remove('active'));
      });
    });
  }
  
  // Add resize handler to reset mobile menu state on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileMenu && mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
      
      // Reset hamburger icon
      if (mobileMenuToggle) {
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans.forEach(span => span.classList.remove('active'));
      }
    }
  });
  
  // Trigger initial scroll
  window.dispatchEvent(new Event('scroll'));
});
