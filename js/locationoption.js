
        document.addEventListener('DOMContentLoaded', function() {
            const dropdown = document.getElementById('locationDropdown');
            const dropdownContent = document.getElementById('dropdownContent');
            const selectedLocation = document.getElementById('selectedLocation');
            const options = dropdownContent.querySelectorAll('div[data-location]');

            // Toggle dropdown on click
            dropdown.addEventListener('click', function(e) {
                e.stopPropagation();
                dropdown.classList.toggle('active');
                dropdownContent.classList.toggle('show');
            });

            // Handle option selection
            options.forEach(option => {
                option.addEventListener('click', function(e) {
                    e.stopPropagation();
                    
                    // Remove selected class from all options
                    options.forEach(opt => opt.classList.remove('selected'));
                    
                    // Add selected class to clicked option
                    this.classList.add('selected');
                    
                    // Update displayed location
                    const newLocation = this.getAttribute('data-location');
                    selectedLocation.textContent = newLocation;
                    
                    // Close dropdown
                    dropdown.classList.remove('active');
                    dropdownContent.classList.remove('show');
                    
                    // Optional: Trigger custom event for other parts of your app
                    const locationChangeEvent = new CustomEvent('locationChanged', {
                        detail: { location: newLocation }
                    });
                    dropdown.dispatchEvent(locationChangeEvent);
                });
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', function() {
                dropdown.classList.remove('active');
                dropdownContent.classList.remove('show');
            });

            // Optional: Listen for location change events
            dropdown.addEventListener('locationChanged', function(e) {
                console.log('Location changed to:', e.detail.location);
                // You can add additional logic here, like updating other parts of your page
            });
        });
    
