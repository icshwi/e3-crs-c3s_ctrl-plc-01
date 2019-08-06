ScriptUtil = org.csstudio.display.builder.runtime.script.ScriptUtil;

SwitchFacePlateRight = ScriptUtil.findWidgetByName(widget, "SwitchFacePlate_Right")
SwitchFacePlateLeft = ScriptUtil.findWidgetByName(widget, "SwitchFacePlate_Left")
SwitchFacePlateUp = ScriptUtil.findWidgetByName(widget, "SwitchFacePlate_Up")
SwitchFacePlateDown = ScriptUtil.findWidgetByName(widget, "SwitchFacePlate_Down")

macros = widget.getEffectiveMacros();

Sec  = macros.getValue("Sec")
Index  = macros.getValue("Index");
CRM_N  = macros.getValue("CRM_N");


if (CRM_N == "210") {
	SwitchFacePlateRight.setPropertyValue("enabled", "false")
}
if (CRM_N == "010" && Sec == "Spk") {
	SwitchFacePlateLeft.setPropertyValue("enabled", "false")
}

if (Index == "55091") {
	SwitchFacePlateDown.setPropertyValue("enabled", "false")
}
if (Index == "55090") {
	SwitchFacePlateUp.setPropertyValue("enabled", "false")
}
