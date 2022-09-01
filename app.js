const loadPhones = async(search) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}
const displayPhones = (phones) =>{
    // console.log(phones);
    const phonesContainer = document.getElementById("phones-container");
    phonesContainer.textContent = '';
    phones.forEach(phone => {
        console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
            <div class="card">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">${phone.slug}</p>
                </div>
            </div>
        `;
        phonesContainer.appendChild(phoneDiv);
    });
};

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    loadPhones(searchText);
})


loadPhones();