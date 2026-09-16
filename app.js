const places = [
  {
    id: "fuglen",
    category: "coffee",
    label: "Coffee",
    title: "Fuglen",
    neighborhood: "Universitetsgata",
    time: "09:00",
    duration: "45 min",
    distance: "0.8 km",
    image: "Assets/fuglen.jpg",
    description: "A soft landing for the day: serious coffee, old chairs, and a room that rewards lingering.",
    position: { x: 43, y: 47 },
    coords: "59°55′N · 10°44′E",
  },
  {
    id: "stockfleths",
    category: "coffee",
    label: "Coffee",
    title: "Stockfleths",
    neighborhood: "Prinsens gate",
    time: "09:30",
    duration: "35 min",
    distance: "0.5 km",
    image: "Assets/stockfleths.jpg",
    description: "Start with a clean cup and a window seat before the city turns its lights all the way on.",
    position: { x: 53, y: 59 },
    coords: "59°54′N · 10°45′E",
  },
  {
    id: "kaffebrenneriet",
    category: "coffee",
    label: "Coffee",
    title: "Kaffebrenneriet",
    neighborhood: "Rådhusgata",
    time: "10:00",
    duration: "40 min",
    distance: "0.9 km",
    image: "Assets/kaffebrenneriet.jpg",
    description: "A dependable Oslo ritual: warm light, good beans, and a first look at the harbor.",
    position: { x: 64, y: 65 },
    coords: "59°54′N · 10°44′E",
  },
  {
    id: "cafe-sor",
    category: "coffee",
    label: "Coffee",
    title: "Cafe Sør",
    neighborhood: "Torggata",
    time: "10:30",
    duration: "50 min",
    distance: "1.2 km",
    image: "Assets/cafe-sor.jpg",
    description: "Color, conversation, and a good excuse to take the long way through the center.",
    position: { x: 40, y: 59 },
    coords: "59°55′N · 10°45′E",
  },
  {
    id: "engebret",
    category: "coffee",
    label: "Coffee",
    title: "Engebret Café",
    neighborhood: "Bankplassen",
    time: "10:00",
    duration: "50 min",
    distance: "1 km",
    image: "Assets/engebret-cafe.jpg",
    description: "A little history with your coffee, tucked behind the fortress and the harbor air.",
    position: { x: 69, y: 54 },
    coords: "59°54′N · 10°44′E",
  },
  {
    id: "tim-wendelboe",
    category: "coffee",
    label: "Coffee",
    title: "Tim Wendelboe",
    neighborhood: "Grünerløkka",
    time: "09:30",
    duration: "45 min",
    distance: "1.8 km",
    image: "Assets/tim-wendelboe.jpg",
    description: "The pilgrimage for people who want to taste where the coffee came from.",
    position: { x: 29, y: 29 },
    coords: "59°55′N · 10°45′E",
  },
  {
    id: "supreme-roastworks",
    category: "coffee",
    label: "Coffee",
    title: "Supreme Roastworks",
    neighborhood: "Thorsov",
    time: "09:30",
    duration: "45 min",
    distance: "2.3 km",
    image: "Assets/supreme-roastworks.jpg",
    description: "Go north for a focused cup and a neighborhood that feels lived-in from the first sip.",
    position: { x: 24, y: 18 },
    coords: "59°56′N · 10°45′E",
  },
  {
    id: "opera-house",
    category: "attraction",
    label: "Place",
    title: "Oslo Opera House",
    neighborhood: "Bjørvika",
    time: "11:30",
    duration: "1 hr",
    distance: "1.1 km",
    image: "Assets/oslo-opera-house.jpg",
    description: "Walk the roof, face the water, and let the building change your idea of a street.",
    position: { x: 77, y: 71 },
    coords: "59°54′N · 10°45′E",
  },
  {
    id: "vigeland",
    category: "attraction",
    label: "Place",
    title: "Vigeland Sculpture Park",
    neighborhood: "Frogner",
    time: "12:00",
    duration: "90 min",
    distance: "3.1 km",
    image: "Assets/vigeland-park.jpg",
    description: "A long green pause where every path ends in something a little strange and very human.",
    position: { x: 67, y: 24 },
    coords: "59°55′N · 10°42′E",
  },
  {
    id: "akershus",
    category: "attraction",
    label: "Place",
    title: "Akershus Fortress",
    neighborhood: "Kvadraturen",
    time: "12:30",
    duration: "75 min",
    distance: "1.4 km",
    image: "Assets/akershus-fortress.jpg",
    description: "Stone, sea, and the best excuse to stand still above the harbor for a while.",
    position: { x: 72, y: 61 },
    coords: "59°54′N · 10°44′E",
  },
  {
    id: "munch",
    category: "attraction",
    label: "Place",
    title: "MUNCH Museum",
    neighborhood: "Bjørvika",
    time: "13:30",
    duration: "90 min",
    distance: "1.5 km",
    image: "Assets/munch-museum.jpg",
    description: "Come for one painting, stay for the full vertical sweep of the fjord outside.",
    position: { x: 83, y: 62 },
    coords: "59°54′N · 10°45′E",
  },
  {
    id: "royal-palace",
    category: "attraction",
    label: "Place",
    title: "Royal Palace",
    neighborhood: "Slottsparken",
    time: "14:00",
    duration: "60 min",
    distance: "1.4 km",
    image: "Assets/royal-palace.jpg",
    description: "Take the park path through the middle of town and let the scale slow you down.",
    position: { x: 52, y: 39 },
    coords: "59°55′N · 10°43′E",
  },
  {
    id: "kok",
    category: "sauna",
    label: "Sauna",
    title: "KOK Oslo",
    neighborhood: "Langkaia",
    time: "16:00",
    duration: "90 min",
    distance: "1.5 km",
    image: "Assets/kok-oslo.jpg",
    description: "Heat, harbor views, and a cold plunge that makes the whole day feel newly possible.",
    position: { x: 83, y: 78 },
    coords: "59°54′N · 10°45′E",
  },
  {
    id: "salt",
    category: "sauna",
    label: "Sauna",
    title: "SALT",
    neighborhood: "Vippetangen",
    time: "16:30",
    duration: "90 min",
    distance: "2.2 km",
    image: "Assets/salt.webp",
    description: "A cultural bonfire by the sea where the sauna is only one part of the ritual.",
    position: { x: 91, y: 67 },
    coords: "59°54′N · 10°43′E",
  },
  {
    id: "oslo-badstuforening",
    category: "sauna",
    label: "Sauna",
    title: "Oslo Badstuforening",
    neighborhood: "Sukkerbiten",
    time: "17:00",
    duration: "90 min",
    distance: "1.8 km",
    image: "Assets/oslo-badstuforening.webp",
    description: "A floating sauna with a view that keeps the conversation going between swims.",
    position: { x: 88, y: 83 },
    coords: "59°54′N · 10°45′E",
  },
  {
    id: "fjord-sauna",
    category: "sauna",
    label: "Sauna",
    title: "Oslo Fjord Sauna",
    neighborhood: "Tjuvholmen",
    time: "17:30",
    duration: "90 min",
    distance: "2.1 km",
    image: "Assets/oslo-fjord-sauna.jpg",
    description: "A quiet dock, the city behind you, and a final dip with the ferries passing by.",
    position: { x: 73, y: 44 },
    coords: "59°54′N · 10°43′E",
  },
  {
    id: "the-well",
    category: "sauna",
    label: "Sauna",
    title: "The Well",
    neighborhood: "Sofiemyr",
    time: "18:00",
    duration: "Half day",
    distance: "15 km",
    image: "Assets/the-well.jpg",
    description: "Go beyond the city for a slower, fuller reset when the whole day is yours.",
    position: { x: 28, y: 86 },
    coords: "59°48′N · 10°47′E",
  },
];

const state = {
  filter: "all",
  search: "",
  selectedId: null,
  day: [],
};

const elements = {
  list: document.querySelector("#place-list"),
  markers: document.querySelector("#map-markers"),
  detail: document.querySelector("#place-detail"),
  slots: document.querySelector("#day-slots"),
  resultCount: document.querySelector("#result-count"),
  empty: document.querySelector("#empty-state"),
  search: document.querySelector("#search-input"),
  coordinates: document.querySelector("#selected-coordinates"),
};

const categoryNames = {
  coffee: "Coffee",
  attraction: "Place",
  sauna: "Sauna",
};

function filteredPlaces() {
  return places.filter((place) => {
    const matchesFilter = state.filter === "all" || place.category === state.filter;
    const searchTarget = `${place.title} ${place.neighborhood} ${place.category}`.toLowerCase();
    return matchesFilter && searchTarget.includes(state.search.toLowerCase());
  });
}

function placeById(id) {
  return places.find((place) => place.id === id);
}

function renderLibrary() {
  const visiblePlaces = filteredPlaces();
  elements.list.innerHTML = visiblePlaces
    .map(
      (place) => `
        <button class="place-card ${place.id === state.selectedId ? "is-selected" : ""}" type="button" data-place-id="${place.id}" aria-pressed="${place.id === state.selectedId}">
          <img class="place-thumb" src="${place.image}" alt="" loading="lazy" />
          <span class="place-card-copy">
            <h4>${place.title}</h4>
            <p>${place.neighborhood} · ${place.label}</p>
          </span>
          <span class="place-card-meta"><strong>${place.time}</strong>${place.duration}</span>
        </button>
      `,
    )
    .join("");

  elements.empty.hidden = visiblePlaces.length > 0;
  elements.resultCount.textContent = `${visiblePlaces.length} ${visiblePlaces.length === 1 ? "place" : "places"} in the edit`;
  elements.list.querySelectorAll("[data-place-id]").forEach((card) => {
    card.addEventListener("click", () => selectPlace(card.dataset.placeId));
  });
}

function renderMarkers() {
  const visiblePlaces = filteredPlaces();
  elements.markers.innerHTML = visiblePlaces
    .map(
      (place, index) => `
        <button
          class="map-marker ${place.id === state.selectedId ? "is-selected" : ""} ${state.day.includes(place.id) ? "is-in-day" : ""}"
          type="button"
          data-place-id="${place.id}"
          data-category="${place.category}"
          style="left: ${place.position.x}%; top: ${place.position.y}%"
          aria-label="${place.title}, ${place.label}"
          title="${place.title}"
        >${String(index + 1).padStart(2, "0")}</button>
      `,
    )
    .join("");

  elements.markers.querySelectorAll("[data-place-id]").forEach((marker) => {
    marker.addEventListener("click", () => selectPlace(marker.dataset.placeId));
  });
}

function renderDetail() {
  const place = placeById(state.selectedId);
  if (!place) {
    elements.detail.innerHTML = `
      <div class="detail-empty">
        <div>
          <strong>Make it yours.</strong>
          <p>Choose a pin to see why it belongs in the day, then add it to your route.</p>
        </div>
        <span class="detail-meta">Map / detail</span>
      </div>
    `;
    elements.coordinates.textContent = "Choose a stop to inspect it.";
    return;
  }

  const added = state.day.includes(place.id);
  elements.detail.innerHTML = `
    <div class="detail-content">
      <div>
        <span class="detail-type">${place.label} · ${place.neighborhood}</span>
        <h4>${place.title}</h4>
        <p>${place.description}</p>
      </div>
      <div class="detail-actions">
        <button class="add-button ${added ? "is-added" : ""}" type="button" id="add-to-day">${added ? "Added to your day ✓" : "Add to your day +"}</button>
        <span class="detail-meta">${place.distance} · ${place.duration}</span>
      </div>
    </div>
  `;
  elements.coordinates.textContent = place.coords;
  document.querySelector("#add-to-day").addEventListener("click", () => toggleDay(place.id));
}

function renderDay() {
  const slots = [
    { time: "Morning", prompt: "Find your first cup." },
    { time: "Afternoon", prompt: "Leave room for a detour." },
    { time: "Evening", prompt: "End somewhere warm." },
  ];

  elements.slots.innerHTML = slots
    .map((slot, index) => {
      const place = placeById(state.day[index]);
      return `
        <div class="day-slot">
          <span class="slot-time">${slot.time}</span>
          ${
            place
              ? `<div class="slot-place"><span><strong>${place.title}</strong><span>${place.label} · ${place.neighborhood}</span></span><button class="slot-remove" type="button" aria-label="Remove ${place.title} from your day" data-remove-id="${place.id}">×</button></div>`
              : `<span class="slot-empty">${slot.prompt}</span>`
          }
        </div>
      `;
    })
    .join("");

  elements.slots.querySelectorAll("[data-remove-id]").forEach((button) => {
    button.addEventListener("click", () => toggleDay(button.dataset.removeId));
  });
}

function render() {
  renderLibrary();
  renderMarkers();
  renderDetail();
  renderDay();
}

function selectPlace(id) {
  state.selectedId = id;
  render();
  const card = document.querySelector(`[data-place-id="${id}"].place-card`);
  if (card && window.matchMedia("(max-width: 930px)").matches) {
    card.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
}

function toggleDay(id) {
  if (state.day.includes(id)) {
    state.day = state.day.filter((dayId) => dayId !== id);
  } else if (state.day.length < 3) {
    state.day.push(id);
  } else {
    state.day = [state.day[1], state.day[2], id];
  }
  state.selectedId = id;
  render();
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((filterButton) => {
      const active = filterButton === button;
      filterButton.classList.toggle("is-active", active);
      filterButton.setAttribute("aria-pressed", String(active));
    });
    render();
  });
});

elements.search.addEventListener("input", (event) => {
  state.search = event.target.value.trim();
  render();
});

document.querySelector("#clear-search").addEventListener("click", () => {
  state.search = "";
  elements.search.value = "";
  render();
  elements.search.focus();
});

document.querySelector("#clear-day").addEventListener("click", () => {
  state.day = [];
  render();
});

document.querySelector("#reset-map").addEventListener("click", () => {
  state.filter = "all";
  state.search = "";
  state.selectedId = null;
  elements.search.value = "";
  document.querySelectorAll("[data-filter]").forEach((button) => {
    const active = button.dataset.filter === "all";
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  render();
});

document.querySelector("#share-plan").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  const plan = state.day.map((id) => placeById(id)?.title).filter(Boolean).join(" → ");
  const shareText = plan ? `My Oslo Adventure: ${plan}` : "My Oslo Adventure starts with a blank page.";
  try {
    await navigator.clipboard.writeText(shareText);
    button.innerHTML = "Day link copied ✓";
  } catch {
    button.innerHTML = "Day ready to share ✓";
  }
  window.setTimeout(() => {
    button.innerHTML = 'Copy day link <span aria-hidden="true">↗</span>';
  }, 2200);
});

render();
