// 2026 Digital SAT Math Mastery - Complete 9 Modules Dataset
// Fully aligned with 2026 Bluebook Question Bank standards

window.DSAT_MODULES = [
  {
    id: "module-1",
    number: 1,
    title: "Probability and Combinatorics",
    domain: "Problem-Solving and Data Analysis",
    description: "Master two-way frequency tables, conditional probability phrasing, independent events, and DSAT combinatorics applications.",
    concepts: [
      {
        heading: "1. Two-Way Frequency Tables & Conditional Probability",
        content: `Conditional probability is one of the most frequently tested concepts on the DSAT. It measures the probability of event $A$ occurring given that event $B$ has already occurred, denoted as $P(A \\mid B)$.
$$\\mathbf{P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{\\text{Number of outcomes in both } A \\text{ and } B}{\\text{Total outcomes in condition } B}}$$

**Key Phrasing to Watch on the 2026 DSAT:**
- *"If a person who [Condition B] is selected at random, what is the probability that this person [Condition A]?"* $\\rightarrow$ Restrict the denominator **only** to the total for Condition $B$!
- *"What fraction of the participants with [Condition B] also have [Condition A]?"* $\\rightarrow$ Denominator is Condition $B$.
- Contrast with: *"What is the probability that a randomly chosen participant is [Condition A] and [Condition B]?"* $\\rightarrow$ Denominator is the **grand total** of the entire table.`
      },
      {
        heading: "2. Independent vs. Dependent Events",
        content: `Two events $A$ and $B$ are statistically **independent** if the occurrence of one does not affect the probability of the other:
$$\\mathbf{P(A \\cap B) = P(A) \\times P(B)} \\quad \\iff \\quad \\mathbf{P(A \\mid B) = P(A)}$$
If $P(A \\mid B) \\neq P(A)$, the events are **dependent**.`
      },
      {
        heading: "3. Combinatorics & Counting in DSAT Contexts",
        content: `While advanced permutations and combinations are rare, the DSAT regularly tests the **Fundamental Counting Principle** and basic subset selections:
- **Fundamental Counting Principle:** If task 1 has $n_1$ outcomes, task 2 has $n_2$ outcomes, ..., then the sequence has $\\mathbf{n_1 \\times n_2 \\times \\dots \\times n_k}$ total outcomes.
- **Combinations (Order does not matter):**
$$\\mathbf{_nC_r = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}}$$
- **Permutations (Order matters):**
$$\\mathbf{_nP_r = \\frac{n!}{(n-r)!}}$$`
      }
    ],
    traps: [
      "**Denominator Misidentification:** The most common DSAT trap in two-way tables is using the grand total instead of the row or column subtotal when the problem begins with 'Given that...', 'If a student chosen at random from Group X...', or 'Of the individuals who...'.",
      "**'At least one' Trap:** Whenever you see 'probability of at least one', immediately use the complement rule: $\\mathbf{P(\\text{at least 1}) = 1 - P(\\text{none})}$. Calculating each case individually wastes valuable time."
    ],
    desmosTips: [
      "**Combinations & Permutations:** Desmos has native combinatorics functions! Type `nCr(n, r)` or `nPr(n, r)` directly into any expression line (e.g., `nCr(8, 3)` outputs `56`).",
      "**Factorials:** Type `n!` directly (e.g., `6! = 720`).",
      "**Fraction Conversion:** Click the small fraction icon to the left of the decimal result line to convert any probability decimal immediately into a simplified fraction for Student-Produced Responses."
    ],
    exemplar: {
      question: `A clinical trial evaluated the effectiveness of a new allergy medication against a placebo. The results for 320 participants are summarized in the table below:

| Treatment Group | Significant Improvement | Moderate Improvement | No Improvement | Total |
| :--- | :---: | :---: | :---: | :---: |
| Medication | 78 | 46 | 36 | 160 |
| Placebo | 22 | 50 | 88 | 160 |
| Total | 100 | 96 | 124 | 320 |

If a participant who reported at least moderate improvement is selected at random, what is the probability that this participant was in the medication group?`,
      type: "SPR",
      correctAnswer: "31/49",
      acceptedAnswers: ["31/49", "0.633", ".633"],
      algebraicSolution: [
        "**Identify the Condition (Restricted Sample Space):** The question asks for the probability *'If a participant who reported at least moderate improvement is selected at random'*. 'At least moderate improvement' includes both 'Significant Improvement' and 'Moderate Improvement'.",
        "**Calculate Denominator:** Total participants with at least moderate improvement $= 100 + 96 = 196$. (Notice: Do NOT use the grand total of 320!)",
        "**Calculate Numerator:** Number of participants in the medication group who reported at least moderate improvement $= 78 + 46 = 124$.",
        "**Formulate Probability:** $P(\\text{Medication} \\mid \\text{At least moderate improvement}) = \\frac{124}{196}$.",
        "**Simplify the Fraction:** Divide both numerator and denominator by 4: $\\frac{124 \\div 4}{196 \\div 4} = \\mathbf{\\frac{31}{49}}$. In decimal form, this is approximately $0.63265...$, which rounds to $\\mathbf{0.633}$."
      ],
      desmosSolution: [
        "Type `(78 + 46) / (100 + 96)` into line 1 of Desmos.",
        "Desmos evaluates this to `0.632653061224`.",
        "Click the **Fraction icon** [ $\\frac{a}{b}$ ] next to the result. Desmos instantly outputs `31/49`.",
        "Both `31/49` or `0.633` are valid Bluebook SPR answers."
      ]
    },
    exercises: [
      {
        id: "m1-ex1",
        type: "MCQ",
        difficulty: "Medium",
        prompt: "A bag contains 5 red marbles, 7 blue marbles, and 8 green marbles. Two marbles are selected at random without replacement. What is the probability that both selected marbles are green?",
        options: [
          { label: "A", text: "\\frac{14}{95}" },
          { label: "B", text: "\\frac{4}{25}" },
          { label: "C", text: "\\frac{28}{190}" },
          { label: "D", text: "\\frac{14}{100}" }
        ],
        correctAnswer: "A",
        explanation: "1. Total marbles $= 5 + 7 + 8 = 20$.\n2. Probability the first marble is green: $P(G_1) = \\frac{8}{20} = \\frac{2}{5}$.\n3. Since selection is without replacement, 19 marbles remain and 7 are green: $P(G_2 \\mid G_1) = \\frac{7}{19}$.\n4. Joint probability: $P(G_1 \\cap G_2) = \\frac{8}{20} \\times \\frac{7}{19} = \\frac{2}{5} \\times \\frac{7}{19} = \\mathbf{\\frac{14}{95}}$. Thus, Option A is correct."
      },
      {
        id: "m1-ex2",
        type: "SPR",
        difficulty: "Hard",
        prompt: "A research committee consists of 8 scientists and 6 engineers. A subcommittee of 3 members is to be formed at random. What is the probability that the subcommittee contains exactly 2 scientists and 1 engineer? (Enter your answer as a simplified fraction a/b).",
        correctAnswer: "42/91",
        acceptedAnswers: ["42/91", "6/13", "0.462", ".462"],
        explanation: "1. Total members $= 8 + 6 = 14$. Total ways to choose any 3 members: $\\binom{14}{3} = \\frac{14 \\times 13 \\times 12}{3 \\times 2 \\times 1} = 364$.\n2. Favorable outcomes: Ways to choose 2 scientists from 8: $\\binom{8}{2} = \\frac{8 \\times 7}{2 \\times 1} = 28$.\n3. Ways to choose 1 engineer from 6: $\\binom{6}{1} = 6$.\n4. Total favorable combinations: $28 \\times 6 = 168$.\n5. Probability: $\\frac{168}{364}$. Dividing both by 28 yields $\\mathbf{\\frac{6}{13}}$ (or $\\frac{42}{91}$). In decimal: $\\mathbf{0.462}$."
      },
      {
        id: "m1-ex3",
        type: "MCQ",
        difficulty: "Advanced",
        prompt: "In a survey of 150 college seniors, 90 students participated in an internship, 60 students studied abroad, and 35 students participated in both. If a student who participated in an internship is chosen at random, what is the probability that the student did NOT study abroad?",
        options: [
          { label: "A", text: "\\frac{7}{18}" },
          { label: "B", text: "\\frac{11}{18}" },
          { label: "C", text: "\\frac{11}{30}" },
          { label: "D", text: "\\frac{25}{90}" }
        ],
        correctAnswer: "B",
        explanation: "1. The condition restricts our sample space strictly to students who participated in an internship: Denominator $= 90$.\n2. Among the 90 internship participants, 35 studied abroad.\n3. Therefore, the number of internship participants who did NOT study abroad is $90 - 35 = 55$.\n4. $P(\\text{Did not study abroad} \\mid \\text{Internship}) = \\frac{55}{90} = \\mathbf{\\frac{11}{18}}$. Thus, Option B is correct."
      }
    ]
  },
  {
    id: "module-2",
    number: 2,
    title: "Nonlinear Equations and Tangency",
    domain: "Advanced Math",
    description: "Master quadratic-linear systems, discriminant applications (b^2 - 4ac), and finding constants for tangency and unique solutions.",
    concepts: [
      {
        heading: "1. Quadratic-Linear Systems & Tangency",
        content: `On the DSAT, a line $y = mx + k$ and a parabola $y = ax^2 + bx + c$ can intersect in 0, 1, or 2 points.
To determine intersections algebraically, set the two equations equal:
$$ax^2 + bx + c = mx + k \\implies ax^2 + (b - m)x + (c - k) = 0$$
Let $A = a$, $B = b - m$, and $C = c - k$. The number of real solutions depends entirely on the **discriminant** $\\Delta = B^2 - 4AC$:
- $\\mathbf{\\Delta > 0}$: The line intersects the parabola at **two distinct points** (secant line).
- $\\mathbf{\\Delta = 0}$: The line intersects at **exactly one point** $\\implies$ the line is **tangent** to the parabola.
- $\\mathbf{\\Delta < 0}$: The line **does not intersect** the parabola (zero real solutions).`
      },
      {
        heading: "2. Finding the Unknown Constant for Tangency",
        content: `When a question states that a system of equations has *'exactly one real solution'* or the graphs are *'tangent'*, your immediate algebraic blueprint is:
1. Substitute $y$ to form a single quadratic: $Ax^2 + Bx + C = 0$.
2. Write the discriminant equation: $\\mathbf{B^2 - 4AC = 0}$.
3. Solve this equation for the unknown constant ($k, c,$ or $m$).`
      }
    ],
    traps: [
      "**Forgetting that linear slope affects $B$:** Do not just take the original parabola's $b$; you must move $mx$ over so the linear coefficient is $(b - m)$.",
      "**Sign errors with negative coefficients:** When squaring $B$, remember $(-B)^2 = B^2$. But when computing $-4AC$, watch double negatives if $C$ or $A$ is negative!"
    ],
    desmosTips: [
      "**Slider Trick:** Enter the parabola $y = ax^2 + bx + c$ on line 1. Enter the line with a variable constant (e.g., $y = mx + k$) on line 2. Desmos will ask: *'add slider: [k]'*. Click `k`!",
      "**Zooming into Contact:** Drag the slider until the line just kisses the parabola, or type the discriminant formula directly to confirm the exact value."
    ],
    exemplar: {
      question: `In the $xy$-plane, the line $y = -4x + k$ is tangent to the parabola $y = 2x^2 + 8x - 3$, where $k$ is a constant. What is the value of $k$?`,
      type: "SPR",
      correctAnswer: "-21",
      acceptedAnswers: ["-21"],
      algebraicSolution: [
        "**Set Equations Equal:** Since the line is tangent to the parabola, they intersect at exactly one point: $2x^2 + 8x - 3 = -4x + k$.",
        "**Rearrange into Standard Form $Ax^2 + Bx + C = 0$:**\n$$2x^2 + 8x + 4x - 3 - k = 0 \\implies 2x^2 + 12x - (3 + k) = 0$$\nHere, $A = 2$, $B = 12$, and $C = -(3 + k) = -3 - k$.",
        "**Apply the Tangency Condition ($\\Delta = 0$):**\n$$B^2 - 4AC = 0 \\implies 12^2 - 4(2)(-3 - k) = 0$$\n$$144 - 8(-3 - k) = 0$$\n$$144 + 24 + 8k = 0$$\n$$168 + 8k = 0$$\n$$8k = -168 \\implies k = \\mathbf{-21}$$."
      ],
      desmosSolution: [
        "Line 1: Enter `y = 2x^2 + 8x - 3`.",
        "Line 2: Enter `y = -4x + k` and add the slider for `k`.",
        "Line 3: Set up the discriminant directly: `12^2 - 4(2)(-3 - k) = 0`.",
        "Desmos displays a vertical line at $k = -21$, immediately confirming the exact integer answer."
      ]
    },
    exercises: [
      {
        id: "m2-ex1",
        type: "MCQ",
        difficulty: "Medium",
        prompt: "The system of equations consists of $y = x^2 - 6x + 14$ and $y = 2x + c$, where $c$ is a constant. For what value of $c$ does the system have exactly one real solution?",
        options: [
          { label: "A", text: "-2" },
          { label: "B", text: "2" },
          { label: "C", text: "-6" },
          { label: "D", text: "6" }
        ],
        correctAnswer: "A",
        explanation: "1. Set equal: $x^2 - 6x + 14 = 2x + c \\implies x^2 - 8x + (14 - c) = 0$.\n2. For exactly one real solution, discriminant $\\Delta = B^2 - 4AC = 0$.\n3. $(-8)^2 - 4(1)(14 - c) = 0 \\implies 64 - 56 + 4c = 0$.\n4. $8 + 4c = 0 \\implies 4c = -8 \\implies c = \\mathbf{-2}$. Option A is correct."
      },
      {
        id: "m2-ex2",
        type: "SPR",
        difficulty: "Hard",
        prompt: "A line with equation $y = mx - 5$ is tangent to the parabola $y = -x^2 + 4x - 9$. If $m > 0$, what is the value of $m$?",
        correctAnswer: "8",
        acceptedAnswers: ["8"],
        explanation: "1. Set equal: $-x^2 + 4x - 9 = mx - 5 \\implies x^2 + (m - 4)x + 4 = 0$.\n2. Here $A = 1$, $B = m - 4$, and $C = 4$.\n3. For tangency, $\\Delta = B^2 - 4AC = 0 \\implies (m - 4)^2 - 4(1)(4) = 0$.\n4. $(m - 4)^2 - 16 = 0 \\implies (m - 4)^2 = 16$.\n5. Taking the square root: $m - 4 = 4$ or $m - 4 = -4$.\n6. This gives $m = 8$ or $m = 0$. Since the question specifies $m > 0$, the answer is $\\mathbf{8}$."
      },
      {
        id: "m2-ex3",
        type: "MCQ",
        difficulty: "Advanced",
        prompt: "For what value of $b$ does the quadratic equation $3x^2 + bx + 12 = 0$ have no real solutions?",
        options: [
          { label: "A", text: "b = -15" },
          { label: "B", text: "b = -12" },
          { label: "C", text: "b = 10" },
          { label: "D", text: "b = 14" }
        ],
        correctAnswer: "C",
        explanation: "1. No real solutions requires $\\Delta = b^2 - 4ac < 0$.\n2. $b^2 - 4(3)(12) < 0 \\implies b^2 - 144 < 0 \\implies b^2 < 144$.\n3. Taking square roots: $-12 < b < 12$.\n4. Evaluating options: For $b = -15$, $(-15)^2 = 225 > 144$. For $b = -12$, $(-12)^2 = 144$. For $b = 14$, $14^2 = 196 > 144$. For $b = 10$, $10^2 = 100 < 144$, which satisfies $-12 < 10 < 12$. Option C is correct."
      }
    ]
  },
  {
    id: "module-3",
    number: 3,
    title: "Area and Circumference of Circles",
    domain: "Geometry and Trigonometry",
    description: "Master sector area, arc length, radian/degree conversions, and completing the square for the circle equation (x-h)^2 + (y-k)^2 = r^2.",
    concepts: [
      {
        heading: "1. Standard Circle Equation & Completing the Square",
        content: `The standard equation of a circle centered at $(h, k)$ with radius $r$ is:
$$\\mathbf{(x - h)^2 + (y - k)^2 = r^2}$$
When given in general form $x^2 + y^2 + Ax + By + C = 0$:
1. Group $x$-terms and $y$-terms: $(x^2 + Ax) + (y^2 + By) = -C$.
2. Complete the square for both variables by adding $(\\frac{A}{2})^2$ and $(\\frac{B}{2})^2$ to **both** sides:
$$\\mathbf{\\left(x + \\frac{A}{2}\\right)^2 + \\left(y + \\frac{B}{2}\\right)^2 = -C + \\left(\\frac{A}{2}\\right)^2 + \\left(\\frac{B}{2}\\right)^2 = r^2}$$`
      },
      {
        heading: "2. Arc Length and Sector Area Formulas",
        content: `For a central angle $\\theta$ in a circle of radius $r$:
| Measure | Degree Formula (Angle in Degrees $d^\\circ$) | Radian Formula (Angle $\\theta$ in Radians) |
| :--- | :---: | :---: |
| **Arc Length ($s$)** | $\\mathbf{s = 2\\pi r \\left(\\frac{d}{360}\\right)}$ | $\\mathbf{s = r\\theta}$ |
| **Sector Area ($A$)** | $\\mathbf{A = \\pi r^2 \\left(\\frac{d}{360}\\right)}$ | $\\mathbf{A = \\frac{1}{2}r^2\\theta}$ |

**Radian Conversion:**
$$\\mathbf{\\text{Radians} = \\text{Degrees} \\times \\frac{\\pi}{180^\\circ}}, \\qquad \\mathbf{\\text{Degrees} = \\text{Radians} \\times \\frac{180^\\circ}{\\pi}}$$`
      }
    ],
    traps: [
      "**Forgetting $r^2$ vs $r$:** The right side of the standard circle equation is $r^2$, not $r$. If $(x-3)^2 + (y+2)^2 = 49$, the radius is $\\sqrt{49} = 7$, not 49!",
      "**Leading Coefficients $\\neq 1$:** If given $2x^2 + 2y^2 - 8x + 12y - 10 = 0$, you MUST divide every single term by 2 before completing the square."
    ],
    desmosTips: [
      "**Instant Circle Plotting:** Type the raw uncompleted equation (e.g., `x^2 + y^2 - 6x + 8y = 24`) directly into Desmos. Desmos graphs the circle immediately without completing the square!",
      "**Reading Radius and Center:** Click the center or extrema points on the Desmos circle graph to read $(h, k)$ and count the horizontal/vertical distance to the perimeter to find $r$ in 5 seconds."
    ],
    exemplar: {
      question: `The equation of a circle in the $xy$-plane is given by $x^2 + y^2 - 10x + 6y + 9 = 0$. A sector of this circle has a central angle of $\\frac{2\\pi}{5}$ radians. What is the area of this sector, in terms of $\\pi$?`,
      type: "SPR",
      correctAnswer: "5pi",
      acceptedAnswers: ["5pi", "15.7", "15.71"],
      algebraicSolution: [
        "**Rewrite Circle Equation by Completing the Square:**\nGroup $x$ and $y$ terms: $(x^2 - 10x) + (y^2 + 6y) = -9$.",
        "Add $( -10/2 )^2 = 25$ and $( 6/2 )^2 = 9$ to both sides:\n$$(x^2 - 10x + 25) + (y^2 + 6y + 9) = -9 + 25 + 9$$\n$$(x - 5)^2 + (y + 3)^2 = 25$$",
        "**Find Radius Squared ($r^2$):** From $(x - 5)^2 + (y + 3)^2 = 25$, we see that $r^2 = 25$ (hence $r = 5$).",
        "**Calculate Sector Area in Radians:**\nFormula: $A = \\frac{1}{2}r^2\\theta$.\nSubstitute $r^2 = 25$ and $\\theta = \\frac{2\\pi}{5}$:\n$$A = \\frac{1}{2}(25)\\left(\\frac{2\\pi}{5}\\right) = \\frac{1}{2} \\times 10\\pi = \\mathbf{5\\pi}$$.\nIn decimal, $5\\pi \\approx 15.71$."
      ],
      desmosSolution: [
        "Type `x^2 + y^2 - 10x + 6y + 9 = 0` into Desmos.",
        "Click the rightmost point on the circle: $(10, -3)$. Click the leftmost point: $(0, -3)$. The diameter is $10 - 0 = 10$, so $r = 5$, giving $r^2 = 25$.",
        "In line 2, evaluate `(1/2) * 25 * (2*pi/5)`. Desmos displays `15.707963...`.",
        "Divide by `pi` in Desmos: `15.707963... / pi = 5`. The answer is $\\mathbf{5\\pi}$."
      ]
    },
    exercises: [
      {
        id: "m3-ex1",
        type: "MCQ",
        difficulty: "Medium",
        prompt: "A circle has center $(4, -7)$ and contains the point $(4, -2)$. Which of the following is an equation of the circle?",
        options: [
          { label: "A", text: "(x - 4)^2 + (y + 7)^2 = 5" },
          { label: "B", text: "(x - 4)^2 + (y + 7)^2 = 25" },
          { label: "C", text: "(x + 4)^2 + (y - 7)^2 = 25" },
          { label: "D", text: "(x - 4)^2 + (y + 7)^2 = 10" }
        ],
        correctAnswer: "B",
        explanation: "1. The radius is the distance from center $(4, -7)$ to $(4, -2)$: $r = | -2 - (-7) | = 5$.\n2. Thus $r^2 = 5^2 = 25$.\n3. The standard equation is $(x - h)^2 + (y - k)^2 = r^2 \\implies (x - 4)^2 + (y - (-7))^2 = 25 \\implies (x - 4)^2 + (y + 7)^2 = 25$. Option B is correct."
      },
      {
        id: "m3-ex2",
        type: "SPR",
        difficulty: "Hard",
        prompt: "The equation $2x^2 + 2y^2 - 16x + 24y + 6 = 0$ represents a circle in the $xy$-plane. What is the radius of the circle?",
        correctAnswer: "7",
        acceptedAnswers: ["7"],
        explanation: "1. Divide every term in the equation by 2: $x^2 + y^2 - 8x + 12y + 3 = 0$.\n2. Group the $x$ and $y$ terms and move the constant to the right: $(x^2 - 8x) + (y^2 + 12y) = -3$.\n3. Complete the square for both variables:\n   - For $x$: add $(-8/2)^2 = (-4)^2 = 16$.\n   - For $y$: add $(12/2)^2 = 6^2 = 36$.\n   - Add both values to the right side as well: $(x - 4)^2 + (y + 6)^2 = -3 + 16 + 36$.\n4. Simplify the right side: $-3 + 16 + 36 = 49$.\n5. The standard form is $(x - 4)^2 + (y + 6)^2 = 49 = r^2$.\n6. Therefore, the radius is $r = \\sqrt{49} = \\mathbf{7}$."
      },
      {
        id: "m3-ex3",
        type: "MCQ",
        difficulty: "Advanced",
        prompt: "In a circle with radius 12, an arc has length $8\\pi$. What is the area of the sector formed by this central angle?",
        options: [
          { label: "A", text: "24\\pi" },
          { label: "B", text: "48\\pi" },
          { label: "C", text: "96\\pi" },
          { label: "D", text: "144\\pi" }
        ],
        correctAnswer: "B",
        explanation: "1. Formula relating arc length and sector area: $\\text{Sector Area} = \\frac{1}{2} r s$.\n2. Given radius $r = 12$ and arc length $s = 8\\pi$.\n3. $\\text{Sector Area} = \\frac{1}{2} (12) (8\\pi) = 6 \\times 8\\pi = \\mathbf{48\\pi}$. Option B is correct.\n(Alternatively, $\\theta = s/r = 8\\pi / 12 = 2\\pi/3$. Area $= \\frac{1}{2} r^2 \\theta = \\frac{1}{2}(144)(2\\pi/3) = 48\\pi$)."
      }
    ]
  },
  {
    id: "module-4",
    number: 4,
    title: "Two-Variable Exponential Regression",
    domain: "Advanced Math",
    description: "Master exponential models y = a(b)^x, interpreting initial values, continuous and periodic growth/decay rates, and table regression.",
    concepts: [
      {
        heading: "1. The Standard Exponential Function",
        content: `The core DSAT exponential model is:
$$\\mathbf{y = a(b)^x} \\quad \\text{or} \\quad \\mathbf{y = a(1 \\pm r)^x}$$
- $\\mathbf{a}$: The **initial value** (value of $y$ when $x = 0$, or the $y$-intercept $(0, a)$).
- $\\mathbf{b}$: The **growth/decay multiplier**:
  - If $\\mathbf{b > 1}$: Exponential **growth**, where $b = 1 + r$ ($r$ is the percent growth rate expressed as a decimal).
  - If $\\mathbf{0 < b < 1}$: Exponential **decay**, where $b = 1 - r$ ($r$ is the percent decay rate expressed as a decimal).`
      },
      {
        heading: "2. Periodic Compounding & Scaled Exponents",
        content: `A frequent 2026 DSAT hard question modifies the exponent to represent time intervals:
$$\\mathbf{y = a(b)^{\\frac{x}{k}}}$$
- If a population doubles every 6 years: $\\mathbf{P(t) = P_0(2)^{\\frac{t}{6}}}$.
- If a substance has a half-life of 24 hours: $\\mathbf{M(t) = M_0\\left(\\frac{1}{2}\\right)^{\\frac{t}{24}}}$.
- If interest is compounded quarterly ($n=4$ times per year): $\\mathbf{A(t) = P\\left(1 + \\frac{r}{4}\\right)^{4t}}$.
- **Converting compounding periods:** To rewrite $y = a(1.12)^{t/12}$ into yearly form $y = a(b)^t$, calculate $b = 1.12^{1/12} \\approx 1.0095$ (representing a $\\approx 0.95\\%$ monthly increase).`
      }
    ],
    traps: [
      "**Confusing Rate with Multiplier:** If a quantity decreases by $18\\%$, the base is NOT $0.18$! The base is $1 - 0.18 = \\mathbf{0.82}$.",
      "**Units in Exponents:** If $t$ is measured in hours, but doubling occurs every 15 minutes, 15 minutes is $\\frac{1}{4}$ hour $\\implies$ exponent is $\\frac{t}{1/4} = 4t$."
    ],
    desmosTips: [
      "**Exponential Regression Table:** To find an exponential model matching a given table of values, create a table in Desmos (enter $x_1$ and $y_1$ columns).",
      "In the next expression line, type: `y1 ~ a * b^x1`.",
      "Desmos instantly computes the exact parameters $a$ and $b$, $r^2$ correlation, and plots the curve!"
    ],
    exemplar: {
      question: `A study tracked the population of a certain species of fish introduced into an artificial lake. The table below shows the estimated population $P$, in hundreds, $t$ years after introduction:

| Years ($t$) | Population in hundreds ($P$) |
| :---: | :---: |
| 0 | 12.0 |
| 3 | 23.4 |
| 6 | 45.6 |
| 9 | 88.9 |

Based on the exponential model $P = a(b)^{\\frac{t}{3}}$, which of the following is the best interpretation of the value $b$ in this context?`,
      type: "MCQ",
      options: [
        { label: "A", text: "The population increases by approximately 95% every year." },
        { label: "B", text: "The population increases by approximately 95% every 3 years." },
        { label: "C", text: "The population was initially 1,950 fish." },
        { label: "D", text: "The population triples every 1.95 years." }
      ],
      correctAnswer: "B",
      algebraicSolution: [
        "**Identify the Model Form:** The model is $P = a(b)^{t/3}$, where $t$ is the number of years.",
        "**Find $a$ and $b$:**\nWhen $t = 0$, $P = 12.0 \\implies a = 12.0$ (initial population of 1,200 fish).\nWhen $t = 3$, $t/3 = 1$, so $P = 12(b)^1 = 23.4 \\implies b = \\frac{23.4}{12} = 1.95$.",
        "**Interpret the Exponent and Base:**\nThe exponent is $\\frac{t}{3}$, which increases by 1 whenever $t$ increases by 3 years.\nSince $b = 1.95 = 1 + 0.95$, every time 3 years pass, the population is multiplied by 1.95, representing a **95% increase every 3 years**.",
        "Therefore, **Option B** is correct."
      ],
      desmosSolution: [
        "In Desmos, create a table with $x_1 = [0, 3, 6, 9]$ and $y_1 = [12.0, 23.4, 45.6, 88.9]$.",
        "Type `y1 ~ a * b^(x1 / 3)`.",
        "Desmos outputs $a \\approx 12.0$ and $b \\approx 1.95$.",
        "Since $b = 1.95$, the percentage growth is $(1.95 - 1) \\times 100\\% = 95\\%$, and the step unit in the denominator is 3 years."
      ]
    },
    exercises: [
      {
        id: "m4-ex1",
        type: "MCQ",
        difficulty: "Medium",
        prompt: "The value of an industrial machine depreciates exponentially over time. Its value $V(t)$, in dollars, $t$ years after purchase is modeled by $V(t) = 45,000(0.84)^t$. By what percentage does the value of the machine decrease each year?",
        options: [
          { label: "A", text: "84%" },
          { label: "B", text: "16%" },
          { label: "C", text: "0.84%" },
          { label: "D", text: "1.16%" }
        ],
        correctAnswer: "B",
        explanation: "1. The decay model is $V(t) = a(1 - r)^t$.\n2. Here, $1 - r = 0.84 \\implies r = 1 - 0.84 = 0.16$.\n3. Expressed as a percentage, $0.16 \\times 100\\% = \\mathbf{16\\%}$. Option B is correct."
      },
      {
        id: "m4-ex2",
        type: "SPR",
        difficulty: "Hard",
        prompt: "A colony of bacteria grows according to the formula $N(t) = 250(2)^{\\frac{t}{4}}$, where $N(t)$ is the number of bacteria after $t$ hours. How many hours will it take for the population to reach 8,000 bacteria?",
        correctAnswer: "20",
        acceptedAnswers: ["20"],
        explanation: "1. Set $N(t) = 8000$: $250(2)^{t/4} = 8000$.\n2. Divide both sides by 250: $(2)^{t/4} = \\frac{8000}{250} = 32$.\n3. Express 32 as a power of 2: $32 = 2^5$.\n4. Equate the exponents: $\\frac{t}{4} = 5 \\implies t = 5 \\times 4 = \\mathbf{20}$ hours."
      },
      {
        id: "m4-ex3",
        type: "MCQ",
        difficulty: "Advanced",
        prompt: "An invasive aquatic plant covers an area of $A_0$ square meters. The area increases by 25% every 4 days. If $t$ represents time in days, which function gives the area $A(t)$ after $t$ days?",
        options: [
          { label: "A", text: "A(t) = A_0 (1.25)^{4t}" },
          { label: "B", text: "A(t) = A_0 (1.25)^{\\frac{t}{4}}" },
          { label: "C", text: "A(t) = A_0 (0.25)^{\\frac{t}{4}}" },
          { label: "D", text: "A(t) = A_0 (5)^{\\frac{t}{4}}" }
        ],
        correctAnswer: "B",
        explanation: "1. An increase of 25% corresponds to a growth factor of $1 + 0.25 = 1.25$.\n2. Since this growth occurs every 4 days, when $t = 4$, the multiplier should be applied once (exponent $= 1$).\n3. The exponent must be $\\frac{t}{4}$.\n4. Thus, $A(t) = A_0 (1.25)^{\\frac{t}{4}}$, which matches **Option B**."
      }
    ]
  },
  {
    id: "module-5",
    number: 5,
    title: "Similar Shapes: Area and Volume Ratios",
    domain: "Geometry and Trigonometry",
    description: "Master dimensional scaling: linear scale factors (k), area ratios (k^2), volume/mass ratios (k^3), and reverse scaling calculations.",
    concepts: [
      {
        heading: "1. The Fundamental Dimensional Scaling Law",
        content: `When two geometric figures or solids are mathematically **similar**, all corresponding linear dimensions (lengths, widths, heights, radii, perimeters) scale by a constant factor $k$:
$$\\mathbf{\\frac{L_2}{L_1} = k \\quad (\\text{Linear Scale Factor})}$$
From this fundamental relationship:
- **Surface Area / Base Area Ratio:** Areas depend on two linear dimensions multiplied together:
$$\\mathbf{\\frac{\\text{Area}_2}{\\text{Area}_1} = k^2 = \\left(\\frac{L_2}{L_1}\\right)^2}$$
- **Volume / Mass / Capacity Ratio:** Volumes depend on three linear dimensions:
$$\\mathbf{\\frac{\\text{Volume}_2}{\\text{Volume}_1} = k^3 = \\left(\\frac{L_2}{L_1}\\right)^3}$$`
      },
      {
        heading: "2. Working Backwards (Reverse Scaling)",
        content: `On hard 2026 DSAT questions, College Board typically gives the **volume ratio** or **area ratio** and asks for a **linear dimension**:
- Given Area Ratio $R_A$: $\\mathbf{k = \\sqrt{R_A}}$
- Given Volume Ratio $R_V$: $\\mathbf{k = \\sqrt[3]{R_V}}$
- To find Area Ratio from Volume Ratio: $\\mathbf{\\frac{\\text{Area}_2}{\\text{Area}_1} = \\left(\\sqrt[3]{\\frac{\\text{Volume}_2}{\\text{Volume}_1}}\\right)^2 = (R_V)^{2/3}}$`
      }
    ],
    traps: [
      "**Linearizing Non-Linear Quantities:** If the height of a cylinder doubles, but it is *similar* (meaning radius also doubles), its volume does NOT double—it increases by $2^3 = 8$ times!",
      "**Assuming All Cylinders/Cones are Similar:** Figures are only similar if *all* corresponding dimensions are in the exact same proportion. Always check if the question states *'similar cylinders'*."
    ],
    desmosTips: [
      "**Fractional Powers for Reverse Scaling:** When given volume ratio $R_V$, calculate the linear ratio in Desmos as `R_V^(1/3)`.",
      "Calculate the area ratio directly as `(R_V)^(2/3)`.",
      "Convert the result into a clean fraction using the `[a/b]` button on the left."
    ],
    exemplar: {
      question: `Two similar solid decorative glass pyramids, Pyramid A and Pyramid B, have volumes of $54\\text{ cm}^3$ and $250\\text{ cm}^3$, respectively. If the total surface area of Pyramid A is $72\\text{ cm}^2$, what is the total surface area, in $\\text{cm}^2$, of Pyramid B?`,
      type: "SPR",
      correctAnswer: "200",
      acceptedAnswers: ["200"],
      algebraicSolution: [
        "**Find the Volume Ratio:**\n$$\\frac{V_B}{V_A} = \\frac{250}{54} = \\frac{125}{27}$$",
        "**Determine the Linear Scale Factor $k$:**\nSince $\\frac{V_B}{V_A} = k^3$:\n$$k = \\sqrt[3]{\\frac{125}{27}} = \\frac{\\sqrt[3]{125}}{\\sqrt[3]{27}} = \\frac{5}{3}$$",
        "**Determine the Surface Area Ratio ($k^2$):**\n$$\\frac{\\text{Area}_B}{\\text{Area}_A} = k^2 = \\left(\\frac{5}{3}\\right)^2 = \\frac{25}{9}$$",
        "**Calculate Surface Area of Pyramid B:**\n$$\\text{Area}_B = \\text{Area}_A \\times \\frac{25}{9} = 72 \\times \\frac{25}{9}$$\n$$72 \\div 9 = 8 \\implies 8 \\times 25 = \\mathbf{200\\text{ cm}^2}$$."
      ],
      desmosSolution: [
        "Line 1: Enter `k = (250 / 54)^(1/3)`. Desmos computes `1.6666667`.",
        "Line 2: Enter `AreaB = 72 * k^2`.",
        "Desmos evaluates `72 * (1.6666667)^2` to exactly `200`."
      ]
    },
    exercises: [
      {
        id: "m5-ex1",
        type: "MCQ",
        difficulty: "Medium",
        prompt: "Two similar triangles have areas of $36\\text{ cm}^2$ and $81\\text{ cm}^2$. If the perimeter of the smaller triangle is $24\\text{ cm}$, what is the perimeter of the larger triangle?",
        options: [
          { label: "A", text: "36 cm" },
          { label: "B", text: "54 cm" },
          { label: "C", text: "48 cm" },
          { label: "D", text: "32 cm" }
        ],
        correctAnswer: "A",
        explanation: "1. Ratio of areas: $\\frac{\\text{Area}_2}{\\text{Area}_1} = \\frac{81}{36} = \\frac{9}{4}$.\n2. Linear scale factor $k = \\sqrt{\\frac{9}{4}} = \\frac{3}{2}$.\n3. Perimeter is a linear measure, so $\\text{Perimeter}_2 = k \\times \\text{Perimeter}_1 = \\frac{3}{2} \\times 24 = \\mathbf{36\\text{ cm}}$. Option A is correct."
      },
      {
        id: "m5-ex2",
        type: "SPR",
        difficulty: "Hard",
        prompt: "Two similar cylindrical storage tanks have heights of 12 meters and 18 meters, respectively. If the smaller tank has a storage capacity of 320 cubic meters, what is the capacity, in cubic meters, of the larger tank?",
        correctAnswer: "1080",
        acceptedAnswers: ["1080"],
        explanation: "1. Linear scale factor: $k = \\frac{18}{12} = \\frac{3}{2} = 1.5$.\n2. Volume (capacity) scales as $k^3$: $k^3 = \\left(\\frac{3}{2}\\right)^3 = \\frac{27}{8}$.\n3. Capacity of larger tank $= 320 \\times \\frac{27}{8} = (320 \\div 8) \\times 27 = 40 \\times 27 = \\mathbf{1080}$ cubic meters."
      },
      {
        id: "m5-ex3",
        type: "MCQ",
        difficulty: "Advanced",
        prompt: "A spherical balloon is inflated so that its surface area increases by 300%. By what percentage did its volume increase?",
        options: [
          { label: "A", text: "300%" },
          { label: "B", text: "600%" },
          { label: "C", text: "700%" },
          { label: "D", text: "800%" }
        ],
        correctAnswer: "C",
        explanation: "1. If surface area increases by 300%, the new area is $100\\% + 300\\% = 400\\%$ of original area $\\implies \\frac{A_{\\text{new}}}{A_{\\text{orig}}} = 4$.\n2. Linear scale factor $k = \\sqrt{4} = 2$ (the radius doubled!).\n3. Volume scale factor $= k^3 = 2^3 = 8$.\n4. The new volume is 8 times the original volume, which is $800\\%$ of original.\n5. Therefore, the volume *increased* by $800\\% - 100\\% = \\mathbf{700\\%}$. Option C is correct."
      }
    ]
  },
  {
    id: "module-6",
    number: 6,
    title: "Nonlinear Systems of Equations",
    domain: "Advanced Math",
    description: "Solve systems combining quadratics, circles, or exponential models; evaluate number of real solutions (0, 1, 2, 4) algebraically and with Desmos.",
    concepts: [
      {
        heading: "1. System Types and Possible Solution Counts",
        content: `A nonlinear system consists of at least one equation of degree 2 or higher:
- **Circle & Line:** $(x-h)^2 + (y-k)^2 = r^2$ and $y = mx + b$ $\\implies$ **0, 1, or 2 solutions**.
- **Parabola & Line:** $y = ax^2 + bx + c$ and $y = mx + b$ $\\implies$ **0, 1, or 2 solutions**.
- **Two Parabolas:** $y = a_1x^2 + b_1x + c_1$ and $y = a_2x^2 + b_2x + c_2$ $\\implies$ **0, 1, or 2 solutions** (or infinitely many if identical).
- **Circle & Parabola:** Can intersect at **0, 1, 2, 3, or 4 points**!`
      },
      {
        heading: "2. Solving by Substitution",
        content: `1. Isolate the simplest variable (usually $y$ or a linear term).
2. Substitute into the nonlinear equation.
3. Simplify into standard polynomial form.
4. Solve for the first variable using factoring or quadratic formula.
5. **Critical:** Plug each solution back into the linear equation to find the corresponding partner coordinates $(x, y)$.`
      }
    ],
    traps: [
      "**Reporting only $x$-values:** Questions often ask for $x + y$, $x \\cdot y$, or $y_1 + y_2$. Do not stop once you find $x$!",
      "**Squaring Both Sides Creates Extraneous Roots:** If eliminating radicals or absolute values, verify every proposed solution in the original unmanipulated system."
    ],
    desmosTips: [
      "**Direct Visual Intersect:** Desmos graphs non-linear systems effortlessly, even implicit relations like $x^2 + y^2 = 25$ and $xy = 6$!",
      "**Click to Gray Points:** Hover and click on any intersection point; Desmos displays gray dots that lock into exact coordinates."
    ],
    exemplar: {
      question: `Consider the system of equations:
$$\\begin{cases} (x - 3)^2 + (y + 1)^2 = 25 \\\\ 3x - 4y = 38 \\end{cases}$$
If $(x_1, y_1)$ is the unique solution to the system, what is the value of $x_1 + y_1$?`,
      type: "SPR",
      correctAnswer: "1",
      acceptedAnswers: ["1"],
      algebraicSolution: [
        "**Isolate a variable in the linear equation:**\n$$3x - 4y = 38 \\implies 3x - 38 = 4y \\implies y = \\frac{3}{4}x - \\frac{38}{4} = \\frac{3}{4}x - \\frac{19}{2}$$",
        "**Express $(y + 1)$ in terms of $x$:**\n$$y + 1 = \\frac{3}{4}x - \\frac{19}{2} + 1 = \\frac{3}{4}x - \\frac{17}{2} = \\frac{3x - 34}{4}$$",
        "**Substitute into the Circle Equation:**\n$$(x - 3)^2 + \\left(\\frac{3x - 34}{4}\\right)^2 = 25$$\n$$(x^2 - 6x + 9) + \\frac{9x^2 - 204x + 1156}{16} = 25$$\nMultiply entire equation by 16:\n$$16(x^2 - 6x + 9) + (9x^2 - 204x + 1156) = 400$$\n$$16x^2 - 96x + 144 + 9x^2 - 204x + 1156 = 400$$\n$$25x^2 - 300x + 1300 = 400$$\n$$25x^2 - 300x + 900 = 0$$",
        "**Solve the Quadratic:**\nDivide by 25:\n$$x^2 - 12x + 36 = 0 \\implies (x - 6)^2 = 0 \\implies x_1 = 6$$",
        "**Find $y_1$:**\n$$3(6) - 4y_1 = 38 \\implies 18 - 4y_1 = 38 \\implies -4y_1 = 20 \\implies y_1 = -5$$",
        "**Calculate $x_1 + y_1$:**\n$$x_1 + y_1 = 6 + (-5) = \\mathbf{1}$$."
      ],
      desmosSolution: [
        "Line 1: Type `(x - 3)^2 + (y + 1)^2 = 25`.",
        "Line 2: Type `3x - 4y = 38`.",
        "Desmos displays a circle and a line tangent to the circle at point `(6, -5)`.",
        "In Line 3, type `6 + (-5)` to get `1` instantly."
      ]
    },
    exercises: [
      {
        id: "m6-ex1",
        type: "MCQ",
        difficulty: "Medium",
        prompt: "How many real solutions $(x, y)$ does the following system of equations have?\n$$\\begin{cases} y = 2x^2 - 5x + 7 \\\\ y = 3x - 1 \\end{cases}$$",
        options: [
          { label: "A", text: "Zero" },
          { label: "B", text: "Exactly one" },
          { label: "C", text: "Exactly two" },
          { label: "D", text: "Infinitely many" }
        ],
        correctAnswer: "B",
        explanation: "1. Set equal: $2x^2 - 5x + 7 = 3x - 1 \\implies 2x^2 - 8x + 8 = 0$.\n2. Divide by 2: $x^2 - 4x + 4 = 0 \\implies (x - 2)^2 = 0$.\n3. Discriminant $\\Delta = (-8)^2 - 4(2)(8) = 64 - 64 = 0$.\n4. Since $\\Delta = 0$, there is **exactly one** real solution $(2, 5)$. Option B is correct."
      },
      {
        id: "m6-ex2",
        type: "SPR",
        difficulty: "Hard",
        prompt: "The system of equations consists of $x^2 + y^2 = 20$ and $y = x^2$. If $(x, y)$ is a solution to the system with $x > 0$, what is the value of $x^2$?",
        correctAnswer: "4",
        acceptedAnswers: ["4"],
        explanation: "1. Substitute $y = x^2$ into the circle equation: $y + y^2 = 20 \\implies y^2 + y - 20 = 0$.\n2. Factor the quadratic: $(y + 5)(y - 4) = 0 \\implies y = -5$ or $y = 4$.\n3. Since $y = x^2$ and $x$ is a real number, $y \\ge 0$. Thus $y = -5$ is extraneous.\n4. Therefore $y = 4 \\implies x^2 = \\mathbf{4}$."
      },
      {
        id: "m6-ex3",
        type: "MCQ",
        difficulty: "Advanced",
        prompt: "A line and a parabola are defined by $y = kx + 2$ and $y = 2x^2 + 4x + 10$, respectively. For which of the following values of $k$ does the system of equations have no real solutions?",
        options: [
          { label: "A", text: "k = -6" },
          { label: "B", text: "k = 4" },
          { label: "C", text: "k = 14" },
          { label: "D", text: "k = 18" }
        ],
        correctAnswer: "B",
        explanation: "1. Set equations equal to find intersection points:\n$$2x^2 + 4x + 10 = kx + 2 \\implies 2x^2 + (4 - k)x + 8 = 0$$\n2. For the system to have no real solutions, the discriminant must be strictly negative: $\\Delta = B^2 - 4AC < 0$.\n3. Substitute $A = 2$, $B = 4 - k$, and $C = 8$:\n$$(4 - k)^2 - 4(2)(8) < 0$$\n$$(4 - k)^2 - 64 < 0 \\implies (4 - k)^2 < 64$$\n4. Take the square root of both sides:\n$$-8 < 4 - k < 8$$\n5. Subtract 4: $-12 < -k < 4 \\implies -4 < k < 12$.\n6. Testing the choices: only $k = 4$ lies strictly within the interval $(-4, 12)$. For $k = 4$, $(4 - 4)^2 - 64 = -64 < 0$. Therefore, Option B is correct."
      }
    ]
  },
  {
    id: "module-7",
    number: 7,
    title: "Linear Equations in Two Variables",
    domain: "Algebra",
    description: "Master slope-intercept form, parallel/perpendicular slopes, contextual constant interpretation, and infinite/no solution systems.",
    concepts: [
      {
        heading: "1. Forms of Linear Equations & Slope Properties",
        content: `- **Slope-Intercept Form:** $\\mathbf{y = mx + b}$, where $m = \\frac{y_2 - y_1}{x_2 - x_1}$ and $b$ is the $y$-intercept $(0, b)$.
- **Standard Form:** $\\mathbf{Ax + By = C}$, where slope $m = -\\frac{A}{B}$ and $y$-intercept $= \\frac{C}{B}$.
- **Parallel Lines:** Identical slopes: $\\mathbf{m_1 = m_2}$.
- **Perpendicular Lines:** Negative reciprocal slopes: $\\mathbf{m_1 \\cdot m_2 = -1 \\implies m_2 = -\\frac{1}{m_1}}$.`
      },
      {
        heading: "2. Infinite vs. No Solution in Linear Systems",
        content: `Given a system of two linear equations:
$$\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}$$
- **Exactly One Solution:** Slopes are different: $\\mathbf{\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}}$.
- **No Solution (Parallel Lines):** Same slope, different intercepts:
$$\\mathbf{\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}}$$
- **Infinitely Many Solutions (Coincident Lines):** Same slope, same intercepts (equations are proportional multiples):
$$\\mathbf{\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}}$$`
      },
      {
        heading: "3. Interpreting Constants in Context",
        content: `- **Slope ($m$):** The rate of change. On DSAT word problems, look for keywords like *"per"*, *"each"*, *"every"*, *"rate of"*.
- **$y$-intercept ($b$):** The value of $y$ when $x = 0$. Look for *"flat fee"*, *"starting value"*, *"minimum charge"*, *"at time $t=0$"*.`
      }
    ],
    traps: [
      "**Flipping the Perpendicular Slope:** Don't just take the reciprocal; remember to switch the sign too! If $m = -\\frac{2}{5}$, the perpendicular slope is $+\\frac{5}{2}$.",
      "**Infinitely Many vs No Solution:** Students frequently mix up the constant ratio. If $\\frac{c_1}{c_2}$ matches the coefficient ratio, it's INFINITE solutions. If it differs, it's NO solution."
    ],
    desmosTips: [
      "**No Solution Verification:** Enter both linear equations into Desmos. If the lines are parallel and never touch, there are 0 solutions.",
      "**Slider for Constants:** If an equation contains an unknown constant $p$ (e.g., $px + 6y = 15$), add a slider for $p$ and drag until the lines overlay (infinite solutions) or become parallel."
    ],
    exemplar: {
      question: `In the system of linear equations below, $a$ and $b$ are constants:
$$\\begin{cases} 4x - 6y = 15 \\\\ ax + 9y = b \\end{cases}$$
If the system has infinitely many solutions, what is the value of $\\frac{b}{a}$?`,
      type: "SPR",
      correctAnswer: "15/4",
      acceptedAnswers: ["15/4", "3.75"],
      algebraicSolution: [
        "**Understand the Condition for Infinitely Many Solutions:** Two linear equations have infinitely many solutions if and only if their coefficients are directly proportional:\n$$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$$",
        "**Set up Proportions:**\n$$\\frac{4}{a} = \\frac{-6}{9} = \\frac{15}{b}$$",
        "**Simplify the Known Ratio:**\n$$\\frac{-6}{9} = -\\frac{2}{3}$$",
        "**Solve for $a$:**\n$$\\frac{4}{a} = -\\frac{2}{3} \\implies -2a = 12 \\implies a = -6$$",
        "**Solve for $b$:**\n$$\\frac{15}{b} = -\\frac{2}{3} \\implies -2b = 45 \\implies b = -\\frac{45}{2} = -22.5$$",
        "**Compute $\\frac{b}{a}$:**\n$$\\frac{b}{a} = \\frac{-45/2}{-6} = \\frac{-45}{2 \\times (-6)} = \\frac{45}{12} = \\mathbf{\\frac{15}{4}} = \\mathbf{3.75}$$\n(Notice that since $\\frac{b}{a} = \\frac{c_2}{a_2} = \\frac{c_1}{a_1}$, we could also read directly $\\frac{c_1}{a_1} = \\frac{15}{4} = 3.75$). Both the reduced fraction $\\frac{15}{4}$ and decimal $3.75$ are fully valid on the Bluebook exam."
      ],
      desmosSolution: [
        "Enter line 1: `4x - 6y = 15`.",
        "Enter line 2: `a*x + 9y = b` with sliders for `a` and `b`.",
        "Adjust $a$ until slopes match: slope of line 1 is $4/6 = 2/3$. Line 2 slope is $-a/9$. Setting $-a/9 = 2/3 \\implies a = -6$.",
        "Adjust $b$ so the lines overlap completely: at $a = -6$, the lines overlap when $b = -22.5$.",
        "Type `b / a` in line 3: Desmos outputs `3.75`, and clicking the fraction icon yields `15/4`."
      ]
    },
    exercises: [
      {
        id: "m7-ex1",
        type: "MCQ",
        difficulty: "Medium",
        prompt: "Line $k$ passes through the points $(-3, 4)$ and $(5, -2)$. Line $p$ is perpendicular to line $k$ and passes through $(1, 2)$. Which of the following is an equation of line $p$?",
        options: [
          { label: "A", text: "y = -\\frac{3}{4}x + \\frac{11}{4}" },
          { label: "B", text: "y = \\frac{4}{3}x + \\frac{2}{3}" },
          { label: "C", text: "y = \\frac{4}{3}x - \\frac{2}{3}" },
          { label: "D", text: "y = -\\frac{4}{3}x + \\frac{10}{3}" }
        ],
        correctAnswer: "B",
        explanation: "1. Slope of line $k$: $m_k = \\frac{-2 - 4}{5 - (-3)} = \\frac{-6}{8} = -\\frac{3}{4}$.\n2. Perpendicular slope $m_p = -\\frac{1}{-3/4} = \\frac{4}{3}$.\n3. Use point-slope form with $(1, 2)$: $y - 2 = \\frac{4}{3}(x - 1) \\implies y = \\frac{4}{3}x - \\frac{4}{3} + 2 = \\frac{4}{3}x + \\frac{2}{3}$. Option B is correct."
      },
      {
        id: "m7-ex2",
        type: "SPR",
        difficulty: "Hard",
        prompt: "The system of equations below has no solution. If $k$ is a constant, what is the value of $k$?\n$$\\begin{cases} \\frac{3}{5}x - \\frac{1}{2}y = 8 \\\\ kx - 5y = 12 \\end{cases}$$",
        correctAnswer: "6",
        acceptedAnswers: ["6"],
        explanation: "1. For no solution, slopes must be equal and lines must be parallel: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2}$.\n2. Here $a_1 = 3/5$, $b_1 = -1/2$, $a_2 = k$, $b_2 = -5$.\n3. Set up ratio: $\\frac{3/5}{k} = \\frac{-1/2}{-5} = \\frac{1}{10}$.\n4. Cross-multiply: $\\frac{3}{5} = \\frac{1}{10} k \\implies k = \\frac{3}{5} \\times 10 = \\mathbf{6}$."
      },
      {
        id: "m7-ex3",
        type: "MCQ",
        difficulty: "Advanced",
        prompt: "A catering company charges a basic setup fee plus a fixed cost per guest. For 35 guests, the total charge is $1,175. For 60 guests, the total charge is $1,800. What is the basic setup fee charged by the company?",
        options: [
          { label: "A", text: "$25" },
          { label: "B", text: "$250" },
          { label: "C", text: "$300" },
          { label: "D", text: "$350" }
        ],
        correctAnswer: "C",
        explanation: "1. Let $C = mg + b$, where $g$ is number of guests, $m$ is cost per guest, and $b$ is basic setup fee.\n2. Rate per guest $m = \\frac{1800 - 1175}{60 - 35} = \\frac{625}{25} = 25$ dollars/guest.\n3. Substitute $m = 25$ and $(35, 1175)$ into equation: $1175 = 25(35) + b$.\n4. $25 \\times 35 = 875 \\implies 1175 = 875 + b \\implies b = 1175 - 875 = \\mathbf{300}$. Option C is correct."
      }
    ]
  },
  {
    id: "module-8",
    number: 8,
    title: "Statistical Studies, Sampling Bias, and Generalization",
    domain: "Problem-Solving and Data Analysis",
    description: "Master observational studies vs. experiments, random sampling vs. random assignment, margin of error interpretations, and valid conclusions.",
    concepts: [
      {
        heading: "1. Study Design: Observational vs. Randomized Experiment",
        content: `Understanding the study design dictates what kind of conclusion can legally be drawn on the DSAT:
| Study Design | Key Mechanism | Valid Conclusion Allowed |
| :--- | :--- | :--- |
| **Observational Study** | Subjects are observed without intervention. **No random assignment**. | **Association / Correlation only**. Can NEVER prove cause-and-effect! |
| **Randomized Controlled Experiment** | Subjects are **randomly assigned** to treatment and control groups. | **Causation** (the treatment *caused* the difference). |`
      },
      {
        heading: "2. Random Selection vs. Random Assignment",
        content: `- **Random Selection / Sampling:** Subjects are chosen at random from a population.
  $\\implies$ Allows results to be **generalized to that entire target population**.
- **Random Assignment:** Participants are randomly placed into treatment groups.
  $\\implies$ Allows **causal conclusions** to be established.
- **Rule of Generalization:** Results can *only* be generalized to the exact population from which the random sample was drawn (e.g., a random sample of high school athletes in Texas cannot be generalized to all US high school students).`
      },
      {
        heading: "3. Margin of Error & Confidence Intervals",
        content: `A survey result is reported as: $\\mathbf{\\text{Estimate} \\pm \\text{Margin of Error}}$.
- **Sample Size Relationship:**
$$\\mathbf{\\text{Larger Sample Size } (n) \\implies \\text{Smaller Margin of Error}}$$
- **What Margin of Error Accounts For:** It accounts *strictly* for random sampling variability (chance fluctuation).
- **What Margin of Error Does NOT Account For:** It does **NOT** account for sampling bias, non-response bias, leading survey questions, or poor measurement instruments!`
      }
    ],
    traps: [
      "**Over-Generalization:** If a study randomly selects 400 volunteers from a specific gym, you cannot generalize to 'all adults in the city'—only to gym members or the specific subpopulation.",
      "**Volunteer Bias:** Any study relying on voluntary responses (e.g., an online poll or comment card) has voluntary response bias and cannot be generalized to the broader population.",
      "**Claiming Absolute Certainty with Margin of Error:** It is incorrect to claim an outcome is 'guaranteed' to fall within the margin of error; margin of error describes a confidence interval, not an absolute deterministic bound."
    ],
    desmosTips: [
      "**Confidence Interval Ranges:** When given an estimate $p$ and margin of error $E$, enter `[p - E, p + E]` in Desmos to find the exact lower and upper boundaries.",
      "Multiply by population size $N$ directly: `N * [p - E, p + E]` to get population estimate ranges."
    ],
    exemplar: {
      question: `A school district superintendent wants to estimate the proportion of high school students in the district who support changing the school start time to 8:30 a.m. The district has 12,000 high school students across four schools. 

The superintendent selects a random sample of 600 high school students from across the four schools and finds that 68% support the change, with an associated margin of error of 3.8% at a 95% confidence level. 

Which of the following is the most plausible and methodologically sound conclusion?`,
      type: "MCQ",
      options: [
        { label: "A", text: "Exactly 68% of all high school students in the state support changing the school start time." },
        { label: "B", text: "It is plausible that between 7,704 and 8,616 high school students in the district support changing the start time." },
        { label: "C", text: "Changing the start time will cause 68% of students in the district to improve their academic performance." },
        { label: "D", text: "If another random sample of 600 students is chosen, exactly 68% will support the change." }
      ],
      correctAnswer: "B",
      algebraicSolution: [
        "**Evaluate Generalization Scope:** The sample was a *random sample of high school students in the district*. Therefore, findings can be generalized to all high school students in this district (not the entire state, eliminating A).",
        "**Evaluate Causation:** This is a survey (observational), not an experiment with random assignment. It cannot establish causation, eliminating C.",
        "**Evaluate Repeatability:** Different random samples will produce slightly different sample proportions due to sampling variability, eliminating D.",
        "**Calculate Plausible Range for the District:**\n- Sample proportion range: $68\\% \\pm 3.8\\% = [64.2\\%, 71.8\\%]$.\n- In decimals: $[0.642, 0.718]$.\n- Multiply by total district high school population (12,000):\n  - Lower bound $= 12,000 \\times 0.642 = 7,704$.\n  - Upper bound $= 12,000 \\times 0.718 = 8,616$.\n- Thus, it is plausible that between 7,704 and 8,616 students in the district support the change.",
        "Therefore, **Option B** is completely sound and correct."
      ],
      desmosSolution: [
        "In Desmos line 1: `12000 * (0.68 - 0.038) = 7704`.",
        "In Desmos line 2: `12000 * (0.68 + 0.038) = 8616`.",
        "The interval `[7704, 8616]` immediately matches Option B."
      ]
    },
    exercises: [
      {
        id: "m8-ex1",
        type: "MCQ",
        difficulty: "Medium",
        prompt: "A researcher wants to study the sleeping habits of residents in a city of 250,000 people. She conducts a survey by interviewing the first 200 people who enter a public library at 9:00 a.m. on a Tuesday. Which of the following best explains why the results cannot be reliably generalized to all residents of the city?",
        options: [
          { label: "A", text: "The sample size of 200 is too small to calculate any margin of error." },
          { label: "B", text: "The sample was not randomly selected and is likely biased toward individuals who visit the library on weekday mornings." },
          { label: "C", text: "The researcher did not include a control group." },
          { label: "D", text: "The study was an experiment rather than an observational survey." }
        ],
        correctAnswer: "B",
        explanation: "1. Generalizing results to a target population requires a **random sample** where every individual has an equal chance of selection.\n2. People entering a library at 9:00 a.m. on a Tuesday are likely retirees, students, or unemployed/flexible workers, excluding normal 9-to-5 commuters and night-shift workers (convenience sampling bias).\n3. Thus, Option B is correct."
      },
      {
        id: "m8-ex2",
        type: "MCQ",
        difficulty: "Hard",
        prompt: "In a randomized controlled trial, 120 patients suffering from insomnia were randomly assigned to two equal groups. Group 1 received a new herbal supplement, and Group 2 received an identical-looking placebo pill. After 6 weeks, patients in Group 1 fell asleep an average of 28 minutes faster than those in Group 2, and the difference was statistically significant. Which conclusion is most justified?",
        options: [
          { label: "A", text: "The herbal supplement causes people with insomnia to fall asleep faster." },
          { label: "B", text: "The herbal supplement is guaranteed to cure insomnia in any person who takes it." },
          { label: "C", text: "There is an association between the supplement and faster sleep, but causation cannot be determined." },
          { label: "D", text: "Taking the placebo caused patients to sleep worse than their baseline." }
        ],
        correctAnswer: "A",
        explanation: "1. Because participants were **randomly assigned** to treatment and control groups in a controlled experiment, confounding variables are balanced, which allows **causal claims** to be made.\n2. Since the difference was statistically significant, the conclusion that the supplement *causes* faster sleep in people with insomnia is justified.\n3. Option B is overly broad and absolute ('guaranteed to cure'). Option C is incorrect because randomized experiments *do* allow causal claims. Option A is correct."
      },
      {
        id: "m8-ex3",
        type: "SPR",
        difficulty: "Advanced",
        prompt: "A political polling organization surveyed a random sample of 1,600 registered voters from a city with 40,000 registered voters. The survey showed that 54% favored a proposed bond measure, with a margin of error of 2.5%. Based on this survey, what is the minimum estimated number of registered voters in the city who favor the measure?",
        correctAnswer: "20600",
        acceptedAnswers: ["20600"],
        explanation: "1. Lower bound percentage $= 54\\% - 2.5\\% = 51.5\\%$.\n2. Express as a decimal: $0.515$.\n3. Multiply by the total population of registered voters: $40,000 \\times 0.515 = \\mathbf{20,600}$."
      }
    ]
  },
  {
    id: "module-9",
    number: 9,
    title: "Rational Expressions and Equations",
    domain: "Advanced Math",
    description: "Master simplifying rational expressions, identifying vertical/horizontal asymptotes, excluded values, and catching extraneous solutions.",
    concepts: [
      {
        heading: "1. Domain Restrictions & Excluded Values",
        content: `In any rational expression $\\frac{P(x)}{Q(x)}$, the denominator can **never equal zero**:
$$\\mathbf{Q(x) \\neq 0}$$
- **Vertical Asymptotes:** Occur at $x$-values where the denominator is zero and the factor does **not** cancel with the numerator.
- **Holes (Removable Discontinuities):** Occur at $x$-values where a factor $(x - c)$ appears in **both** numerator and denominator and cancels out.
- *Example:* $f(x) = \\frac{(x - 2)(x + 3)}{(x - 2)(x - 5)}$ has a **hole** at $x = 2$ and a **vertical asymptote** at $x = 5$.`
      },
      {
        heading: "2. Solving Rational Equations & Extraneous Solutions",
        content: `To solve an equation with rational expressions:
1. Factor all denominators to find the **Least Common Denominator (LCD)**.
2. Note all **excluded values** ($x$ values that make any denominator zero).
3. Multiply every term in the equation by the LCD to clear all fractions.
4. Solve the resulting polynomial equation.
5. **Check for Extraneous Solutions:** Any solution that matches an excluded value MUST be discarded!`
      },
      {
        heading: "3. Horizontal Asymptotes & End Behavior",
        content: `For $R(x) = \\frac{a x^n + \\dots}{b x^d + \\dots}$:
- If degree of numerator $<$ degree of denominator ($n < d$): Horizontal asymptote is $\\mathbf{y = 0}$.
- If degree of numerator $=$ degree of denominator ($n = d$): Horizontal asymptote is $\\mathbf{y = \\frac{a}{b}}$.
- If degree of numerator $>$ degree of denominator ($n > d$): No horizontal asymptote.`
      }
    ],
    traps: [
      "**Forgetting to Check Extraneous Solutions:** On the DSAT, questions asking *'What is the number of real solutions to...'*, or *'What is the sum of the solutions...'* frequently produce a candidate value that makes a denominator 0. If you don't check, you will pick the wrong answer!",
      "**Canceling Across Addition:** You can only cancel common **factors**, never individual additive terms! $\\frac{x + 5}{5} \\neq x + 1$."
    ],
    desmosTips: [
      "**Instant Equation Solver:** Enter the left side as `y = f(x)` and the right side as `y = g(x)`. The $x$-coordinates of their intersection points are the real solutions.",
      "**Checking Extraneous Values:** In Desmos, if you click on the graph at an excluded value (like $x = 3$), Desmos explicitly displays `(3, undefined)`, alerting you that it cannot be a solution."
    ],
    exemplar: {
      question: `What is the real solution to the rational equation below?
$$\\frac{x}{x - 3} - \\frac{2}{x + 1} = \\frac{12}{x^2 - 2x - 3}$$`,
      type: "SPR",
      correctAnswer: "-2",
      acceptedAnswers: ["-2"],
      algebraicSolution: [
        "**Factor all Denominators:**\nFactor the quadratic denominator on the right: $x^2 - 2x - 3 = (x - 3)(x + 1)$.\nThe equation becomes:\n$$\\frac{x}{x - 3} - \\frac{2}{x + 1} = \\frac{12}{(x - 3)(x + 1)}$$",
        "**Identify Excluded Values (Domain Restrictions):**\nAny value that makes a denominator zero is restricted: $x - 3 \\neq 0 \\implies x \\neq 3$ and $x + 1 \\neq 0 \\implies x \\neq -1$.",
        "**Clear Denominators by Multiplying by the LCD $(x - 3)(x + 1)$:**\n$$x(x + 1) - 2(x - 3) = 12$$\n$$x^2 + x - 2x + 6 = 12$$\n$$x^2 - x + 6 = 12$$\n$$x^2 - x - 6 = 0$$",
        "**Factor the Quadratic to Find Potential Roots:**\n$$(x - 3)(x + 2) = 0 \\implies x = 3 \\quad \\text{or} \\quad x = -2$$",
        "**Check for Extraneous Solutions:**\n- At $x = 3$: Causes division by zero in the original equation $(\\frac{3}{0})$, so $x = 3$ is **extraneous**!\n- At $x = -2$: Denominators are $-2 - 3 = -5$ and $-2 + 1 = -1$ (both non-zero). Valid!",
        "Therefore, the unique valid real solution is $\\mathbf{-2}$."
      ],
      desmosSolution: [
        "In Desmos line 1: Enter `y = x / (x - 3) - 2 / (x + 1)`.",
        "In Desmos line 2: Enter `y = 12 / (x^2 - 2x - 3)`.",
        "Click on the intersection point: Desmos displays `(-2, 0.4)`.",
        "At $x = 3$, notice vertical dashed asymptotes where both sides approach $\\pm\\infty$ without intersecting.",
        "The valid $x$-solution is ` -2 `."
      ]
    },
    exercises: [
      {
        id: "m9-ex1",
        type: "MCQ",
        difficulty: "Medium",
        prompt: "Which of the following values of $x$ is an extraneous solution to the equation $\\frac{x^2 - 4x}{x - 4} = 4$?",
        options: [
          { label: "A", text: "x = 0" },
          { label: "B", text: "x = 2" },
          { label: "C", text: "x = 4" },
          { label: "D", text: "There are no extraneous solutions." }
        ],
        correctAnswer: "C",
        explanation: "1. The denominator is $x - 4$, so $x \\neq 4$ is an excluded value.\n2. Simplifying the numerator: $\\frac{x(x - 4)}{x - 4} = 4$.\n3. Canceling $(x - 4)$ gives $x = 4$.\n4. However, plugging $x = 4$ into the original expression causes division by zero: $\\frac{0}{0}$ (undefined).\n5. Therefore, $x = 4$ is an **extraneous solution** (and the equation actually has no real solution). Option C is correct."
      },
      {
        id: "m9-ex2",
        type: "SPR",
        difficulty: "Hard",
        prompt: "If $\\frac{3}{x - 2} + \\frac{1}{x} = 1$, what is the sum of all valid real solutions to the equation?",
        correctAnswer: "6",
        acceptedAnswers: ["6"],
        explanation: "1. Excluded values: $x \\neq 0$ and $x \\neq 2$.\n2. Multiply by LCD $x(x - 2)$:\n$$3x + 1(x - 2) = x(x - 2)$$\n$$4x - 2 = x^2 - 2x$$\n$$x^2 - 6x + 2 = 0$$\n3. The discriminant is $\\Delta = (-6)^2 - 4(1)(2) = 36 - 8 = 28 > 0$, so there are two real roots.\n4. Neither root is 0 or 2 (at $x=0$, $0-0+2=2 \\neq 0$; at $x=2$, $4-12+2 = -6 \\neq 0$).\n5. By Vieta's formulas, the sum of the roots of $Ax^2 + Bx + C = 0$ is $-\\frac{B}{A} = -\\frac{-6}{1} = \\mathbf{6}$."
      },
      {
        id: "m9-ex3",
        type: "MCQ",
        difficulty: "Advanced",
        prompt: "The function $f$ is defined by $f(x) = \\frac{2x^2 - 8}{x^2 - 5x + 6}$. Which of the following statements about the graph of $y = f(x)$ in the $xy$-plane is true?",
        options: [
          { label: "A", text: "The graph has vertical asymptotes at x = 2 and x = 3." },
          { label: "B", text: "The graph has a vertical asymptote at x = 3 and a hole at x = 2." },
          { label: "C", text: "The graph has a vertical asymptote at x = 2 and a hole at x = 3." },
          { label: "D", text: "The graph has no vertical asymptotes." }
        ],
        correctAnswer: "B",
        explanation: "1. Factor the numerator: $2(x^2 - 4) = 2(x - 2)(x + 2)$.\n2. Factor the denominator: $(x - 2)(x - 3)$.\n3. The function is $f(x) = \\frac{2(x - 2)(x + 2)}{(x - 2)(x - 3)}$.\n4. The common factor $(x - 2)$ cancels $\\implies$ there is a **hole (removable discontinuity)** at $x = 2$.\n5. The factor $(x - 3)$ remains in the denominator $\\implies$ there is a **vertical asymptote** at $x = 3$.\n6. Therefore, Option B is correct."
      }
    ]
  }
];
