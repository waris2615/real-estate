// Helper to create property card HTML
function createPropertyCard(property) {
    return `
        <div class="property-card" onclick="window.location.href='property-details.html?id=${property.id}'">
            <img src="${property.image}" alt="${property.title}" class="property-img">
            <div class="property-content">
                <div class="property-price">${property.price}</div>
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">📍 ${property.location}</div>
                <div class="property-features">
                    <span>🛏️ ${property.beds} Beds</span>
                    <span>🛁 ${property.baths} Baths</span>
                    <span>📏 ${property.sqft} sqft</span>
                </div>
            </div>
        </div>
    `;
}

// Home page: render featured properties
function renderFeaturedProperties() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;

    const featured = properties.filter(p => p.featured);
    grid.innerHTML = featured.map(p => createPropertyCard(p)).join('');
}

// Listings page: render and filter properties
function initListings() {
    const grid = document.getElementById('listingsGrid');
    const searchInput = document.getElementById('searchInput');
    const typeSelect = document.getElementById('typeSelect');
    const priceSelect = document.getElementById('priceSelect');

    if (!grid) return;

    function renderProperties(props) {
        if (props.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-light);">No properties match your criteria.</p>';
            return;
        }
        grid.innerHTML = props.map(p => createPropertyCard(p)).join('');
    }

    function filterProperties() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const type = typeSelect ? typeSelect.value : 'All';
        const price = priceSelect ? priceSelect.value : 'All';

        const filtered = properties.filter(p => {
            // Search match
            const matchesSearch = p.title.toLowerCase().includes(searchTerm) ||
                                  p.location.toLowerCase().includes(searchTerm) ||
                                  p.description.toLowerCase().includes(searchTerm);

            // Type match
            const matchesType = type === 'All' || p.type === type;

            // Price match
            let matchesPrice = true;
            if (price === 'Low') matchesPrice = p.priceValue < 2000000;
            else if (price === 'Medium') matchesPrice = p.priceValue >= 2000000 && p.priceValue <= 4000000;
            else if (price === 'High') matchesPrice = p.priceValue > 4000000;

            return matchesSearch && matchesType && matchesPrice;
        });

        renderProperties(filtered);
    }

    // Initial render
    renderProperties(properties);

    // Event listeners
    if (searchInput) searchInput.addEventListener('input', filterProperties);
    if (typeSelect) typeSelect.addEventListener('change', filterProperties);
    if (priceSelect) priceSelect.addEventListener('change', filterProperties);
}

// Property Details page: render single property details
function initPropertyDetails() {
    const detailsContainer = document.querySelector('.details-content');
    if (!detailsContainer) return;

    // Get ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const property = properties.find(p => p.id === id) || properties[0]; // Default to first if not found

    detailsContainer.innerHTML = `
        <h2>${property.title}</h2>
        <div class="property-location">📍 ${property.location}</div>
        <div class="details-price">${property.price}</div>
        <p>${property.description}</p>
        <div class="details-features">
            <div>
                <strong>Bedrooms</strong><br>
                ${property.beds}
            </div>
            <div>
                <strong>Bathrooms</strong><br>
                ${property.baths}
            </div>
            <div>
                <strong>Area</strong><br>
                ${property.sqft} sqft
            </div>
            <div>
                <strong>Property Type</strong><br>
                ${property.type}
            </div>
        </div>
        <button class="btn" style="margin-top: 1rem;" onclick="window.location.href='contact.html'">Contact Agent</button>
    `;
}

// Contact form validation
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');

        // Reset errors
        name.classList.remove('error');
        email.classList.remove('error');
        message.classList.remove('error');
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        // Validate name
        if (!name.value.trim()) {
            name.classList.add('error');
            nameError.textContent = 'Name is required';
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!email.value.trim()) {
            email.classList.add('error');
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            email.classList.add('error');
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        }

        // Validate message
        if (!message.value.trim()) {
            message.classList.add('error');
            messageError.textContent = 'Message is required';
            isValid = false;
        }

        if (isValid) {
            // Simulate form submission
            document.getElementById('successMsg').style.display = 'block';
            form.reset();
            setTimeout(() => {
                document.getElementById('successMsg').style.display = 'none';
            }, 5000);
        }
    });
}