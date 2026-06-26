import styles from "../styles/styles.js"

const moodEmoji = {
  VERY_BAD: "😞", BAD: "😕", NEUTRAL: "😐", GOOD: "🙂", VERY_GOOD: "😄"
}
const energyEmoji = {
  VERY_LOW: "🪫", LOW: "😴", MODERATE: "⚡", HIGH: "🔋", VERY_HIGH: "🚀"
}
const MOODS = ["VERY_BAD", "BAD", "NEUTRAL", "GOOD", "VERY_GOOD"]
const ENERGIES = ["VERY_LOW", "LOW", "MODERATE", "HIGH", "VERY_HIGH"]

export default function HabitForm({ sleepHours, setSleepHours, waterMl, setWaterMl, steps, setSteps, selectedMood, setSelectedMood, selectedEnergy, setSelectedEnergy, handleSubmit, saved}) {
    return (
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
    )
}