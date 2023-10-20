document.addEventListener("DOMContentLoaded", function () {
    // Get all the navigation panels and descriptions
    const navPanels = document.querySelectorAll('.panel-keep-ratio');
    const descriptions = document.querySelectorAll('.description');

    // Initially hide all descriptions
    descriptions.forEach(function (description) {
        description.style.display = 'none';
    });

    // Add click event listener to each navigation panel
    navPanels.forEach(function (panel) {
        panel.addEventListener('click', function () {
            // Hide all descriptions
            descriptions.forEach(function (description) {
                description.style.display = 'none';
            });

            // Get the ID of the clicked panel
            const panelId = panel.getAttribute('data-nav-item-id');
            console.log("Clicked Panel ID:", panelId);


            // Show the corresponding description
            const description = document.querySelector(`[data-page-id="${panelId}"]`);
            if (description) {
                description.style.display = 'block';
            }

            // Change the background image based on the clicked panel
            const bgName = panelId.split('-')[1]; 
            const bgFileName = `${bgName}-bg.png`; 
            document.body.style.backgroundImage = `url('image/${bgFileName}')`;
        });
    });

});
