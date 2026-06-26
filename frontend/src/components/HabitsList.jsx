import styles from "../styles/styles.js"


export default function HabitsList({userId, setUserId, habits, loadHabits, moodEmoji, energyEmoji }){
    return (
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
        )
    }