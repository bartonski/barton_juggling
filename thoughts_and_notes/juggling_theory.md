# Juggling Theory

## Established Theories

### Site swap

### Ladder notation

### Mills mess state transition diagrams

### Shannon's Juggling Theorem

    (F+D)H=(V+D)N

where

* F = time a ball spends in the air,
* D = time a ball spends in a hand/time a hand is full,
* V = time a hand is vacant,
* N = number of balls, and
* H = number of hands.

for H=2, N=3

    2F + 2D = 3V + 3D
    2F - 3V = D

for H=2, N=4

    2F + 2D = 4V + 4D
    2F - 4V = 2D
    F - 2V = D

for H=2, N=5

    2F + 2D = 5V + 5D
    2F - 5V = 3D
    ( 2F - 5V ) / 3 = D

F -- The time the ball spends in the air is related to the initial velocity, height of the throw, and accuracy / variance of landing position.

[Somewhat crappy web site about ballistic equations](https://owlcation.com/stem/Solving-Projectile-Motion-Problems-Applying-Newtons-Equations-of-Motion-to-Ballistics)

## My thoughts and ideas

### Acceleration of Gravity in Pixels/Frame^2^

| Unit       | Definition                                              |
|------------|---------------------------------------------------------|
| **P**      | Pixel to millimeter ratio.                              |
| **F**      | Frames per second (found in video metadata)             |
| **g**      | Acceleration of gravity. 9.81 m/s^2                     |

#### Conversions

Example conversion. Let's say that you have a 60 mm ball which is 120 px in diameter on screen, and the video is at 2x slo-mo (60fps):

| Conversion                          | Explanation of conversion step        |
|-------------------------------------|---------------------------------------|
| **P** = 120 px / 60 mm              | Ball width in px / Ball width in mm   |
| **P** = 2px / 1 mm                  | Divide top and bottom by 60           |
| **P** = (2px / 1 mm)(1000mm / m)    | Convert millimeters to meters         |
| **P** = 2px * 1000 ~~mm~~ / 1 ~~mm~~ * m | Cancel mm and regroup            |
| **P** = 2000px / 1 m                |                                       |
| **F** = 60 frames / s               | From video metadata                   |
| **g** = 9.81 m / s^2                | Acceleration of gravity               |
| **g** = 9.81 m * ( 2000 px / 1 m) / s^2 | Convert meters to pixels          |
| **g** = 9.81 ~~m~~ * ( 2000 px / 1 ~~m~~) / s^2 | Cancel meters             |
| **g** = 9.81 * 2000 px / s^2        |                                       |
| **g** = 19620 px / s^2              | 9.81 * 2000 = 19620                   |
| **g** = 19620 px / ((1 s)(60 frames / 1 s))^2 | Convert seconds to frames   |
| **g** = 19620 px / ((1 ~~s~~)(60 frames / 1 ~~s~~))^2 | Cancel seconds      |
| **g** = 19620 px / 3600 frames^2    | Square frames                         |
| **g** = 5.45 px / frames^2          | Divide top and bottom by 3600         |

---

s(t) = 1/2 **gt**^2 + **v~0~t** + **s~0~**

s(t) = 1/2 (5.45 px / frames^2)**t**^2 + **v~0~t** + **s~0~**

where **t** is time in frames, and **s** is distance in pixels.

---

### Ideas about object tracking

* Catches can be tracked by audio
* Use juggling animator to track ideal paths for balls    
    * Need to adjust for fish-bowl based on focal length of camera and
      distance to subject -- use video meta-data and acceleraton of balls
    * Do we need to adjust for air resistance? Look at Jack Dengar videos.
* The horizontal component of projectile motion will be constant -- can use this to determine which objects on the screen are in ballistic flight.
* Avoid video smoothing; prefer video that's all i-frames to highly compressed video that will cotain p-frames or b-frames. Compression artifacts can cause differences in position that are not perceptile when watching video, but make motion analysis difficult.

### Variation From and Ideal Pattern

How much do individual throws vary from the average throw in a juggling pattern?

* For beginners?
* For experienced jugglers?

### What are the variables in a juggling pattern?

* Initial velocity
    * Vertical
    * Horizontal
    * Angle of throw
* Rhythm of throws
* Throw position
    * Vertical
    * Horizontal
