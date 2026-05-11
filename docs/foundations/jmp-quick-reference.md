# JMP Quick Reference

!!! warning "Draft page"
    This reference is a work in progress. The menu paths and steps are being verified against the current version of JMP Student Edition. Screenshots will be added later. If something doesn't match what you see on your screen, let me know.

!!! abstract "How to use this page"
    This page is a reference, not a tutorial. You're not meant to read it once and remember everything. When you open JMP and forget how to do something — change a column's modeling type, run a Distribution analysis, export your output — come back here and look it up. Screenshots will be added throughout the semester.


## Before anything else: getting JMP open and ready

JMP Student Edition is required for this course. You can download it free from your university's software portal (the link is in the syllabus). Install it on your laptop and have it open for every class.

When you launch JMP, you'll see the **Home Window** — a panel with your recent files and a few buttons like *New Data Table* and *Open Data Table*. Most of your work begins by opening a data file here.

## Importing data

You'll usually receive data as a `.csv` file (a plain spreadsheet) or a `.jmp` file (JMP's native format).

**To open a file:**

1. From the JMP Home Window, click **File → Open** (or press Ctrl+O).
2. Navigate to the file on your computer.
3. Click **Open**.

JMP will display the data in a **Data Table** — looks like a spreadsheet, with column names across the top and rows of data below.

*[Screenshot: a sample Data Table with columns labeled and a few rows of data]*

!!! tip "Save a copy first"
    Before you do *anything* to a data file, save it under a new name using **File → Save As**. That way, if you accidentally change or delete something, the original file is safe. Treat your raw data as read-only — always work on copies.

## The single most important habit: check your modeling types

When JMP opens a CSV file, it *guesses* what kind of variable each column is. **It guesses wrong constantly.**

If the modeling type is wrong, every analysis you run on that column will be wrong — sometimes silently. This is the #1 source of confusing or invalid results in this course.

!!! danger "Do this every single time you open a new dataset"
    Before running any analysis, check the modeling type of every column you plan to use. If any are wrong, fix them. **This takes 30 seconds and prevents hours of confusion later.**

### How to check modeling types

In the Data Table, look at the column headers. To the left of each column name is a small icon:

- **Blue triangle ▲** = Continuous
- **Red bars** = Nominal
- **Green stairs** = Ordinal

*[Screenshot: column headers showing the three modeling-type icons]*

If you're unsure which type a column *should* be, head to [Variable Types](variable-types.md). The short version:

- Numbers that measure something (age, weight, blood pressure) → **Continuous** (blue triangle)
- Yes/no variables and named categories (race, hospital ID, treatment group) → **Nominal** (red bars)
- Ordered categories where order means something (cancer stage, pain level, education) → **Ordinal** (green stairs)

### How to change a modeling type

If JMP got it wrong, here's how to fix it:

1. **Right-click** on the small icon next to the column name in the Data Table.
2. A menu appears. Choose **Continuous**, **Nominal**, or **Ordinal**.
3. The icon updates immediately.

*[Screenshot: right-click menu showing modeling type options]*

That's it. No save needed — the change is applied immediately. From now on, every analysis on that column will treat it as the right type.

!!! warning "Common modeling-type fixes you'll need to make"
    - A variable coded as **0/1** (e.g., disease yes/no) → JMP often imports as **Continuous** → change to **Nominal**.
    - A variable coded as **1, 2, 3, 4** for cancer stage → JMP often imports as **Continuous** → change to **Ordinal**.
    - A variable coded as **1, 2, 3** for race (with a key on the data dictionary) → JMP often imports as **Continuous** → change to **Nominal**.
    - **Patient ID** numbers → JMP often imports as **Continuous** → change to **Nominal** (these are labels, not measurements).

## Running your first analysis: Distribution

The **Distribution** platform is JMP's bread-and-butter — it gives you summary statistics, graphs, and a quick visual of any variable. Use it for almost every variable in almost every dataset.

### Steps

1. In the Data Table, click **Analyze → Distribution**.
2. A dialog box opens. You'll see a list of your columns on the left.
3. Click a column name, then click **Y, Columns** to move it to the right.
4. Repeat for any other columns you want to analyze at the same time.
5. Click **OK**.

*[Screenshot: the Distribution launch dialog with one column selected]*

### What you'll see

JMP produces an [output](stats-vocabulary.md#output) window with several panels for each variable:

**For Continuous variables:**
- A **histogram** (graph of the distribution)
- **Summary Statistics** (mean, std dev, min, max, etc.)
- **Quantiles** (median, quartiles)

**For Nominal or Ordinal variables:**
- A **bar chart** (counts in each category)
- **Frequencies** (counts and percentages in each category)

*[Screenshot: Distribution output for one continuous and one nominal variable]*

!!! important "What the numbers mean"
    Every number in the output is a [statistic](stats-vocabulary.md#statistic) — a value calculated from your sample. The "Mean" is $\bar{x}$, not $\mu$. The "Std Dev" is $s$, not $\sigma$. JMP only sees the data you fed it; it can't tell you anything about the population directly. Head to [Parameter vs. Statistic](parameter-vs-statistic.md) if that distinction is fuzzy.

## Reading JMP output: the basics

JMP output windows can look busy. A few habits will help:

- **Scroll vertically.** Output panels stack down the page. The first thing you see may not be the only thing.
- **Click the gray triangles** to expand or collapse panels. If something is missing, look for a collapsed section.
- **Right-click anywhere in the output** for menus that let you save, change graph types, add additional statistics, or remove panels you don't need.
- **Hover over a graph** for tooltips that show specific values.

## Saving your work

JMP saves two different things:

**The Data Table itself** — your data file with any modeling-type fixes, formatting, or added columns.

- **File → Save** to save back to the same file (overwrites the original — be careful!)
- **File → Save As** to save under a new name (recommended)
- Save as a `.jmp` file to preserve all the modeling type fixes you made.

**The output (analyses, graphs, results)** — a separate "journal" file.

- **File → Save As → JMP Journal** to save the current output window.
- This is what you'd submit for an assignment or share with a colleague.

!!! tip "Save your output even if it looks unfinished"
    Save journal files often. If JMP crashes or you accidentally close a window, you don't want to redo a bunch of analyses.

## Exporting for reports

To put a JMP graph into a Word document or PowerPoint:

1. **Right-click** on the graph in JMP.
2. Choose **Edit → Copy Picture**.
3. Switch to Word/PowerPoint and **paste** (Ctrl+V).

That gives you a high-quality image of the graph that prints cleanly.

For numerical output (tables of statistics), you can usually:

1. **Right-click** the table.
2. Choose **Make into Data Table** (puts the numbers into a Data Table format you can copy from).

Or just **highlight the values you need and copy/paste** directly into your document.

## Common keyboard shortcuts

| What you want to do | Shortcut |
|---|---|
| Open a file | Ctrl+O |
| Save | Ctrl+S |
| Save As | Ctrl+Shift+S |
| Copy | Ctrl+C |
| Paste | Ctrl+V |
| Undo | Ctrl+Z |
| Close current window | Ctrl+W |
| Open Analyze menu | Alt+A |
| Open Tables menu | Alt+T |

## When something looks wrong

Things that go wrong in JMP and how to spot them:

!!! warning "Output is blank or shows no data"
    Almost always a modeling-type problem. JMP can't run a Distribution on a Continuous variable that should have been Nominal (and vice versa). **Check your modeling types and re-run the analysis.**

!!! warning "JMP shows a giant scary error message"
    Take a breath. Read the message — JMP usually tells you what went wrong in plain English (e.g., "this analysis requires a continuous variable"). Then check whether the column you selected is the right type.

!!! warning "The numbers are wildly off (mean of 47 million for age)"
    You probably ran a calculation on a column of patient ID numbers or some other label-coded-as-number. Set the modeling type to Nominal and re-run.

!!! warning "I changed the modeling type and the analysis still looks wrong"
    Modeling type changes don't update analyses that were already run. Close the old output window and run the analysis again.

!!! warning "JMP froze or crashed"
    Save what you can, close JMP, and reopen. JMP Student Edition can be flaky with large datasets. If it crashes repeatedly, restart your computer — that solves more JMP problems than anything else.

## What to do when you're stuck

In order:

1. **Check your modeling types.** Genuinely, this is the answer 70% of the time.
2. **Make sure you selected the right column.** It's easy to grab the wrong one in the launch dialog.
3. **Look at the Data Table.** Is the data actually what you think it is? Open the column and scroll through. Sometimes missing values, blanks, or weird codes break analyses.
4. **Right-click the output.** Look for "Help" or context menus that might clarify what you're seeing.
5. **Ask for help with the right details.** When you ask a question, share: the data file (or a screenshot), the analysis you ran, the modeling types of the columns involved, and the exact output or error you got. Don't just say "JMP isn't working."

---

*See also: [Variable Types](variable-types.md) · [Stats Vocabulary](stats-vocabulary.md) · [Parameter vs. Statistic](parameter-vs-statistic.md)*