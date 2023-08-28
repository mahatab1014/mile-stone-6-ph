const loadPhone = async (searchText, isShowALL) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await response.json();
  const phones = data.data;
  //   console.log(phones);
  displayPhones(phones, isShowALL);
};

// loadPhone();
const displayPhones = (phones, isShowALL) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";

  const showAllButton = document.getElementById("show-all-btn");
  if (phones.length > 12) {
    showAllButton.classList.remove("hidden");
  } else {
    showAllButton.classList.add("hidden");
  }

  if (!isShowALL) {
    phones = phones.slice(0, 12);
  }

  phones.forEach((phone) => {
    const cardTemplate = `
        <div class="card bg-base-100 shadow-2xl">
            <figure class="px-10 pt-10">
                <img src="${phone.image}" alt="" class="rounded-xl" />
            </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">${phone.phone_name}</h2>
                    <p class="text-gray-600">There are many variations of passages of available, but the majority have suffered</p>
                    <div class="card-actions">
                    <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
                </div>
            </div>
        </div>`;
    const phoneCard = document.createElement("div");
    phoneCard.innerHTML = cardTemplate;
    phoneContainer.appendChild(phoneCard);
  });
  spinner(false);
};
// Search
const handleSearch = (isShowALL) => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  if (searchText !== "") {
    spinner(true);
  } else {
    spinner(false);
  }
  loadPhone(searchText, isShowALL);
};
document
  .getElementById("search-field")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  });

const spinner = (isloading) => {
  const loader = document.getElementById("loading-spinner");
  if (isloading) {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
  }
};

const handleShowALL = () => {
  handleSearch(true);
};

const handleShowDetails = async (id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await response.json();
  const phoneInfo = data.data;
  const phoneInfoContainer = document.getElementById("phone-details-container");
  const phoneInfoTemplate = `
  <figure class="px-10 pt-10 flex justify-center">
    <img src="${phoneInfo.image}" alt="" class="rounded-xl" />
  </figure>
  <h3 class="font-bold text-2xl pt-5 text-gray-700">${phoneInfo.name}</h3>
  <p class="text-sm py-4 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
  <div>
      <ul class="space-y-2">
          <li class="text-gray-700"><span class="font-semibold">Brand :</span> ${
            phoneInfo.brand
          }</li>
          <li class="text-gray-700"><span class="font-semibold">Storage :</span> ${
            phoneInfo.mainFeatures.memory
          }</li>
          <li class="text-gray-700"><span class="font-semibold">Display Size :</span> ${
            phoneInfo.mainFeatures.displaySize
          }</li>
          <li class="text-gray-700"><span class="font-semibold">Chipset :</span> ${
            phoneInfo.mainFeatures.chipSet
          }</li>
          <li class="text-gray-700"><span class="font-semibold">Release date :</span> ${
            phoneInfo.releaseDate
          }</li>
          <li class="text-gray-700"><span class="font-semibold">GPS :</span> ${
            phoneInfo.others && phoneInfo.others.GPS
              ? phoneInfo.others.GPS
              : "Not available"
          }</li>
      </ul>
  </div>
  `;
  phoneInfoContainer.innerHTML = phoneInfoTemplate;

  phone_details.showModal();
};
