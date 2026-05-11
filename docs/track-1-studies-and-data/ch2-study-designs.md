# Module 2 - Study Designs

!!! abstract "Why study designs matter more than students think they do"
    Students often dismiss study designs as "just vocabulary." They're not. The study design determines what you're allowed to conclude. A finding from a randomized trial can support a causal claim. The same finding from a cross-sectional survey usually can't. Same numbers, different design, different conclusions. If you don't understand the design, you can't interpret the result.

## As you'll see it in published research and textbooks

A **study design** is the strategy a researcher uses to collect data and test a hypothesis. Designs are broadly categorized as **observational** (the researcher watches what happens without intervening) or **experimental** (the researcher assigns participants to conditions). Within those categories, specific designs differ in *when* exposure and outcome are measured, *how* participants are selected, and *what* causal claims they support.

## The big picture: one decision shapes everything

Every study design comes down to one early question:

**Did the researcher *assign* the exposure, or just *watch* what happened?**

- If the researcher **assigned** the exposure (decided who got the treatment vs. the control) → **Experimental study.**
- If the researcher just **watched** what people did or what happened to them → **Observational study.**

This single distinction determines almost everything else: what you can conclude, how confident you can be, what biases threaten your results.

!!! important "Why this distinction matters so much"
    Experimental studies — especially randomized ones — let you make **causal claims** ("the treatment caused the improvement"). Observational studies usually only let you make **associative claims** ("treatment use was associated with improvement"). The difference is huge: association doesn't prove causation. If a journal article uses the word "caused," check whether the design supports that claim before believing it.

## Vocabulary you'll see in every study

Before we go through specific designs, three terms show up everywhere:

**Exposure** — whatever you're studying as the potential cause. Smoking, taking a drug, being in a treatment group, having a certain gene, eating a specific diet. In epidemiology, "exposure" doesn't mean radiation; it means *anything we think might affect the outcome*.

**Outcome** — whatever you're measuring as the result. Disease, recovery, death, blood pressure change, hospitalization.

**Population at risk** — the group of people who *could* experience the outcome. (You can't get prostate cancer if you don't have a prostate, so men with prostates are the population at risk for that outcome.)

These three pieces — exposure, outcome, population at risk — are the building blocks of every study design.

## Observational study designs

Observational studies *watch* what happens. They differ in *when* exposure and outcome are measured.

### Cross-sectional studies

A **cross-sectional study** measures exposure and outcome **at the same point in time** — like a snapshot.

**Example:** Survey 500 people at a university right now. For each person, record (a) whether they vape and (b) whether they have respiratory symptoms. Both measurements happen on the same day.

**What it's good for:**
- Estimating how common something is in a population at a moment (prevalence)
- Quick, inexpensive, doesn't require follow-up
- Generating hypotheses for later study

**What it's NOT good for:**
- Establishing causation
- Studying rare diseases
- Determining whether exposure came *before* outcome (this is its biggest weakness)

!!! warning "The chicken-and-egg problem in cross-sectional studies"
    Because cross-sectional studies measure exposure and outcome at the same time, you cannot tell which came first. People with respiratory symptoms might be more likely to start vaping (using flavored vapes to cope with throat irritation), or vaping might cause the symptoms. The data looks the same either way. **Cross-sectional studies show association, not causation.**

### Case-control studies

A **case-control study** starts with the **outcome** and looks **backward** to compare exposure histories.

**How it works:**

1. Identify a group of people who *have* the outcome (the **cases**).
2. Identify a similar group who *don't* have the outcome (the **controls**).
3. Look back into the past and compare how each group was exposed.

**Example:** Recruit 100 people with lung cancer (cases) and 100 people without lung cancer (controls). Ask both groups about their smoking history. Compare.

**What it's good for:**
- Studying **rare outcomes** (you can find cases efficiently rather than waiting for them to occur)
- Studying outcomes with long time-lags between exposure and disease
- Quick and relatively inexpensive

**What it's NOT good for:**
- Calculating disease incidence (you can't — you selected based on outcome)
- Avoiding **recall bias** (people with disease often remember exposures differently than those without)
- Studying multiple outcomes from one exposure

!!! warning "Recall bias is the classic case-control problem"
    People diagnosed with a serious disease often spend a lot of time thinking about *why* they got sick. They may remember (or imagine) exposures more vividly than controls who weren't trying to explain anything. This systematically distorts the comparison. **In case-control studies, always ask: are cases and controls equally likely to accurately remember their exposures?**

### Cohort studies

A **cohort study** starts with the **exposure** and follows people **forward in time** to see who develops the outcome.

**How it works:**

1. Identify a group of people without the outcome at baseline.
2. Classify them by exposure status (exposed vs. unexposed).
3. Follow them over time.
4. Compare how often the outcome develops in each group.

**Two flavors:**

- **Prospective cohort:** Recruit people now and follow them into the future. Most rigorous, also most expensive and time-consuming.
- **Retrospective cohort:** Use existing records to identify people who were exposed (or not) in the past, then look up what happened to them. Faster and cheaper but limited by what was recorded.

**Example (prospective):** Recruit 5,000 healthy adults. Classify them by smoking status. Follow them for 20 years. Record who develops lung cancer.

**Example (retrospective):** Pull medical records of 5,000 adults from 20 years ago. Classify by smoking status as documented then. Look up which of them developed lung cancer in the intervening years.

!!! important "How to tell prospective from retrospective in practice"
    Students confuse these two constantly. Ask: *Was the data being recorded as the exposure happened, or pulled from records after the fact?*

    - **Prospective:** *"We recruited 5,000 healthy adults in 1990 and started tracking their smoking status. Twenty years later, we measured how many had developed lung cancer."* The researchers were watching forward as it happened.

    - **Retrospective:** *"We used medical records from 1990 to identify 5,000 people and their smoking status as recorded then. Then we looked up which of them developed lung cancer over the next 20 years."* The researchers reconstructed history from records that already existed.

    **A useful question to ask:** *"At the moment the researcher started this study, had the outcomes already occurred?"* If yes → retrospective. If no → prospective.

    **Why the distinction matters:**

    - Prospective is more rigorous because researchers control what gets measured and how.
    - Retrospective is faster and cheaper but limited to what was already recorded — which may be incomplete, inconsistent, or missing key variables.

**What cohort studies are good for:**

- Studying **rare exposures**
- Studying multiple outcomes from one exposure
- Establishing **temporal sequence** (exposure clearly came before outcome)
- Calculating **incidence rates**

**What they're NOT good for:**

- Studying rare outcomes (too few cases will develop in a reasonable timeframe)
- Quick results (especially prospective)
- Avoiding loss to follow-up (people drop out, move away, die from other causes)

### A quick comparison table

| Design | Direction | Best for | Biggest weakness |
|---|---|---|---|
| **Cross-sectional** | Snapshot | Estimating prevalence | Can't establish temporal order |
| **Case-control** | Look backward from outcome | Rare diseases | Recall bias |
| **Cohort** | Follow forward from exposure | Rare exposures, multiple outcomes | Time, cost, loss to follow-up |

## Experimental study designs

Experimental studies *assign* exposure rather than observing it.

### Randomized controlled trials (RCTs)

The **randomized controlled trial** is the gold standard of biomedical research. The researcher randomly assigns participants to receive an intervention (the treatment group) or not (the control group), then compares outcomes.

**Why randomization matters so much:**
When you randomly assign people, you split known *and unknown* confounders evenly between groups by chance. After randomization, the only systematic difference between groups (on average) is whether they got the treatment. So any difference in outcomes can plausibly be attributed to the treatment itself.

This is how RCTs support causal claims that observational studies usually cannot.

**Example:** Recruit 400 adults with high blood pressure. Randomly assign half to a new drug, half to a placebo pill. Measure blood pressure after 12 weeks in both groups. Compare.

**What RCTs are good for:**

- **Causal inference** — RCTs are designed for it
- Evaluating treatments, interventions, prevention programs
- Comparative effectiveness of treatments

**What RCTs are NOT good for:**

- Studying things you can't ethically assign (you can't randomly assign people to smoke)
- Studying outcomes that take decades to develop
- Capturing real-world effectiveness (study conditions are tightly controlled, often unlike real life)

!!! important "Random assignment vs. random sampling — DIFFERENT THINGS"
    These are easy to confuse. **Random sampling** is how you *select* participants from a population (it affects how well your study generalizes). **Random assignment** is how you *split* participants between groups in an experiment (it affects whether you can make causal claims). A study can have one without the other, both, or neither.

### Variations on the RCT

A few variations you'll see:

- **Single-blind:** Participants don't know which group they're in.
- **Double-blind:** Neither participants nor researchers measuring outcomes know who's in which group.
- **Placebo-controlled:** The control group gets an inert treatment that looks identical to the active one.
- **Crossover trial:** Each participant receives both treatments at different times, with a washout period between.
- **Cluster RCT:** Groups (clinics, schools, villages) are randomized rather than individuals.

Blinding and placebo control reduce bias because expectations affect both what participants report and how researchers measure outcomes.

## Other designs you'll see (briefly)

**Ecological studies** compare *groups* (countries, states, cities) rather than individuals. *"Countries with higher chocolate consumption have more Nobel Prize winners."* These are useful for hypothesis generation but vulnerable to the **ecological fallacy** — drawing conclusions about individuals from group-level data.

**Time-series studies** track measurements over time within a single unit (a city, a hospital, a country). Useful for detecting trends and the effect of interventions over time.

**Quasi-experimental designs** are like RCTs but without random assignment — for example, comparing outcomes before and after a policy change. They sit between observational and experimental designs in terms of causal strength.

## How to recognize which design you need

When you're trying to figure out which design fits a research situation, start with the research question, not the design.

Different questions call for different designs. Walk through these questions in order — the first one that fits points you toward the right design.

### Question 1: Can you ethically assign the exposure?

Can you randomly tell people to smoke? No. To take a new drug being tested? Yes. To live in a food desert? No. To follow a new diet plan? Maybe, depending on the diet.

- **If yes** → you may use an RCT (the strongest design). Move to Question 4.
- **If no** → you must use observational research. Continue.

### Question 2: How common is the outcome?

- **Common outcomes** (back pain, cold infection, weight gain) → you can study them by following people forward.
- **Rare outcomes** (a specific cancer, an unusual birth defect) → following people forward won't yield enough cases. Better to find people who already have the outcome.

- Common outcome → consider **cohort**.
- Rare outcome → consider **case-control**.

### Question 3: How much time and money do you have?

- **Time-rich and money-rich** → prospective cohort (best evidence for an observational design, takes years).
- **Time-poor or money-poor** → retrospective cohort (use existing records) or case-control (much faster).
- **Just need a snapshot of how things look right now** → cross-sectional (quickest of all).

### Question 4: Within an RCT, what flavor?

- Want to test one treatment against placebo → placebo-controlled RCT.
- Concerned about expectation effects → blinded or double-blinded.
- Patients should try both treatments at different times → crossover.
- Easier to randomize at the group level (whole clinics, schools) → cluster RCT.

!!! important "There's no single 'best' study design"
    Students often want a ranked list — "RCT is best, then cohort, then case-control, then cross-sectional." That ranking exists in textbooks (it's called the **hierarchy of evidence**), and it's not wrong, but it misses the point.

    **The best design is the one that answers your specific question given your real-world constraints.**

    A massive, well-conducted prospective cohort study can be more useful than a small, biased RCT. A cross-sectional survey of 10,000 people can tell you more about public health than an RCT of 50. A case-control study can be the *only* feasible design for a rare cancer.

    When you read or design a study, ask: *"Did the researchers pick the strongest design that was actually feasible for this question?"* — not *"Did they use the design that's at the top of the textbook hierarchy?"*

## ⚠️ Why students miss this

Four classic traps in this module.

!!! warning "Trap 1: Calling everything an 'experiment'"
    In everyday English, "experiment" means "trying something out." In research, experiment has a specific technical meaning — the researcher *assigned* exposure. A study where someone surveys students about their vaping habits and respiratory symptoms is **not an experiment**, even if it's well-designed and informative. It's an observational study.

!!! warning "Trap 2: Assuming any difference between groups means causation"
    "People who took the supplement had better outcomes." OK — was this an RCT or an observational study? If observational, dozens of explanations are possible: the people choosing the supplement might be wealthier, healthier, better-informed, or have different doctors. The supplement might or might not be doing anything. **Causation requires either a randomized design or extraordinary attention to confounders.**

!!! warning "Trap 3: Confusing the directions of case-control and cohort"
    Case-control = start with outcome, look backward. Cohort = start with exposure, look forward. Students mix these up constantly because they sound similar. A useful trick: **Case-control = Catch the cases first.** Cohort = **C**ompare exposed and unexposed over time.

!!! warning "Trap 4: Thinking 'observational' means 'low-quality'"
    Observational studies are often the only ethical or practical way to study something. We can't randomize people to smoke or to live in food deserts. Many of medicine's most important findings (smoking causes lung cancer, hand-washing prevents infection) come from observational research. The design influences what you can *conclude*, not whether the science is *good*.

## In JMP

JMP doesn't run study designs — study design is something *you* decide before any data exists. But the design determines what you can do with the data once you have it.

A few practical connections:

- **Cross-sectional data** in JMP looks like a single row per person with their exposure and outcome both recorded. Standard summary statistics and contingency tables apply.
- **Cohort data** often has time-to-event information attached. This sets you up for survival analysis in Module 11.
- **Case-control data** requires a specific analysis approach — odds ratios and conditional logistic regression — because you can't calculate incidence directly.
- **RCT data** is usually analyzed by comparing treatment groups using a t-test, chi-square test, or regression. The randomization simplifies many things.

!!! tip "Always know your design before analysis"
    When you sit down with a dataset in JMP, the very first question to ask is: **What kind of study generated this data?** That answer constrains what analyses are appropriate and what conclusions are defensible. If you don't know the design, ask before analyzing.

## What to do when you're stuck identifying a study design

When you read a study or a news article and aren't sure what kind of study it is, ask in order:

1. **Did the researcher assign the exposure to participants?**
    - Yes → It's experimental. If randomly assigned → RCT.
    - No → It's observational. Continue.

2. **When was exposure measured vs. outcome?**
    - Both measured at the same time → Cross-sectional.
    - Outcome already happened, looking back at exposure → Case-control.
    - Exposure measured first, then waited for outcome → Cohort (prospective if recruitment was at exposure time, retrospective if reconstructed from records).

3. **Were the units of analysis individuals or groups?**
    - Groups (countries, states) → Ecological.
    - Individuals → One of the designs above.

If you can identify the design, you can interpret the results appropriately. If you can't identify the design, you can't really judge the conclusions.

---

*See also: [Module 3 - Quantifying Disease](ch3-disease-extent.md) · [Stats Vocabulary](../foundations/stats-vocabulary.md) · [Parameter vs. Statistic](../foundations/parameter-vs-statistic.md)*