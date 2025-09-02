// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {

    // Sample Data for cards (Bangladesh Emergency & Helpline Services)
    const emergencyServices = [
        {
            name: "Police",
            englishName: "Police",
            hotlineNumber: "999",
            category: "Emergency",
            // icon: "https://i.imgur.com/police.png"
        },
        {
            name: "Fire Service",
            englishName: "Fire Service",
            hotlineNumber: "999",
            category: "Emergency",
            //icon: "https://i.imgur.com/fire.png"
        },
        {
            name: "Ambulance",
            englishName: "Ambulance",
            hotlineNumber: "999",
            category: "Medical",
            // icon: "https://i.imgur.com/ambulance.png"
        },
        {
            name: "National Helpline",
            englishName: "National Helpline",
            hotlineNumber: "333",
            category: "Government",
            //  icon: "https://i.imgur.com/helpline.png"
        },
        {
            name: "Child Helpline",
            englishName: "Child Helpline",
            hotlineNumber: "1098",
            category: "Social",
            //  icon: "https://i.imgur.com/child.png"
        },
        {
            name: "RAB",
            englishName: "Rapid Action Battalion",
            hotlineNumber: "101",
            category: "Security",
            //icon: "https://i.imgur.com/rab.png"
        },
        {
            name: "Women & Children Abuse Helpline",
            englishName: "Women & Children Helpline",
            hotlineNumber: "109",
            category: "Social",
            // icon: "https://i.imgur.com/women.png"
        },
        {
            name: "Anti-Corruption Commission",
            englishName: "Anti-Corruption Commission",
            hotlineNumber: "106",
            category: "Government",
            // icon: "https://i.imgur.com/acc.png"
        },
        {
            name: "Health Line",
            englishName: "Health Service",
            hotlineNumber: "16263",
            category: "Medical",
            // icon: "https://i.imgur.com/health.png"
        },
        {
            name: "Suicide Prevention",
            englishName: "Suicide Prevention",
            hotlineNumber: "199",
            category: "Mental Health",
            // icon: "https://i.imgur.com/suicide.png"
        }
    ];

    const heartEl = document.getElementById('heart-count');
    const coinEl = document.getElementById('coin-count');
    const copyEl = document.getElementById('copy-count');
    const historyListEl = document.querySelector(".history-list");
    const clearHistoryEl = document.querySelector(".clear-history-btn");
    const cardSection = document.querySelector('.card-section');
    //console.log(heartEl, coinEl, copyEl, historyListEl, clearHistoryEl,cardSection);


    // State variables
    let coins = 100;
    let hearts = 0;
    let copyCount = 0;


    // Function to update the UI
    function renderCards() {
        cardSection.innerHTML = ''; // Clear existing cards
        emergencyServices.forEach(service => {
            const cardEl = document.createElement("div");
            cardEl.classList.add("card");
            cardEl.innerHTML = `
  <div class="w-full flex justify-between items-center mb-3 shadow-md p-4 rounded-md bg-red-50">
      <    <img class="w-12 h-12 object-contain" src="${service.icon}" alt="${service.name} Icon">
span class="heart-icon cursor-pointer text-red-500 text-xl" data-service-name="${service.name}">
        <i class="fa-regular fa-heart"></i>
      </span>
  </div>

  <h4 class="service-name text-lg font-bold text-gray-800">${service.name}</h4>
  <p class="english-name text-sm text-gray-500">${service.englishName}</p>
  <p class="hotline-number text-base font-semibold text-green-600 mt-1">${service.hotlineNumber}</p>
  <span class="category-badge inline-block mt-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
    ${service.category}
  </span>

  <div class="card-buttons flex gap-3 mt-4">
      <button class="copy-btn bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded-md transition" data-number="${service.hotlineNumber}">
        Copy
      </button>
      <button class="call-btn bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded-md transition" 
        data-name="${service.name}" data-number="${service.hotlineNumber}">
        Call
      </button>
  </div>
`;
            cardSection.appendChild(cardEl);

        })


    }
    // console.log(cardSection);
    // console.log(emergencyServices)
    // // renderCards();
    console.log(renderCards());


});