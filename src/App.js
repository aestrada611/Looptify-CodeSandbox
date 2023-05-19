import { useState } from "react";
import "./styles.css";

/*
  Custom Icecream order

  Challenge:
  You are making an website where customers can order icecream with addons. 
  Render the all flavours with checkboxes, 
  ie: 
  [] Strawberry Icecream
  [] Vanilla Icecream
  ...

  Upon checking the icecream, render ADDONS, if there are any
  ie:
  [x] Strawberry Icecream ([] Double Strawberry, [] Berry overload)
  

  Acceptance:
  On click order, print order array

  * user can choose to order multiple icecream, each icecream with its own addons
  * style does not matter


*/

const iceCreamData = [
  {
    id: 0,
    label: "Strawberry Icecream",
    type: "FLAVOUR",
    data: [
      {
        id: 0,
        label: "Double Strawberry",
        type: "ADDON"
      },
      {
        id: 1,
        label: "Berry overload",
        type: "ADDON"
      }
    ]
  },
  {
    id: 1,
    label: "Vanilla Icecream",
    type: "FLAVOUR",
    data: [
      {
        id: 0,
        label: "Sweet 10x",
        type: "ADDON"
      },
      {
        id: 1,
        label: "Splash of Bitter",
        type: "ADDON"
      }
    ]
  },
  {
    id: 2,
    label: "Chocolate Icecream",
    type: "FLAVOUR",
    data: [
      {
        id: 0,
        label: "Rainbow Sprinkles",
        type: "ADDON"
      },
      {
        id: 1,
        label: "Choco Sprinkles",
        type: "ADDON"
      }
    ]
  },
  {
    id: 3,
    label: "Macha Icecream",
    type: "FLAVOUR",
    data: []
  },
  {
    id: 4,
    label: "Mixed Flavours",
    type: "FLAVOUR",
    data: [
      {
        id: 0,
        label: "Oreo Cookies",
        type: "ADDON"
      },
      {
        id: 1,
        label: "Vanilla Waffers",
        type: "ADDON"
      }
    ]
  }
];

function IceCreamSelect() {
  const [selectedIceCreams, setSelectedIceCreams] = useState([]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedIceCreams((prevSelectedIceCreams) => [
        ...prevSelectedIceCreams,
        name
      ]);
    } else {
      setSelectedIceCreams((prevSelectedIceCreams) =>
        prevSelectedIceCreams.filter((iceCream) => iceCream !== name)
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedIceCreams);
  };

  return (
    <div className="IceCreamSelect">
      <form onSubmit={handleSubmit}>
        {iceCreamData.map((flavor) => (
          <div key={flavor.id}>
            <label>
              <input
                type="checkbox"
                name={flavor.label}
                checked={selectedIceCreams.includes(flavor.label)}
                onChange={handleCheckboxChange}
              />
              {flavor.label}
            </label>
            {selectedIceCreams.includes(flavor.label) && (
              <div>
                {flavor.data.length > 0 &&
                  flavor.data.map((addon) => (
                    <label key={addon.id}>
                      <input
                        type="checkbox"
                        name={addon.label}
                        checked={selectedIceCreams.includes(addon.label)}
                        onChange={handleCheckboxChange}
                      />
                      {addon.label}
                    </label>
                  ))}
              </div>
            )}
          </div>
        ))}
        <button type="submit">Order Icecream</button>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <IceCreamSelect />
    </div>
  );
}
