const ctx = document.getElementById("canva").getContext("2d");
const chartJS = (stats) => {
  return new Chart(ctx, {
    type: "radar",
    data: {
      labels: [
        "HP",
        "Attack",
        "Defense",
        ["Special", " Attack"],
        ["Special", " Defense"],
        "Speed",
      ],
      datasets: [
        {
          data: stats,
          backgroundColor: "#dc0a2d",
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        r: {
          grid: {
            color: "white",
          },
          pointLabels: {
            color: "white",
          },
          angleLines: {
            color: "white",
          },
        },
      },
    },
  });
};

export default chartJS;
