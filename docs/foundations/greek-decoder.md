# Greek Letter Decoder

!!! abstract "How to use this page"
    This page is a reference. You're not meant to read it once and remember everything. When a Greek letter shows up in your textbook, in a journal article, in a JMP output, or in class, and you can't remember what it means — come back here and look it up.

## The big idea, one more time

In statistics, **Greek letters denote population parameters** — values we usually can't measure directly. **Roman letters (often with a hat or bar)** denote sample statistics — values we calculate from data.

When you see $\mu$ in a textbook, journal article, or other source, it means *the true average in the population*. When you see $\bar{x}$, it means *the average we got from our sample*.

If that distinction still feels confusing, head back to [Parameter vs. Statistic](parameter-vs-statistic.md) before continuing. Everything on this page builds on it.

## The letters you'll see in this course

Listed in roughly the order you'll meet them. The "Where you'll see it" column points to the BioStat Buddy module where the letter first matters.

| Letter | Name | What it means | Where you'll see it |
|---|---|---|---|
| $\mu$ | mu | Population mean | Track 1 (Studies & Data), Module 4 onward |
| $\sigma$ | sigma (lowercase) | Population standard deviation | Same — paired with $\mu$ everywhere |
| $\sigma^2$ | sigma squared | Population variance | Variance discussions, ANOVA |
| $\pi$ | pi | Population proportion | Track 3 (Drawing Conclusions), Module 6 onward |
| $\rho$ | rho | Population correlation | Track 4 (Real-World Research), Module 9 |
| $\beta$ | beta | Population regression coefficient | Track 4, Modules 9 and 11 |
| $\alpha$ | alpha | Significance threshold (a probability cutoff, like 0.05) | Track 3, Module 7 onward |
| $\lambda$ | lambda | Rate (events per unit time) | Track 4, Module 11 (survival analysis) |
| $\chi^2$ | chi-squared | A test statistic and its distribution | Track 3, Module 7 |
| $\Sigma$ | sigma (uppercase) | "Sum of" — an instruction, not a parameter | Anywhere with a summation formula |

!!! warning "Do NOT confuse $\sigma$ and $\Sigma$"
    Lowercase $\sigma$ is the **population standard deviation** — a single number describing how spread out a population is.

    Uppercase $\Sigma$ means **"add up everything that follows"** — a math instruction, not a parameter.

    They look almost identical. They mean completely different things. The shape — lowercase squiggle vs. uppercase angular — is the only visual cue you get. Slow down whenever you see either.

## The Roman counterparts

Every Greek letter that names a population parameter has a Roman counterpart that names the corresponding sample statistic.

| Population (Greek) | Sample (Roman) | What it measures |
|---|---|---|
| $\mu$ | $\bar{x}$ (x-bar) | Mean |
| $\sigma$ | $s$ | Standard deviation |
| $\sigma^2$ | $s^2$ | Variance |
| $\pi$ | $\hat{p}$ (p-hat) | Proportion |
| $\rho$ | $r$ | Correlation |
| $\beta$ | $b$ or $\hat{\beta}$ (beta-hat) | Regression coefficient |

!!! tip "What hats and bars mean"
    A hat (like $\hat{p}$ or $\hat{\beta}$) or a bar (like $\bar{x}$) on top of a letter signals: *"this is our sample's best guess at the population value."* If you see a Greek letter with a hat — like $\hat{\sigma}$ — that means: *"our estimate of the population standard deviation, calculated from the sample."*

## Letters that aren't standing in for population values

So far, every Greek letter we've talked about — $\mu$, $\sigma$, $\pi$, $\rho$, $\beta$ in regression — represents a true value out there in a population. We use sample data to estimate it.

But some Greek letters do a different job. Instead of describing a population, they describe **decisions we make** or **risks we accept** during analysis.

The two you'll see most often:

**$\alpha$ (alpha) — a cutoff we choose ourselves.**
When we run a hypothesis test, we have to pick how much evidence is "enough" before we believe a result. By tradition, that cutoff is usually 0.05, meaning *"I'll believe the result if there's less than a 5% chance it could have happened by accident."* The 0.05 is $\alpha$. It's not measuring something in the world — it's a rule we set in advance for how cautious we want to be.

**$\beta$ (in hypothesis testing) — the risk of missing a real effect.**
If a treatment really does work, our study might still fail to detect it — maybe by bad luck, maybe because our sample was too small. The probability of that disappointing outcome is $\beta$. We try to keep it low (usually 0.20 or less). The opposite of $\beta$ — the chance we *do* detect a real effect — is called **power**, written $1 - \beta$.

!!! tip "Heads up — $\beta$ shows up in two different roles"
    Don't worry about memorizing this now. Just know that in stats writing, the letter $\beta$ does double duty:

    - **In regression chapters**, $\beta$ describes a relationship between variables.
    - **In hypothesis testing chapters**, $\beta$ describes a kind of error.

    When you encounter $\beta$, look at what kind of analysis the section is about, and you'll know which version it is. The context always tells you.

## Other notation you'll see

Not Greek, but worth listing alongside the rest.

| Letter | What it means | Where it shows up |
|---|---|---|
| $H_0$ | Null hypothesis | Hypothesis testing |
| $H_1$ or $H_a$ | Alternative hypothesis | Hypothesis testing |
| $n$ | Sample size | Everywhere |
| $N$ | Population size | Less common — usually populations are infinite or unmeasurable |

## How to read a Greek-letter sentence

When a textbook or article writes something like:

> "Test $H_0: \mu = 70$ against $H_1: \mu \neq 70$ at $\alpha = 0.05$."

…you're meant to read it like this:

> "Test the null hypothesis that the **population mean** equals 70, against the alternative that it doesn't, using a **5% significance threshold**."

Translating Greek into plain English in your head — every time you see it — is the habit that makes stats notation stop feeling like a foreign language. The letters are just shorthand. The ideas behind them are the same ideas you've seen in plain words.

## What to do when you encounter a letter you don't recognize

1. **Check this page first.** Most letters in this course are on the tables above.
2. **Note whether it's Greek or Roman, and whether it has a hat or bar.** That alone tells you whether it's a population value or a sample estimate.
3. **Look at the context.** Is the section about regression? Then $\beta$ is a coefficient. About power or error? Then $\beta$ is the Type II error rate.
4. **If in doubt, ask:** *"Is this about the population I'm trying to learn about, or the sample I actually measured?"*

---

*See also: [Parameter vs. Statistic](parameter-vs-statistic.md) · [Stats Vocabulary](stats-vocabulary.md)*