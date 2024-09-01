# Barton Juggling

This is a place for me to refine my knowledge of juggling.

## Workspace -- Simple ideas in progress
* Create layers in [cv2 juggling](https://github.com/bartonski/cv2_juggling)
    * Use [Mediapipe Pose Detection](https://github.com/bartonski/barton_juggling_laboratory) to find left and right hand positions.
* Review and write notes on [Juggling projects on github](./thoughts_and_notes/github_juggling_projects/README.md)
* Think about a web server that can take a video file, allow you to define a region of interest, then run a juggling tracker against it.
* Write notes on a python module which can act as a base for jugging programs going forward.
* Finish TODO items in [Config Writer README.md](https://github.com/bartonski/tfg_jugglingTrackingSiteswap/blob/config_writer/README.md)

## Discussion with myself

Thoughts, tidbits, resources to keep track of

### BXX with clubs

* Keep hands low
* Thow when the club reaches horizontal.
* **REALLY** try to keep throws vertical
* Stand next to a wall with bad hand away from the wall. This will force you not
to throw up/forward rather than out.

## Notes

Concepts that have more structure, but are still being refined

* [Juggling Trainer Notes](./juggling_trainer.md)
* [Juggling Theory](./thoughts_and_notes/juggling_theory.md)

## Essays

Fully structured and refined ideas about juggling

## Programs

* [Juggling projects on Github](./thoughts_and_notes/github_juggling_projects.md)


## Ideas

Use object tracking for hand and object tracking for prop to predict catch and throw position and time.

See [Kalman Filter](https://www.youtube.com/watch?v=3iqRhbXBVRE) for implementation of tracking on an arc -- this might work for tracking hands as well.

### Logging

<https://docs.python.org/3/library/logging.html>

### Color Names

<https://datascientyst.com/get-list-of-n-different-colors-names-python-pandas/#step-5-working-with-color-names-and-color-values-format-html-and-css-in-python>

### Use color ranges for identifying props, hands.

### Use last outline position to create ROI for next contour.

### Layers / Pipelining

1. Video
1. Frames
    1. List of contours (has an area and a center of gravity)
1. Frame + Parent Frame
    1. List of outlines (tracked contours)
1. Frame + Parent Frame + Grandparent Frame
    1. List of travelers (outlines which know their velocity and acceleration)
1. Enough frames to determine ballistic flight
    1. List of hands (travelers which are never in ballistic flight and which 'catch' and 'throw' props)
    1. List of props (travelers which are sometimes in ballistic flight and which are 'caught' and 'thrown')
1. Frames from throw to catch
1. Frames for a flash
1. Frames for a juggle
1. Frames for a site swap orbit

... what if we batch the frames, and group the contours by proximity?

## Glossary

* Juggling tracker terminology:
    * an 'event' has a location in space and time.
    * an 'object' is something that exists in space and time -- a hand or prop.
    * a 'hand' is an object that manipulates props being juggled
    * a 'prop' is an object being juggled -- ball, club, ring, rubber chicken, etc.
    * a 'release' is the event where a prop is thrown
    * a 'catch' is the event where a prop is caught
    * a 'path' has an object and a sequence of events that describe the movement of the object.
    * a 'throw' is the path of a prop from release to catch.
    * a 'carry' is the path of a prop and hand from the point of catch to release
    * a 'return' is the path of an empty hand from the release to catch
    * a prop has either a 'throw' path or a 'carry' path. \*
    * a hand has either a 'carry' path or a 'return' path.
    * a 'pattern' is a collection of throws and carries.

\* This neglects starts and multiplexes, which is probably a serious oversight.

## Minimum viable product for juggling tracker

* Reliably detect props and hands, exclude noise
* Reliably track paths of props and hands
* Detect throw and catch positions
* Output position of hand, prop, throw and catch as text, image or video. 

