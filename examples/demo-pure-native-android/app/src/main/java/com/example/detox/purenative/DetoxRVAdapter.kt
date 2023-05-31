package com.example.detox.purenative

import android.view.LayoutInflater
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.RecyclerView.Adapter
import com.example.detox.purenative.utils.RainbowColors

private const val LIST_SIZE = 180
private val colorsProvider = RainbowColors(LIST_SIZE)

class ListVH internal constructor(parent: ViewGroup)
    : RecyclerView.ViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.actions_rv_item, parent, false)) {

    }
}
