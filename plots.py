# plots.py

import matplotlib.pyplot as plt
import numpy as np

def plot_histogram(data, title="Histogram", xlabel="Value", ylabel="Frequency"):
    """
    Creates a histogram for a single variable.
    Args:
        data (list): list of numeric values
        title (str): plot title
        xlabel (str): x-axis label
        ylabel (str): y-axis label
    Returns:
        matplotlib figure object
    """
    fig, ax = plt.subplots()
    ax.hist(data, bins="auto", color="steelblue", edgecolor="white")
    ax.set_title(title)
    ax.set_xlabel(xlabel)
    ax.set_ylabel(ylabel)
    plt.tight_layout()
    return fig

def plot_boxplot(groups, labels, title="Boxplot", ylabel="Value"):
    """
    Creates a boxplot comparing multiple groups.
    Args:
        groups (list of lists): each inner list is one group's values
        labels (list): label for each group
        title (str): plot title
        ylabel (str): y-axis label
    Returns:
        matplotlib figure object
    """
    fig, ax = plt.subplots()
    ax.boxplot(groups, labels=labels, patch_artist=True)
    ax.set_title(title)
    ax.set_ylabel(ylabel)
    plt.tight_layout()
    return fig

def plot_scatter(x, y, title="Scatter Plot", xlabel="X", ylabel="Y"):
    """
    Creates a scatter plot of two continuous variables.
    Args:
        x (list): x-axis values
        y (list): y-axis values
        title (str): plot title
        xlabel (str): x-axis label
        ylabel (str): y-axis label
    Returns:
        matplotlib figure object
    """
    fig, ax = plt.subplots()
    ax.scatter(x, y, color="steelblue", alpha=0.7)
    ax.set_title(title)
    ax.set_xlabel(xlabel)
    ax.set_ylabel(ylabel)
    plt.tight_layout()
    return fig
