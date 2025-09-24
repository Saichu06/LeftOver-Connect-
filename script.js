// Navigation
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.style.color = '#ffffff';
    });
    event.target.style.color = '#cccccc';
}

// Form submissions
function submitDonation(event) {
    event.preventDefault();
    alert('Thank you for your donation! We will contact you shortly to arrange pickup.');
}

function submitContact(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
}

// NGO functions
function connectNGO(ngoName) {
    alert(`Connecting you with ${ngoName}. They will be notified of your interest.`);
}

function showNGORegistration() {
    alert('NGO Registration form will be displayed. Please provide your organization details.');
}

// Map functions
function filterByCity(city) {
    console.log('Filtering by city:', city);
    updateMapPlaceholder(`Showing locations in ${city === 'all' ? 'all cities' : city}`);
}

function filterByType(type) {
    console.log('Filtering by type:', type);
    updateMapPlaceholder(`Showing ${type === 'all' ? 'all locations' : type} on map`);
}

function refreshMap() {
    updateMapPlaceholder('Refreshing map data...');
    setTimeout(() => {
        updateMapPlaceholder('Map updated with latest data');
    }, 1000);
}

function updateMapPlaceholder(message) {
    document.querySelector('.map-placeholder').innerHTML = `🗺️ ${message}<br><small>Interactive map with real-time updates</small>`;
}

// Transport functions
function bookTransport(type) {
    alert(`Booking ${type} transport. You will be redirected to the booking form.`);
}

function trackDelivery() {
    const trackingId = document.querySelector('input[placeholder="Enter tracking ID"]').value;
    if (trackingId) {
        document.getElementById('tracking-result').innerHTML = `
            <div style="margin-top: 1rem; padding: 1rem; background-color: #e5e5e5;">
                <strong>Tracking ID: ${trackingId}</strong><br>
                Status: In Transit<br>
                Location: En route to destination<br>
                ETA: 25 minutes
            </div>
        `;
    } else {
        alert('Please enter a tracking ID');
    }
}

function registerDriver() {
    alert('Driver registration form will be displayed. Join our volunteer network!');
}

function viewDrivers() {
    alert('Displaying available volunteer drivers in your area.');
}

// Update stats dynamically
function updateStats() {
    const stats = {
        donations: Math.floor(Math.random() * 50) + 20,
        transit: Math.floor(Math.random() * 20) + 5,
        completed: Math.floor(Math.random() * 100) + 30
    };
    
    document.getElementById('active-donations').textContent = `${stats.donations} donations available for pickup`;
    document.getElementById('in-transit').textContent = `${stats.transit} deliveries currently in progress`;
    document.getElementById('completed-today').textContent = `${stats.completed} successful deliveries completed`;
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateStats();
    setInterval(updateStats, 30000); // Update every 30 seconds
});