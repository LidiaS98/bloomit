import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export default function HabitChart({ habits }) {
  const chartRef = useRef(null)
  const instanceRef = useRef(null)

  useEffect(() => {
    if (!habits || habits.length === 0) return

    // Zniszcz stary wykres jeśli istnieje
    if (instanceRef.current) {
      instanceRef.current.destroy()
    }

    const ctx = chartRef.current.getContext("2d")

    instanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: habits.map(h => new Date(h.createdAt).toLocaleDateString()),
        datasets: [
          {
            label: "Sleep (h)",
            data: habits.map(h => h.sleepHours),
            backgroundColor: "#7F77DD",
          },
          {
            label: "Water (L)",
            data: habits.map(h => (h.waterMl / 1000).toFixed(1)),
            backgroundColor: "#5DCAA5",
          },
          {
            label: "Steps (k)",
            data: habits.map(h => (h.steps / 1000).toFixed(1)),
            backgroundColor: "#FAC775",
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "My Habit Progress" }
        }
      }
    })
  }, [habits])

  if (!habits || habits.length === 0) return null

  return (
    <div className="card">
      <p className="card-title">📊 Habit Progress</p>
      <canvas ref={chartRef} />
    </div>
  )
}