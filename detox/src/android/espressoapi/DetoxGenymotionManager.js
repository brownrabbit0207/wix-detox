/**

	This code is generated.
	For more information see generation/README.md.
*/
    if (typeof lon !== "number") throw new Error("lon should be a number, but got " + (lon + (" (" + (typeof lon + ")"))));
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.genymotion.DetoxGenymotionManager"
      },
      method: "setLocation",
      args: [{
        type: "Double",
        value: lat
      }, {
        type: "Double",
        value: lon
      }]
    };
  }

  static getGenymotionManager() {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.genymotion.DetoxGenymotionManager"
      },
      method: "getGenymotionManager",
      args: []
    };
  }

}

module.exports = DetoxGenymotionManager;