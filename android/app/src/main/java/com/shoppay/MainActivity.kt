package com.shoppay
import android.os.Bundle;
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import org.devio.rn.splashscreen.SplashScreen;

class MainActivity : ReactActivity() {
override fun onCreate(savedInstanceState: Bundle?) {
    SplashScreen.show(this);  // add this
    super.onCreate(null)
  }
  override fun getMainComponentName(): String = "shoppay"
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
