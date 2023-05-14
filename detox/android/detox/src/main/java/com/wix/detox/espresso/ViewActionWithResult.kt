
import androidx.test.espresso.ViewAction

interface ViewActionWithResult<R: Any?>: ViewAction {
    fun getResult(): R
}
