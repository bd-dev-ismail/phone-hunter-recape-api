const loadPhones = async(search, dataLimit) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}
const displayPhones = (phones, dataLimit) =>{
    // console.log(phones);
    const phonesContainer = document.getElementById("phones-container");
    phonesContainer.textContent = '';
    const showAll = document.getElementById("show-all");
    if(dataLimit && phones.length > 10){
        //display 10 phones only
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none');
    }
    const noPhone = document.getElementById("no-phone-found");
    if(phones.length === 0){
        
        noPhone.classList.remove('d-none');
    }
    else{
        noPhone.classList.add('d-none');
    }
    //Display All phone
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
    //Stop Spinner
    toggleSpinner(false);
};
const processSearch = (dataLimit) =>{
  //Start Spinner
  toggleSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhones(searchText, dataLimit);
}
document.getElementById('btn-search').addEventListener('click', function(){
    processSearch(10);
})
const toggleSpinner = isLoading =>{
    const spinnerSection = document.getElementById("spinner");
    if(isLoading){
        spinnerSection.classList.remove('d-none');
    }
    else{
        spinnerSection.classList.add('d-none');
    }
};

document.getElementById("btn-show-all").addEventListener('click', function(){
    processSearch();
})
// loadPhones('a');