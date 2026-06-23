import { useState, useEffect } from "react"

const API = "http://localhost:8080"

const MOODS = ["VERY_BAD", "BAD", "NEUTRAL", "GOOD", "VERY_GOOD"]
const ENERGIES = ["VERY_LOW", "LOW", "MODERATE", "HIGH", "VERY_HIGH"]

const moodEmoji = {
  VERY_BAD: "😞", BAD: "😕", NEUTRAL: "😐", GOOD: "🙂", VERY_GOOD: "😄"
}
const energyEmoji = {
  VERY_LOW: "🪫", LOW: "😴", MODERATE: "⚡", HIGH: "🔋", VERY_HIGH: "🚀"
}

const styles = {
  app: {
    minHeight: "100vh",
    background: "#f0faf4",
    fontFamily: "'Segoe UI', sans-serif",
    padding: "2rem",
    maxWidth: "680px",
    margin: "0 auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "2rem",
  },
  logo: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#1a6b3c",
    margin: 0,
  },
  leaf: { fontSize: "1.8rem" },
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    padding: "1.5rem",
    marginBottom: "1.5rem",
    boxShadow: "0 2px 12px rgba(26,107,60,0.08)",
    border: "1px solid #d4edda",
  },
  cardTitle: {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#1a6b3c",
    marginBottom: "1.25rem",
    marginTop: 0,
  },
  field: { marginBottom: "1rem" },
  label: {
    display: "block",
    fontSize: "0.85rem",
    fontWeight: "500",
    color: "#4a7c59",
    marginBottom: "0.4rem",
  },
  input: {
    width: "100%",
    padding: "0.6rem 0.9rem",
    borderRadius: "10px",
    border: "1.5px solid #b7ddc4",
    fontSize: "1rem",
    color: "#1a3a26",
    background: "#f7fdf9",
    boxSizing: "border-box",
    outline: "none",
  },
  select: {
    width: "100%",
    padding: "0.6rem 0.9rem",
    borderRadius: "10px",
    border: "1.5px solid #b7ddc4",
    fontSize: "1rem",
    color: "#1a3a26",
    background: "#f7fdf9",
    boxSizing: "border-box",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "0.85rem",
    borderRadius: "12px",
    border: "none",
    background: "#1a6b3c",
    color: "#ffffff",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "0.5rem",
  },
  userRow: {
    display: "flex",
    gap: "0.75rem",
    alignItems: "flex-end",
  },
  userInput: { flex: 1 },
  loadBtn: {
    padding: "0.6rem 1.2rem",
    borderRadius: "10px",
    border: "1.5px solid #1a6b3c",
    background: "transparent",
    color: "#1a6b3c",
    fontSize: "0.95rem",
    fontWeight: "600",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  habitItem: {
    background: "#f7fdf9",
    borderRadius: "12px",
    padding: "1rem 1.25rem",
    marginBottom: "0.75rem",
    border: "1px solid #d4edda",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.4rem 1.5rem",
  },
  habitStat: { fontSize: "0.9rem", color: "#2d5a3e" },
  statLabel: { fontWeight: "600", color: "#1a6b3c" },
  empty: { color: "#7aab8a", fontSize: "0.95rem", textAlign: "center", padding: "1rem 0" },
  successMsg: {
    background: "#d4edda",
    color: "#1a6b3c",
    borderRadius: "10px",
    padding: "0.6rem 1rem",
    fontSize: "0.9rem",
    marginTop: "0.75rem",
    textAlign: "center",
  }
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