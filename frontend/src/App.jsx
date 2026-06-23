import { useState } from "react"

function App() {
    const [sleepHours, setSleepHours] = useState(0);
    const [waterMl, setWaterMl] = useState(0);
    const [steps, setSteps] = useState(0);
    const [selectedMood, setSelectedMood ]= useState("VERY GOOD");
    const [selectedEnergy, setSelectedEnergy]= useState("VERY HIGH");


    return (
        <div>
            <h1>BloomIT</h1>
            <label> How many hours slept? :
            <input
                type="number"
                value={sleepHours}
                onChange={(e) => setSleepHours(e.target.value)}
            />
            </label>
            <hr />
            <label> How many water? :
            <input
                type="number"
                value={waterMl}
                onChange={(e) => setWaterMl(e.target.value)}
            />
            </label>
            <hr />
            <label> How many steps? :
            <input
                type="number"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
            />
            </label>
            <hr />
            <label> Pick a your mood :
            <select
              value={selectedMood}
              onChange={e => setSelectedMood(e.target.value)}
              >
              <option value="VERY_BAD">VERY_BAD</option>
              <option value="BAD">BAD</option>
              <option value="NEUTRAL">NEUTRAL</option>
              <option value="GOOD">GOOD</option>
              <option value="VERY_GOOD">VERY_GOOD</option>
            </select>
            </label>
            <hr />
            <label> Pick a your energy :
            <select
              value={selectedEnergy}
              onChange={e => setSelectedEnergy(e.target.value)}
              >
              <option value="VERY_LOW">VERY_LOW</option>
              <option value="LOW">LOW</option>
              <option value="MODERATE">MODERATE</option>
              <option value="HIGH">HIGH</option>
              <option value="VERY_HIGH">VERY_HIGH</option>
            </select>
            </label>
        </div>
    )
}

export default App