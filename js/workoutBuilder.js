// Workout builder functionality<pivotalAction type="file" filePath="js/workoutBuilder.js">// Workout builder functionality
export function setupWorkoutBuilder() {
  const addExerciseBtn = document.getElementById('add-exercise');
  const saveWorkoutBtn = document.getElementById('save-workout');
  const exerciseItemsContainer = document.getElementById('exercise-items');
  
  // Array to store exercises
  let exercises = [];
  
  // Add exercise event listener
  addExerciseBtn.addEventListener('click', () => {
    const exerciseName = document.getElementById('exercise-name').value;
    const exerciseSets = document.getElementById('exercise-sets').value;
    const exerciseReps = document.getElementById('exercise-reps').value;
    
    if (!exerciseName) {
      alert('Please enter an exercise name');
      return;
    }
    
    // Create exercise object
    const exercise = {
      id: Date.now(),
      name: exerciseName,
      sets: exerciseSets,
      reps: exerciseReps
    };
    
    // Add to exercises array
    exercises.push(exercise);
    
    // Render exercise item
    renderExerciseItem(exercise);
    
    // Clear input fields
    document.getElementById('exercise-name').value = '';
    document.getElementById('exercise-sets').value = '3';
    document.getElementById('exercise-reps').value = '10';
    
    // Focus on exercise name input
    document.getElementById('exercise-name').focus();
  });
  
  // Save workout event listener
  saveWorkoutBtn.addEventListener('click', () => {
    const workoutName = document.getElementById('workout-name').value;
    const workoutType = document.getElementById('workout-type').value;
    
    if (!workoutName) {
      alert('Please enter a workout name');
      return;
    }
    
    if (!workoutType) {
      alert('Please select a workout type');
      return;
    }
    
    if (exercises.length === 0) {
      alert('Please add at least one exercise');
      return;
    }
    
    // Create workout object
    const workout = {
      id: Date.now(),
      name: workoutName,
      type: workoutType,
      exercises: [...exercises]
    };
    
    // Save workout to local storage
    saveWorkout(workout);
    
    // Show success message with animation
    showSuccessMessage();
    
    // Reset form
    resetForm();
  });
  
  // Function to render exercise item
  function renderExerciseItem(exercise) {
    const exerciseItem = document.createElement('div');
    exerciseItem.className = 'exercise-item';
    exerciseItem.dataset.id = exercise.id;
    
    exerciseItem.innerHTML = `
      <div>
        <strong>${exercise.name}</strong> - ${exercise.sets} sets x ${exercise.reps} reps
      </div>
      <button class="remove-exercise" data-id="${exercise.id}">Remove</button>
    `;
    
    // Add to container
    exerciseItemsContainer.appendChild(exerciseItem);
    
    // Add animation class
    setTimeout(() => {
      exerciseItem.classList.add('show');
    }, 10);
    
    // Add remove event listener
    exerciseItem.querySelector('.remove-exercise').addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      removeExercise(id);
    });
  }
  
  // Function to remove exercise
  function removeExercise(id) {
    // Remove from array
    exercises = exercises.filter(exercise => exercise.id !== id);
    
    // Remove from DOM with animation
    const exerciseItem = document.querySelector(`.exercise-item[data-id="${id}"]`);
    exerciseItem.style.transform = 'translateX(100px)';
    exerciseItem.style.opacity = '0';
    
    setTimeout(() => {
      exerciseItem.remove();
    }, 300);
  }
  
  // Function to save workout to local storage
  function saveWorkout(workout) {
    // Get existing workouts
    let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    
    // Add new workout
    workouts.push(workout);
    
    // Save to local storage
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }
  
  // Function to reset form
  function resetForm() {
    document.getElementById('workout-name').value = '';
    document.getElementById('workout-type').value = '';
    document.getElementById('exercise-name').value = '';
    document.getElementById('exercise-sets').value = '3';
    document.getElementById('exercise-reps').value = '10';
    
    // Clear exercises
    exercises = [];
    exerciseItemsContainer.innerHTML = '';
  }
  
  // Function to show success message
  function showSuccessMessage() {
    const message = document.createElement('div');
    message.className = 'success-message';
    message.textContent = 'Workout saved successfully!';
    message.style.position = 'fixed';
    message.style.top = '20px';
    message.style.right = '20px';
    message.style.backgroundColor = '#10B981';
    message.style.color = 'white';
    message.style.padding = '1rem 2rem';
    message.style.borderRadius = '0.5rem';
    message.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    message.style.zIndex = '1000';
    message.style.transform = 'translateX(100%)';
    message.style.opacity = '0';
    message.style.transition = 'all 0.3s ease';
    
    document.body.appendChild(message);
    
    // Show message with animation
    setTimeout(() => {
      message.style.transform = 'translateX(0)';
      message.style.opacity = '1';
    }, 10);
    
    // Hide message after 3 seconds
    setTimeout(() => {
      message.style.transform = 'translateX(100%)';
      message.style.opacity = '0';
      
      // Remove from DOM after animation
      setTimeout(() => {
        message.remove();
      }, 300);
    }, 3000);
  }
}
