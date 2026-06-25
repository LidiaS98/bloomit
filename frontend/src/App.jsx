import { useState, useEffect } from "react"
import styles from "./styles/styles.js"

const API = "http://localhost:8080"

const MOODS = ["VERY_BAD", "BAD", "NEUTRAL", "GOOD", "VERY_GOOD"]
const ENERGIES = ["VERY_LOW", "LOW", "MODERATE", "HIGH", "VERY_HIGH"]

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
    <div style={styles.app}>
      <div style={styles.header}>
        <span style={styles.leaf}>🌿</span>
        <h1 style={styles.logo}>BloomIT</h1>
      </div>

      <div style={styles.card}>
        <p style={styles.cardTitle}>Log today's habits</p>

        <div style={styles.field}>
          <label style={styles.label}>Hours slept</label>
          <input style={styles.input} type="number" value={sleepHours}
            onChange={e => setSleepHours(e.target.value)} />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Water (ml)</label>
          <input style={styles.input} type="number" value={waterMl}
            onChange={e => setWaterMl(e.target.value)} />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Steps</label>
          <input style={styles.input} type="number" value={steps}
            onChange={e => setSteps(e.target.value)} />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Mood</label>
          <select style={styles.select} value={selectedMood}
            onChange={e => setSelectedMood(e.target.value)}>
            {MOODS.map(m => (
              <option key={m} value={m}>{moodEmoji[m]} {m.replace("_", " ")}</option>
            ))}
          </select>
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Energy</label>
          <select style={styles.select} value={selectedEnergy}
            onChange={e => setSelectedEnergy(e.target.value)}>
            {ENERGIES.map(e => (
              <option key={e} value={e}>{energyEmoji[e]} {e.replace("_", " ")}</option>
            ))}
          </select>
        </div>

        <button style={styles.button} onClick={handleSubmit}>Save today's log</button>
        {saved && <div style={styles.successMsg}>✅ Habit saved!</div>}
      </div>

      <div style={styles.card}>
        <p style={styles.cardTitle}>My habit logs</p>
        <div style={styles.userRow}>
          <div style={styles.userInput}>
            <label style={styles.label}>Your user ID</label>
            <input style={styles.input} type="number" placeholder="e.g. 2"
              value={userId} onChange={e => setUserId(e.target.value)} />
          </div>
          <button style={styles.loadBtn} onClick={loadHabits}>Load →</button>
        </div>

        <div style={{ marginTop: "1rem" }}>
          {habits.length === 0
            ? <p style={styles.empty}>Enter your user ID and click Load to see your logs.</p>
            : habits.map(h => (
              <div key={h.id} style={styles.habitItem}>
                <span style={styles.habitStat}><span style={styles.statLabel}>Sleep</span> {h.sleepHours}h</span>
                <span style={styles.habitStat}><span style={styles.statLabel}>Water</span> {h.waterMl}ml</span>
                <span style={styles.habitStat}><span style={styles.statLabel}>Steps</span> {h.steps}</span>
                <span style={styles.habitStat}><span style={styles.statLabel}>Mood</span> {moodEmoji[h.mood]} {h.mood}</span>
                <span style={styles.habitStat}><span style={styles.statLabel}>Energy</span> {energyEmoji[h.energy]} {h.energy}</span>
                <span style={styles.habitStat}><span style={styles.statLabel}>Date</span> {new Date(h.createdAt).toLocaleDateString()}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}