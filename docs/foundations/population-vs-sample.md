# Population vs. Sample

!!! abstract "The companion to Parameter vs. Statistic"
    Where [Parameter vs. Statistic](parameter-vs-statistic.md) explains the *numbers*, this card explains the *groups themselves*. A **population** is the whole group you want to know about. A **sample** is the slice you actually studied. Once you understand both ideas, the whole structure of biostatistics has a logic to it.

## As you'll see it in published research and textbooks

A **population** is the entire set of individuals, units, or events about which you want to draw conclusions. A **sample** is a subset of the population, selected for actual measurement and analysis. Statistical inference is the process of using sample data to make claims about the underlying population.

## Analogy

Imagine you want to know the average sleep duration of college students at every university in Georgia.

The **population** is *every college student in the state of Georgia*. That's hundreds of thousands of people. You will never measure all of them. You don't have the time, the money, or the access. The population is the group you *care about*.

The **sample** is the 300 students you actually surveyed across five campuses. That's the group you *measured*.

!!! important "The whole point of statistics, in one sentence"
    The whole point of statistics is using the 300 students you actually talked to to make honest, careful claims about the hundreds of thousands you didn't.

## Plain words

**The population is the group you want to learn about.**
**The sample is the group you actually studied.**

Almost no real study measures the whole population. Populations are too big, too expensive, or simply impossible to round up. So we sample.

The sample is a *stand-in* for the population. If we picked it well, the sample looks roughly like the population, and what we learn from the sample tells us something believable about the population. If we picked it badly, our conclusions will be off — sometimes dramatically.

## Also called

| Concept | Other names you might see |
|---|---|
| Population | Target population, source population, universe, "the whole group," "everyone" |
| Sample | Study sample, study population (confusingly), participants, subjects, the data we collected |
| The population we *can* actually access | Sampling frame, accessible population, source population |
| The population we *want* conclusions about | Target population |

!!! warning "Watch out for terminology drift"
    "Study population" is sometimes used to mean *sample* and sometimes used to mean *population* — depending on the textbook. When in doubt, ask: *"Are they talking about the people they studied, or the people they want to learn about?"* That distinction is what matters, regardless of what the words call it.

## Why we sample (instead of measuring everyone)

Three honest reasons:

1. **Populations are usually too big.** "Every adult in the United States" is over 250 million people. You will not call all of them.
2. **Measuring everyone is too expensive.** Even if you could find them, equipment, staff, and time costs money.
3. **Sometimes the population is hypothetical.** "Every patient who *could* be treated with this drug" includes people who don't exist yet. You can't measure them — they haven't been born.

!!! important "Why this matters"
    Sampling lets us learn about populations we can never fully access. The price we pay is *uncertainty* — our sample answer won't perfectly match the true population answer. Almost everything else in this course (confidence intervals, hypothesis tests, sample size calculations) exists to *measure and manage* that uncertainty.

## ⚠️ Why students miss this

The two big traps:

!!! warning "Trap 1: Confusing 'population' with 'people'"
    A population doesn't have to be people. It can be hospitals, cities, mosquitoes, blood samples, school districts, or doctor visits. Anything you can count and study has a population. Don't let the word "population" trick you into thinking only humans count.

!!! warning "Trap 2: Confusing the sample with the population"
    This one is sneakier. When you analyze data in JMP, every number you see describes your *sample* — the 300 students you surveyed. It does **not** describe the population — the hundreds of thousands you didn't.

    Students will read a JMP output that says "Mean age = 19.4" and confidently report that *all college students in Georgia have an average age of 19.4*. They don't. *Your sample* did. The whole job of inference is to bridge that gap honestly.

!!! danger "If you take only one thing from this section..."
    If you ever find yourself making a confident claim about an entire population based on a sample of 300, **pause**. The right phrasing is: *"In our sample, the average was 19.4. We estimate the population average is roughly between 19.1 and 19.7."* That second sentence is what statistics buys you.

## In JMP

When you [import](stats-vocabulary.md#input) a CSV file into JMP and start running analyses, **everything JMP shows you is about your sample**, not your population. JMP only sees the data you fed it.

This means:

- The number of [observations](stats-vocabulary.md#observation) (rows) is your **sample size** — usually written $n$.
- Every [statistic](stats-vocabulary.md#statistic) JMP calculates (means, proportions, standard deviations) is a *sample statistic*.
- JMP cannot, by itself, tell you anything about the population. *You* make that leap, using inference.

!!! important "How to bridge sample to population"
    To make a population claim from your sample, you'll need a confidence interval, a hypothesis test, or another inferential method. Those are the tools that bridge sample → population. We'll meet them in Track 3 (Drawing Conclusions).

## What to do when you're stuck

If you're confused about whether something is a population or a sample, ask:

1. **Did we measure these specific people?** If yes, it's a sample. If no — they're hypothetical or we never collected data on them — it's a population (or at least part of one).
2. **What group does the research question ask about?** That's the *target population*, even if you don't have access to all of them.
3. **Is the claim being made about specific data we have, or about a broader group?** Specific data = sample. Broader group = population.

If you can answer those three, you'll almost never get this confused.

---

*See also: [Parameter vs. Statistic](parameter-vs-statistic.md) · [Stats Vocabulary](stats-vocabulary.md)*