function initializeCoreMod() {
    var ASM                         = Java.type("net.minecraftforge.coremod.api.ASMAPI");
    var Opcodes                     = Java.type("org.objectweb.asm.Opcodes");
    var InsnList                    = Java.type("org.objectweb.asm.tree.InsnList");
    var InsnNode                    = Java.type("org.objectweb.asm.tree.InsnNode");
    var LabelNode                   = Java.type("org.objectweb.asm.tree.LabelNode");
    var VarInsnNode                 = Java.type("org.objectweb.asm.tree.VarInsnNode");
    var JumpInsnNode                = Java.type("org.objectweb.asm.tree.JumpInsnNode");
    var MethodInsnNode              = Java.type("org.objectweb.asm.tree.MethodInsnNode");
    var FieldInsnNode               = Java.type("org.objectweb.asm.tree.FieldInsnNode");
    var TypeInsnNode                = Java.type("org.objectweb.asm.tree.TypeInsnNode");
    var LdcInsnNode                 = Java.type("org.objectweb.asm.tree.LdcInsnNode");
    var IntInsnNode                 = Java.type("org.objectweb.asm.tree.IntInsnNode");

    return {
        "InputConstants::setupKeyboardCallbacks": {
            "target": {
                "type": "METHOD",
                "class": "com/mojang/blaze3d/platform/InputConstants",
                "methodName": ASM.mapMethod("m_84844_"),
                "methodDesc": "(JLorg/lwjgl/glfw/GLFWKeyCallbackI;Lorg/lwjgl/glfw/GLFWCharModsCallbackI;)V"
            },
            "transformer": function(mn) {
                var list = new InsnList();

                list.add(new TypeInsnNode(Opcodes.NEW, "me/vereena/escr/KeyCallback"));
                list.add(new InsnNode(Opcodes.DUP));
                list.add(new VarInsnNode(Opcodes.ALOAD, 2));
                list.add(new MethodInsnNode(Opcodes.INVOKESPECIAL, "me/vereena/escr/KeyCallback", "<init>", "(Lorg/lwjgl/glfw/GLFWKeyCallbackI;)V"));
                list.add(new VarInsnNode(Opcodes.ASTORE, 2));

                mn.instructions.insertBefore(mn.instructions.get(0), list);
                return mn;
            }
        }
    }
}