"use client";
import { useMemo } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function SkillsRadar() {
  // More reliable light mode detection: checks body class OR system preference
  const isLightMode = (() => {
    if (typeof window === 'undefined') return false;
    if (document && document.body && document.body.classList.contains('light-mode')) return true;
    try {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    } catch (_) {
      return false;
    }
  })();

  const chartColors = useMemo(() => ({
    background: isLightMode ? 'rgba(14, 165, 233, 0.20)' : 'rgba(0, 229, 255, 0.28)',
    border: isLightMode ? '#0ea5e9' : '#00e5ff',
    point: isLightMode ? '#0ea5e9' : '#00e5ff',
    pointBorder: isLightMode ? '#0b1220' : '#ffffff',
    grid: isLightMode ? 'rgba(0, 0, 0, 0.35)' : 'rgba(255, 255, 255, 0.38)',
    label: '#000000'
  }), [isLightMode]);

  const data = useMemo(() => ({
    labels: ['Flutter & Dart', 'Firebase', 'Node.js', 'Blockchain', 'Java'],
    datasets: [{
      label: 'Technical Skills',
      data: [95, 90, 85, 80, 75],
      backgroundColor: chartColors.background,
      borderColor: chartColors.border,
      pointBackgroundColor: chartColors.point,
      pointBorderColor: chartColors.pointBorder,
      pointHoverBackgroundColor: chartColors.pointBorder,
      pointHoverBorderColor: chartColors.point,
      borderWidth: 2.5
    }]
  }), [chartColors]);

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 2,
    layout: { padding: 8 },
    scales: {
      r: {
        angleLines: { color: chartColors.grid },
        grid: { color: chartColors.grid },
        pointLabels: {
          font: { size: 16, family: "'Poppins', sans-serif", weight: 700 },
          color: chartColors.label
        },
        ticks: { display: false },
        beginAtZero: true,
        max: 100
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: { font: { family: "'Poppins', sans-serif", size: 14, weight: 700 }, color: chartColors.label }
      },
      tooltip: {
        callbacks: { label: (ctx) => `${ctx.label}: ${ctx.raw}%` }
      }
    }
  }), [chartColors]);

  return (
    <div className="skills-radar-container">
      <div className="skills-radar-loading" id="skillsRadarLoading" />
      <div style={{ position: 'relative', width: '100%', minHeight: 400 }}>
        <Radar data={data} options={options} />
      </div>
    </div>
  );
}
