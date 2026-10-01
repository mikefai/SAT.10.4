// 2026 Digital SAT Math Mastery - Field Notebook Application Engine
// Providing authentic book and student study notebook interaction

(function () {
  'use strict';

  // Application State
  let currentModuleId = "module-1";
  let solvedExercises = new Set();
  let userAnswers = {}; // { exerciseId: selectedAnswer }

  // Load progress and user preferences from localStorage
  try {
    const savedSolved = localStorage.getItem("dsat_solved_exercises");
    if (savedSolved) {
      solvedExercises = new Set(JSON.parse(savedSolved));
    }
    const savedTheme = localStorage.getItem("dsat_theme");
    if (savedTheme === "midnight") {
      document.body.classList.add("theme-midnight");
      document.body.classList.remove("theme-notebook");
    } else {
      document.body.classList.add("theme-notebook");
    }
  } catch (e) {
    console.warn("Storage not accessible:", e);
  }

  // DOM Elements
  const sidebarList = document.getElementById("sidebar-list");
  const mainContent = document.getElementById("main-content");
  const moduleSearch = document.getElementById("module-search");
  const progressText = document.getElementById("progress-text");
  const progressFill = document.getElementById("progress-fill");
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const sidebar = document.getElementById("sidebar");
  const themeToggle = document.getElementById("theme-toggle");
  const printBtn = document.getElementById("print-chapter-btn");
  const refSheetBtn = document.getElementById("ref-sheet-btn");
  const refModal = document.getElementById("ref-modal");
  const closeRefModal = document.getElementById("close-ref-modal");
  const desmosGuideBtn = document.getElementById("desmos-guide-btn");
  const desmosModal = document.getElementById("desmos-modal");
  const closeDesmosModal = document.getElementById("close-desmos-modal");
  const scratchpadBtn = document.getElementById("scratchpad-btn");
  const scratchpadDrawer = document.getElementById("scratchpad-drawer");
  const closeScratchpad = document.getElementById("close-scratchpad");
  const scratchpadTextarea = document.getElementById("scratchpad-textarea");

  // Load saved scratchpad notes
  try {
    const savedNotes = localStorage.getItem("dsat_scratchpad_notes");
    if (savedNotes && scratchpadTextarea) {
      scratchpadTextarea.value = savedNotes;
    }
  } catch (e) {}

  if (scratchpadTextarea) {
    scratchpadTextarea.addEventListener("input", (e) => {
      try {
        localStorage.setItem("dsat_scratchpad_notes", e.target.value);
      } catch (err) {}
    });
  }

  // Trigger KaTeX Auto-Render
  function renderMath() {
    if (window.renderMathInElement) {
      window.renderMathInElement(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false }
        ],
        throwOnError: false
      });
    }
  }

  // Normalized SPR numerical validation (Fractions & Decimals)
  function parseSPR(val) {
    if (!val) return NaN;
    // Strip commas, currency symbols, and extra spaces (e.g. "20,600" -> "20600")
    const clean = val.trim().replace(/,/g, '').replace(/\$/g, '').replace(/\s+/g, '');
    if (clean.includes("/")) {
      const parts = clean.split("/");
      if (parts.length === 2) {
        const n = parseFloat(parts[0]);
        const d = parseFloat(parts[1]);
        if (d !== 0 && !isNaN(n) && !isNaN(d)) return n / d;
      }
    }
    return parseFloat(clean);
  }

  function isCorrectSPR(userInput, correctAns, acceptedList) {
    if (!userInput) return false;
    const cleanUser = userInput.trim().toLowerCase().replace(/,/g, '').replace(/\$/g, '').replace(/\s+/g, '');
    
    // Exact string match
    if (cleanUser === correctAns.toLowerCase()) return true;
    if (acceptedList && acceptedList.some(a => a.toLowerCase().replace(/,/g, '').replace(/\$/g, '') === cleanUser)) return true;

    // Numerical equivalence (e.g. 31/49 vs 0.633, or -15/4 vs -3.75, or 20600 vs 20,600)
    const userVal = parseSPR(cleanUser);
    const correctVal = parseSPR(correctAns);

    function isClose(a, b) {
      if (isNaN(a) || isNaN(b)) return false;
      const diff = Math.abs(a - b);
      if (diff < 0.005) return true;
      if (b !== 0 && diff / Math.abs(b) < 0.005) return true;
      return false;
    }

    if (isClose(userVal, correctVal)) return true;

    if (acceptedList) {
      for (const item of acceptedList) {
        const itemVal = parseSPR(item);
        if (isClose(userVal, itemVal)) return true;
      }
    }

    return false;
  }

  // Progress Update
  function updateProgress() {
    const totalExercises = 27; // 9 chapters * 3 exercises
    const solvedCount = solvedExercises.size;
    progressText.textContent = `${solvedCount} / ${totalExercises}`;
    const pct = Math.round((solvedCount / totalExercises) * 100);
    progressFill.style.width = `${pct}%`;

    try {
      localStorage.setItem("dsat_solved_exercises", JSON.stringify(Array.from(solvedExercises)));
    } catch (e) {}

    renderSidebar(moduleSearch.value);
  }

  // Render Table of Contents Book Sidebar
  function renderSidebar(filterText = "") {
    if (!window.DSAT_MODULES) return;
    const filter = filterText.toLowerCase();
    sidebarList.innerHTML = "";

    window.DSAT_MODULES.forEach(mod => {
      const match = mod.title.toLowerCase().includes(filter) ||
                    mod.domain.toLowerCase().includes(filter) ||
                    mod.description.toLowerCase().includes(filter);
      if (!match) return;

      const solvedInMod = mod.exercises.filter(ex => solvedExercises.has(ex.id)).length;
      const isComplete = solvedInMod === mod.exercises.length;

      const item = document.createElement("a");
      item.className = `book-tab-item ${mod.id === currentModuleId ? "active" : ""}`;
      item.href = `#${mod.id}`;
      item.innerHTML = `
        <div class="tab-title-wrap">
          <span class="tab-num">CH ${mod.number}</span>
          <span>${mod.title}</span>
        </div>
        <span class="tab-badge-status ${isComplete ? "complete" : ""}">${solvedInMod}/3</span>
      `;

      item.addEventListener("click", (e) => {
        e.preventDefault();
        currentModuleId = mod.id;
        renderSidebar(moduleSearch.value);
        renderModule(mod.id);
        if (window.innerWidth <= 900) {
          sidebar.classList.remove("open");
        }
      });

      sidebarList.appendChild(item);
    });
  }

  // Render Active Notebook Chapter
  function renderModule(modId) {
    const mod = window.DSAT_MODULES.find(m => m.id === modId);
    if (!mod) return;

    window.scrollTo({ top: 0, behavior: "smooth" });

    // Concepts Cards
    let conceptsHTML = "";
    mod.concepts.forEach(c => {
      conceptsHTML += `
        <div class="concept-note-card">
          <h3>${c.heading}</h3>
          <div>${c.content}</div>
        </div>
      `;
    });

    // Sticky Notes: Bluebook Traps (Tutor's Marginalia)
    let trapsHTML = "";
    mod.traps.forEach(trap => {
      trapsHTML += `
        <div class="sticky-note">
          <div class="tape-strip"></div>
          <div class="sticky-note-header">
            <span>&#9888;</span> Tutor's Notebook Trap Alert
          </div>
          <div class="sticky-note-body">${trap}</div>
        </div>
      `;
    });

    // Desmos Speed Hack Cards
    let desmosHTML = "";
    mod.desmosTips.forEach(tip => {
      desmosHTML += `
        <div class="desmos-notebook-card">
          <div class="desmos-card-header">
            <span>&#9889;</span> Desmos Calculator Speed Hack
          </div>
          <div class="desmos-card-body">${tip}</div>
        </div>
      `;
    });

    // Exemplar
    const algSteps = mod.exemplar.algebraicSolution.map(s => `<li>${s}</li>`).join("");
    const desSteps = mod.exemplar.desmosSolution.map(s => `<li>${s}</li>`).join("");

    let exemplarOptions = "";
    if (mod.exemplar.type === "MCQ" && mod.exemplar.options) {
      exemplarOptions = `
        <div class="exercise-options" style="margin: 16px 0;">
          ${mod.exemplar.options.map(opt => `
            <div class="book-option ${opt.label === mod.exemplar.correctAnswer ? 'selected' : ''}" style="cursor: default;">
              <span class="option-circle">${opt.label}</span>
              <span>${opt.text}</span>
            </div>
          `).join("")}
        </div>
      `;
    }

    // Exercises
    let exercisesHTML = "";
    mod.exercises.forEach((ex, idx) => {
      const isSolved = solvedExercises.has(ex.id);
      let inputArea = "";

      if (ex.type === "MCQ") {
        inputArea = `
          <div class="exercise-options" id="opt-group-${ex.id}">
            ${ex.options.map(opt => `
              <div class="book-option ${userAnswers[ex.id] === opt.label ? 'selected' : ''}" data-ex-id="${ex.id}" data-opt-label="${opt.label}">
                <span class="option-circle">${opt.label}</span>
                <span>${opt.text}</span>
              </div>
            `).join("")}
          </div>
        `;
      } else {
        inputArea = `
          <div class="spr-grid-in-wrap">
            <input type="text" class="spr-input-box" id="spr-input-${ex.id}" placeholder="e.g. 7/2 or 3.5" value="${userAnswers[ex.id] || ''}">
            <span class="spr-help-text">Enter fraction (a/b) or decimal. No spaces.</span>
          </div>
        `;
      }

      exercisesHTML += `
        <div class="exercise-book-card" id="card-${ex.id}">
          <div class="exercise-meta-row">
            <div>
              <span class="tag-badge ${ex.difficulty === 'Hard' || ex.difficulty === 'Advanced' ? 'tag-hard' : 'tag-type'}">${ex.difficulty} Difficulty</span>
              <span class="tag-badge tag-type">${ex.type === 'MCQ' ? 'Multiple-Choice (MCQ)' : 'Student-Produced Response (Grid-In)'}</span>
            </div>
            <span class="pill-value">Exercise ${idx + 1} of 3</span>
          </div>
          <div class="question-text-book">${ex.prompt}</div>
          ${inputArea}
          <div class="exercise-footer-actions">
            <button class="verify-btn" id="btn-check-${ex.id}">Check Answer</button>
            <div id="feedback-${ex.id}">
              ${isSolved ? '<span class="feedback-badge correct">&#10003; Solved & Mastered</span>' : ''}
            </div>
            <button class="toggle-notes-btn" id="btn-toggle-exp-${ex.id}">
              Read Tutor's Solution
            </button>
          </div>
          <div class="exercise-rationale-box" id="exp-${ex.id}" style="display: none;">
            <h5>Step-by-Step Annotated Solution & Strategy:</h5>
            <div style="white-space: pre-line;">${ex.explanation}</div>
            <p style="margin-top: 12px; font-weight: 700; color: var(--accent-gold);">Final Official Answer: ${ex.correctAnswer}</p>
          </div>
        </div>
      `;
    });

    // Full Notebook Page HTML Injection
    mainContent.innerHTML = `
      <div class="chapter-header">
        <span class="chapter-number-pill">Chapter ${mod.number} &bull; ${mod.domain}</span>
        <h2 class="chapter-title">${mod.title}</h2>
        <p class="chapter-desc">${mod.description}</p>
      </div>

      <!-- Notebook Directives / Instructions Card -->
      <div class="notebook-directives-card">
        <div class="directives-header">
          <span class="tutor-pen-icon">&#9997;</span>
          <span>Notebook Directives: Master Tutor's 2026 Strategy</span>
        </div>
        <ul class="directives-list">
          <li><strong>Step 1 (Internalize the Concepts):</strong> Study the highlighted core formulas and pay close attention to the sticky-note trap warnings before writing scratch math.</li>
          <li><strong>Step 2 (Analyze the Dual Method):</strong> Study both the formal algebraic proof and the 15-second Desmos graphing shortcut in the Guided Exemplar.</li>
          <li><strong>Step 3 (Solve the 3 Exercises):</strong> Attempt each exercise without hints first. Grid-in answers accept equivalent simplified fractions or precise decimals.</li>
        </ul>
      </div>

      <nav class="notebook-jump-nav">
        <a href="#section-concepts" class="jump-tab-link">&sect; 1. Concepts & Formulas</a>
        <a href="#section-exemplar" class="jump-tab-link">&sect; 2. Hard Guided Exemplar</a>
        <a href="#section-practice" class="jump-tab-link">&sect; 3. Practice Exercises (3)</a>
      </nav>

      <!-- Part 1: Concepts -->
      <section class="notebook-section" id="section-concepts">
        <h3 class="section-label">
          <span class="roman-num">I</span>
          Deep-Dive Conceptual Breakdown & Notes
        </h3>
        ${conceptsHTML}
        ${trapsHTML}
        ${desmosHTML}
      </section>

      <!-- Part 2: Exemplar -->
      <section class="notebook-section" id="section-exemplar">
        <h3 class="section-label">
          <span class="roman-num">II</span>
          Step-by-Step Guided Exemplar (Hard Tier)
        </h3>
        <div class="exemplar-book-box">
          <div class="exemplar-tags">
            <span class="tag-badge tag-hard">Hard-Tier Blueprint</span>
            <span class="tag-badge tag-type">${mod.exemplar.type === 'MCQ' ? 'Multiple-Choice Question' : 'Student-Produced Response'}</span>
          </div>
          <div class="question-text-book">${mod.exemplar.question}</div>
          ${exemplarOptions}

          <div class="solution-method-tabs">
            <button class="method-tab-btn active" id="tab-alg">Method 1: Formal Algebraic Derivation</button>
            <button class="method-tab-btn" id="tab-desmos">Method 2: Desmos Speed Hack</button>
          </div>

          <div class="solution-steps-panel" id="panel-alg">
            <ol class="step-by-step-list">${algSteps}</ol>
          </div>
          <div class="solution-steps-panel" id="panel-desmos" style="display: none;">
            <ol class="step-by-step-list">${desSteps}</ol>
          </div>
        </div>
      </section>

      <!-- Part 3: Practice -->
      <section class="notebook-section" id="section-practice">
        <h3 class="section-label">
          <span class="roman-num">III</span>
          Diverse Practice Exercises & Verification
        </h3>
        ${exercisesHTML}
      </section>
    `;

    // Exemplar tab switcher
    const tabAlg = document.getElementById("tab-alg");
    const tabDes = document.getElementById("tab-desmos");
    const panelAlg = document.getElementById("panel-alg");
    const panelDes = document.getElementById("panel-desmos");

    tabAlg.addEventListener("click", () => {
      tabAlg.classList.add("active");
      tabDes.classList.remove("active");
      panelAlg.style.display = "block";
      panelDes.style.display = "none";
    });

    tabDes.addEventListener("click", () => {
      tabDes.classList.add("active");
      tabAlg.classList.remove("active");
      panelDes.style.display = "block";
      panelAlg.style.display = "none";
    });

    // Exercise interactive handlers
    mod.exercises.forEach(ex => {
      // Toggle Explanation
      const toggleExpBtn = document.getElementById(`btn-toggle-exp-${ex.id}`);
      const expBox = document.getElementById(`exp-${ex.id}`);
      toggleExpBtn.addEventListener("click", () => {
        const isHidden = expBox.style.display === "none";
        expBox.style.display = isHidden ? "block" : "none";
        toggleExpBtn.textContent = isHidden ? "Close Rationale" : "Read Tutor's Solution";
        renderMath();
      });

      // MCQ selection
      if (ex.type === "MCQ") {
        const optItems = document.querySelectorAll(`[data-ex-id="${ex.id}"]`);
        optItems.forEach(item => {
          item.addEventListener("click", () => {
            optItems.forEach(i => i.classList.remove("selected"));
            item.classList.add("selected");
            userAnswers[ex.id] = item.getAttribute("data-opt-label");
          });
        });
      }

      // Check Answer button
      const checkBtn = document.getElementById(`btn-check-${ex.id}`);
      const feedbackDiv = document.getElementById(`feedback-${ex.id}`);

      checkBtn.addEventListener("click", () => {
        let isCorrect = false;
        if (ex.type === "MCQ") {
          const selected = userAnswers[ex.id];
          if (!selected) {
            feedbackDiv.innerHTML = '<span class="feedback-badge incorrect">&#9888; Select an option first</span>';
            return;
          }
          isCorrect = (selected === ex.correctAnswer);
        } else {
          const inputEl = document.getElementById(`spr-input-${ex.id}`);
          const entered = inputEl.value.trim();
          userAnswers[ex.id] = entered;
          if (!entered) {
            feedbackDiv.innerHTML = '<span class="feedback-badge incorrect">&#9888; Enter a numerical value</span>';
            return;
          }
          isCorrect = isCorrectSPR(entered, ex.correctAnswer, ex.acceptedAnswers);
        }

        if (isCorrect) {
          feedbackDiv.innerHTML = '<span class="feedback-badge correct">&#10003; Correct! Mastered</span>';
          solvedExercises.add(ex.id);
          updateProgress();
        } else {
          feedbackDiv.innerHTML = '<span class="feedback-badge incorrect">&#10007; Incorrect. Review the note & retry</span>';
        }
      });

      // Pressing Enter in SPR input triggers checkBtn
      if (ex.type !== "MCQ") {
        const inputEl = document.getElementById(`spr-input-${ex.id}`);
        if (inputEl) {
          inputEl.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              checkBtn.click();
            }
          });
        }
      }
    });

    try {
      localStorage.setItem("dsat_active_module", modId);
    } catch (e) {}

    // Render KaTeX for all math tokens
    renderMath();
  }

  // Event Listeners
  moduleSearch.addEventListener("input", (e) => {
    renderSidebar(e.target.value);
  });

  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  printBtn.addEventListener("click", () => {
    window.print();
  });

  themeToggle.addEventListener("click", () => {
    const isMidnight = document.body.classList.toggle("theme-midnight");
    document.body.classList.toggle("theme-notebook", !isMidnight);
    try {
      localStorage.setItem("dsat_theme", isMidnight ? "midnight" : "notebook");
    } catch (e) {}
  });

  refSheetBtn.addEventListener("click", () => {
    refModal.classList.add("open");
    renderMath();
  });

  closeRefModal.addEventListener("click", () => {
    refModal.classList.remove("open");
  });

  desmosGuideBtn.addEventListener("click", () => {
    desmosModal.classList.add("open");
    renderMath();
  });

  closeDesmosModal.addEventListener("click", () => {
    desmosModal.classList.remove("open");
  });

  scratchpadBtn.addEventListener("click", () => {
    scratchpadDrawer.classList.toggle("open");
  });

  closeScratchpad.addEventListener("click", () => {
    scratchpadDrawer.classList.remove("open");
  });

  // Close modals on clicking backdrop
  [refModal, desmosModal].forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
  });

  // Initial Load
  window.addEventListener("DOMContentLoaded", () => {
    try {
      const savedMod = localStorage.getItem("dsat_active_module");
      if (savedMod && window.DSAT_MODULES && window.DSAT_MODULES.some(m => m.id === savedMod)) {
        currentModuleId = savedMod;
      }
    } catch (e) {}
    renderSidebar();
    renderModule(currentModuleId);
    updateProgress();
  });
})();
