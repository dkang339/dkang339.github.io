---
title: "Modular Coastal Navigation Platform for USVs in GPS-Denied Environments"
subtitle: "Team project for AE 6344 - Aircraft Design II"
summary: "Developed a modular simulation framework in ROS 2 and Gazebo to evaluate GPS-denied navigation methods for unmanned surface vehicles (USVs)."
thumbnail: "/videos/day_flat_cut_speedup_16.mp4"
date: 2026-06-12
pdf: "/pdfs/candies.pdf"
videos:
  - src: "/videos/day_flat_cut_speedup_16.mp4"
    caption: "Left: daytime navigation in calm water. Playback speed: 1.6x."
  - src: "/videos/night_rough_cut_speedup.mp4"
    caption: "Right: nighttime navigation in rough water, where the unmanned surface vehicle experiences substantial wave-induced motion. Playback speed: 1.6x."
---

Global Navigation Satellite Systems (GNSS), including the Global Positioning System (GPS), are central to modern maritime autonomy, but coastal USV missions remain vulnerable to jamming, spoofing, signal blockage, and multipath effects. With limited human-in-the-loop correction, these disruptions directly affect USV autonomy where USVs rely on GNSS for absolute positioning and waypoint tracking.

This project developed a modular simulation platform to evaluate GPS-denied navigation methods under consistent mission conditions. This platform addresses the lack of a unified test environment, as existing methods are often evaluated on different vehicles, mission scenarios, sensors, and navigation strategies, making direct comparison difficult. The framework models a typical coastal search-and-rescue scenario in which a USV autonomously follows a commanded waypoint pattern without GPS. Built on ROS 2 and Gazebo, the platform integrates sensing, GPS-denied navigation, control, and performance evaluation.

The benchmark includes GPS-based navigation (as a baseline), IMU-only dead reckoning, and camera-based visual odometry, tested across repeated missions under varying environmental conditions, such as lighting and wave parameters. Performance is evaluated by comparing commanded, ground-truth, and estimated trajectories and by measuring estimation errors. The results show that visual odometry provides reliable localization in GPS-denied conditions, while IMU-only estimation accumulates substantial drift without absolute position updates. Overall, the developed framework provides a consistent benchmarking environment for evaluating alternative navigation strategies across unified mission conditions.
