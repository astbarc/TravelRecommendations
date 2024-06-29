function searchDestination() {
        const input = document.getElementById('destinationInput').value.toLowerCase();
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';

        fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const countries = ['country', 'countries'];
            const beaches = ['beach', 'beaches'];
            const temples = ['temple', 'temples'];

            if (countries.includes(input.toLowerCase())) {
                for (let i = 0; i < data.countries.length; i++) {
                    for (let j = 0; j < data.countries[i].cities.length; j++) {
                        resultDiv.innerHTML += `<div class='destination">`;
                        resultDiv.innerHTML += `<img src="${data.countries[i].cities[j].imageUrl}" >`;
                        resultDiv.innerHTML += `<h4>${data.countries[i].cities[j].name}</h4>`;
                        resultDiv.innerHTML += `<p>${data.countries[i].cities[j].description}</p>`;
                        resultDiv.innerHTML += `</div>`;
                    }
                }
            } else if (beaches.includes(input.toLowerCase())) {
                for (let i = 0; i < data.beaches.length; i++) {
                    resultDiv.innerHTML += `<div class="destination">`;
                    resultDiv.innerHTML += `<img src="${data.beaches[i].imageUrl}" >`;
                    resultDiv.innerHTML += `<h4>${data.beaches[i].name}</h4>`;
                    resultDiv.innerHTML += `<p>${data.beaches[i].description}</p>`;
                    resultDiv.innerHTML += `</div>`;
                }
            } else if (temples.includes(input.toLowerCase())) {
                for (let i = 0; i < data.temples.length; i++) {
                    resultDiv.innerHTML += `<div class="destination">`;
                    resultDiv.innerHTML += `<img src="${data.temples[i].imageUrl}" >`;
                    resultDiv.innerHTML += `<h4>${data.temples[i].name}</h4>`;
                    resultDiv.innerHTML += `<p>${data.temples[i].description}</p>`;
                    resultDiv.innerHTML += `</div>`;
                }
            } else {
                resultDiv.innerHTML = 'Destination not found.';
            }
        })
        
        .catch(error => {
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
	


}

const btnSearch = document.getElementById('btnSearch');
 btnSearch.addEventListener('click', searchDestination);


function clear() {
    document.getElementById('destinationInput').value = "";
    document.getElementById('result').value = "";
}

const clearBtn = document.getElementById('btnreset');
clearBtn.addEventListener('click', clear);