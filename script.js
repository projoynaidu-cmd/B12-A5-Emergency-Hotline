// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Sample Data for cards (Bangladesh Emergency & Helpline Services)
    const emergencyServices = [
        {
            name: "Police",
            englishName: "Police",
            hotlineNumber: "999",
            category: "Emergency",
            icon: "assets/police.png"
        },
        {
            name: "Fire Service",
            englishName: "Fire Service",
            hotlineNumber: "999",
            category: "Emergency",
             icon: "assets/fire-service.png"
        },
        {
            name: "Ambulance",
            englishName: "Ambulance",
            hotlineNumber: "999",
            category: "Medical",
            icon: "assets/ambulance.png"
        },
        {
            name: "National Helpline",
            englishName: "National Helpline",
            hotlineNumber: "333",
            category: "Government",
            icon: "assets/help-line.png"
        },
        {
            name: "Child Helpline",
            englishName: "Child Helpline",
            hotlineNumber: "1098",
            category: "Social",
            icon: "assets/child.png"
        },
        {
            name: "RAB",
            englishName: "Rapid Action Battalion",
            hotlineNumber: "101",
            category: "Security",
            icon: "assets/RAB.png"
        },
        {
            name: "Women & Children Abuse Helpline",
            englishName: "Women & Children Helpline",
            hotlineNumber: "109",
            category: "Social",
            icon: "assets/women.png"
        },
        {
            name: "Anti-Corruption Commission",
            englishName: "Anti-Corruption Commission",
            hotlineNumber: "106",
            category: "Government",
             icon: "assets/bribe.png"
        },
        {
            name: "Health Line",
            englishName: "Health Service",
            hotlineNumber: "16263",
            category: "Medical",
            icon: "assets/Healthline.png"
        },
        {
            name: "Suicide Prevention",
            englishName: "Suicide Prevention",
            hotlineNumber: "199",
            category: "Mental Health",
             icon: "assets/suicide.png"
        }
    ];

    // DOM elements
    const heartEl = document.getElementById("heart-count");
    const coinEl = document.getElementById("coin-count");
    const copyEl = document.getElementById("copy-count");
    const historyListEl = document.querySelector(".history-list");
    const clearHistoryEl = document.querySelector(".clear-history-btn");
    const cardSection = document.querySelector(".card-section");

    // State variables
    let coins = 150;
    let hearts = 0;
    let copyCount = 0;

    // Function to render emergency service cards
    function renderCards() {
        cardSection.innerHTML = ""; // Clear existing cards

        emergencyServices.forEach(service => {
            const cardEl = document.createElement("div");
            cardEl.classList.add("card");

            cardEl.innerHTML = `
        <div class="w-full flex justify-between items-center mb-3">
          <img class="w-12 h-12 object-contain rounded-full cursor-pointer" src="${service.icon}" alt="${service.name} Icon">
          <span class="heart-icon cursor-pointer text-red-500 text-xl" data-service-name="${service.name}">
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
          <button 
            class="copy-btn bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded-md transition" 
            data-number="${service.hotlineNumber}">
            Copy
          </button>
          <button 
            class="call-btn bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded-md transition" 
            data-name="${service.name}" data-number="${service.hotlineNumber}">
            Call
          </button>
        </div>
      `;

            cardSection.appendChild(cardEl);
        });
        addCardListeners();
        copyHotLineNumber();
        callService();
        clearHistory();



    }

    renderCards();

    // Function to handle card button clicks
    function addCardListeners() {
        document.querySelectorAll(".heart-icon")
            .forEach(icon => {
                icon.addEventListener("click", () => {
                    hearts++;
                    heartEl.innerHTML = `<i class="fa-regular fa-heart text-red-500"></i> ${hearts}`;
                });

            })
    }

    // Function to copy hotline number to clipboard
    function copyHotLineNumber() {
        document.querySelectorAll(".copy-btn")
            .forEach(btn => {
                btn.addEventListener("click", function () {
                    const numberToCopy = btn.getAttribute("data-number");

                    navigator.clipboard.writeText(numberToCopy)
                        .then(() => {
                            copyCount++;
                            copyEl.textContent = `📋 ${copyCount}`;
                            btn.textContent = "Copied";
                            btn.disabled = true;
                            alert(`Copied ${numberToCopy} to clipboard`);

                            // 2 seconds later
                            setTimeout(() => {
                                btn.textContent = "Copy";
                                btn.disabled = false;
                            }, 2000);
                        })

                        .catch(err => {
                            // error handle
                            console.error("❌ Failed to copy number:", err);
                            alert("⚠️ Sorry, could not copy the number. Please try again.");
                        })

                })
            })
    }

    //call button functionality 
    function callService() {
        document.querySelectorAll(".call-btn").forEach(btn => {
            btn.addEventListener("click", function () {
                const name = btn.getAttribute("data-name");
                const number = btn.getAttribute("data-number");

                if (coins > 20) {
                    coins -= 20;
                    coinEl.textContent = `💰 ${coins}`;
                    alert(`Calling ${name} at ${number}`);
                     addToHistory(name, number);
                } else {
                    alert("You don't have enough coins to make this call.");
                }
            })
        })
    }

    // Function to add a service to the history section
    function addToHistory (name, number){
        const historyItem = document.createElement ("li");
        historyItem.textContent = `${name}: ${number}`;
        historyListEl.appendChild(historyItem);

    }
    // Clear History button functionality
    function clearHistory() {
       clearHistoryEl.addEventListener("click", function(){
        historyListEl.innerHTML = "";
       })
        
    }
    
});

