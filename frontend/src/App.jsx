import { useState } from "react"
import "./styles/styles.css"
import HabitForm from "./components/HabitForm.jsx"
import HabitsList from "./components/HabitsList.jsx"
import LoginForm from "./components/LoginForm.jsx"

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
  const [error, setError] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loggedUser, setLoggedUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

const handleLogin = async () => {
    const response = await fetch(`${API}/api/auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    })

    if (response.ok) {
        const text = await response.text()
        if (!text) {
            setError("Invalid email or password.")
            return
        }
        const user = JSON.parse(text)
        setLoggedUser(user)
        setLoggedIn(true)
        setUserId(user.id)
        fetch(`${API}/api/habits/${user.id}`)
            .then(r => r.json())
            .then(data => setHabits(data))
    } else {
        setError("Invalid email or password.")
    }
}

  const handleSubmit = async () => {
    const response = await fetch(`${API}/api/habits`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sleepHours, waterMl, steps,
        mood: selectedMood,
        energy: selectedEnergy,
        user: {id: loggedUser.id}
      })
    })

if (response.ok){
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
    fetch(`${API}/api/habits/${loggedUser.id}`)
        .then(r => r.json())
        .then(data => setHabits(data))
    } else if (response.status === 400){
        const errorMessage = await response.text()
            setError(errorMessage)
    }
  }

  const loadHabits = () => {
    if (!userId) return
    fetch(`${API}/api/habits/${userId}`)
      .then(r => r.json())
      .then(data => setHabits(data))
  }

const handleLogout = () => {
    setLoggedUser(null)
    setLoggedIn(false)
    setHabits([])
}
  return (
    <div className="app">
    <div className="header">
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span className="leaf">🌿</span>
            <h1 className="logo">BloomIT</h1>
        </div>
        {loggedUser && (
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span className="label">Hello, {loggedUser.email}! 👋</span>
                <button className="load-btn" onClick={handleLogout}>Logout</button>
            </div>
        )}
      </div>
      {loggedUser == null
        ? <LoginForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleSubmit={handleLogin}
              loggedIn={loggedIn}
          />
        : <>
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
            {error && <div className="error-msg">{error}</div>}
                  <HabitsList
                    userId={userId}
                    setUserId={setUserId}
                    habits={habits}
                    loadHabits={loadHabits}
                    moodEmoji={moodEmoji}
                    energyEmoji={energyEmoji}
                  />
          </>
          }
      </div>
  )
}