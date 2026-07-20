export default function HabitsList({ userId, setUserId, habits, loadHabits, moodEmoji, energyEmoji }) {
  return (
    <div className="card">
      <p className="card-title">My habit logs</p>
      <div className="user-row">
        <div className="user-input">
          <label className="label">Your user ID</label>
          <input className="input" type="number" placeholder="e.g. 2"
            value={userId} onChange={e => setUserId(e.target.value)} />
        </div>
        <button className="load-btn" onClick={loadHabits}>Load →</button>
      </div>

      <div style={{ marginTop: "1rem" }}>
        {habits.length === 0
          ? <p className="empty">Enter your user ID and click Load to see your logs.</p>
          : habits.map(h => (
            <div key={h.id} className="habit-item">
              <span className="habit-stat"><span className="stat-label">Sleep</span> {h.sleepHours}h</span>
              <span className="habit-stat"><span className="stat-label">Water</span> {h.waterMl}ml</span>
              <span className="habit-stat"><span className="stat-label">Steps</span> {h.steps}</span>
              <span className="habit-stat"><span className="stat-label">Mood</span> {moodEmoji[h.mood]} {h.mood}</span>
              <span className="habit-stat"><span className="stat-label">Energy</span> {energyEmoji[h.energy]} {h.energy}</span>
              <span className="habit-stat"><span className="stat-label">Date</span> {new Date(h.createdAt).toLocaleDateString()}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}