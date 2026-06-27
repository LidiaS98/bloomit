import { useState } from "react"
import "./styles/styles.css"
import HabitForm from "./components/HabitForm.jsx"
import HabitsList from "./components/HabitsList.jsx"

const API = "http://localhost:8080"

const moodEmoji = {
  VERY_BAD: "😞", BAD: "😕", NEUTRAL: "😐", GOOD: "🙂", VERY_GOOD: "😄"
}
const energyEmoji = {
  VERY_LOW: "🪫", LOW: "😴", MODERATE: "⚡", HIGH: "🔋", VERY_HIGH: "🚀"
}

export default function App() {
  const [sleepHours, setSleepHours] = useState(0)
  const [waterMl, setWaterMl] = useState(0)
  const [steps, setSteps] = useState(0)
  const [selectedMood, setSelectedMood] = useState("NEUTRAL")
  const [selectedEnergy, setSelectedEnergy] = useState("MODERATE")
  const [saved, setSaved] = useState(false)
  const [userId, setUserId] = useState("")
  const [habits, setHabits] = useState([])

  const handleSubmit = async () => {
    await fetch(`${API}/api/habits`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sleepHours, waterMl, steps,
        mood: selectedMood,
        energy: selectedEnergy,
      })
    })
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const loadHabits = () => {
    if (!userId) return
    fetch(`${API}/api/habits/${userId}`)
      .then(r => r.json())
      .then(data => setHabits(data))
  }

  return (
    <div className="app">
      <div className="header">
        <span className="leaf">🌿</span>
        <h1 className="logo">BloomIT</h1>
      </div>

      <HabitForm
        sleepHours={sleepHours}
        setSleepHours={setSleepHours}
        waterMl={waterMl}
        setWaterMl={setWaterMl}
        steps={steps}
        setSteps={setSteps}
        selectedMood={selectedMood}
        setSelectedMood={setSelectedMood}
        selectedEnergy={selectedEnergy}
        setSelectedEnergy={setSelectedEnergy}
        handleSubmit={handleSubmit}
        saved={saved}
      />

      <HabitsList
        userId={userId}
        setUserId={setUserId}
        habits={habits}
        loadHabits={loadHabits}
        moodEmoji={moodEmoji}
        energyEmoji={energyEmoji}
      />
    </div>
  )
}