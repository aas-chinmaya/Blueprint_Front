"use client"



import React, { useState, useEffect } from "react";

// SDLCFullModule.jsx
// Clean, linted, and error-free React component using Tailwind CSS.
// - Top-level tabs: Overview | Phases | Report & Analysis
// - Phases are shown in a horizontal slider (full-width slides)
// - Each phase has sub-tabs: Information, Team, Tasks, Issues, Documents
// - Handles keyboard navigation, resets sub-tab when phase changes

export default function SDLCFullModule({ initialMain = 0, initialPhase = 0 }) {
  const mainTabs = ["Overview", "Phases", "Report & Analysis"];
  const phases = [
    { name: "Planning", description: "Scope, requirements, estimations, roadmap creation." },
    { name: "Design", description: "High-level architecture, UI/UX, system flows." },
    { name: "Development", description: "Front-end, back-end, API, DB, integrations." },
    { name: "Testing", description: "QA cycles, test cases, UAT, bug tracking." },
    { name: "Deployment", description: "Builds, release, CI/CD, environment setup." },
    { name: "Maintenance", description: "Support, fixes, optimisations, monitoring." },
  ];

  const subTabs = ["Information", "Team", "Tasks", "Issues", "Documents"];

  const [activeMain, setActiveMain] = useState(() => {
    return Math.min(Math.max(0, Number(initialMain) || 0), mainTabs.length - 1);
  });

  const [activePhase, setActivePhase] = useState(() => {
    return Math.min(Math.max(0, Number(initialPhase) || 0), phases.length - 1);
  });

  const [activeSubTab, setActiveSubTab] = useState(0);

  // Reset sub-tab when phase changes
  useEffect(() => {
    setActiveSubTab(0);
  }, [activePhase]);

  // Keyboard navigation for main tabs and phase slider
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") {
        if (activeMain === 1) {
          setActivePhase((p) => Math.max(0, p - 1));
        } else {
          setActiveMain((m) => Math.max(0, m - 1));
        }
      }
      if (e.key === "ArrowRight") {
        if (activeMain === 1) {
          setActivePhase((p) => Math.min(phases.length - 1, p + 1));
        } else {
          setActiveMain((m) => Math.min(mainTabs.length - 1, m + 1));
        }
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeMain, phases.length]);

  function renderOverview() {
    return (
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">Project Overview</h2>
        <p className="text-gray-600 text-sm">
          This section summarises the project scope, objectives, business context and high-level details.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white border rounded-xl shadow-sm">
            <h3 className="font-medium mb-2">Total Phases</h3>
            <p className="text-3xl font-bold">{phases.length}</p>
          </div>
          <div className="p-4 bg-white border rounded-xl shadow-sm">
            <h3 className="font-medium mb-2">Active Tasks</h3>
            <p className="text-3xl font-bold">18</p>
          </div>
          <div className="p-4 bg-white border rounded-xl shadow-sm">
            <h3 className="font-medium mb-2">Open Issues</h3>
            <p className="text-3xl font-bold">4</p>
          </div>
        </div>
      </div>
    );
  }

  function renderSubContent(phaseIndex) {
    const active = subTabs[activeSubTab];
    // example placeholders — replace with real data binding as needed
    switch (active) {
      case "Information":
        return (
          <div>
            <p className="text-sm mb-2">{phases[phaseIndex].description}</p>
            <p className="text-sm text-gray-600">Goals, acceptance criteria and scope notes for this phase.</p>
          </div>
        );

      case "Team":
        return (
          <div>
            <ul className="text-sm space-y-2">
              <li>• Backend Developer — Assigned</li>
              <li>• Frontend Developer — Assigned</li>
              <li>• QA Engineer — Pending</li>
              <li>• Project Manager — Assigned</li>
            </ul>
          </div>
        );

      case "Tasks":
        return (
          <div>
            <ul className="text-sm space-y-2">
              <li>• Create module structure</li>
              <li>• Prepare endpoints</li>
              <li>• UI Component integration</li>
            </ul>
          </div>
        );

      case "Issues":
        return (
          <div>
            <ul className="text-sm space-y-2 text-red-600">
              <li>• API latency issue (P2)</li>
              <li>• UI alignment bug (P3)</li>
            </ul>
          </div>
        );

      case "Documents":
        return (
          <div>
            <ul className="text-sm space-y-2">
              <li>• Requirement_Document.pdf</li>
              <li>• Wireframes.png</li>
              <li>• Architecture_Diagram.svg</li>
            </ul>
          </div>
        );

      default:
        return null;
    }
  }

  function renderPhases() {
    return (
      <div className="p-4">
        {/* Phase navigation pills */}
        <div className="flex gap-2 overflow-auto pb-2">
          {phases.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setActivePhase(i)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap border shadow-sm transition-all ${
                activePhase === i ? "bg-indigo-600 text-white" : "bg-white text-gray-700"
              }`}
              aria-current={activePhase === i}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden mt-4">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${activePhase * 100}%)` }}
          >
            {phases.map((p, i) => (
              <section key={p.name} className="min-w-full p-4">
                <div className="bg-white border rounded-xl p-4 shadow-sm">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{p.description}</p>

                  {/* Sub Tabs */}
                  <div className="flex gap-2 mb-4 overflow-auto">
                    {subTabs.map((st, idx) => (
                      <button
                        key={st}
                        onClick={() => setActiveSubTab(idx)}
                        className={`px-3 py-1.5 text-sm rounded-lg border whitespace-nowrap transition-all ${
                          activeSubTab === idx ? "bg-indigo-600 text-white" : "bg-white text-gray-600"
                        }`}
                        aria-current={activeSubTab === idx}
                      >
                        {st}
                      </button>
                    ))}
                  </div>

                  <div className="bg-gray-50 border rounded-xl p-4 shadow-sm">{renderSubContent(i)}</div>
                </div>
              </section>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={() => setActivePhase((p) => Math.max(0, p - 1))}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white shadow rounded-full"
            aria-label="Previous phase"
          >
            ‹
          </button>

          <button
            onClick={() => setActivePhase((p) => Math.min(phases.length - 1, p + 1))}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white shadow rounded-full"
            aria-label="Next phase"
          >
            ›
          </button>
        </div>
      </div>
    );
  }

  function renderReport() {
    return (
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">Reports & Analysis</h2>
        <p className="text-sm text-gray-600">Project progress, burndown, workload, risk matrix, velocity analysis.</p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white border rounded-xl shadow-sm">
            <h3 className="font-medium mb-2">Progress</h3>
            <p className="text-3xl font-bold">72%</p>
          </div>

          <div className="p-4 bg-white border rounded-xl shadow-sm">
            <h3 className="font-medium mb-2">Velocity</h3>
            <p className="text-3xl font-bold">34 pts</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="flex gap-2 mb-4">
        {mainTabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActiveMain(i)}
            className={`px-4 py-2 rounded-xl border shadow-sm transition-all ${
              activeMain === i ? "bg-indigo-600 text-white" : "bg-white text-gray-700"
            }`}
            aria-current={activeMain === i}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="bg-white border rounded-xl shadow-sm">
        {activeMain === 0 && renderOverview()}
        {activeMain === 1 && renderPhases()}
        {activeMain === 2 && renderReport()}
      </div>
    </div>
  );
}
