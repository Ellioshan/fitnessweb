// Timer state
let timerInterval;
let remainingTime;
let onTimerComplete;

// Function to format time as MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Function to create timer overlay
function createTimerOverlay(workoutPlan) {
  // Create overlay if it doesn't exist
  let timerOverlay = document.getElementById('timer-overlay');
  
  if (!timerOverlay) {
    timerOverlay = document.createElement('div');
    timerOverlay.id = 'timer-overlay';
    timerOverlay.className = 'timer-overlay';
    document.body.appendChild(timerOverlay);
  }
  
  // Set content
  timerOverlay.innerHTML = `
    <div class="timer-container">
      <h2 class="workout-status">Workout in Progress</h2>
      <div class="timer-display" id="timer-display">20:00</div>
      <p class="exercise-name">${workoutPlan.title}</p>
      <button class="btn cancel-workout" id="cancel-workout">Cancel Workout</button>
      <button class="btn complete-workout" id="complete-workout" style="background-color: #4F46E5; color: white; margin-left: 10px;">Complete Early</button>
    </div>
  `;
  
  // Show overlay
  timerOverlay.style.display = 'flex';
  
  // Add event listener to cancel button
  document.getElementById('cancel-workout').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerOverlay.style.display = 'none';
  });
  
  // Add event listener to complete early button
  document.getElementById('complete-workout').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerOverlay.style.display = 'none';
    
    // Call completion callback if provided
    if (typeof onTimerComplete === 'function') {
      onTimerComplete();
    }
  });
  
  return timerOverlay;
}

// Function to start workout timer
function startWorkoutTimer(workoutPlan, completionCallback) {
  // Set initial time based on workout duration
  // Parse duration from format like "30-45 min"
  const durationText = workoutPlan.duration;
  const durationMatch = durationText.match(/(\d+)(?:-(\d+))?\s*min/);
  
  let initialMinutes = 20; // Default
  
  if (durationMatch) {
    // If range is provided (e.g., "30-45 min"), use the lower value
    initialMinutes = parseInt(durationMatch[1]);
  }
  
  remainingTime = initialMinutes * 60; // Convert to seconds
  onTimerComplete = completionCallback;
  
  // Create and show timer overlay
  const timerOverlay = createTimerOverlay(workoutPlan);
  const timerDisplay = document.getElementById('timer-display');
  
  // Update timer display initially
  timerDisplay.textContent = formatTime(remainingTime);
  
  // Start countdown
  timerInterval = setInterval(() => {
    remainingTime--;
    
    // Update display
    timerDisplay.textContent = formatTime(remainingTime);
    
    // Check if timer is complete
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      timerOverlay.style.display = 'none';
      
      // Call completion callback if provided
      if (typeof onTimerComplete === 'function') {
        onTimerComplete();
      }
    }
  }, 1000);
}

export function setupWorkoutTimer() {
  // Make timer functions available globally
  window.workoutTimerModule = {
    startWorkoutTimer
  };
}
