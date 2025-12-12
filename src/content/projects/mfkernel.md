---
title: "Multifidelity Kernel Regression"
summary: "Multifidelity estimator for kernel regression problem that is more robust than the single fidelity kernel regression model under the same computational budget"
thumbnail: "/thumbnails/mfkernel.png"
pdf: "/pdfs/mfkernel.pdf"
github: "https://github.com/dkang339/mfkerreg"
---

Many engineering fields require iterative simulations to find optimal design, evaluate system reliability, or predict system behavior under uncertainties. These needs motivated the development of machine learning methods that construct rapid surrogate models, such as regression models. The accuracy of such models largely depends on the amount of available high fidelity data. However, the high fidelity simulations are expensive and generating large datasets is often not feasible in most engineering settings. Instead, engineers often have easier access to cheaper low fidelity data. In this work, we introduce the multifidelity approach that combines both expensive high fidelity data and abundant cheaper low fidelity data. The goal of this work is to define the multifidelity estimator for kernel regression problem that is more robust than the single fidelity kernel regression model for the same computational budget. We will provide an analysis that shows the unbiasedness of the estimator with respect to the expectation of the high fidelity output. The numerical results will demonstrate that the multifidleity kernel regression model achieve higher accuracy and variance reduction compared to its single fidelity counterpart.