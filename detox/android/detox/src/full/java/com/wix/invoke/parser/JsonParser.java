package com.wix.invoke.parser;

import org.json.JSONObject;
import org.json.JSONException;

    }

    public JSONObject parse(String jsonData) {
        try {
            JSONObject obj = new JSONObject(jsonData);
            return obj;
        } catch (JSONException e) {
            throw new RuntimeException(e);
        }
    }
}
