# Math Refresher

!!! abstract "Math Refresher in one card"
    Biostatistics doesn't require advanced math. But it does require **reading math comfortably** — operations, notation, formulas — without freezing up.
    
    **Expert version:** Working fluency with order of operations, fractions and powers, summation notation, inequalities, and the standard symbol set ($\bar{x}$, $\hat{p}$, $x_i$, $\sum$, $\le$, etc.) used in mathematical statistics.
    
    **Analogy:** Reading stats formulas is like reading sheet music. You don't have to compose a symphony — you just need to recognize the symbols and play your part. After a refresher, the page stops looking like alien hieroglyphics.
    
    **Plain words:** This card refreshes the math you'll actually need to do, plus shows you how to read the math your textbook, JMP output, and research papers will throw at you. No calculus. No proofs. Just the operations and notation that come up over and over.

---

## Order of operations (PEMDAS)

When a formula has multiple operations stacked together, the order you do them in matters. The standard order:

**P**arentheses → **E**xponents → **M**ultiplication & **D**ivision → **A**ddition & **S**ubtraction

Some people remember it as **P**lease **E**xcuse **M**y **D**ear **A**unt **S**ally.

Important details most students forget:

- **M and D are tied.** You do whichever comes FIRST left-to-right. Same with A and S.
- **The fraction bar acts as a grouping symbol.** Whatever's above the bar is calculated first; whatever's below the bar is calculated; THEN you divide.
- **Negative signs are part of the number.** (−3)² = 9. But written without parentheses, −3² is interpreted as −(3²) = −9. These are different.

### Stats example: z-score

The z-score formula is:

$$z = \frac{x - \mu}{\sigma}$$

For x = 150, μ = 120, σ = 15:

1. **Parentheses / fraction bar:** the top is grouped — calculate (150 − 120) first = 30
2. **The bottom:** calculate σ = 15 (already a single number)
3. **Divide:** 30 / 15 = 2

The z-score is 2. If you tried to do 150 − (120/15), you'd get the wrong answer (138 instead of 2).

!!! warning "The most common PEMDAS mistake in stats"
    Forgetting that the fraction bar groups everything above and below. When you see $\frac{x - \mu}{\sigma}$, that's NOT $x - \frac{\mu}{\sigma}$. The bar holds the top together as one quantity.

---

## Three ways to say the same thing: fractions, decimals, percentages

These are three different ways to write the same value. You'll bounce between them constantly in stats — proportions, p-values, confidence levels, percentages of populations.

| Fraction | Decimal | Percentage |
|---------|---------|-----------|
| 1/2 | 0.5 | 50% |
| 1/4 | 0.25 | 25% |
| 3/4 | 0.75 | 75% |
| 1/10 | 0.1 | 10% |
| 1/20 | 0.05 | 5% |
| 1/100 | 0.01 | 1% |
| 1/1000 | 0.001 | 0.1% |

### Converting between forms

- **Decimal → Percentage:** Multiply by 100. 0.05 × 100 = 5%
- **Percentage → Decimal:** Divide by 100. 5% / 100 = 0.05
- **Fraction → Decimal:** Divide top by bottom. 3/4 = 0.75
- **Decimal → Fraction:** Less common in stats. JMP and your calculator do this if needed.

### When you'll see each in stats

- **Probabilities:** Always between 0 and 1 (or 0% and 100%). Written as decimals usually.
- **p-values:** Written as decimals (p = 0.034) but you can think of them as percentages (3.4%).
- **Confidence levels:** Stated as percentages (95% CI) but used as decimals in formulas (0.95).
- **Proportions:** Written either way depending on context. Use whichever is clearer.

!!! important "Watch out: percentage in formulas"
    When you plug a confidence level into a formula or function, use the **decimal form** (0.95) — NOT the percentage (95). Plugging in 95 instead of 0.95 will produce nonsense answers, sometimes very confidently.

---

## Powers and roots

A power means "multiply this number by itself, a certain number of times." A root means "what number, multiplied by itself, gives this result?" They're inverse operations — they undo each other.

### Powers (exponents)

The little number on top is the exponent.

- $5^2$ means 5 × 5 = 25 ("five squared")
- $5^3$ means 5 × 5 × 5 = 125 ("five cubed")
- $2^4$ means 2 × 2 × 2 × 2 = 16
- $x^2$ means x times x (any value of x)

In stats, you'll see squares constantly:

- **Variance** is the square of the standard deviation. $\sigma^2$ is variance, $\sigma$ is SD.
- **Sum of squares** (in regression and ANOVA): adding up squared values.
- **Z-squared** can show up in some hypothesis tests.

You'll rarely see cubes or higher powers in intro biostatistics.

### Square roots

A square root is the inverse of squaring. The symbol is $\sqrt{\,}$.

- $\sqrt{25} = 5$ (because 5² = 25)
- $\sqrt{9} = 3$ (because 3² = 9)
- $\sqrt{100} = 10$
- $\sqrt{2} \approx 1.414$ (most square roots aren't whole numbers)

**The square root of n** is one of the most-used quantities in stats. It appears in:

- **Standard error:** $SE = \frac{s}{\sqrt{n}}$
- **Margin of error calculations**
- **Sample size formulas**

Common values to know:

| n | √n |
|---|------|
| 4 | 2 |
| 9 | 3 |
| 16 | 4 |
| 25 | 5 |
| 100 | 10 |
| 10 | ≈ 3.162 |
| 50 | ≈ 7.071 |
| 30 | ≈ 5.477 |

!!! tip "JMP and your calculator do this for you"
    You won't compute most square roots by hand. JMP, your calculator, or Excel will handle it. You just need to recognize the symbol and know roughly what it does.

!!! warning "Negative numbers under a square root"
    You can't take the square root of a negative number (not in basic stats). If you ever get $\sqrt{-5}$ in a calculation, you've made a sign error somewhere upstream. Trace your steps back.

---

## Subscripts and superscripts

**Subscripts** sit below the line. **Superscripts** sit above. They look similar but they mean entirely different things.

| Notation | Position | What it means |
|----------|----------|---------------|
| $x_i$ | subscript | "the i-th value of x" — an index/label |
| $x^2$ | superscript | "x squared" — an exponent |
| $x_1$ | subscript | "the first value of x" |
| $\sigma^2$ | superscript | "sigma squared" — the variance |
| $p_1$ | subscript | "the first proportion" |
| $\hat{p}$ | hat (not sub/sup) | "estimated p" — from a sample |
| $\bar{x}$ | bar | "sample mean" |
| $H_0$ | subscript | "null hypothesis" |
| $H_1$ or $H_a$ | subscript | "alternative hypothesis" |

### Real example: data values

If your data is 2, 3, 3, 4, 4, 5, 5, 6, 8, 14, then:

- $x_1 = 2$ (the first value)
- $x_2 = 3$
- $x_3 = 3$
- ...
- $x_{10} = 14$ (the tenth/last value)
- n = 10 (sample size)

The general formula $x_i$ means "any one of these values" — a placeholder that lets us write rules that apply to all of them.

!!! warning "Don't confuse subscript with multiplication"
    $x_2$ is "the second value of x" — it's a label, not arithmetic. It does NOT mean x times 2. (That would be 2x.)

---

## Summation notation (Σ)

Σ is the capital Greek letter sigma. In math, it means "**sum these things up**." You read it as "the sum of..."

The full notation looks intimidating but it's actually telling you exactly what to add up:

$$\sum_{i=1}^{n} x_i$$

This reads: "**The sum of $x_i$, for i starting at 1 and ending at n.**"

In plain words: add up all the x's from the first to the last.

### Walking through with real data

For our hospital length-of-stay data (2, 3, 3, 4, 4, 5, 5, 6, 8, 14):

$$\sum_{i=1}^{10} x_i = x_1 + x_2 + x_3 + x_4 + x_5 + x_6 + x_7 + x_8 + x_9 + x_{10}$$

$$= 2 + 3 + 3 + 4 + 4 + 5 + 5 + 6 + 8 + 14 = 54$$

That's it. Σ is just a compact way to write a long sum.

### Why use this notation?

Because writing "$x_1 + x_2 + x_3 + ... + x_n$" gets tedious. The Σ notation lets us write the same thing in one symbol.

The mean formula uses Σ:

$$\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n} = \frac{54}{10} = 5.4$$

In words: the mean is "the sum of all the values, divided by the number of values."

!!! tip "You almost never compute Σ by hand"
    JMP does this for you the moment you load data. You need to **read** summation notation in textbooks and papers, not compute it by hand for 1,000-row datasets. Recognize what it means and move on.

---

## Inequalities

Four symbols you need to recognize and read correctly:

| Symbol | Read as |
|--------|---------|
| < | "is less than" |
| > | "is greater than" |
| ≤ | "is less than **or equal to**" |
| ≥ | "is greater than **or equal to**" |

**The line under the inequality** (≤ vs <) is the difference between "or equal to" and "strictly less than." This matters in some contexts:

- p < 0.05 → p is strictly less than 0.05 (so 0.05 itself wouldn't qualify)
- p ≤ 0.05 → p is at most 0.05 (so 0.05 itself does qualify)

In hypothesis testing, you'll see textbooks use both. Most modern statistics textbooks use **p < α** (strictly less). Old textbooks may use p ≤ α. The difference rarely matters in practice — sample p-values are almost never exactly 0.05.

### Stats example: a confidence interval

"The 95% confidence interval for the mean was 2.9 ≤ μ ≤ 7.9."

Read this as: "The true population mean μ is somewhere between 2.9 and 7.9, inclusive."

### Stats example: rejecting a hypothesis

"Reject H₀ if p < 0.05."

Read this as: "If the p-value is less than 0.05, reject the null hypothesis."

!!! warning "Reading the open end correctly"
    The OPEN end of the symbol always points toward the BIGGER number. So **5 < 10** means "5 is less than 10" — the open end points at 10 (the bigger). It's a visual mnemonic: the smaller end touches the smaller number.

---

## Algebra: solving for one variable

A lot of stats formulas can be rearranged to answer a different question. The basic move: **whatever you do to one side, do to the other**.

### Stats example: rearranging the z-score formula

The z-score formula tells you "how many standard deviations is x from the mean?"

$$z = \frac{x - \mu}{\sigma}$$

But sometimes you want to go the other direction: "What value of x is at this z-score?"

Step-by-step rearrangement:

**Starting point:**

$$z = \frac{x - \mu}{\sigma}$$

**Step 1:** Multiply both sides by σ to clear the fraction.

$$z \cdot \sigma = x - \mu$$

**Step 2:** Add μ to both sides to isolate x.

$$z \cdot \sigma + \mu = x$$

**Final form** (rewriting with x on the left, which is conventional):

$$x = \mu + z \cdot \sigma$$

### Using the rearranged formula

For adult systolic blood pressure (μ = 120, σ = 15), what BP value sits at z = 1.96?

$$x = 120 + (1.96)(15) = 120 + 29.4 = 149.4 \text{ mmHg}$$

So roughly 97.5% of healthy adults have systolic BP at or below 149.4 mmHg.

!!! tip "Whatever you do to one side, do to the other"
    This is THE foundational rule of algebra. Add 5 to the left, add 5 to the right. Multiply the left by 2, multiply the right by 2. The equation stays balanced. Memorize this and you can solve almost any one-variable rearrangement.

---

## Rounding rules

Rounding seems trivial but causes a surprising number of errors in stats. Two rules to live by:

### Rule 1: Don't round in the middle of a calculation

If your calculation has multiple steps, **keep extra decimal places** in intermediate results. Round only at the END.

**Why:** small rounding errors compound. Round 3.47 to 3.5, then divide by √10, then multiply by 2.262 — and your final answer is noticeably off from the "real" value.

**Example of the problem:**

Calculating margin of error:

- Correct way: $\frac{3.47}{\sqrt{10}} \times 2.262 = 1.097 \times 2.262 = 2.481$
- Rounded too early: $\frac{3.5}{3.2} \times 2.3 = 1.094 \times 2.3 = 2.516$

Different answers from the same starting data — purely from premature rounding.

### Rule 2: Match precision to context

Different stats values are conventionally reported to different precisions.

| What | Typical precision |
|------|-------------------|
| Sample mean, SD, SE | 1-2 decimal places (matched to data) |
| Confidence interval bounds | 1-2 decimal places (matched to mean) |
| p-values | 3 decimal places (e.g., p = 0.034) |
| Very small p-values | "p < 0.001" or scientific notation |
| Critical values (z*, t*) | 2-3 decimal places (1.96, 2.262) |
| Percentages | 0-1 decimal places (47%, 47.3%) |

### Rule 3: Conventional rounding (the easy part)

For digits 0-4 → round DOWN. For digits 5-9 → round UP.

- 1.094 → rounds to 1.09 (the 4 rounds down)
- 1.095 → rounds to 1.10 (the 5 rounds up)
- 1.097 → rounds to 1.10 (the 7 rounds up)

!!! warning "Banker's rounding"
    Some software (including JMP in certain contexts) uses "banker's rounding," where 0.5 rounds to the nearest EVEN digit (so 1.5 → 2, but 2.5 → 2). Don't worry about this — it's mostly invisible in practice. Just know that JMP's answer might be off from yours by 1 in the last decimal due to this convention.

---

## Scientific notation

When a number is extremely small or extremely large, scientific notation makes it readable.

### Reading scientific notation

The format is **(coefficient) × 10^(exponent)**.

- $3.2 \times 10^5 = 3.2 \times 100{,}000 = 320{,}000$
- $1.5 \times 10^{-6} = 1.5 \times 0.000001 = 0.0000015$

**Positive exponent** = big number (move the decimal RIGHT that many places).
**Negative exponent** = small number (move the decimal LEFT that many places).

### Where you'll see this in stats

**Very small p-values:** Instead of writing "p = 0.0000000034", a paper or JMP output will write "p = 3.4 × 10⁻⁹" or "p = 3.4e-9" (computer notation).

**Very large counts:** A meta-analysis might mention a total sample size of $1.2 \times 10^6$ (1.2 million).

### JMP and "e" notation

JMP and most statistical software use **"e"** instead of "× 10". They mean the same thing.

- $3.2 \text{e}5$ = $3.2 \times 10^5$ = 320,000
- $1.5 \text{e}{-6}$ = $1.5 \times 10^{-6}$ = 0.0000015
- $4.7 \text{e}{-4}$ = 0.00047

When JMP says "p = 4.7e-4", read it as "p equals 4.7 times ten to the negative four" or just convert mentally to a decimal: 0.00047.

!!! tip "JMP shortcut for very small p-values"
    Sometimes JMP just writes "p < 0.0001" rather than showing scientific notation. This means "the p-value is so small that JMP has rounded it down to less than 0.0001." For reporting purposes, write "p < 0.001" or "p < 0.0001" — there's no need to specify further.

---

## Decoding a real formula: standard error

Let's put everything together. Here's the standard error formula:

$$SE = \frac{s}{\sqrt{n}}$$

Let's break it down piece by piece.

### What each symbol means

| Symbol | What it is | What it's called |
|--------|------------|-----------------|
| **SE** | the answer we're computing | "Standard Error" |
| **s** | a number from our data | "sample standard deviation" |
| **n** | a number from our data | "sample size" (how many observations) |
| **$\sqrt{\,}$** | an operation | "square root" |
| **the bar** | an operation | "divide what's above by what's below" |

### Reading the formula in plain English

"The standard error equals the sample standard deviation divided by the square root of the sample size."

### Plugging in numbers (hospital length-of-stay example)

Our hospital data: n = 10 patients, sample SD s = 3.47 days.

**Step 1:** Identify what goes where.

- $s = 3.47$
- $n = 10$

**Step 2:** Calculate the denominator first (PEMDAS — the bar groups it).

$$\sqrt{n} = \sqrt{10} \approx 3.162$$

**Step 3:** Divide.

$$SE = \frac{3.47}{3.162} \approx 1.097$$

**Step 4:** Round to match context (1-2 decimals for SE).

$$SE \approx 1.10 \text{ days}$$

That's it. You just performed the calculation that underlies every confidence interval and t-test in this course.

!!! important "The pattern repeats everywhere"
    Almost every stats formula has the same recipe:
    
    1. Identify what each symbol means
    2. Plug in your numbers
    3. Follow PEMDAS
    4. Round at the end
    
    Once you've done it 5-10 times, the formulas stop looking scary.

---

## Why students miss this

A running list of the math mistakes students make most often in this course:

!!! danger "Order of operations errors"
    Forgetting that the fraction bar groups everything above and below. Calculating $\frac{x - \mu}{\sigma}$ as $x - \frac{\mu}{\sigma}$ instead. This is the #1 arithmetic mistake.

!!! danger "Rounding too early"
    Rounding intermediate calculations and then chaining them together. By the third step, your answer is meaningfully wrong. **Round only at the end.**

!!! danger "Confusing subscripts and superscripts"
    Writing $x^2$ when you mean $x_2$, or vice versa. They look similar but mean completely different things. $x_2$ is the second data value; $x^2$ is x squared.

!!! danger "Plugging in percentages as percentages"
    A 95% CI formula expects α = 0.05, not 95. Plugging 95 into a formula written for decimals gives wildly wrong answers — and the answer often *looks* plausible enough that students don't notice.

!!! warning "Squaring negative numbers"
    $(-3)^2 = 9$. The parentheses matter. Without them, $-3^2$ is interpreted as $-(3^2) = -9$. This bites people in standard deviation and variance calculations.

!!! warning "Mixing up < and ≤"
    Most of the time it doesn't matter. But on exams, if a question says "reject H₀ when p < 0.05" and your p-value comes out exactly 0.05, you do NOT reject. Read the question carefully.

!!! warning "Forgetting what √n means"
    SE has $\sqrt{n}$ in the denominator, not $n$. To halve the SE, you must QUADRUPLE n. Many students mistakenly think doubling n halves the SE.

!!! warning "Reading scientific notation wrong"
    $1.5 \text{e}{-6}$ is a very small positive number (0.0000015), not negative. The minus sign in the exponent means "move the decimal LEFT" — it doesn't make the whole number negative.

---

## Quick vocabulary recap

| Symbol | Read as | Means |
|--------|---------|-------|
| $+, -, \times, \div$ | basic operations | add, subtract, multiply, divide |
| $/$ or $\frac{\,}{\,}$ | "divided by" or "over" | division |
| $=, \ne$ | "equals" / "does not equal" | equality |
| $<, \le, >, \ge$ | "less than", "less than or equal to", etc. | inequalities |
| $x^2$ | "x squared" | x times x |
| $\sqrt{x}$ | "the square root of x" | the inverse of squaring |
| $\sum$ | "sum of" or "the sum" | adds up the terms after it |
| $x_i$ | "x sub i" | the i-th value of x |
| $\bar{x}$ | "x-bar" | the sample mean |
| $\hat{p}$ | "p-hat" | the estimated proportion |
| $1.5 \times 10^{-6}$ or 1.5e-6 | scientific notation | a very small (or large) number written compactly |
| $\approx$ | "is approximately equal to" | rounded equality |
| $\pm$ | "plus or minus" | both adding and subtracting |

---

## What's next

If you're rusty on any of this, work through a section, do a few practice problems from your textbook, and come back as needed. You don't need to memorize this card — just know it's here when you need it.

Related cards:

- **[Greek Letter Decoder](greek-letters.md)** — what μ, σ, β, α, etc. mean in stats
- **[Stats Vocabulary](stats-vocab.md)** — definitions of statistical terms
- **[Summary Statistics](../track-1-studies-and-data/ch4-summary-stats.md)** — your first chance to use these math tools on real data
- **[Confidence Intervals](../track-3-conclusions/ch6-confidence-intervals.md)** — where √n, fractions, and rounding all come together