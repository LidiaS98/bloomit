const MOODS = ["VERY_BAD", "BAD", "NEUTRAL", "GOOD", "VERY_GOOD"]
const ENERGIES = ["VERY_LOW", "LOW", "MODERATE", "HIGH", "VERY_HIGH"]

const moodEmoji = {
  VERY_BAD: "😞", BAD: "😕", NEUTRAL: "😐", GOOD: "🙂", VERY_GOOD: "😄"
}
const energyEmoji = {
  VERY_LOW: "🪫", LOW: "😴", MODERATE: "⚡", HIGH: "🔋", VERY_HIGH: "🚀"
}

export default function HabitForm({ sleepHours, setSleepHours, waterMl, setWaterMl, steps, setSteps, selectedMood, setSelectedMood, selectedEnergy, setSelectedEnergy, handleSubmit, saved }) {
  return (
    <div className="card">
      <p className="card-title">Log today's habits</p>

      <div className="field">
        <label className="label">Hours slept</label>
        <input className="input" type="number" value={sleepHours}
          onChange={e => setSleepHours(e.target.value)} />
      </div>

      <div className="field">
        <label className="label">Water (ml)</label>
        <input className="input" type="number" value={waterMl}
          onChange={e => setWaterMl(e.target.value)} />
      </div>

      <div className="field">
        <label className="label">Steps</label>
        <input className="input" type="number" value={steps}
          onChange={e => setSteps(e.target.value)} />
      </div>

      <div className="field">
        <label className="label">Mood</label>
        <select className="select" value={selectedMood}
          onChange={e => setSelectedMood(e.target.value)}>
          {MOODS.map(m => (
            <option key={m} value={m}>{moodEmoji[m]} {m.replace("_", " ")}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label className="label">Energy</label>
        <select className="select" value={selectedEnergy}
          onChange={e => setSelectedEnergy(e.target.value)}>
          {ENERGIES.map(e => (
            <option key={e} value={e}>{energyEmoji[e]} {e.replace("_", " ")}</option>
          ))}
        </select>
      </div>

      <button className="button" onClick={handleSubmit}>Save today's log</button>
      {saved && <div className="success-msg">✅ Habit saved!</div>}
    </div>
  )
}