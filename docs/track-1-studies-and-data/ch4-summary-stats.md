# Summary Statistics

!!! abstract "Why this module is more important than students think"
    Summary statistics get treated as boring throat-clearing before "the real analysis." They're not. Every result that comes later — every confidence interval, every hypothesis test, every regression — has summary statistics underneath it. If you don't know who's in your sample and what they look like, you can't trust any conclusion that follows. This module is about building that foundation.

## As you'll see it in published research and textbooks

A **summary statistic** is a single number (or small set of numbers) that describes a key feature of a dataset. The choice of which summary statistic to use depends on the **type of variable** being summarized: dichotomous, ordinal, categorical, or continuous. Together, summary statistics describe the sample without requiring the reader to look at every data point.

## Why every study starts with summary statistics

Every published study begins with what's commonly called **Table 1** — a table describing the characteristics of the people in the study. This is not optional and not decorative. It is doing four jobs at once:

!!! important "The four jobs of Table 1"
    1. **Identification.** Who were the participants? Age, sex, race, baseline health status. The reader needs to know who you actually studied.
    2. **Generalizability.** Do these results apply to *my* patient or my population? If your participants were all 18–22-year-old college students, your findings may not transfer to 70-year-olds.
    3. **Comparability.** If the study compares groups (treatment vs. control), were those groups similar at baseline? If yes, the comparison is fair. If no, the conclusion is in trouble.
    4. **Sanity check.** Does the data look reasonable? Mean age of 200 = you have a data problem. Standard deviation of 0 = something is broken.

### Why students miss this

Students see Table 1 and skim past it. The actual results are further in — the *exciting* results, with their p-values and conclusions. Table 1 looks boring.

!!! danger "Why skipping Table 1 is a serious mistake"
    A p-value without context is meaningless. *"Group A had better outcomes than Group B (p = 0.02)"* is uninterpretable unless you know who was in Group A and who was in Group B. If Group A was younger, healthier, wealthier, and had better insurance — none of which the study controlled for — then the "better outcomes" might have nothing to do with the intervention. **Summary statistics aren't preliminary to the analysis. They're part of the analysis.**

## Why dichotomous and continuous variables are reported differently

This is one of the most common student confusions in the course — and one of the most fixable.

!!! important "The reason behind the rule"
    A **dichotomous variable** is fully described by a single number (the proportion). A **continuous variable** requires two numbers (a center and a spread).

    This isn't arbitrary convention. It's mathematically necessary.

### The light switch and the dimmer

Think about reporting on **whether a light switch is on**:

- A light switch is either ON or OFF. To describe it completely, you need exactly one number: *"It's on 62% of the time."* That tells you everything. The other 38% is implied (it's off). There's nothing else to report.

Now think about reporting on **how bright a dimmer is**:

- A dimmer can be at any brightness from 0 to 100. To describe it, one number isn't enough. *"Average brightness was 50%"* tells you nothing about whether it was always at 50%, or swinging between 0% and 100%, or rapidly flickering. You need a **center** (mean or median) AND a **spread** (standard deviation or range).

Dichotomous = light switch. Continuous = dimmer. One number for the switch. Two numbers for the dimmer.

### The reporting rules — with reasons attached

For **dichotomous variables**: report n and percentage.

> Example: "62 of 100 patients (62%) had hypertension."

For **categorical (nominal) variables**: report n and percentage in each category.

> Example: "Race: White, 52 (52%); Black, 28 (28%); Asian, 12 (12%); Other, 8 (8%)."

For **ordinal variables**: report n and percentage in each category. Median is also useful.

> Example: "Cancer stage: I, 20 (20%); II, 35 (35%); III, 30 (30%); IV, 15 (15%). Median stage: II."

For **continuous variables, symmetric distribution**: report mean and standard deviation.

> Example: "Age: mean 45.2, SD 12.4 years."

For **continuous variables, skewed distribution**: report median and interquartile range (IQR).

> Example: "Hospital length of stay: median 5 days, IQR 3–9."

!!! tip "When to use mean vs. median for continuous variables"
    - **Mean** works well when the distribution is roughly symmetric — like the normal distribution.
    - **Median** works better when the distribution is skewed — like income or hospital length of stay, where a few very large values pull the mean upward and make it misleading.

    Quick test: if the mean and median are close, the data is roughly symmetric — mean is fine. If they're very different, the data is skewed — use median.

## Measures of central tendency (where the data clusters)

For continuous and ordinal variables, three measures describe where the "middle" of the data is:

| Measure | What it is | When to use |
|---|---|---|
| **Mean** ($\bar{x}$) | The arithmetic average | Symmetric continuous data |
| **Median** | The middle value when data is sorted | Skewed continuous data, ordinal data |
| **Mode** | The most common value | Categorical data, or to identify the most frequent value |

### Calculating each

**Mean:** Add up all values, divide by the number of values.

$$\bar{x} = \frac{\sum x_i}{n}$$

**Median:** Sort the values. The median is the middle one. If there's an even number of values, average the two middle ones.

**Mode:** Just identify which value appears most often.

!!! important "How to spot a misleading mean"
    If a dataset has extreme values (outliers), the mean gets pulled toward them. Five test scores of 70, 72, 75, 78, and 95 have a mean of 78 — but four of the five scores are below 78. The 95 dragged the mean up.

    **The mean is the right summary when the data is symmetric. The median is the right summary when the data is skewed or has outliers.** Always check whether the mean is representative by comparing it to the median.

## Measures of spread (how much variability there is)

A center isn't enough by itself. You also need to know how spread out the data is.

### Range

The simplest measure of spread: the largest value minus the smallest value.

$$\text{Range} = \text{Maximum} - \text{Minimum}$$

Useful, but sensitive to outliers — one extreme value blows up the range.

### Standard deviation

A measure of how far, on average, values fall from the mean. The standard deviation has the same units as the data (if the data is in years, the SD is in years).

$$s = \sqrt{\frac{\sum (x_i - \bar{x})^2}{n - 1}}$$

You'll almost never calculate this by hand — JMP or any other software does it for you. But you should be able to interpret it.

**Plain words:** Standard deviation tells you the "typical" distance a value is from the mean. If $\bar{x} = 50$ and $s = 5$, most values are roughly between 45 and 55. If $\bar{x} = 50$ and $s = 25$, values are scattered widely from about 25 to 75.

### Variance

Standard deviation squared. Same information, different units (the squared version isn't directly interpretable, but appears in many formulas).

$$s^2 = \frac{\sum (x_i - \bar{x})^2}{n - 1}$$

### Interquartile range (IQR)

The range of the middle 50% of the data. Used with the median instead of the mean.

To calculate: sort the data, find the 25th percentile (Q1) and the 75th percentile (Q3). IQR = Q3 − Q1.

The IQR is robust to outliers — one extreme value barely affects it.

!!! tip "When to use SD vs. IQR for spread"
    - **Standard deviation** pairs with the mean. Use both for symmetric continuous data.
    - **IQR** pairs with the median. Use both for skewed continuous data or when outliers are present.

    Reporting "mean ± SD" or "median (IQR)" is the standard format. Mixing them — like "mean ± IQR" — is wrong and signals to readers that something is off.

## The five-number summary

A common way to describe continuous data: five numbers that together describe the distribution.

| Number | What it is |
|---|---|
| Minimum | Smallest value |
| Q1 (first quartile, 25th percentile) | Value below which 25% of the data falls |
| Median (Q2, 50th percentile) | Middle value |
| Q3 (third quartile, 75th percentile) | Value below which 75% of the data falls |
| Maximum | Largest value |

This is the basis of a **boxplot** — the graphical version of the five-number summary. You'll meet boxplots in Data Visualization.

## ⚠️ Why students miss this

Four classic traps in this module.

!!! warning "Trap 1: Reporting mean ± SD for everything"
    Students learn the mean ± SD format and apply it to every variable, including dichotomous ones. *"Mean pregnancy status was 0.34 ± 0.47"* — pregnancy isn't a 0.34. 34% of the sample was pregnant. **Always match the summary statistic to the variable type.**

!!! warning "Trap 2: Ignoring skew"
    Students plug data into JMP, get the mean, and report it — without checking whether the mean is appropriate. If the data is skewed (income, hospital length of stay, time to recovery), the mean misleads. **Look at a histogram or compare mean to median before reporting.**

!!! warning "Trap 3: Confusing standard deviation with standard error"
    These are different concepts that get mixed up constantly.

    - **Standard deviation (SD)** describes how spread out your *data* is.
    - **Standard error (SE)** describes how much your sample *statistic* would vary if you repeated the study.

    SD is about the spread of values. SE is about the precision of an estimate. They're related (SE = SD / √n) but mean different things. We'll meet SE again in Confidence Intervals.

!!! warning "Trap 4: Reporting too many decimal places"
    A mean of 45.83472 years is silly. Your data isn't precise to five decimal places. Round to a sensible level — usually one decimal place for continuous variables, no decimals for percentages over 10%, one decimal for percentages under 10%. **Precision in numbers should reflect the precision of measurement.**

## In JMP

Summary statistics live in JMP's **Distribution** platform.

**Steps:**

1. **Analyze → Distribution**
2. Move your variables to **Y, Columns**
3. Click **OK**

JMP gives you back:

- For **continuous variables**: histogram, Summary Statistics (mean, std dev, min, max), Quantiles (median, quartiles)
- For **nominal or ordinal variables**: bar chart, Frequencies (counts and percentages in each category)

!!! important "Match your modeling type to your variable type"
    JMP's output depends on the modeling type of each column. If you have a dichotomous variable but JMP imported it as Continuous, you'll get a misleading "mean" instead of a useful percentage breakdown. **Always check modeling types before running Distribution** — see [Variable Types](../foundations/variable-types.md) and the [JMP Quick Reference](../foundations/jmp-quick-reference.md).

### Getting more from JMP's output

A few practical tips:

- **Click the gray triangle next to "Summary Statistics"** to expand or collapse that panel.
- **Right-click in the output** to add additional statistics (skewness, kurtosis, confidence intervals for the mean) or remove panels you don't need.
- **Hover over a histogram bar** to see the count and range for that bar.
- **Right-click on a graph → Edit → Copy Picture** to paste it into Word or PowerPoint.

## What to do when you're stuck

When you have a variable and aren't sure how to summarize it, ask in order:

1. **What type of variable is this?** (See [Variable Types](../foundations/variable-types.md).)
2. **Based on the type:**
    - Dichotomous → report n and %
    - Categorical → report n and % in each group
    - Ordinal → report n and % in each group; median if useful
    - Continuous → check whether it's symmetric or skewed. If symmetric, mean ± SD. If skewed, median (IQR).
3. **Round sensibly.** Don't report 8 decimal places.
4. **Include sample size (n).** Always. A summary statistic without a sample size is incomplete.

---

*See also: [Variable Types](../foundations/variable-types.md) · [Study Designs](ch2-study-designs.md) · [Data Visualization](ch12-data-viz.md) · [JMP Quick Reference](../foundations/jmp-quick-reference.md)*