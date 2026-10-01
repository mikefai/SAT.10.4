# 2026 Digital SAT (DSAT) Math Master Curriculum & Field Guide
### The Official Bluebook™ Hard-Tier Module 2 Notebook & Study Guide
*Authored by Master Curriculum Developers & 800-Scorer SAT Tutors*

---

## Master Tutor's Introduction & Bluebook 2026 Strategy

Welcome to the **2026 Digital SAT Math Field Notebook**. The Digital SAT Math section is divided into two 35-minute, 22-question modules:
1. **Module 1 (Routing Module):** A balanced mix of easy, medium, and hard questions.
2. **Module 2 (Adaptive Tier):** If you perform well on Module 1 (typically $\ge 15$ correct), you are routed to the **Hard Module 2**. To score $750 - 800$, you must master the exact question types, edge cases, and time-saving shortcuts compiled in this guide.

### The Three Golden Rules of the 2026 DSAT:
1. **The Desmos Dual-Track:** Never rely purely on algebra when Desmos can verify or solve in 15 seconds. Never rely blindly on Desmos without understanding the algebraic foundation. Every problem in this notebook provides both paths.
2. **Student-Produced Response (SPR) Precision:** Grid-in questions have no guessing penalty. Fractions do not need to be reduced unless specified (e.g., $31/49$ and $62/98$ are both accepted), but decimals must fill all 5 or 6 spaces if repeating (e.g., $2/3$ must be entered as `2/3`, `0.666`, or `0.667`, never truncated to `.66`).
3. **The 3-Pass Pacing Strategy:**
   - *Pass 1 (0 to 18 min):* Solve all 1-minute direct questions (algebra, linear functions, direct Desmos graphs).
   - *Pass 2 (18 to 30 min):* Tackle hard word problems, quadratic tangencies, circle sector areas, and similar 3D solid ratios.
   - *Pass 3 (30 to 35 min):* Check flagged items, verify SPR answers, and ensure no question is left blank.

---

# Module 1: Probability and Combinatorics

## 1. Deep-Dive Conceptual Breakdown

### Core Definitions
- **Probability of Event $A$:** The ratio of favorable outcomes to total possible outcomes in the sample space:
  $$P(A) = \frac{\text{Number of favorable outcomes}}{\text{Total number of possible outcomes}}$$
- **Complement Rule:** The probability that $A$ does not occur:
  $$P(A^c) = 1 - P(A)$$
  *Tutor's Note:* Whenever a question asks for the probability of **"at least one"**, instantly compute:
  $$\mathbf{P(\text{at least one}) = 1 - P(\text{none})}$$

### Two-Way Frequency Tables & Conditional Probability
On the DSAT, two-way tables test whether you can identify the **restricted sample space**.
$$P(A \mid B) = \frac{P(A \cap B)}{P(B)} = \frac{\text{Outcomes in both } A \text{ and } B}{\text{Total outcomes in Condition } B}$$

> **Language Triggers for Conditional Probability:**
> - *"Given that a respondent selected is..."*
> - *"If an employee who [Condition B] is chosen at random..."*
> - *"Of the participants who [Condition B]..."*
>
> In all these cases, the denominator is **strictly the subtotal of Condition B**, NOT the grand total of the table!

### Independent vs. Dependent Events
- Two events $A$ and $B$ are **independent** if the outcome of one does not alter the likelihood of the other:
  $$P(A \cap B) = P(A) \times P(B) \quad \iff \quad P(A \mid B) = P(A)$$
- If selection is **without replacement**, events are **dependent**, and the sample space shrinks for each subsequent pick.

### Combinatorics & Counting
- **Fundamental Counting Principle:** If step 1 has $n_1$ ways, step 2 has $n_2$ ways, ..., total arrangements = $n_1 \times n_2 \times \dots \times n_k$.
- **Combinations (Order does not matter):**
  $$\mathbf{_nC_r = \binom{n}{r} = \frac{n!}{r!(n-r)!}}$$
- **Permutations (Order matters):**
  $$\mathbf{_nP_r = \frac{n!}{(n-r)!}}$$

### DSAT Traps
- **Trap 1 (Grand Total vs. Subtotal):** Reading "a person who has condition X" as "a person chosen from all participants".
- **Trap 2 (Replacement Amnesia):** Forgetting that picking marbles, cards, or committee members without replacement decreases both the numerator and the denominator on the second draw.

### Desmos Calculator Shortcuts
- Desmos natively calculates combinations and permutations!
  - Type `nCr(14, 3)` $\implies$ returns `364`.
  - Type `nPr(6, 2)` $\implies$ returns `30`.
  - Type `6!` $\implies$ returns `720`.
- To convert any decimal probability into a simplified fraction for SPR grid-in, click the **Fraction button** `[a/b]` next to the result.

---

## 2. Step-by-Step Guided Exemplar

### Question
A clinical trial evaluated the effectiveness of a new allergy medication against a placebo. The results for 320 participants are summarized in the table below:

| Treatment Group | Significant Improvement | Moderate Improvement | No Improvement | Total |
| :--- | :---: | :---: | :---: | :---: |
| Medication | 78 | 46 | 36 | 160 |
| Placebo | 22 | 50 | 88 | 160 |
| Total | 100 | 96 | 124 | 320 |

If a participant who reported at least moderate improvement is selected at random, what is the probability that this participant was in the medication group? *(Enter your answer as a simplified fraction or decimal).*

### Method 1: Formal Algebraic Derivation
1. **Identify the Condition:** The phrase *"If a participant who reported at least moderate improvement is selected at random"* restricts our sample space strictly to participants with either "Significant Improvement" or "Moderate Improvement".
2. **Find the Denominator:**
   $$\text{Denominator} = 100 + 96 = 196$$
   *(Warning: Do not use 320!)*
3. **Find the Numerator:** Count how many participants in the **Medication** group achieved at least moderate improvement:
   $$\text{Numerator} = 78 + 46 = 124$$
4. **Form the Probability Fraction:**
   $$P(\text{Medication} \mid \text{At least moderate improvement}) = \frac{124}{196}$$
5. **Simplify the Fraction:**
   Divide both numbers by their greatest common factor, $4$:
   $$\frac{124 \div 4}{196 \div 4} = \mathbf{\frac{31}{49}}$$
   In decimal form, $\frac{31}{49} \approx \mathbf{0.633}$.

### Method 2: Desmos Speed Hack
1. In Desmos line 1, enter: `(78 + 46) / (100 + 96)`.
2. Desmos outputs `0.632653061224`.
3. Click the `[a/b]` fraction conversion icon on the left.
4. Desmos immediately returns `31/49`.

---

## 3. Practice Exercises

### Exercise 1.1 (Medium - MCQ)
A bag contains 5 red marbles, 7 blue marbles, and 8 green marbles. Two marbles are selected at random without replacement. What is the probability that both selected marbles are green?
- **A)** $\frac{14}{95}$
- **B)** $\frac{4}{25}$
- **C)** $\frac{28}{190}$
- **D)** $\frac{14}{100}$

### Exercise 1.2 (Hard - SPR Grid-In)
A research committee consists of 8 scientists and 6 engineers. A subcommittee of 3 members is to be formed at random. What is the probability that the subcommittee contains exactly 2 scientists and 1 engineer? *(Enter your answer as a simplified fraction a/b).*

### Exercise 1.3 (Advanced - MCQ)
In a survey of 150 college seniors, 90 students participated in an internship, 60 students studied abroad, and 35 students participated in both. If a student who participated in an internship is chosen at random, what is the probability that the student did NOT study abroad?
- **A)** $\frac{7}{18}$
- **B)** $\frac{11}{18}$
- **C)** $\frac{11}{30}$
- **D)** $\frac{25}{90}$

### Answers & Explanations for Module 1
- **1.1: A ($\frac{14}{95}$).** Total $= 20$. First pick green $= \frac{8}{20} = \frac{2}{5}$. Second pick green $= \frac{7}{19}$. Joint probability $= \frac{2}{5} \times \frac{7}{19} = \mathbf{\frac{14}{95}}$.
- **1.2: $\frac{6}{13}$ (or $\frac{42}{91}$, $0.462$).** Total committee selections $= \binom{14}{3} = 364$. Favorable selections $= \binom{8}{2} \times \binom{6}{1} = 28 \times 6 = 168$. Probability $= \frac{168}{364} = \mathbf{\frac{6}{13}}$.
- **1.3: B ($\frac{11}{18}$).** Sample space restricted to internship participants $= 90$. Those who did not study abroad $= 90 - 35 = 55$. Probability $= \frac{55}{90} = \mathbf{\frac{11}{18}}$.

---

# Module 2: Nonlinear Equations and Tangency

## 1. Deep-Dive Conceptual Breakdown

### Core Definitions & The Discriminant
When a line $y = mx + k$ intersects a parabola $y = ax^2 + bx + c$, we determine intersection points by equating them:
$$ax^2 + bx + c = mx + k \implies ax^2 + (b - m)x + (c - k) = 0$$
Let $A = a$, $B = b - m$, and $C = c - k$. The number of real solutions is governed by the **discriminant** $\Delta = B^2 - 4AC$:
- $\mathbf{\Delta > 0}$: Two distinct real intersections (secant line).
- $\mathbf{\Delta = 0}$: **Exactly one real solution (the line is tangent to the parabola)**.
- $\mathbf{\Delta < 0}$: Zero real solutions (the line and parabola never touch).

### The Tangency Blueprint
Whenever the DSAT says:
- *"The system has exactly one solution"*
- *"The line is tangent to the graph"*
- *"The quadratic equation has one distinct real root"*

**Your immediate reflex is:**
1. Rewrite in standard form: $Ax^2 + Bx + C = 0$.
2. Set $\mathbf{B^2 - 4AC = 0}$.
3. Solve for the missing parameter.

### DSAT Traps
- **Ignoring the linear term transfer:** If $y = 3x^2 + 5x - 2$ and $y = 2x + k$, the linear coefficient $B$ is $(5 - 2) = 3$, NOT $5$!
- **Squaring Negative Signs:** When computing $B^2$, remember $(-6)^2 = +36$. Never write $-36$!

### Desmos Calculator Shortcuts
- Graph both equations: $y = ax^2 + bx + c$ and $y = mx + k$.
- Add a **slider** for $k$. Move the slider until the line touches the vertex or rim of the parabola at exactly one coordinate.
- Alternatively, type the single variable equation $ax^2 + (b-m)x + (c-k) = 0$ with $k$ replaced by candidate answers to see which one creates a single parabola tangent to the $x$-axis.

---

## 2. Step-by-Step Guided Exemplar

### Question
In the $xy$-plane, the line $y = -4x + k$ is tangent to the parabola $y = 2x^2 + 8x - 3$, where $k$ is a constant. What is the value of $k$?

### Method 1: Formal Algebraic Derivation
1. **Equate the two functions:**
   $$2x^2 + 8x - 3 = -4x + k$$
2. **Collect all terms to the left side ($Ax^2 + Bx + C = 0$):**
   $$2x^2 + (8 + 4)x + (-3 - k) = 0$$
   $$2x^2 + 12x - (3 + k) = 0$$
   Here, $A = 2$, $B = 12$, and $C = -3 - k$.
3. **Set the Discriminant to Zero for Tangency ($\Delta = 0$):**
   $$B^2 - 4AC = 0$$
   $$12^2 - 4(2)(-3 - k) = 0$$
   $$144 - 8(-3 - k) = 0$$
   $$144 + 24 + 8k = 0$$
   $$168 + 8k = 0$$
   $$8k = -168 \implies k = \mathbf{-21}$$

### Method 2: Desmos Speed Hack
1. Enter `y = 2x^2 + 8x - 3` on line 1.
2. Enter `y = -4x + k` on line 2, and add a slider for `k`.
3. In line 3, type the discriminant equation: `12^2 - 4*2*(-3 - k) = 0`.
4. Desmos plots a vertical line at $k = -21$. The answer is instantly verified.

---

## 3. Practice Exercises

### Exercise 2.1 (Medium - MCQ)
The system of equations consists of $y = x^2 - 6x + 14$ and $y = 2x + c$, where $c$ is a constant. For what value of $c$ does the system have exactly one real solution?
- **A)** $-2$
- **B)** $2$
- **C)** $-6$
- **D)** $6$

### Exercise 2.2 (Hard - SPR Grid-In)
A line with equation $y = mx - 5$ is tangent to the parabola $y = -x^2 + 4x - 9$. If $m > 0$, what is the value of $m$?

### Exercise 2.3 (Advanced - MCQ)
For what value of $b$ does the quadratic equation $3x^2 + bx + 12 = 0$ have no real solutions?
- **A)** $b = -15$
- **B)** $b = -12$
- **C)** $b = 10$
- **D)** $b = 14$

### Answers & Explanations for Module 2
- **2.1: A ($-2$).** $x^2 - 8x + (14 - c) = 0 \implies (-8)^2 - 4(1)(14 - c) = 0 \implies 64 - 56 + 4c = 0 \implies 4c = -8 \implies c = \mathbf{-2}$.
- **2.2: $8$.** $-x^2 + 4x - 9 = mx - 5 \implies x^2 + (m - 4)x + 4 = 0$. $\Delta = (m - 4)^2 - 16 = 0 \implies (m - 4)^2 = 16 \implies m - 4 = 4 \implies m = \mathbf{8}$ (since $m > 0$).
- **2.3: C ($b = 10$).** $\Delta < 0 \implies b^2 - 4(3)(12) < 0 \implies b^2 < 144 \implies -12 < b < 12$. The only option in this interval is $b = 10$.

---

# Module 3: Area and Circumference of Circles

## 1. Deep-Dive Conceptual Breakdown

### Circle Equations & Completing the Square
Standard equation of a circle centered at $(h, k)$ with radius $r$:
$$\mathbf{(x - h)^2 + (y - k)^2 = r^2}$$

To convert the general quadratic form $x^2 + y^2 + Ax + By + C = 0$:
1. Group variables: $(x^2 + Ax) + (y^2 + By) = -C$.
2. Complete the square for both:
   $$\left(x + \frac{A}{2}\right)^2 + \left(y + \frac{B}{2}\right)^2 = -C + \left(\frac{A}{2}\right)^2 + \left(\frac{B}{2}\right)^2 = r^2$$

### Arc Length & Sector Area
Let $r$ be radius and $\theta$ be central angle:
- **Radian Measure:**
  - Arc length: $\mathbf{s = r\theta}$
  - Sector area: $\mathbf{A = \frac{1}{2}r^2\theta}$
- **Degree Measure ($d^\circ$):**
  - Arc length: $\mathbf{s = 2\pi r \left(\frac{d}{360^\circ}\right)}$
  - Sector area: $\mathbf{A = \pi r^2 \left(\frac{d}{360^\circ}\right)}$
- **Conversion Rule:**
  $$\text{Radians} = \text{Degrees} \times \frac{\pi}{180^\circ}, \quad \text{Degrees} = \text{Radians} \times \frac{180^\circ}{\pi}$$

---

## 2. Step-by-Step Guided Exemplar

### Question
The equation of a circle in the $xy$-plane is given by $x^2 + y^2 - 10x + 6y + 9 = 0$. A sector of this circle has a central angle of $\frac{2\pi}{5}$ radians. What is the area of this sector, in terms of $\pi$?

### Method 1: Formal Algebraic Derivation
1. **Complete the Square:**
   $$(x^2 - 10x) + (y^2 + 6y) = -9$$
   Add $\left(\frac{-10}{2}\right)^2 = 25$ and $\left(\frac{6}{2}\right)^2 = 9$ to both sides:
   $$(x - 5)^2 + (y + 3)^2 = -9 + 25 + 9 = 25$$
2. **Identify Radius Squared ($r^2$):**
   $$r^2 = 25 \implies r = 5$$
3. **Apply Sector Area Formula (Radians):**
   $$A = \frac{1}{2} r^2 \theta = \frac{1}{2}(25)\left(\frac{2\pi}{5}\right) = \frac{1}{2}(10\pi) = \mathbf{5\pi}$$

### Method 2: Desmos Speed Hack
1. Enter `x^2 + y^2 - 10x + 6y + 9 = 0` directly into Desmos.
2. Click on the circle's extreme horizontal points: $(0, -3)$ and $(10, -3)$. Distance $= 10 \implies r = 5 \implies r^2 = 25$.
3. Compute `0.5 * 25 * (2*pi/5) / pi` in line 2. Desmos returns `5`. Result $= \mathbf{5\pi}$.

---

## 3. Practice Exercises

### Exercise 3.1 (Medium - MCQ)
A circle has center $(4, -7)$ and contains the point $(4, -2)$. Which of the following is an equation of the circle?
- **A)** $(x - 4)^2 + (y + 7)^2 = 5$
- **B)** $(x - 4)^2 + (y + 7)^2 = 25$
- **C)** $(x + 4)^2 + (y - 7)^2 = 25$
- **D)** $(x - 4)^2 + (y + 7)^2 = 10$

### Exercise 3.2 (Hard - SPR Grid-In)
The equation $2x^2 + 2y^2 - 16x + 24y + 6 = 0$ represents a circle in the $xy$-plane. What is the radius of the circle?

### Exercise 3.3 (Advanced - MCQ)
In a circle with radius 12, an arc has length $8\pi$. What is the area of the sector formed by this central angle?
- **A)** $24\pi$
- **B)** $48\pi$
- **C)** $96\pi$
- **D)** $144\pi$

### Answers & Explanations for Module 3
- **3.1: B ($(x - 4)^2 + (y + 7)^2 = 25$).** Radius is the vertical distance $|-2 - (-7)| = 5$. Thus $r^2 = 25$. Standard equation: $(x - 4)^2 + (y - (-7))^2 = 25$.
- **3.2: $7$.** Divide by 2: $x^2 + y^2 - 8x + 12y + 3 = 0 \implies (x-4)^2 + (y+6)^2 = -3 + 16 + 36 = 49$. Therefore, $r = \sqrt{49} = \mathbf{7}$.
- **3.3: B ($48\pi$).** Relationship: $\text{Area} = \frac{1}{2} r s = \frac{1}{2}(12)(8\pi) = \mathbf{48\pi}$.

---

# Module 4: Two-Variable Exponential Regression

## 1. Deep-Dive Conceptual Breakdown

### The Exponential Equation
$$\mathbf{y = a(b)^x = a(1 \pm r)^x}$$
- $\mathbf{a}$: The **initial value** (value of $y$ at $x = 0$, $y$-intercept).
- $\mathbf{b}$: The **multiplier (growth/decay factor)**:
  - $b > 1 \implies b = 1 + r$ ($r$ is percentage growth rate as a decimal).
  - $0 < b < 1 \implies b = 1 - r$ ($r$ is percentage decay rate as a decimal).

### Scaled Exponents & Compounding Periods
$$\mathbf{y = a(b)^{\frac{t}{k}}}$$
- Doubling every $k$ hours: $y = a(2)^{\frac{t}{k}}$.
- Half-life of $k$ years: $y = a(0.5)^{\frac{t}{k}}$.
- Notice that every time $t$ increases by $k$, the exponent increases by 1, multiplying $y$ by $b$.

---

## 2. Step-by-Step Guided Exemplar

### Question
A study tracked the population of a certain species of fish introduced into an artificial lake:

| Years ($t$) | Population in hundreds ($P$) |
| :---: | :---: |
| 0 | 12.0 |
| 3 | 23.4 |
| 6 | 45.6 |
| 9 | 88.9 |

Based on the model $P = a(b)^{\frac{t}{3}}$, which of the following is the best interpretation of $b$?
- **A)** The population increases by approximately 95% every year.
- **B)** The population increases by approximately 95% every 3 years.
- **C)** The population was initially 1,950 fish.
- **D)** The population triples every 1.95 years.

### Solution
1. When $t = 0$, $P = 12.0 \implies a = 12.0$.
2. When $t = 3$, $t/3 = 1$, so $P = 12(b)^1 = 23.4 \implies b = \frac{23.4}{12} = 1.95$.
3. Since $b = 1.95 = 1 + 0.95$, this represents a **95% increase**.
4. Because the exponent is $\frac{t}{3}$, this increase occurs **every 3 years**.
5. **Correct Answer: B**.

---

## 3. Practice Exercises

### Exercise 4.1 (Medium - MCQ)
The value of an industrial machine depreciates exponentially over time. Its value $V(t)$, in dollars, $t$ years after purchase is modeled by $V(t) = 45,000(0.84)^t$. By what percentage does the value decrease each year?
- **A)** 84%
- **B)** 16%
- **C)** 0.84%
- **D)** 1.16%

### Exercise 4.2 (Hard - SPR Grid-In)
A colony of bacteria grows according to the formula $N(t) = 250(2)^{\frac{t}{4}}$, where $t$ is in hours. How many hours will it take for the population to reach 8,000 bacteria?

### Exercise 4.3 (Advanced - MCQ)
An invasive aquatic plant covers an area of $A_0$ square meters. The area increases by 25% every 4 days. Which function gives the area $A(t)$ after $t$ days?
- **A)** $A(t) = A_0 (1.25)^{4t}$
- **B)** $A(t) = A_0 (1.25)^{\frac{t}{4}}$
- **C)** $A(t) = A_0 (0.25)^{\frac{t}{4}}$
- **D)** $A(t) = A_0 (5)^{\frac{t}{4}}$

### Answers & Explanations for Module 4
- **4.1: B (16%).** Multiplier $b = 0.84 = 1 - r \implies r = 0.16 = \mathbf{16\%}$.
- **4.2: 20.** $250(2)^{t/4} = 8000 \implies (2)^{t/4} = 32 = 2^5 \implies \frac{t}{4} = 5 \implies t = \mathbf{20}$.
- **4.3: B ($A(t) = A_0 (1.25)^{\frac{t}{4}}$).** Rate is $+25\% \implies b = 1.25$. Compounding period is 4 days $\implies$ exponent is $\frac{t}{4}$.

---

# Module 5: Similar Shapes: Area and Volume Ratios

## 1. Deep-Dive Conceptual Breakdown

### The Power Law of Dimensional Scaling
If two geometric figures are similar with linear scale factor $k = \frac{L_2}{L_1}$:
- **Perimeters / Lengths / Radii:** $\frac{\text{Perimeter}_2}{\text{Perimeter}_1} = \mathbf{k}$
- **Surface Areas / Base Areas:** $\frac{\text{Area}_2}{\text{Area}_1} = \mathbf{k^2}$
- **Volumes / Masses / Capacities:** $\frac{\text{Volume}_2}{\text{Volume}_1} = \mathbf{k^3}$

### Reverse Scaling
- Given volume ratio $R_V$: $k = \sqrt[3]{R_V}$.
- Then area ratio is $k^2 = (R_V)^{2/3}$.

---

## 2. Step-by-Step Guided Exemplar

### Question
Two similar solid decorative glass pyramids, Pyramid A and Pyramid B, have volumes of $54\text{ cm}^3$ and $250\text{ cm}^3$, respectively. If the total surface area of Pyramid A is $72\text{ cm}^2$, what is the total surface area, in $\text{cm}^2$, of Pyramid B?

### Solution
1. Find volume ratio: $\frac{V_B}{V_A} = \frac{250}{54} = \frac{125}{27}$.
2. Linear scale factor: $k = \sqrt[3]{\frac{125}{27}} = \frac{5}{3}$.
3. Area ratio: $k^2 = \left(\frac{5}{3}\right)^2 = \frac{25}{9}$.
4. Surface area of Pyramid B: $\text{Area}_B = 72 \times \frac{25}{9} = 8 \times 25 = \mathbf{200\text{ cm}^2}$.

---

## 3. Practice Exercises

### Exercise 5.1 (Medium - MCQ)
Two similar triangles have areas of $36\text{ cm}^2$ and $81\text{ cm}^2$. If the perimeter of the smaller triangle is $24\text{ cm}$, what is the perimeter of the larger triangle?
- **A)** 36 cm
- **B)** 54 cm
- **C)** 48 cm
- **D)** 32 cm

### Exercise 5.2 (Hard - SPR Grid-In)
Two similar cylindrical storage tanks have heights of 12 meters and 18 meters. If the smaller tank has a storage capacity of 320 cubic meters, what is the capacity, in cubic meters, of the larger tank?

### Exercise 5.3 (Advanced - MCQ)
A spherical balloon is inflated so that its surface area increases by 300%. By what percentage did its volume increase?
- **A)** 300%
- **B)** 600%
- **C)** 700%
- **D)** 800%

### Answers & Explanations for Module 5
- **5.1: A (36 cm).** Area ratio $= 81/36 = 9/4 \implies k = \sqrt{9/4} = 3/2$. Perimeter $= 24 \times (3/2) = \mathbf{36\text{ cm}}$.
- **5.2: 1080.** $k = 18/12 = 3/2 \implies k^3 = 27/8$. Volume $= 320 \times (27/8) = 40 \times 27 = \mathbf{1080}$.
- **5.3: C (700%).** Area increases by $300\% \implies A_{\text{new}} = 4 A_{\text{orig}} \implies k = \sqrt{4} = 2$. Volume ratio $= k^3 = 8$. New volume is $800\%$ of original, representing a $\mathbf{700\%}$ increase.

---

# Module 6: Nonlinear Systems of Equations

## 1. Deep-Dive Conceptual Breakdown
A system with at least one quadratic, circular, or exponential equation.
- **Substitution Method:** Isolate the linear variable and substitute into the nonlinear equation.
- **Number of Intersections:**
  - Circle & Line: 0, 1 (tangent), or 2.
  - Parabola & Line: 0, 1 (tangent), or 2.
  - Circle & Parabola: 0, 1, 2, 3, or 4.

---

## 2. Step-by-Step Guided Exemplar

### Question
Consider the system of equations:
$$\begin{cases} (x - 3)^2 + (y + 1)^2 = 25 \\ 3x - 4y = 38 \end{cases}$$
If $(x_1, y_1)$ is the unique solution to the system, what is the value of $x_1 + y_1$?

### Solution
1. Isolate $y$: $4y = 3x - 38 \implies y = \frac{3}{4}x - \frac{19}{2}$.
2. Substitute into circle equation:
   $$(x - 3)^2 + \left(\frac{3}{4}x - \frac{17}{2}\right)^2 = 25$$
   Multiply by 16 and expand:
   $$16(x^2 - 6x + 9) + (9x^2 - 204x + 1156) = 400$$
   $$25x^2 - 300x + 900 = 0 \implies x^2 - 12x + 36 = 0 \implies (x - 6)^2 = 0 \implies x_1 = 6$$
3. Find $y_1$: $3(6) - 4y_1 = 38 \implies 18 - 4y_1 = 38 \implies y_1 = -5$.
4. Value of $x_1 + y_1 = 6 + (-5) = \mathbf{1}$.

---

## 3. Practice Exercises

### Exercise 6.1 (Medium - MCQ)
How many real solutions $(x, y)$ does the system have?
$$\begin{cases} y = 2x^2 - 5x + 7 \\ y = 3x - 1 \end{cases}$$
- **A)** Zero
- **B)** Exactly one
- **C)** Exactly two
- **D)** Infinitely many

### Exercise 6.2 (Hard - SPR Grid-In)
The system consists of $x^2 + y^2 = 20$ and $y = x^2$. If $(x, y)$ is a solution with $x > 0$, what is the value of $x^2$?

### Exercise 6.3 (Advanced - MCQ)
For which value of $k$ does the system $y = 2x^2 + 4x + 10$ and $y = kx + 2$ have no real solutions?
- **A)** $k = -6$
- **B)** $k = 4$
- **C)** $k = 14$
- **D)** $k = 18$

### Answers & Explanations for Module 6
- **6.1: B (Exactly one).** $2x^2 - 8x + 8 = 0 \implies 2(x - 2)^2 = 0 \implies \Delta = 0$ (one real solution).
- **6.2: 4.** $y + y^2 = 20 \implies y^2 + y - 20 = 0 \implies (y+5)(y-4)=0$. Since $y=x^2 \ge 0$, $y = 4 \implies x^2 = \mathbf{4}$.
- **6.3: B ($k = 4$).** $2x^2 + (4 - k)x + 8 = 0 \implies \Delta = (4 - k)^2 - 64 < 0 \implies -8 < 4 - k < 8 \implies -4 < k < 12$. For $k = 4$, $\Delta = -64 < 0$.

---

# Module 7: Linear Equations in Two Variables

## 1. Deep-Dive Conceptual Breakdown
- **Slope-Intercept:** $y = mx + b$. Slope $m = \frac{y_2 - y_1}{x_2 - x_1}$.
- **Perpendicular Lines:** Slopes are negative reciprocals: $m_1 \cdot m_2 = -1 \implies m_2 = -\frac{1}{m_1}$.
- **System Solution Rules:**
  - One solution: $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$.
  - No solution (parallel): $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$.
  - Infinitely many (coincident): $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$.

---

## 2. Step-by-Step Guided Exemplar

### Question
In the system below, $a$ and $b$ are constants:
$$\begin{cases} 4x - 6y = 15 \\ ax + 9y = b \end{cases}$$
If the system has infinitely many solutions, what is the value of $\frac{b}{a}$?

### Solution
1. Ratio of coefficients: $\frac{4}{a} = \frac{-6}{9} = \frac{15}{b}$.
2. Ratio value: $\frac{-6}{9} = -\frac{2}{3}$.
3. Solve for $a$: $\frac{4}{a} = -\frac{2}{3} \implies a = -6$.
4. Solve for $b$: $\frac{15}{b} = -\frac{2}{3} \implies b = -\frac{45}{2} = -22.5$.
5. Calculate $\frac{b}{a}$: $\frac{-22.5}{-6} = \mathbf{\frac{15}{4}} = \mathbf{3.75}$.

---

## 3. Practice Exercises

### Exercise 7.1 (Medium - MCQ)
Line $k$ passes through $(-3, 4)$ and $(5, -2)$. Line $p$ is perpendicular to line $k$ and passes through $(1, 2)$. Which is an equation of line $p$?
- **A)** $y = -\frac{3}{4}x + \frac{11}{4}$
- **B)** $y = \frac{4}{3}x + \frac{2}{3}$
- **C)** $y = \frac{4}{3}x - \frac{2}{3}$
- **D)** $y = -\frac{4}{3}x + \frac{10}{3}$

### Exercise 7.2 (Hard - SPR Grid-In)
The system below has no solution. If $k$ is a constant, what is the value of $k$?
$$\begin{cases} \frac{3}{5}x - \frac{1}{2}y = 8 \\ kx - 5y = 12 \end{cases}$$

### Exercise 7.3 (Advanced - MCQ)
A catering company charges a basic setup fee plus a fixed cost per guest. For 35 guests, the total charge is $1,175. For 60 guests, the total charge is $1,800. What is the basic setup fee?
- **A)** $25
- **B)** $250
- **C)** $300
- **D)** $350

### Answers & Explanations for Module 7
- **7.1: B ($y = \frac{4}{3}x + \frac{2}{3}$).** $m_k = \frac{-2 - 4}{5 - (-3)} = -\frac{3}{4} \implies m_p = \frac{4}{3}$. $y - 2 = \frac{4}{3}(x - 1) \implies y = \frac{4}{3}x + \frac{2}{3}$.
- **7.2: 6.** $\frac{3/5}{k} = \frac{-1/2}{-5} = \frac{1}{10} \implies k = \frac{3}{5} \times 10 = \mathbf{6}$.
- **7.3: C ($300).** Rate $m = \frac{1800 - 1175}{60 - 35} = 25$/guest. $1175 = 25(35) + b \implies b = 1175 - 875 = \mathbf{300}$.

---

# Module 8: Statistical Studies, Sampling Bias, and Generalization

## 1. Deep-Dive Conceptual Breakdown
- **Random Sample:** Guarantees results generalize to the **target population**.
- **Random Assignment:** Guarantees **causal inference** (treatment caused the outcome).
- **Margin of Error:** Quantifies random sampling error ($n \uparrow \implies \text{Margin of Error} \downarrow$). It does NOT compensate for sampling bias!

---

## 2. Step-by-Step Guided Exemplar

### Question
A superintendent wants to estimate student support for an 8:30 a.m. start time among 12,000 high school students in a district. A random sample of 600 students across the district finds 68% support, with a margin of error of 3.8% at a 95% confidence level. Which is the most plausible conclusion?
- **A)** Exactly 68% of all high school students in the state support changing the school start time.
- **B)** It is plausible that between 7,704 and 8,616 high school students in the district support changing the start time.
- **C)** Changing start time will cause 68% of students to improve grades.
- **D)** In another sample of 600 students, exactly 68% will support the change.

### Solution
1. Sampling was random across the district $\implies$ generalizes to district high school students.
2. Interval: $68\% \pm 3.8\% = [64.2\%, 71.8\%]$.
3. Apply to 12,000 students:
   - Lower: $12,000 \times 0.642 = 7,704$.
   - Upper: $12,000 \times 0.718 = 8,616$.
4. **Correct Answer: B**.

---

## 3. Practice Exercises

### Exercise 8.1 (Medium - MCQ)
A researcher surveys the first 200 people entering a city library at 9:00 a.m. on a Tuesday about sleep habits. Why can't the results be reliably generalized to all city residents?
- **A)** Sample size 200 is too small.
- **B)** Sample was not randomly selected and is biased toward weekday morning library visitors.
- **C)** No control group was included.
- **D)** Study was an experiment.

### Exercise 8.2 (Hard - MCQ)
In a randomized double-blind trial of 120 insomnia patients, those randomly assigned to an herbal supplement fell asleep 28 minutes faster than those assigned to placebo ($p < 0.01$). Which is justified?
- **A)** The herbal supplement causes people with insomnia to fall asleep faster.
- **B)** The supplement is guaranteed to cure insomnia in anyone.
- **C)** Only an association exists; causation cannot be determined.
- **D)** Placebo made sleep worse.

### Exercise 8.3 (Advanced - SPR Grid-In)
A random sample of 1,600 registered voters from a city of 40,000 voters showed 54% favored a bond measure, with margin of error 2.5%. What is the minimum estimated number of registered voters who favor the measure?

### Answers & Explanations for Module 8
- **8.1: B.** Convenience sampling introduces systematic bias; random sampling is mandatory for generalization.
- **8.2: A.** Randomized experiments balance confounders and justify causal statements.
- **8.3: 20600.** Lower bound $= 54\% - 2.5\% = 51.5\%$. $40,000 \times 0.515 = \mathbf{20,600}$.

---

# Module 9: Rational Expressions and Equations

## 1. Deep-Dive Conceptual Breakdown
- **Domain Restrictions:** Denominator cannot equal 0 ($Q(x) \neq 0$).
- **Hole vs Asymptote:**
  - If a factor $(x - c)$ cancels out completely: **Hole at $x = c$**.
  - If $(x - c)$ remains in the denominator: **Vertical Asymptote at $x = c$**.
- **Extraneous Solutions:** Algebraic steps (clearing denominators) can produce values of $x$ that make the original denominator zero. These MUST be eliminated!

---

## 2. Step-by-Step Guided Exemplar

### Question
What is the real solution to the rational equation below?
$$\frac{x}{x - 3} - \frac{2}{x + 1} = \frac{12}{x^2 - 2x - 3}$$

### Solution
1. Factor denominator: $x^2 - 2x - 3 = (x - 3)(x + 1)$.
2. Note domain restrictions: $x \neq 3$ and $x \neq -1$.
3. Multiply by LCD $(x - 3)(x + 1)$:
   $$x(x + 1) - 2(x - 3) = 12$$
   $$x^2 + x - 2x + 6 = 12 \implies x^2 - x - 6 = 0$$
4. Factor: $(x - 3)(x + 2) = 0 \implies x = 3$ or $x = -2$.
5. Test against restrictions: $x = 3$ makes denominators zero, so $x = 3$ is **extraneous**.
6. The unique valid real solution is $\mathbf{-2}$.

---

## 3. Practice Exercises

### Exercise 9.1 (Medium - MCQ)
Which value of $x$ is an extraneous solution to $\frac{x^2 - 4x}{x - 4} = 4$?
- **A)** $x = 0$
- **B)** $x = 2$
- **C)** $x = 4$
- **D)** No extraneous solutions

### Exercise 9.2 (Hard - SPR Grid-In)
If $\frac{3}{x - 2} + \frac{1}{x} = 1$, what is the sum of all valid real solutions?

### Exercise 9.3 (Advanced - MCQ)
The function $f(x) = \frac{2x^2 - 8}{x^2 - 5x + 6}$. Which statement is true?
- **A)** Vertical asymptotes at $x = 2$ and $x = 3$.
- **B)** Vertical asymptote at $x = 3$ and a hole at $x = 2$.
- **C)** Vertical asymptote at $x = 2$ and a hole at $x = 3$.
- **D)** No vertical asymptotes.

### Answers & Explanations for Module 9
- **9.1: C ($x = 4$).** Factoring gives $\frac{x(x-4)}{x-4} = x = 4$. But at $x = 4$, original expression is $\frac{0}{0}$ (undefined), making $x = 4$ extraneous.
- **9.2: 6.** Multiply by $x(x - 2) \implies 3x + (x - 2) = x^2 - 2x \implies x^2 - 6x + 2 = 0$. Roots are real ($\Delta = 28 > 0$) and neither is $0$ or $2$. Sum of roots $= -(-6)/1 = \mathbf{6}$.
- **9.3: B.** $f(x) = \frac{2(x-2)(x+2)}{(x-2)(x-3)}$. Factor $(x-2)$ cancels $\implies$ hole at $x=2$; $(x-3)$ remains $\implies$ vertical asymptote at $x=3$.

---
*End of Field Notebook. Practice relentlessly with both Desmos and algebraic derivations.*
