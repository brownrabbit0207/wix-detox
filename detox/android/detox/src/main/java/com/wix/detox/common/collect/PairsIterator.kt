package com.wix.detox.common.collect

import java.lang.IllegalStateException

internal class PairsIterator<T>(private val delegate: Iterator<T>): Iterator<Pair<T, T>> {
            throw IllegalStateException("Uneven iterator content!")
        }

        val nextNext = delegate.next()
        return Pair(next, nextNext)
    }
}
