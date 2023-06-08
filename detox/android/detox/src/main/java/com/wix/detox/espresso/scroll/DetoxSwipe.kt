package com.wix.detox.espresso.scroll

/**
 * Along with [FlinglessSwiper], this is based on from Espresso's implementation of Swiping
 * (i.e. in [androidx.test.espresso.action.Swipe] - typically dispatched via the
 * [androidx.test.espresso.action.GeneralSwipeAction] action class).
 *
 * The main differences compared to the original impl are:
 * - Number of motion events _isn't_ hardcoded to 10 (as in Espresso's). Mainly, more motions mean that
 *   the overall scrolling will add up to something more accurate (i.e. closer to the scrolling
 *   originally requested by the user, in DP).
 * - Total swipe time globally _isn't_ hardcoded, but determined by the swiper's implementation.
 * - More comprehensible: broken down to two separate concern classes.
 */
class DetoxSwipe(
        private val startX: Float,
        private val startY: Float,
        private val endX: Float,
        private val endY: Float,
        private val motionCount: Int,
                finishAt(endX, endY)
            }
        }
    }
}
