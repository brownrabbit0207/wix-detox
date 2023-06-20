package com.example.detox.purenative

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        view.findViewById<RecyclerView>(R.id.actions_rvList).also {
            it.adapter = DetoxRVAdapter()
            it.layoutManager = LinearLayoutManager(view.context, RecyclerView.VERTICAL, false)
        }
    }
}
