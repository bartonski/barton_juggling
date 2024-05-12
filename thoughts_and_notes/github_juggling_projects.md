## Computer Vision Juggling Detectors and Trackers

These programs generally use OpenCV2 to identify the props being juggled. In some cases they may also detect the movemnts of hands and/or the position of the body (i.e. pose detection).
The goals of the programs are one or more of the following:

* Count throws
* Siteswap identification
* Timing and accuracy measurement
* Measure juggling tempo and dwell time
* Create a library of juggling data

A couple of other possible uses

* Create shareable files that record different juggling patterns
* Create input for various juggling similators -- JoePass, Jongl, Jugglemaster, etc.

### Python

* [Juggling Detector](https://github.com/bartonski/juggling_detector) -- My juggling Detector/Tracker. By no means, the best.

#### Juggling Tracker and Siteswap Extractor

* [Original, by AlejandroAlonsoG](https://github.com/AlejandroAlonsoG/tfg_jugglingTrackingSiteswap)
* [Translation (using Google Translate) by Barton Chittenden](https://github.com/bartonski/tfg_jugglingTrackingSiteswap/tree/english_translation)
* [Config Writer -- Uses Alejandro's code as the starting point for a color extractor and configuration writer](https://github.com/bartonski/tfg_jugglingTrackingSiteswap/tree/config_writer)

#### Others

* [Juggling_Pattern_Recognition](https://github.com/kaijaz123/Juggling_Pattern_Recognition) -- Very impressive. Well organized source code, solid hand detection.
* [KaiSmith/JuggleTracker](https://github.com/KaiSmith/JuggleTracker) -- Readme shows thought about the challenges of the problem. Has nice 'Ball' and 'Pattern' classes.
* [Stephen Meschke's ***Juggling***](https://github.com/smeschke/juggling) -- Noted in Alejandro's paper.
* [NattyBumppo/Ball-Tracking](https://github.com/NattyBumppo/Ball-Tracking) -- Impressive trajectory prediction. The academic paper [Basic State Estimator to Track Juggling Balls in Video Data](https://github.com/NattyBumppo/Ball-Tracking/blob/master/paper/sample.pdf) is an excellent analysis of the problem.
* [conta-bolas](https://github.com/ocarneiro/conta-bolas) -- Python OpenCV juggling balls counter
* [rtylerlucas/JuggleTracking](https://github.com/rtylerlucas/JuggleTracking)
* [juggle_counter](https://github.com/jorgem0/juggle_counter/tree/master)
* [Mandar-B / OpenCV-JugglingTracker](https://github.com/Mandar-B/OpenCV-JugglingTracker)

#### Jupyter notebooks

* [GayaGorodecki/JugglingTracker_Python](https://github.com/GayaGorodecki/JugglingTracker_Python) -- Jupyter notebook
* [shirlybittan/Tracking_juggling_balls](https://github.com/shirlybittan/Tracking_juggling_balls) -- Another Jupyter notebook, looks very similar.

### Other Languages

* [Juggling-Coach](https://github.com/ChristopherCarson/Juggling-Coach) -- Javascript; web based.
* [GabeHart17/jugglefx_v3](https://github.com/GabeHart17/jugglefx_v3) -- No readme, just C++ source.
* [Przemekeke/juggling-tracker-rust](https://github.com/Przemekeke/juggling-tracker-rust)


## Juggling Robots

* [Jugglebot](https://github.com/Project-DeepBlue-Juggling/Jugglebot)
* [HighPrecisionStepperJuggler](https://github.com/T-Kuhn/HighPrecisionStepperJuggler) 

## Other Projects

* [jugglemaster](https://github.com/perjg/jugglemaster) -- Site Swap Animator
* [Juggling Counting](https://github.com/vrizawahyu22/juggling_counting) -- Count soccer juggling kicks. Interesting for use of YOLOv8 Object Detection, Object Tracking, and Pose Detection
* [Fuzzwah/juggle-music](https://github.com/Fuzzwah/juggle-music) -- Juggle to trigger playback of samples.
* [Juggling_Balls_Public](https://github.com/arkadiraf/Juggling_Balls_Public)
* [freemocap/freemocap](https://github.com/freemocap/freemocap) -- Not specifically juggling related, although it has been used that way.
