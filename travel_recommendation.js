
fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Display fetched data in the console
       
    })
    .catch(error => console.error('Error fetching data:', error));
    document.getElementById('search-button').addEventListener('click', function () {
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        
        if (searchInput.includes('beach')) {
            showRecommendations('beach');
        } else if (searchInput.includes('temple')) {
            showRecommendations('temple');
        } else if (searchInput.includes('country')) {
            showRecommendations('country');
        }
    });
    
    function showRecommendations(type) {
       
        console.log(`Showing recommendations for: ${type}`);
       
    }
    function showRecommendations(keyword) {
        fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                const recommendations = data.filter(item => item.type === keyword);
                let recommendationsHTML = '';
    
                recommendations.forEach(item => {
                    recommendationsHTML += `
                        <div class="recommendation">
                            <img src="${item.imageUrl}" alt="${item.name}">
                            <h3>${item.name}</h3>
                            <p>${item.description}</p>
                        </div>
                    `;
                });
    
                document.getElementById('recommendations').innerHTML = recommendationsHTML;
            });
    }
    function showRecommendations(keyword) {
        fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                const recommendations = data.filter(item => item.type === keyword);
                let recommendationsHTML = '';
    
                recommendations.forEach(item => {
                    recommendationsHTML += `
                        <div class="recommendation">
                            <img src="${item.imageUrl}" alt="${item.name}">
                            <h3>${item.name}</h3>
                            <p>${item.description}</p>
                        </div>
                    `;
                });
    
                document.getElementById('recommendations').innerHTML = recommendationsHTML;
            });
    }
    document.getElementById('clear-button').addEventListener('click', function () {
        document.getElementById('recommendations').innerHTML = '';
        document.getElementById('search-input').value = '';
    });
    
