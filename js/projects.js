// Projects Management JavaScript

// Sample projects data (in a real app, this would come from a database)
const sampleProjects = [
    {
        id: 1,
        title: "Eco-Friendly Water Bottle",
        category: "Technology",
        description: "A revolutionary water bottle that filters water and tracks your hydration levels through a mobile app.",
        fundingGoal: 50000,
        currentFunding: 32500,
        daysLeft: 15,
        creator: "Jane Smith",
        creatorId: 101,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
        updates: [
            {
                date: "2023-06-15",
                title: "Production Update",
                content: "We've finalized the design and are moving into production!"
            }
        ],
        backers: 215
    },
    {
        id: 2,
        title: "Indie Documentary Film",
        category: "Film",
        description: "A documentary exploring the impact of technology on traditional craftsmanship around the world.",
        fundingGoal: 75000,
        currentFunding: 42000,
        daysLeft: 22,
        creator: "Michael Johnson",
        creatorId: 102,
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
        updates: [
            {
                date: "2023-06-10",
                title: "Filming Complete",
                content: "We've finished filming in 5 countries and are now in post-production!"
            }
        ],
        backers: 310
    },
    {
        id: 3,
        title: "Smart Home Garden System",
        category: "Technology",
        description: "An automated garden system that monitors soil conditions and waters your plants based on their specific needs.",
        fundingGoal: 30000,
        currentFunding: 28500,
        daysLeft: 5,
        creator: "Sarah Williams",
        creatorId: 103,
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
        updates: [
            {
                date: "2023-06-20",
                title: "App Development",
                content: "Our mobile app is now in beta testing and will be ready for launch!"
            }
        ],
        backers: 189
    },
    {
        id: 4,
        title: "Handcrafted Board Game",
        category: "Games",
        description: "A strategy board game with handcrafted wooden pieces inspired by ancient civilizations.",
        fundingGoal: 15000,
        currentFunding: 9800,
        daysLeft: 18,
        creator: "David Chen",
        creatorId: 104,
        image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
        updates: [
            {
                date: "2023-06-05",
                title: "Game Testing",
                content: "We've completed our third round of playtesting with great feedback!"
            }
        ],
        backers: 142
    },
    {
        id: 5,
        title: "Illustrated Children's Book Series",
        category: "Publishing",
        description: "A series of illustrated children's books that teach important life lessons through adventure stories.",
        fundingGoal: 10000,
        currentFunding: 7500,
        daysLeft: 12,
        creator: "Emily Rodriguez",
        creatorId: 105,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
        updates: [
            {
                date: "2023-06-18",
                title: "Illustrations Complete",
                content: "All illustrations for the first two books are now complete!"
            }
        ],
        backers: 98
    },
    {
        id: 6,
        title: "Sustainable Fashion Line",
        category: "Art",
        description: "A clothing line made from recycled materials with designs from local artists.",
        fundingGoal: 25000,
        currentFunding: 12000,
        daysLeft: 30,
        creator: "Alex Thompson",
        creatorId: 106,
        image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
        updates: [
            {
                date: "2023-06-12",
                title: "Material Sourcing",
                content: "We've secured partnerships with recycling centers to source our materials!"
            }
        ],
        backers: 75
    }
];

// Function to create a new project
function createProject(projectData) {
    // In a real app, this would send data to a server
    // For now, we'll add it to our sample projects
    
    // Collection of real images from Unsplash for different project categories
    const categoryImages = {
        'Technology': [
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80',
            'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80'
        ],
        'Film': [
            'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80',
            'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80'
        ],
        'Music': [
            'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80',
            'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80'
        ],
        'Art': [
            'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80',
            'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80'
        ],
        'Publishing': [
            'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80',
            'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80'
        ],
        'Games': [
            'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80',
            'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80'
        ]
    };
    
    // Default image if category doesn't match or no images available
    const defaultImage = 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80';
    
    // Get random image for the project category
    let projectImage = defaultImage;
    if (categoryImages[projectData.category]) {
        const categoryImagesArray = categoryImages[projectData.category];
        const randomIndex = Math.floor(Math.random() * categoryImagesArray.length);
        projectImage = categoryImagesArray[randomIndex];
    }
    
    const newProject = {
        id: sampleProjects.length + 1,
        title: projectData.title,
        category: projectData.category,
        description: projectData.description,
        fundingGoal: parseFloat(projectData.fundingGoal),
        currentFunding: 0,
        daysLeft: parseInt(projectData.duration),
        creator: getCurrentUser().name,
        creatorId: getCurrentUser().id,
        image: projectData.image || projectImage,
        updates: [],
        backers: 0
    };
    
    sampleProjects.unshift(newProject);
    return newProject;
}

// Function to handle project creation form submission
function handleCreateProject() {
    const form = document.getElementById('create-project-form');
    
    // Get form data
    const projectData = {
        title: document.getElementById('project-title').value,
        category: document.getElementById('project-category').value,
        fundingGoal: document.getElementById('project-goal').value,
        duration: document.getElementById('project-duration').value,
        description: document.getElementById('project-description').value,
        image: null // In a real app, this would handle file uploads
    };
    
    // Validate form data
    if (!projectData.title || !projectData.category || !projectData.fundingGoal || !projectData.duration || !projectData.description) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Create project
    const newProject = createProject(projectData);
    
    // Close modal
    document.getElementById('create-project-modal').style.display = 'none';
    
    // Reset form
    form.reset();
    
    // Show success message
    alert(`Your project "${newProject.title}" has been created successfully!`);
    
    // Refresh featured projects
    loadFeaturedProjects();
}

// Function to get project by ID
function getProjectById(projectId) {
    return sampleProjects.find(project => project.id === parseInt(projectId));
}

// Function to update project funding
function updateProjectFunding(projectId, amount) {
    const project = getProjectById(projectId);
    if (project) {
        project.currentFunding += parseFloat(amount);
        project.backers += 1;
        return true;
    }
    return false;
}

// Function to add update to a project
function addProjectUpdate(projectId, updateData) {
    const project = getProjectById(projectId);
    if (project) {
        const newUpdate = {
            date: new Date().toISOString().split('T')[0],
            title: updateData.title,
            content: updateData.content
        };
        project.updates.unshift(newUpdate);
        return true;
    }
    return false;
}

// Function to get current user
function getCurrentUser() {
    // In a real app, this would get the user from session/local storage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return user;
    }
    return { id: 0, name: 'Guest' };
}

// Function to filter projects by category
function filterProjectsByCategory(category) {
    if (category === 'all') {
        return sampleProjects;
    }
    return sampleProjects.filter(project => project.category.toLowerCase() === category.toLowerCase());
}

// Function to search projects by keyword
function searchProjects(keyword) {
    const searchTerm = keyword.toLowerCase();
    return sampleProjects.filter(project => 
        project.title.toLowerCase().includes(searchTerm) || 
        project.description.toLowerCase().includes(searchTerm)
    );
}

// Function to sort projects
function sortProjects(projects, sortBy) {
    const sortedProjects = [...projects];
    
    switch(sortBy) {
        case 'newest':
            // In a real app, this would sort by creation date
            return sortedProjects;
        case 'endingSoon':
            return sortedProjects.sort((a, b) => a.daysLeft - b.daysLeft);
        case 'mostFunded':
            return sortedProjects.sort((a, b) => b.currentFunding - a.currentFunding);
        case 'mostPopular':
            return sortedProjects.sort((a, b) => b.backers - a.backers);
        default:
            return sortedProjects;
    }
}

// Initialize category filtering
document.addEventListener('DOMContentLoaded', function() {
    const categoryCards = document.querySelectorAll('.category-card');
    if (categoryCards.length > 0) {
        categoryCards.forEach(card => {
            card.addEventListener('click', function() {
                const category = this.querySelector('h3').textContent;
                const filteredProjects = filterProjectsByCategory(category);
                const projectsContainer = document.getElementById('featured-projects-container');
                
                if (projectsContainer) {
                    displayProjects(filteredProjects, projectsContainer);
                    
                    // Update section header
                    const sectionHeader = document.querySelector('.featured-projects .section-header h2');
                    if (sectionHeader) {
                        sectionHeader.textContent = `${category} Projects`;
                    }
                }
            });
        });
    }
});