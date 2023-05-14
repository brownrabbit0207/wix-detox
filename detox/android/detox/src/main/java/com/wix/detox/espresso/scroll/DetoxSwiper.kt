
interface DetoxSwiper {
    fun startAt(touchX: Float, touchY: Float)
    fun moveTo(targetX: Float, targetY: Float): Boolean
    fun finishAt(releaseX: Float, releaseY: Float)
}
