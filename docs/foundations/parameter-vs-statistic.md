# Parameter vs. Statistic

!!! abstract "The most important card in this entire site"
    If you only remember one thing from Foundations, remember this. The whole point of inferential statistics — every confidence interval, every hypothesis test, every regression — is using **statistics** (from your sample) to make claims about **parameters** (in the population). Once this clicks, the rest of the course makes a lot more sense.

## As you'll see it in published research and textbooks

A **parameter** is a numerical characteristic of a *population* (typically denoted with Greek letters: $\mu$, $\sigma$, $\pi$). A **statistic** is a numerical characteristic of a *sample* (typically denoted with Roman letters, often with a hat or bar: $\bar{x}$, $s$, $\hat{p}$). We use statistics to *estimate* parameters because populations are usually too large, too expensive, or impossible to measure in full.

## Analogy

A parameter is the *true* average height of every adult in Georgia — a number that exists, but nobody has ever measured it. To know it for sure, you'd have to find every single adult in Georgia and measure each of them.

A statistic is the average height from the 400 adults you actually surveyed at a few locations around the state.

The statistic is your **best guess** at the parameter. It's not the truth — it's an educated approximation built from a sample.

## Plain words

**Parameters are the truth we'll never know.**
**Statistics are our educated guesses based on the people we actually studied.**

That's the whole idea. Greek letters tell you "this is the truth out there in the population." Roman letters with hats or bars tell you "this is what we calculated from our sample."

Every test, every interval, every regression in this course is fundamentally answering one question: *based on what we saw in our sample, what can we say about the population?*

## Also called

| Concept | Other names you might see |
|---|---|
| Parameter | Population parameter, true value, population characteristic |
| Statistic | Sample statistic, estimate, estimator, sample value |
| The act of using one to guess the other | Inference, statistical inference, estimation |

## Common notation cheat sheet

| Quantity | Parameter (population) | Statistic (sample) |
|---|---|---|
| Mean | $\mu$ (mu) | $\bar{x}$ (x-bar) |
| Standard deviation | $\sigma$ (sigma) | $s$ |
| Proportion | $\pi$ or $p$ | $\hat{p}$ (p-hat) |
| Correlation | $\rho$ (rho) | $r$ |
| Regression slope | $\beta$ (beta) | $b$ or $\hat{\beta}$ (beta-hat) |

The pattern: **Greek = population. Roman with a hat or bar = sample.**

## ⚠️ Why students miss this

Textbooks tend to switch between $\mu$ and $\bar{x}$ without ever stopping to explain that *one is the unknown truth and the other is your sample's attempt at it*. Students see "$\mu = 70$" in one example and "$\bar{x} = 70$" in the next, assume they're interchangeable, and never quite recover from the confusion.

They are not interchangeable.

When you see $\mu$, the textbook is talking about a hypothetical world in which we somehow know the population truth. When you see $\bar{x}$, the textbook is talking about real data — what we actually got from our sample. The whole job of a confidence interval or a hypothesis test is to bridge the gap between these two — to use what we saw ($\bar{x}$) to make a careful, honest claim about what we don't know ($\mu$).

If you ever feel lost in a stats problem, ask: **"Am I being asked about the population or the sample?"** That single question resolves more confusion than any formula.

## In a JMP output

When you [run](stats-vocabulary.md#run) a basic analysis in JMP (e.g., **Analyze → Distribution**), the [output](stats-vocabulary.md#output) shows your *statistics* — what JMP calculated from the data you loaded.

- The "Mean" in the Summary Statistics panel is $\bar{x}$, not $\mu$.
- The "Std Dev" is $s$, not $\sigma$.
- The proportion shown for a dichotomous variable is $\hat{p}$, not $\pi$.

JMP will never show you parameters directly, because parameters live in the population — and JMP only sees the sample you fed it. Every number on a JMP output is a statistic. Always. It's our best guess at the truth, never the truth itself.

## What to do when you're stuck on a problem

1. Identify whether the problem is asking about the **population** (parameters, Greek letters, "the true mean") or the **sample** (statistics, Roman letters, "the observed mean").
2. If it involves both — and most problems do — figure out *which one is given* and *which one you're trying to estimate or test*.
3. The bridge between them is always probability. That's why Track 2 (Probability) sits right between describing data and drawing conclusions.

---

*See also: [Population vs. Sample](population-vs-sample.md) · [Greek Letter Decoder](greek-decoder.md)*

