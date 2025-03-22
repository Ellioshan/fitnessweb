// Workout categories data
const categories = [
  {
    id: 1,
    title: 'Strength Training',
    description: 'Build muscle and increase strength with these targeted workouts.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RyZW5ndGglMjB0cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    title: 'Cardio',
    description: 'Improve your endurance and burn calories with these heart-pumping workouts.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyZGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    title: 'HIIT',
    description: 'High-intensity interval training for maximum results in minimum time.',
    image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    title: 'Flexibility',
    description: 'Improve your range of motion and prevent injuries with these stretching routines.',
    image: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYSUyMHN0cmV0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 5,
    title: 'Core',
    description: 'Strengthen your abs, lower back, and pelvis for better stability and posture.',
    image: 'https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29yZSUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 6,
    title: 'Full Body',
    description: 'Comprehensive workouts that target all major muscle groups in one session.',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVsbCUyMGJvZHklMjB3b3Jrb3V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  }
];

export function setupWorkoutCategories() {
  const categoryGrid = document.getElementById('category-grid');
  
  categories.forEach((category, index) => {
    const categoryCard = document.createElement('div');
    categoryCard.className = 'category-card';
    categoryCard.style.setProperty('--card-index', index);
    
    categoryCard.innerHTML = `
      <div class="category-img" style="background-image: url('${category.image}')"></div>
      <div class="category-content">
        <h3>${category.title}</h3>
        <p>${category.description}</p>
        <a href="#" class="btn" style="background-color: #4F46E5; color: white;">Explore Workouts</a>
      </div>
    `;
    
    categoryGrid.appendChild(categoryCard);
  });
}
