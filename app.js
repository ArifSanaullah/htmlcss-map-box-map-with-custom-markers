const countries = [
  {
    countryCode: "BJ",
    name: "Benin",
    mobileTransfers: ["MTN", "Airtel"],
    bankDeposits: [
      "UBA",
      "CoraBank",
      "CBAO",
      "Ecobank",
      "BAIC",
      "SIC",
      "Coris",
      "Bank",
      "Bank of Africa",
    ],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: ["All banks"],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 32.3913,
    longitude: 84.8229,
    flag: "../../images/countriesFlags/benin.png",
  },
  {
    countryCode: "BW",
    name: "Botswana",
    mobileTransfers: ["Moov"],
    bankDeposits: [],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: [],
    flag: "../../images/countriesFlags/botswana.png",
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 22.3285,
    longitude: 24.6849,
  },
  {
    countryCode: "BF",
    name: "Burkina Faso",
    mobileTransfers: ["MTN"],
    bankDeposits: [
      "UBA",
      "CoraBank",
      "CBAO",
      "Ecobank",
      "BAIC",
      "SIC",
      "Coris",
      "Bank",
      "Bank of Africa",
    ],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: ["All banks"],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 12.2383,
    longitude: 1.5616,
    flag: "../../images/countriesFlags/burkinaFaso.png",
  },
  {
    countryCode: "BI",
    name: "Burundi",
    flag: "../../images/countriesFlags/burundi.png",
    mobileTransfers: ["MTN", "Econet"],
    bankDeposits: [],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: [],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 3.3731,
    longitude: 29.9189,
  },
  {
    countryCode: "CM",
    name: "Cameroon",
    flag: "../../images/countriesFlags/cameroon.png",
    mobileTransfers: ["MTN", "Orange", "Nexttel"],
    bankDeposits: [],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: [],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 7.3697,
    longitude: 12.3547,
  },
  {
    countryCode: "TD",
    name: "Chad",
    flag: "../../images/countriesFlags/chad.png",
    mobileTransfers: ["Airtel"],
    bankDeposits: [],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: [],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 15.4542,
    longitude: 18.7322,
  },
  {
    countryCode: "ML",
    name: "Mali",
    flag: "../../images/countriesFlags/mali.png",
    mobileTransfers: ["Orange", "Africell"],
    bankDeposits: ["BNDA", "OraBank", "Ecobank Bank of Africa", "BSIC"],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: ["All banks"],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 17.5707,
    longitude: 3.9962,
  },
  {
    countryCode: "CG",
    name: "Congo",
    flag: "../../images/countriesFlags/congo.png",
    mobileTransfers: ["MTN", "Airtel"],
    bankDeposits: [],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: [],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 4.0383,
    longitude: 21.7587,
  },
  {
    countryCode: "CI",
    name: "Cote D'ivor",
    flag: "../../images/countriesFlags/coteDivoire.png",
    mobileTransfers: ["Airtel"],
    bankDeposits: [
      "Citibank",
      "Ecobank",
      "Bank of Africa",
      "CIBC",
      "UBA",
      "GTA bank",
      "Coris bank ",
    ],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: ["All banks"],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 7.54,
    longitude: 5.5471,
  },
  {
    countryCode: "GA",
    name: "Gambia",
    flag: "../../images/countriesFlags/gambia.png",
    mobileTransfers: ["MTN"],
    bankDeposits: [],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: [],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 13.4432,
    longitude: 15.3101,
  },
  {
    countryCode: "GH",
    name: "Ghana",
    flag: "../../images/countriesFlags/ghana.png",
    mobileTransfers: ["Airtel", "MTN", "Togo", "Vodafone"],
    bankDeposits: [
      "Access bank",
      "Ecobank",
      "Bank of Africa",
      "CIBC",
      "UBA",
      "BSIC",
      "Cal Bank",
      "GTA bank",
      "Coris bank",
    ],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: ["All banks"],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 7.9465,
    longitude: 1.0232,
  },
  {
    countryCode: "GN",
    name: "Guinea ",
    flag: "../../images/countriesFlags/guinea.png",
    mobileTransfers: ["MTN", "Orange", "Cellcom"],
    bankDeposits: ["BAO", "Ecobank", "Orabank"],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: [],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 9.9456,
    longitude: 9.6966,
  },
  {
    countryCode: "KE",
    name: "Kenya",
    flag: "../../images/countriesFlags/kenya.png",
    mobileTransfers: ["Safaricom", "Orange", "Airtel"],
    bankDeposits: [],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: [],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 0.0236,
    longitude: 37.9062,
  },
  {
    countryCode: "MW",
    name: "Malawi",
    flag: "../../images/countriesFlags/malawi.png",
    mobileTransfers: ["Vodafone"],
    bankDeposits: [],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: [],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 13.2543,
    longitude: 34.3015,
  },
  {
    countryCode: "NE",
    name: "Niger",
    flag: "../../images/countriesFlags/niger.png",
    mobileTransfers: ["MTN", "Moov", "Airtel"],
    bankDeposits: [
      "BIA Niger",
      "CoraBank",
      "CBAO",
      "Ecobank",
      "Soni bank",
      "BSIC",
      "Coris Bank ",
      "Bank of Africa",
      "BIM s.a",
    ],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: ["All banks"],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 17.6078,
    longitude: 8.0817,
  },
  {
    countryCode: "NG",
    name: "Nigeria",
    flag: "../../images/countriesFlags/nigeria.png",
    mobileTransfers: ["Etisalat", "MTN", "Glo", "Airtel"],
    bankDeposits: [],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: [],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 9.082,
    longitude: 8.6753,
  },
  {
    countryCode: "SN",
    name: "Senegal",
    flag: "../../images/countriesFlags/senegal.png",
    mobileTransfers: ["Tigo", "Orange"],
    bankDeposits: ["BICIS", "BIMAO", "Bank of Africa"],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: ["All banks"],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 14.4974,
    longitude: 14.4524,
  },
  {
    countryCode: "TZ",
    name: "Tanzania",
    flag: "../../images/countriesFlags/tanzania.png",
    mobileTransfers: ["Tigo"],
    bankDeposits: [],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: [],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 6.369,
    longitude: 34.8888,
  },
  {
    countryCode: "NPL",
    name: "Nepal",
    flag: "../../images/countriesFlags/nepal.png",
    mobileTransfers: [],
    bankDeposits: ["All banks"],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: ["All banks"],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 28.3949,
    longitude: 84.124,
  },
  {
    countryCode: "UG",
    name: "Uganda",
    flag: "../../images/countriesFlags/uganda.png",
    mobileTransfers: ["MTN", "Airtel"],
    bankDeposits: [],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: [],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 1.3733,
    longitude: 32.2903,
  },
  {
    countryCode: "ZM",
    name: "Zambia",
    flag: "../../images/countriesFlags/zambia.png",
    mobileTransfers: ["MTN"],
    bankDeposits: [],
    ritaWallet: "Yes",
    Agent: [],
    cashPickups: [],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 13.1339,
    longitude: 27.8493,
  },
  {
    countryCode: "ZW",
    name: "Zimbabwe",
    flag: "../../images/countriesFlags/zimbabwe.png",
    mobileTransfers: ["Econet"],
    bankDeposits: ["BANC abc"],
    ritaWallet: "Yes",
    Agent: ["Kebab Enterprise", "Avondale", "Borrowdale", "Newlands"],
    cashPickups: ["BANC abc"],
    ritaCash: ["CAD", "USD", "GBP", "EUR", "RAND"],
    latitude: 19.0154,
    longitude: 29.1549,
  },
];

//store this token in .env
mapboxgl.accessToken =
  "pk.eyJ1IjoiYXJpZnNhbmF1bGxhaCIsImEiOiJja2JxM2VpOTUyaXEwMnJxaW4xc2M0bXc1In0.XEBz70w4rf_7X3qeHZP8PQ";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v9",
  center: [18.7322, 15.4542],
  zoom: 3.5,
});

const handleFlagHover = () => {
  const flags = document.getElementsByClassName("flag");
  for (const flag of flags) {
    if (!flag.classList.contains("hovered")) {
      flag.classList.add("hovered");
    }
  }
};

const handleY = () => {
  const flags = document.getElementsByClassName("flag");
  for (const flag of flags) {
    if (flag.classList.contains("hovered")) {
      const { y } = flag.getBoundingClientRect();
      if (y > 320) {
        const details = flag.nextElementSibling;
        details.classList.add("mb200");
      }
    }
  }
};

const handleX = () => {
  const flags = document.getElementsByClassName("flag");
  for (const flag of flags) {
    if (flag.classList.contains("hovered")) {
      const { x } = flag.getBoundingClientRect();
      if (x > 960) {
        const details = flag.nextElementSibling;
        details.classList.add("mr200");
      }
    }
  }
};

const handleFlagLeave = () => {
  const flags = document.getElementsByClassName("flag");
  for (const flag of flags) {
    if (flag.classList.contains("hovered")) {
      flag.classList.remove("hovered");
    }
  }
};

const handleFlagEnter = () => {
  handleFlagHover();
  handleY();
  handleX();
};

countries.map((country) => {
  const markerContainer = document.createElement("div");
  markerContainer.classList.add("country");
  const marker = document.createElement("div");
  marker.classList.add("marker");

  const flag = document.createElement("img");
  flag.src = country.flag;
  flag.alt = country.name;
  flag.classList.add("flag");

  const details = document.createElement("div");
  details.classList.add("country-details");
  const ps = Object.entries(country).filter(
    (e) =>
      e[0] !== "countryCode" &&
      e[0] !== "flag" &&
      e[0] !== "longitude" &&
      e[0] !== "latitude"
  );

  ps.forEach((entry) => {
    const para = document.createElement("p");
    para.classList.add("country-detail");

    const key = entry[0].replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase();
    let value;
    if (entry[1] && typeof entry[1] === "string") {
      value = entry[1];
    } else if (entry[1].length && typeof entry[1] === "object") {
      value = entry[1].join(", ");
    } else {
      value = "none";
    }

    para.innerText = `${key}: ${value}`;
    details.appendChild(para);
  });

  marker.appendChild(flag);
  marker.appendChild(details);
  markerContainer.appendChild(marker);

  new mapboxgl.Marker(markerContainer)
    .setLngLat([country.longitude, country.latitude])
    .addTo(map);
});

map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

const flags = document.querySelectorAll(".flag");
flags.forEach((flag) => flag.addEventListener("mouseenter", handleFlagEnter));
flags.forEach((flag) => flag.addEventListener("mouseleave", handleFlagLeave));
