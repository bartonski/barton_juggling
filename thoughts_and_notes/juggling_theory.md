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

#### **P** - Pixel to Millimeter Ratio.

**P** = number of px / mm in your image file. For instance, if you're using a 60mm ball, and the width of the ball is 120px,

**P** = 120px / 60mm

**P** = 2px/mm

#### **F** - Frames Per Second

**F** frames/s

You should be able to find this in your movie meta-data.

#### Conversions

**P** px/~~mm~~ * 1000 ~~mm~~/m

g = 1000 * **P** px/~~m~~ * 9.8 ~~m~~ / s^2^

g = 9800 * **P** px / s^2^

**F** frames / s

**F^2^** frames^2^ / s^2^

g = ( 9800 * **P** px / s^2^ ) * (s^2^/**F^2^** frames^2^)

g = ( 9800 * **P** px ) / (**F^2^** * frames^2^)

#### Example

If we have a 60mm ball that shows as 120px wide in our image,, and we'se shooting in 2x slo-motion (60 frames/S), then

**P** = 120px/60mm = 2px/mm

**F** = 60 frames/s

g = ( 9800 * **P** px ) / (**F^2^** * frames^2^)

g = ( 9600 * 2 px ) / 60^2^ frames^2^

g = 19600 px / 3600 frames^2^

g = 5.44 px / frame^2^

---

s(t) = 1/2 gt^2^ + v~0~t + s~0~

where t is time in frames.

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
