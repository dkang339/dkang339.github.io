---
title: "Model management strategy for hierarchical Kriging"
summary: "Multifidelity Monte Carlo budget allocation strategy for hierarchical Kriging"
thumbnail: "/thumbnails/hikrig.png"
pdf: "/pdfs/mfhikrig.pdf"
github: "https://github.com/dkang339/mfkriging"
---

Among multifidelity models, hierarchical Kriging defines an effective multifidelity predictor by training low fidelity Gaussian Process (GP) with abundant low fidelity data and correcting it using discrepancy model trained on high fidelity data. The performance of hierarchical Kriging model, for a fixed computational budget, depends on how much samples are allocated to train the low fidelity model and discrepancy model. A limitation of hierarchical Kriging is that it lacks a strategy to allocate samples across fidelities and typical choice is to use naive allocations that fail to generalize across different examples. In this work, we have introduced Multifidelity Monte Carlo (MFMC) sample allocation strategy for hierarchical Kriging. The MFMC allocation strategy was previously applied to multifidleity linear regression model, where it achieved high variance reduction. Numerical experiments illustrate that the MFMC allocation also achieves higher or comparable accuracy compared to that from naive allocations.