package me.vereena.escr;

import com.mojang.blaze3d.platform.InputConstants;
import org.lwjgl.glfw.GLFWKeyCallbackI;

public class KeyCallback implements GLFWKeyCallbackI {
    private final GLFWKeyCallbackI k;

    public KeyCallback(GLFWKeyCallbackI k) {
        this.k = k;
    }

    @Override
    public void invoke(long window, int key, int scancode, int action, int mods) {
        if(key == InputConstants.KEY_CAPSLOCK) {
            key = InputConstants.KEY_ESCAPE;
        }
        this.k.invoke(window, key, scancode, action, mods);
    }
}