PVUtil = org.csstudio.display.builder.runtime.script.PVUtil;

macros = widget.getEffectiveMacros();

Sec    = macros.getValue("Sec");
Index  = macros.getValue("Index");
CRM_N  = macros.getValue("CRM_N");

CRM_N = parseInt(CRM_N);
Index = parseInt(Index);

switch(widget.getPropertyValue("name")){
	
	case "SwitchFacePlate_Right":
		if (!(Sec == "HBL" && CRM_N == 210)){		
			CRM_N = CRM_N + 10;
		}
		if (Sec == "Spk" && CRM_N > 130) {
			Sec = "MBL";
			CRM_N = 10;
		}
		if (Sec == "MBL" && CRM_N > 90) {
			Sec = "HBL";
			CRM_N = 10;
		}
		break;
		
	case "SwitchFacePlate_Left":
		if (!(Sec == "Spk" && CRM_N == 10)){		
			CRM_N = CRM_N - 10;
		}
		if (Sec == "HBL" && CRM_N < 10) {
			Sec = "MBL";
			CRM_N = 90;
		}
		if (Sec == "MBL" && CRM_N < 10) {
			Sec = "Spk";
			CRM_N = 130;
		}
		break;

	case "SwitchFacePlate_Up":
		if (Index == 55091) { Index = 55090;}
		break;

	case "SwitchFacePlate_Down":
		if (Index == 55090) { Index = 55091;}
		break;
}
 
/* Open FacePlate */

CRM_N = ("00" + CRM_N).slice(-3);
Index = Index.toString();

var map = new Object();
map["SecSub"] = Sec + "-"+CRM_N+"SHC";
map["CRM_N"] = CRM_N;
map["Sec"] = Sec;
map["Index"] = Index;

org.csstudio.display.builder.runtime.script.ScriptUtil.openDisplay(widget,"PV_VALVE_Faceplate.bob", "REPLACE", map);
