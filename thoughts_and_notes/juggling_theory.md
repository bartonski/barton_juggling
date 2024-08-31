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

### What are the variabled in a juggling pattern?

* Initial velocity
    * Vertical
    * Horizontal
    * Angle of throw
* Rhythm of throws
* Throw position
    * Vertical
    * Horizontal

## Things that I wish I knew earlier as a juggler

* Fear of dropping is the biggest mental hurdle to juggling
* Focus, in order of importance:
    1. Rhythm / Tempo
    1. Know where 'vertical' is
    1. Wall plane / scoop
    1. Know exactly where your throw, catch and corners are
        * Throw and catch happen in the tray plane, meaning that the forearm is paralell to the floor.
        * If you draw a right triangle with the base being the throw and catch points the height of the triangle is four times the height of a parabola with the equivalent throw angle.
    1. Left and right hands must be the same
    1. Direction of the palm determines the direction of the ball
        * Throwing too early -- palms point forward, 'sprinting juggler syndrome'
        * Throwing too late -- palms point backward, throw over your head.
        * Think of the negative space between your hand and the prop as you're throwing.  In a cascade, the throw from the opposite hand will travel through that path.
        (idea: attach streamers to balls? With LEDs?)
    1. Hands can be in a limited range of positions -- as far up and down as you can reach, as far left and right as you can reatch, as far forward and backward as you can reach. In order to be caught, a prop must pass through this space. Its path is a 'tube' through this space. Know where this tube is for each throw, and make the throw so that the 'catch tube' is in the most catchable place.
    1. Know where your elbows are at all times
    1. Preparation at the bottom of the scoop
    1. Point and lift toward the corner of the pattern
    1. Left / Right placement of catch
* Feel where your hands are as you make the scoop, and use this as a guide when
correcting throws.
* Your brain will learn what you practice.
    * If you practice bad technique, you will have bad technique.
* If you want to move fast, practice slow. Get the preparation, accuracy and timing correct before increasing speed.
* Juggle from your elbows -- think about your forearms and hands as props
  to be manipulated; the real juggling happens at the elbows. The elbows
  don't move much from left to right or back/forth but they do rotate to
  aim the forearms and hands. *KNOW WHERE YOUR ELBOWS ARE AT ALL TIMES*.
* Throw to the position where you will catch the prop. This should be millimeter-precise. This means, in combination with 1), that you will know exactly where your hand, your wrist and your elbow should be when you catch the prop.
* A catch is a stall -- the prop decelerates smoothly rather than slapping your hand.
* The scoop is a preparation for the throw. The bottom of the scoop is half a beat after the catch, and half a beat before the throw.
* The scoop is a redirection of the energy of the previous throw -- rather than stopping the prop dead and then re-accelerating it. 
* 1 beat dwell time => N-1 beats air time puts throw and catch on the beat, which feels very natural.
* Know where everything is:
    * Know exactly where the props are, all the time.
    * Know exactly where your hands are, all the time.
    * Know where you want the props to go, all the time.
* A drop is caused by a violation of one of the above. identify what you didn't know.
* Learn how to break a hard trick into easier parts
* Practicing drops (dropping over and over while practicing) reenforces dropping -- don't do that.
    * Learn as much as you can from each drop
    * If you don't know why you dropped, that should tell you that you're not paying attention to something
    * If you're dropping too much, back up to an easier step and get it perfect
* Practice your juggling grip.
* Try varying scoop size?
* When juggling clubs, you're juggling the center of gravity of the clubs.
