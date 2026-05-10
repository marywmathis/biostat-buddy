# Variable Types

!!! abstract "Why this card matters more than it looks like it does"
    Knowing your variable types isn't a memorization exercise — it determines *every* analytic choice you make for the rest of the course. Which summary statistic to report, which graph to draw, which hypothesis test to run, which model to fit — all of it depends on whether your variables are continuous, dichotomous, ordinal, or categorical. Get this right and the rest of biostatistics has a logic to it. Get it wrong and nothing works.

## As you'll see it in published research and textbooks

Variables are classified by what kinds of values they can take and what those values mean. The four primary types in biostatistics:

- **Continuous** variables can take any value within a range (age, blood pressure, BMI, time).
- **Dichotomous** (binary) variables have exactly two possible values (yes/no, alive/dead, treated/untreated).
- **Categorical** (nominal) variables sort observations into named groups with no inherent order (race, blood type, country of origin).
- **Ordinal** variables sort observations into ordered categories where the *order matters* but the *spacing between categories isn't meaningful* (Likert scales, disease stages, education levels).

The variable type dictates the appropriate descriptive statistics, visualizations, and inferential procedures.

## Analogy

Think of variable types as different kinds of measuring tools — and the rules for what you can do with each one make sense once you understand the tool.

- **Continuous variables** are like a tape measure. Any value is possible. The numbers have real distance between them — 70 inches is exactly 2 inches more than 68. You can average them. You can compute "how spread out" they are. They behave like real numbers because they *are* real numbers.

- **Dichotomous variables** are like a light switch. Only two states. There's no "average light switch" — it's either on or off. You count how many are on, and that's the whole story.

- **Categorical variables** are like ice cream flavors. Vanilla, chocolate, strawberry. They're different from each other, but no flavor is "more than" another flavor. You can count how many people picked each, but you can't average flavors.

- **Ordinal variables** are like t-shirt sizes. Small, medium, large, XL. There's an order — large is bigger than small — but the gap between small and medium isn't necessarily the same as the gap between large and XL. You can put them in order, but you can't do real math on them.

## Plain words

The variable type tells you **what kind of math is allowed**.

- **Continuous:** real numbers, you can do all the math (mean, SD, t-tests, regression).
- **Dichotomous:** yes-or-no, you count and report a percentage. That's it.
- **Categorical:** named groups, no order. You count how many are in each group.
- **Ordinal:** named groups, but ordered. You can rank them, but the spacing isn't trustworthy.

!!! tip "A study habit worth building"
    If you ever feel lost about how to summarize or test something, your first question should always be: **"What type of variable is this?"** Once you know the type, the analysis options narrow dramatically.

## Also called

| Type | Other names you might see |
|---|---|
| Continuous | Quantitative, numerical, scale, interval, ratio, metric |
| Dichotomous | Binary, two-level, yes/no, 0/1, indicator |
| Categorical | Nominal, qualitative, unordered factor, factor |
| Ordinal | Ordered categorical, ranked, ordered factor |

!!! warning "Words that mean different things in different sources"
    The words *categorical* and *qualitative* are sometimes used as umbrella terms covering both ordinal and nominal. Other textbooks reserve "categorical" for nominal-only. When in doubt, see the next section to figure out whether your variable is ordinal or nominal.

## How to tell ordinal from nominal (this trips up almost everyone)

The biggest single source of confusion in this whole topic is figuring out which categorical variables are *ordinal* and which are *nominal*. Most students get stuck because they're asking the wrong question.

!!! important "Read this carefully — this is the insight most students miss"
    **The wrong question:** *"Are the values in some kind of order?"*

    This question doesn't help, because students see numbers like 1, 2, 3, 4, 5 and assume those are "in order" — they're in numeric sequence, after all. But that's not what statistical "order" means.

    **The right question:** *"Does the order of the values mean something?"*

Or even better, ask both of these:

1. **If I rearranged the values, would the meaning change?**
    - Cancer stage 1, 2, 3, 4 → If I swapped them around, "stage 4" would no longer mean "most advanced." The order carries real meaning. → **Ordinal.**
    - Race coded as 1, 2, 3, 4, 5 → If I rearranged the codes, nothing would actually change about the data. The numbers are just labels. → **Nominal.**

2. **Does it make sense to say "Value A is greater/more than Value B"?**
    - "Stage 3 is *more advanced than* Stage 2"? Yes, that's a meaningful claim. → **Ordinal.**
    - "Race code 3 is *more than* Race code 2"? No, that's nonsense. → **Nominal.**

If the values genuinely represent a ranking (less-to-more, mild-to-severe, low-to-high, early-to-late), it's ordinal. If they're just names — even if they look like numbers — it's nominal.

### A quick test you can run

Look at the values your variable can take. Ask: **does one of these "outrank" another in a meaningful way?**

| Variable | Values | Does one outrank another? | Type |
|---|---|---|---|
| Cancer stage | I, II, III, IV | Yes — IV is more advanced | Ordinal |
| Pain level | None, Mild, Moderate, Severe | Yes — Severe is worse | Ordinal |
| Education | <HS, HS, College, Graduate | Yes — Graduate is more education | Ordinal |
| Race | White, Black, Asian, Other | No — none "outranks" another | Nominal |
| Patient ID | 101, 102, 103, 104 | No — these are just labels | Nominal |
| Hospital | A, B, C, D | No — these are just names | Nominal |

!!! important "Don't miss this"
    All six variables above look superficially similar — they all have a small number of values that you can list. The difference between ordinal and nominal isn't how the values *look*. It's whether the order of the values *means anything*.

## How to tell them apart — a decision sequence

Ask these in order. The first "yes" tells you the type.

**1. Does the variable have only TWO possible values?**
👉 Yes → **Dichotomous.** (Done. Examples: alive/dead, pregnant/not pregnant, smoker/non-smoker, treated/control.)

**2. Are the values ordered, where the order *means something*?**
👉 Yes → **Ordinal.** (Examples: pain scale 1–10, cancer stage I/II/III/IV, agreement strongly disagree → strongly agree, education: less than HS / HS / some college / college / graduate.)

**3. Are the values named groups (or numeric labels) with no inherent order?**
👉 Yes → **Categorical / Nominal.** (Examples: race, country, blood type, marital status, hospital ID, religious affiliation.)

**4. Are the values numbers that can take any value within a range, where the math actually makes sense?**
👉 Yes → **Continuous.** (Examples: age, weight, blood pressure, time-to-event, lab values like cholesterol or hemoglobin.)

If you go through this sequence and find yourself stuck between two answers, see "Why students miss this" below — you've probably hit one of the classic trip-ups.

## ⚠️ Why students miss this

There are four classic traps. Each one trips up almost every undergraduate eventually.

!!! warning "Trap 1: Numbers that look continuous but aren't"
    A variable being *recorded as a number* doesn't mean it's continuous. Cancer stage is sometimes coded as 1, 2, 3, 4. Those are *ordinal*, not continuous — you can't say stage 4 is "twice as much cancer" as stage 2. Same with hospital ID coded as 101, 102, 103 — those are *categorical labels* that happen to look like numbers. They're not measurements.

!!! warning "Trap 2: Likert scales — ordinal that students treat as continuous"
    A "rate this on a scale of 1 to 5" question feels numeric, but the gap between 1 (strongly disagree) and 2 (disagree) isn't necessarily the same as the gap between 4 (agree) and 5 (strongly agree). Strictly speaking, Likert items are *ordinal*. In practice, researchers often treat composite Likert scales (averaged across many items) as continuous — but a single Likert item is ordinal. When in doubt, treat it as ordinal.

!!! warning "Trap 3: Forgetting that dichotomous is its own thing"
    Dichotomous variables get reported as a percentage (e.g., "62% had the disease"), not as a mean ± SD. Students who treat dichotomous variables like continuous ones produce nonsense like "the average value of pregnancy was 0.34." Pregnancy isn't a 0.34. 34% of the sample was pregnant.

!!! warning "Trap 4: Race / ethnicity / sex as ordinal"
    There is no "more" race or "less" race. Race, ethnicity, country, blood type, and similar variables are *categorical (nominal)* — named groups, no order. Don't let an alphabetical ordering on a form trick you into thinking the variable is ordered.

## In JMP

JMP doesn't use the words "continuous," "ordinal," "dichotomous," "categorical." Instead, it uses **modeling types**, which are JMP's way of asking you what kind of variable each column is.

JMP's three modeling types:

| JMP modeling type | Use it for | Icon in JMP |
|---|---|---|
| **Continuous** | Continuous variables | Blue triangle ▲ |
| **Nominal** | Dichotomous and Categorical (nominal) variables | Red bars |
| **Ordinal** | Ordinal variables | Green stairs |

When you import a CSV file, JMP guesses the modeling type based on what the values look like. **It guesses wrong constantly.** Specifically:

- A variable coded as 0 and 1 (dichotomous) often gets imported as Continuous → wrong, change to Nominal.
- A variable like cancer stage coded 1, 2, 3, 4 often gets imported as Continuous → wrong, change to Ordinal.
- A variable like race coded 1, 2, 3 (with a key on the side) often gets imported as Continuous → wrong, change to Nominal.

!!! danger "The single most important habit in JMP"
    The moment you import data, *check every column's modeling type* before doing anything else. If the modeling type is wrong, every analysis you run on that column will be wrong — sometimes silently, sometimes catastrophically. The [JMP Quick Reference](jmp-quick-reference.md) covers exactly how to check and change modeling types.

## What to do when you're stuck

If you're not sure what type a variable is, ask in this order:

1. **How many values does it have?** Two? → Dichotomous, you're done.
2. **Is there an order to the values that *means something*?** Yes? → Ordinal.
3. **Are the values names (or numbers used as labels)?** Yes? → Categorical / Nominal.
4. **Are the values measurements that could take any number in a range?** Yes? → Continuous.

!!! important "The most useful piece of advice on this card"
    If you genuinely cannot decide, **default to the more conservative option:**

    - Stuck between continuous and ordinal? Treat it as ordinal — you can always relax to continuous later.
    - Stuck between ordinal and nominal? Treat it as nominal — this preserves caution about whether the order is meaningful.

    Conservative choices fail safely. Aggressive choices (treating something as continuous when it isn't) fail loudly.

---

*See also: [Parameter vs. Statistic](parameter-vs-statistic.md) · [Stats Vocabulary](stats-vocabulary.md) · [JMP Quick Reference](jmp-quick-reference.md)*