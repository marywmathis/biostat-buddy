```markdown
---
title: Survival Analysis
description: How long until something happens — and does it happen at the same rate in different groups?
---

# Survival Analysis

## Three-Layer Abstract

**Expert:** Survival analysis models time-to-event outcomes using the survival function S(t), estimated nonparametrically via Kaplan-Meier, compared across groups with the log-rank test, and adjusted for covariates using Cox proportional hazards regression.

**Textbook:** A set of methods for analyzing data where the outcome is *how long* until an event occurs — death, relapse, recovery, hospitalization. Handles censored observations (people who leave the study before the event occurs).

**Plain language:** Imagine you're tracking when patients get discharged from a hospital. Some leave on day 3, some on day 10, and some are still there when your study ends. Survival analysis is the toolkit for making sense of that messy, incomplete timing data — and for comparing whether one group (say, patients who got a new treatment) got discharged faster than another.

---

## The Core Problem: Time-to-Event Data

Most statistics you've encountered so far ask *whether* something happened. Survival analysis asks *when*.

The outcome variable is **time to event** — where "event" can be death, disease onset, recovery, hospitalization, or any clearly defined endpoint. This creates two complications that ordinary methods can't handle:

1. **Censoring:** Some participants never experience the event during the study window. They didn't die — they just ran out of observation time. Dropping them would bias your results. Survival analysis keeps them in the analysis up to their last known observation.

2. **Non-normal distributions:** Time-to-event data is almost never bell-shaped. It's typically right-skewed (many early events, a long tail of late ones), so t-tests and linear regression don't apply.

!!! info "Also called"
    Time-to-event analysis · Event history analysis · Failure time analysis (in engineering contexts)

---

## The Survival Function S(t)

The survival function answers: *What fraction of the population has NOT yet experienced the event by time t?*

**Formula:**

$$S(t) = P(T > t)$$

**Plain-language translation:** S(t) is the probability that a randomly selected person from your population survives (avoids the event) past time t. At time zero, S(0) = 1 (everyone is event-free). S(t) can only stay flat or decrease over time — it never goes back up.

**Reading the curve:** A steep drop early means many events happen soon after the study starts. A long flat tail means a subset of the population takes much longer to experience the event (or never does during observation).

---

## Kaplan-Meier Estimation

The **Kaplan-Meier (KM) estimator** is the standard nonparametric method for estimating S(t) directly from your data. It produces the step-function curves you'll see in almost every clinical paper with a time-to-event outcome.

**How it works:** Every time an event occurs, the survival probability drops by a calculated amount. Between events, the curve stays flat. Censored observations (tick marks on the curve) contribute information up to their censoring time, then drop out of the denominator.

**Formula at each event time t_i:**

$$\hat{S}(t_i) = \hat{S}(t_{i-1}) \times \left(1 - \frac{d_i}{n_i}\right)$$

**Plain-language translation:** At each moment when someone experiences the event, multiply the previous survival probability by the fraction of people still at risk who *didn't* have the event. Carry that updated probability forward until the next event.

**What a KM plot looks like:**

```
S(t)
1.0 |████████
    |        ██████
0.7 |              ████
    |                  ██████
0.5 |                        ████───── (censored tick ✚)
    |
    +─────────────────────────────── time
```

Each horizontal step = a period with no events. Each vertical drop = one or more events. Each ✚ = a censored observation.

**Two-group comparison:** Plot KM curves for both groups on the same axes. If the curves separate early and stay apart, that's evidence of a difference in survival experience. To test whether that separation is statistically significant, use the log-rank test.

---

## The Log-Rank Test

The **log-rank test** is a hypothesis test for comparing survival curves between two or more groups.

- **H₀:** The survival functions are the same in both groups (the curves are identical in the population)
- **H₁:** At least one group has a different survival experience

It works by comparing the *observed* number of events in each group at each event time to the *expected* number under H₀, then summing those discrepancies across all event times. The test statistic follows a chi-square distribution.

**When to use it:** Any time you have two or more groups and want to know if their time-to-event outcomes differ — without adjusting for covariates. The log-rank test gives you a p-value; the KM plot gives you the picture.

**Limitation:** The log-rank test doesn't tell you *how much* the groups differ, just whether they differ. For magnitude, you need a hazard ratio.

---

## The Hazard Ratio

Before Cox regression, you need the concept it produces: the **hazard ratio (HR)**.

**Hazard** h(t) is the instantaneous rate at which events are occurring among people still at risk at time t. Think of it as the "danger level" at any given moment.

**Hazard ratio:** The ratio of the hazard in one group to the hazard in another.

| HR value | Interpretation |
|----------|----------------|
| HR = 1.0 | No difference in hazard between groups |
| HR = 0.5 | Treated group has half the hazard (event rate) of control |
| HR = 2.0 | Treated group has twice the hazard of control |

**Plain-language translation:** An HR of 0.6 means the treatment group is experiencing the event at 60% of the rate of the control group at any given moment — a 40% reduction in risk.

!!! warning "Direction matters"
    HR < 1 is protective (lower event rate). HR > 1 is harmful (higher event rate). Students frequently flip this. Always check which group is in the numerator.

---

## Cox Proportional Hazards Regression

The **Cox proportional hazards model** (Cox PH) is to survival analysis what multiple linear regression is to continuous outcomes: it lets you examine the relationship between time-to-event and multiple predictors simultaneously, adjusting for confounders.

**The model:**

$$h(t) = h_0(t) \times e^{\beta_1 X_1 + \beta_2 X_2 + \cdots + \beta_k X_k}$$

**Plain-language translation:** Your hazard at any time t is the baseline hazard (the underlying event rate for everyone) multiplied by an exponential function of your predictor variables. The β coefficients work like regression coefficients — each one tells you how much the log-hazard changes per unit increase in that predictor.

**What you report from Cox output:**

- **exp(β)** — this is the hazard ratio for that predictor, adjusted for all others in the model
- **95% CI for exp(β)** — if it crosses 1.0, the predictor is not statistically significant
- **p-value** for each coefficient

**The proportional hazards assumption:** The ratio of hazards between any two individuals must stay *constant* over time. In other words, if one group has twice the hazard of another at month 1, it must have twice the hazard at month 12. This assumption can be violated — KM curves that cross are a visual red flag.

---

## JMP Walkthrough

### Kaplan-Meier Curves and Log-Rank Test

**Analyze > Reliability/Survival > Survival**

1. Cast your **time variable** into the *Time to Event* role
2. Cast your **event indicator** (1 = event occurred, 0 = censored) into the *Censor Code* role — click the censor code button and specify which value means censored (typically 0)
3. Cast your **grouping variable** (treatment vs. control) into the *Grouping* role
4. Click **OK**

JMP produces:
- KM curves for each group with censoring tick marks
- Log-rank test statistic and p-value in the output panel
- Median survival time for each group

**To get the log-rank p-value:** Look for the "Tests Between Groups" table in the output. The "Log-Rank" row is your test.

### Cox Proportional Hazards Regression

**Analyze > Reliability/Survival > Fit Proportional Hazards**

1. Cast your **time variable** into *Time to Event*
2. Cast your **event indicator** into *Censor Code* (specify censored value as above)
3. Cast covariates into *Add* (continuous) or use the Construct Model Effects area for categorical predictors
4. Click **Run**

JMP produces:
- Parameter estimates (the β coefficients)
- Hazard ratios (exp(β)) with 95% CIs
- Likelihood ratio test for overall model fit
- A "Risk Score Plot" showing predicted survival by covariate values

**To check the proportional hazards assumption:** After running the model, look for the **Log-Minus-Log Plot** option in the output red triangle menu. Parallel lines = assumption holds. Crossing lines = assumption violated.

---

## Why Students Miss This

**1. Censoring ≠ missing data.**
A censored observation is not a dropout you can ignore — it's real information. That person was event-free up to their censoring time. Dropping censored participants systematically underestimates survival time and biases all your results. KM and Cox both handle censoring correctly *if* you code the censor indicator properly in JMP.

**2. The hazard ratio direction.**
exp(β) < 1 means the predictor *reduces* the hazard. Students frequently read a "significant" HR of 0.4 as bad news because it's less than 1. Check your reference group, check your direction, then interpret.

**3. Crossed KM curves violate the Cox assumption.**
If your KM curves for two groups cross, the proportional hazards assumption is likely violated — meaning Cox PH is the wrong model for that comparison. This won't stop JMP from running the analysis. You have to catch it yourself with the log-minus-log plot.

**4. Median vs. mean survival.**
Because survival data is right-skewed, the *mean* survival time is misleading. Always report *median* survival time — the time at which S(t) = 0.50. If the KM curve never drops below 0.50, the median is undefined for your data (more than half the sample was censored before the event).

---

## Vocabulary

| Term | Plain-language definition |
|------|--------------------------|
| **Time-to-event** | The outcome variable — how long until the event occurred |
| **Censoring** | The event didn't happen during observation; participant's last known event-free time is recorded |
| **S(t)** | Survival function — probability of not yet having the event by time t |
| **Kaplan-Meier** | Nonparametric method for estimating S(t) from data |
| **Log-rank test** | Chi-square test comparing KM curves between groups |
| **Hazard h(t)** | Instantaneous event rate among those still at risk at time t |
| **Hazard ratio (HR)** | Ratio of hazards between two groups; exp(β) in Cox output |
| **Cox PH** | Regression model for time-to-event outcomes with covariates |
| **Proportional hazards** | Assumption that HR between groups stays constant over time |
| **Median survival** | Time at which 50% of the population has experienced the event |

---

## What's Next

- [Decision Helper: Which Hypothesis Test?](../decision-helpers/which-test.md) — where survival tests fit in the broader testing landscape
- [Multivariable Methods](../track4/ch9-multivariable.md) — Cox PH is survival analysis's answer to multiple regression
- [Quantifying Disease](../track4/ch3-disease.md) — hazard ratios connect back to relative risk and odds ratios from Ch 3
```
