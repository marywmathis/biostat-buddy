# Quantifying Disease

!!! abstract "What the extent of disease is really about"
    Two ideas drive almost everything in public health surveillance: **how many people have a disease right now** (prevalence) and **how fast new cases are appearing** (incidence). These sound similar. They are not the same thing — they answer different questions, and using one when you mean the other can lead to bad decisions. This is about getting that distinction permanently clear.

## As you'll see it in published research and textbooks

**Prevalence** is the proportion of a population that has a disease or condition at a specified point in time. **Incidence** is the rate at which new cases develop in a population over a defined period of time. Prevalence reflects both how often new cases occur and how long people live with the disease. Incidence reflects only new disease occurrence.

## The two big ideas, in plain words

**Prevalence is a snapshot.**
*Right now, how many people have this disease?*

If you walk into a hospital today and ask "how many of your patients have diabetes?" — that's a prevalence question. You're counting existing cases at a single moment.

**Incidence is a flow.**
*Over some period of time, how often are new cases appearing?*

If you ask "how many people in this city were newly diagnosed with diabetes last year?" — that's an incidence question. You're counting *new* cases that developed during a time window.

!!! important "The single image that makes this stick"
    Think of a bathtub.

    - **Prevalence** is how much water is in the tub right now.
    - **Incidence** is the rate at which water is flowing in from the faucet.

    The level in the tub depends on both how fast water comes in (incidence) **and** how long the water stays before draining (how long people live with the disease, or how long until they recover or die). High prevalence can mean either lots of new cases or lots of people surviving with the disease for a long time. They're not the same thing.

## Prevalence in more detail

**Definition:** Prevalence is the proportion of a population that has a disease or condition at a specified point in time.

$$\text{Prevalence} = \frac{\text{Number of existing cases at a point in time}}{\text{Total population at that point in time}}$$

**Example:** A survey of 2,000 adults in a city finds that 240 have type 2 diabetes. The prevalence of type 2 diabetes in that population is:

$$\frac{240}{2{,}000} = 0.12 \text{, or } 12\%$$

**Key features:**

- Prevalence is a **proportion** — a number between 0 and 1 (often reported as a percentage).
- It has no time unit attached. "12% prevalence" doesn't say "per year" or "per month."
- It includes *all* existing cases, regardless of when they were diagnosed.
- It can be measured at a single point in time (**point prevalence**) or over a defined window like "in the past year" (**period prevalence**).

**Use prevalence when you want to know:**

- How widespread a condition is in a population right now
- How much healthcare capacity might be needed
- How common something is in different subgroups

## Incidence in more detail

**Definition:** Incidence is the rate at which *new* cases develop in a population over a defined period of time.

There are actually two related measures, and the distinction matters.

### Cumulative incidence (sometimes called incidence proportion or risk)

The proportion of a population that develops the disease over a specified time period.

$$\text{Cumulative incidence} = \frac{\text{Number of new cases during the time period}}{\text{Population at risk at the start of the period}}$$

**Example:** Of 1,000 healthy adults followed for one year, 30 develop the flu. The one-year cumulative incidence of flu is:

$$\frac{30}{1{,}000} = 0.03 \text{, or } 3\% \text{ per year}$$

Cumulative incidence assumes everyone in the population was followed for the full time period. It's a **proportion**, with the time period tacked on as context.

### Incidence rate (sometimes called incidence density)

The rate of new cases per **person-time** of follow-up. This handles real-world situations where people are followed for different lengths of time (some drop out, some die, some enter the study late).

$$\text{Incidence rate} = \frac{\text{Number of new cases}}{\text{Total person-time of follow-up}}$$

**Example:** A cohort study tracks 500 healthy adults. Over the course of the study, the total follow-up across everyone adds up to 2,400 person-years. During that time, 60 develop the disease. The incidence rate is:

$$\frac{60}{2{,}400} = 0.025 \text{ cases per person-year}$$

Incidence rate is a **rate** — it has a time unit in the denominator. The units matter and should always be reported (per person-year, per 1,000 person-months, etc.).

!!! important "Person-time — the idea everyone struggles with at first"
    "Person-time" sounds weird because it's a unit that combines two things — people and time. But once you see it, it's intuitive.

    Imagine following 5 people for 2 years each. That's $5 \times 2 = 10$ person-years of follow-up.

    Now imagine following 10 people, but 5 of them only for 1 year (the other 5 for the full 2 years). That's $5 \times 1 + 5 \times 2 = 15$ person-years.

    Each person contributes time to the denominator only for as long as they were actually being followed and were "at risk" of getting the disease. Once someone develops the disease, dies, or drops out, they stop contributing person-time.

    **Person-time is how we fairly compare risk across studies where people were followed for different lengths of time.** Without it, a study following 100 people for one year and a study following 100 people for 10 years can't be directly compared — but they can if you express everything per person-year.

## Prevalence vs. Incidence — the classic confusion

This is one of the most important distinctions in this whole course, and one of the most commonly muddled.

!!! danger "If you only remember one comparison from this topic, remember this"
    **Prevalence** answers: *"How many have it?"* (existing cases)
    **Incidence** answers: *"How many are getting it?"* (new cases over time)

    A high prevalence can come from a high incidence (lots of new cases) **or** from people living a long time with the disease (slow recovery, no cure, low death rate). A condition with high prevalence but low incidence is one where few new cases appear but everyone lives with it for a long time — like a slow-progressing chronic condition. A condition with low prevalence but high incidence is one where lots of new cases appear but most people quickly recover or die — like a short-duration acute illness.

### A comparison table

| Feature | Prevalence | Incidence |
|---|---|---|
| What it measures | Existing cases at a moment | New cases over time |
| Units | A proportion (no time) | A rate (with time in the denominator) or a proportion per time period |
| Includes | All cases, no matter how old | Only new cases during a defined window |
| Affected by disease duration | Yes — longer disease = higher prevalence | No |
| Best for | Describing burden of disease right now | Studying risk factors and causes |

### How to tell which one a study reports

When you read a study and aren't sure whether it's reporting prevalence or incidence, ask:

1. **Did the researchers count people who already had the disease before the study started?**
    - Yes → they're describing **prevalence**.
    - No (only newly diagnosed cases) → they're describing **incidence**.

2. **Is there a time period attached to the number?**
    - "12% have diabetes" → prevalence.
    - "30 cases per 1,000 person-years" → incidence rate.
    - "3% developed flu in one year" → cumulative incidence (which is a kind of incidence).

3. **What's the study design?**
    - Cross-sectional studies → mostly report **prevalence** (because they measure at one time).
    - Cohort studies → mostly report **incidence** (because they follow people forward).
    - Case-control studies → can't directly calculate either; they compare odds.

## Comparing disease between groups

Once you have prevalence or incidence in two groups (e.g., exposed vs. unexposed), you can compare them. The most common comparison measures:

### Risk ratio (relative risk, RR)

A comparison of cumulative incidences between two groups:

$$\text{RR} = \frac{\text{Cumulative incidence in exposed group}}{\text{Cumulative incidence in unexposed group}}$$

- $\text{RR} = 1.0$ → no difference between groups
- $\text{RR} > 1.0$ → exposed group has higher risk
- $\text{RR} < 1.0$ → exposed group has lower risk (the exposure is protective)

**Example:** If 10% of smokers develop a disease over 10 years, and 2% of non-smokers do over the same period, the risk ratio is $0.10 / 0.02 = 5$. Smokers are 5 times more likely to develop the disease.

### Rate ratio

The same idea, but using incidence rates instead of cumulative incidences. Use rate ratios when follow-up time varies across participants.

### Odds ratio (OR)

A measure used especially in case-control studies, where you can't calculate true incidence. We'll meet odds ratios in more detail in [real world application](../track-4-real-world/ch9-multivariable.md).

!!! tip "The 'compared to what?' habit"
    A ratio is meaningless without knowing what's being compared. When you see "the risk was 3 times higher," always ask: *3 times higher than what?* The answer should be a specific reference group (non-smokers, the placebo group, healthy controls). If a study reports a ratio without a clear comparator, treat the result with skepticism.

## ⚠️ Why students miss this

Four classic traps in the extent of disease.

!!! warning "Trap 1: Calling prevalence 'incidence' and vice versa"
    This is the single most common error in epidemiology — even in published papers and the news. *"The incidence of obesity has risen to 40%"* is almost always wrong — that's a prevalence statement. *"Last year, 240 people were diagnosed with this cancer in our county"* is incidence (new cases), not prevalence. Train yourself to ask which is meant whenever you see a disease frequency reported.

!!! warning "Trap 2: Forgetting to include time units with incidence"
    Incidence is a rate, and rates need time. "The incidence is 5 per 1,000" is incomplete — *per 1,000 what? Per year? Per month? Per person-year?* Without time units, the number is uninterpretable. Always include them when reporting incidence.

!!! warning "Trap 3: Thinking high prevalence means high incidence"
    These are linked but not the same. High prevalence can mean lots of new cases (high incidence) **or** lots of people living a long time with the disease (slow recovery, low death rate). HIV in the U.S. has high prevalence but relatively low current incidence because people are living longer with it thanks to effective treatment. Don't read prevalence as a measure of "the problem getting worse" — it might mean "people getting better at surviving."

!!! warning "Trap 4: Treating risk ratios as differences"
    A risk ratio of 5 doesn't mean "5% higher risk." It means "5 times the risk." If the unexposed group has a tiny risk (0.001) and the exposed group has a risk of 0.005, that's a 5x risk ratio — but the *absolute* difference is only 0.4 percentage points. Risk ratios alone can be misleading without knowing the baseline risk.

## In JMP

JMP doesn't have a "prevalence" button — these are quantities you calculate from your data, sometimes by hand, sometimes using basic JMP summaries.

For **prevalence**: use **Analyze → Distribution** on the disease variable. The proportion in the "yes" category is your prevalence.

For **cumulative incidence**: same thing — but make sure your dataset only includes people who were disease-free at the start of follow-up.

For **incidence rate**: you'll need person-time variables. JMP can calculate person-time across a cohort using survival analysis tools (covered in [survival analysis](../track-4-real-world/ch11-survival.md)).

For **risk ratios and rate ratios**: typically calculated by hand from a 2×2 table, or using JMP's **Fit Model** platform with appropriate link functions (we'll meet these in [real world applications](../track-4-real-world/ch9-multivariable.md)).

!!! tip "Most early calculations are easier by hand"
    For this section, don't worry about getting JMP to compute these for you. The numbers are simple enough to calculate by hand from a 2×2 table, and doing them by hand reinforces what the formulas mean. JMP becomes essential later when designs and adjustments get more complex.

## What to do when you're stuck

When you encounter a disease frequency number and aren't sure what it means:

1. **Is it a count, a proportion, or a rate?**
    - A count tells you how many.
    - A proportion tells you what fraction of some group.
    - A rate tells you how fast something is happening (has time in the denominator).

2. **Does it have a time period?**
    - No time → most likely prevalence.
    - Has time → most likely incidence (cumulative or rate).

3. **Are these new cases or existing cases?**
    - Existing → prevalence.
    - New → incidence.

4. **What's the comparison?**
    - If it's a ratio, what's the reference group? Always check.

If you can answer those four, you can interpret any disease frequency you encounter.

---

*See also: [Study Designs](ch2-study-designs.md) · [Summary Statistics](ch4-summary-stats.md) · [Stats Vocabulary](../foundations/stats-vocabulary.md)*