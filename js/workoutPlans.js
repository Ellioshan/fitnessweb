// Workout plans data
const workoutPlans = [
  {
    id: 1,
    title: '30-Day Strength Challenge',
    description: 'Build strength and muscle with this progressive 30-day program.',
    level: 'Intermediate',
    duration: '30-45 min',
    frequency: '5 days/week',
    exercises: [
      'Barbell Squats: 4 sets x 8-10 reps',
      'Bench Press: 4 sets x 8-10 reps',
      'Bent-Over Rows: 3 sets x 10-12 reps',
      'Overhead Press: 3 sets x 10-12 reps',
      'Romanian Deadlifts: 3 sets x 10-12 reps'
    ]
  },
  {
    id: 2,
    title: 'HIIT Fat Burner',
    description: 'Maximize calorie burn and improve conditioning with this high-intensity program.',
    level: 'All Levels',
    duration: '20-30 min',
    frequency: '3-4 days/week',
    exercises: [
      'Burpees: 45 sec work, 15 sec rest',
      'Mountain Climbers: 45 sec work, 15 sec rest',
      'Jump Squats: 45 sec work, 15 sec rest',
      'Push-up to Plank Jack: 45 sec work, 15 sec rest',
      'High Knees: 45 sec work, 15 sec rest'
    ]
  },
  {
    id: 3,
    title: 'Core & Flexibility',
    description: 'Strengthen your core and improve flexibility with this balanced routine.',
    level: 'Beginner',
    duration: '25-35 min',
    frequency: '3 days/week',
    exercises: [
      'Plank: 3 sets x 30-60 sec hold',
      'Russian Twists: 3 sets x 15 reps each side',
      'Bicycle Crunches: 3 sets x 20 reps',
      'Downward Dog to Cobra: 10 reps, flow slowly',
      'Seated Forward Bend: 3 sets x 30 sec hold'
    ]
  },
  {
    id: 4,
    title: 'Full Body Toning',
    description: 'Tone your entire body with this balanced workout routine.',
    level: 'Intermediate',
    duration: '40-50 min',
    frequency: '4 days/week',
    exercises: [
      'Dumbbell Lunges: 3 sets x 12 reps each leg',
      'Push-ups: 3 sets x 12-15 reps',
      'Dumbbell Rows: 3 sets x 12 reps each arm',
      'Glute Bridges: 3 sets x 15 reps',
      'Lateral Raises: 3 sets x 12 reps'
    ]
  }
];

// Function to get completed workouts from localStorage
function getCompletedWorkouts() {
  const completedWorkouts = localStorage.getItem('completedWorkouts');
  return completedWorkouts ? JSON.parse(completedWorkouts) : [];
}

// Function to save completed workouts to localStorage
function saveCompletedWorkout(workoutId) {
  const completedWorkouts = getCompletedWorkouts();
  
  // Check if workout is already completed
  if (!completedWorkouts.includes(workoutId)) {
    completedWorkouts.push(workoutId);
    localStorage.setItem('completedWorkouts', JSON.stringify(completedWorkouts));
  }
  
  // Update UI to reflect completion status
  updateCompletionStatus();
}

// Function to remove workout from completed list
function removeCompletedWorkout(workoutId) {
  const completedWorkouts = getCompletedWorkouts();
  const updatedWorkouts = completedWorkouts.filter(id => id !== workoutId);
  localStorage.setItem('completedWorkouts', JSON.stringify(updatedWorkouts));
  
  // Update UI to reflect completion status
  updateCompletionStatus();
}

// Function to update UI based on completion status
function updateCompletionStatus() {
  const completedWorkouts = getCompletedWorkouts();
  
  // Update all workout cards
  document.querySelectorAll('.plan-card').forEach(card => {
    const workoutId = parseInt(card.querySelector('.start-workout').dataset.id);
    const isCompleted = completedWorkouts.includes(workoutId);
    
    // Get or create completion badge
    let completionBadge = card.querySelector('.completion-badge');
    
    if (isCompleted) {
      // If workout is completed and badge doesn't exist, create it
      if (!completionBadge) {
        completionBadge = document.createElement('div');
        completionBadge.className = 'completion-badge';
        completionBadge.innerHTML = '<span>✓ Completed</span>';
        card.querySelector('.plan-header').appendChild(completionBadge);
      }
      
      // Update button text
      const startButton = card.querySelector('.start-workout');
      startButton.textContent = 'Mark as Incomplete';
      startButton.classList.add('completed');
    } else {
      // If workout is not completed but badge exists, remove it
      if (completionBadge) {
        completionBadge.remove();
      }
      
      // Update button text
      const startButton = card.querySelector('.start-workout');
      startButton.textContent = 'Start Workout';
      startButton.classList.remove('completed');
    }
  });
}

export function getWorkoutPlanById(id) {
  return workoutPlans.find(plan => plan.id === id);
}

export function setupWorkoutPlans() {
  const workoutPlansContainer = document.getElementById('workout-plans-container');
  
  // Make the module available globally for the timer
  window.workoutPlansModule = { 
    getWorkoutPlanById,
    saveCompletedWorkout
  };
  
  workoutPlans.forEach((plan, index) => {
    const planCard = document.createElement('div');
    planCard.className = 'plan-card';
    planCard.style.setProperty('--card-index', index);
    
    // Create exercise list HTML
    const exercisesHTML = plan.exercises.map(exercise => 
      `<li>${exercise}</li>`
    ).join('');
    
    planCard.innerHTML = `
      <div class="plan-header" style="background-color: #4F46E5;">
        <h3>${plan.title}</h3>
        <div class="plan-badges">
          <span class="badge">${plan.level}</span>
          <span class="badge">${plan.duration}</span>
        </div>
      </div>
      <div class="plan-content">
        <p>${plan.description}</p>
        <div class="plan-details">
          <div class="detail-item">
            <strong>Frequency:</strong> ${plan.frequency}
          </div>
        </div>
        <div class="exercises">
          <h4>Workout Includes:</h4>
          <ul>
            ${exercisesHTML}
          </ul>
        </div>
        <button class="btn start-workout" data-id="${plan.id}" style="background-color: #4F46E5; color: white; width: 100%;">
          Start Workout
        </button>
      </div>
    `;
    
    workoutPlansContainer.appendChild(planCard);
  });
  
  // Add event listeners to start workout buttons
  document.querySelectorAll('.start-workout').forEach(button => {
    button.addEventListener('click', function(e) {
      const workoutId = parseInt(this.dataset.id);
      const completedWorkouts = getCompletedWorkouts();
      const isCompleted = completedWorkouts.includes(workoutId);
      
      if (isCompleted) {
        // If already completed, mark as incomplete
        removeCompletedWorkout(workoutId);
      } else {
        // If not completed, show timer and mark as completed after timer finishes
        const workoutPlan = getWorkoutPlanById(workoutId);
        
        // Check if timer module is available
        if (window.workoutTimerModule) {
          window.workoutTimerModule.startWorkoutTimer(workoutPlan, () => {
            saveCompletedWorkout(workoutId);
          });
        } else {
          // If timer module is not available, mark as completed immediately
          saveCompletedWorkout(workoutId);
        }
      }
    });
  });
  
  // Initialize completion status on page load
  updateCompletionStatus();
}
