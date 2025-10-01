input.onButtonPressed(Button.A, function () {
    while (nezhaV2.readRelAngle(nezhaV2.MotorPostion.M1) >= -1000) {
        PlanetX_Display.showUserNumber(1, nezhaV2.readRelAngle(nezhaV2.MotorPostion.M1))
        if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_1)) {
            nezhaV2.comboStart(45, 50)
        } else {
            if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_2)) {
                nezhaV2.comboStart(50, 45)
            } else {
                if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_0)) {
                    nezhaV2.comboStart(45, 45)
                }
            }
        }
    }
    nezhaV2.stop(nezhaV2.MotorPostion.M1)
    nezhaV2.stop(nezhaV2.MotorPostion.M2)
})
input.onButtonPressed(Button.B, function () {
    nezhaV2.stop(nezhaV2.MotorPostion.M1)
    nezhaV2.stop(nezhaV2.MotorPostion.M2)
})
nezhaV2.setComboMotor(nezhaV2.MotorPostion.M1, nezhaV2.MotorPostion.M2)
nezhaV2.resetRelAngleValue(nezhaV2.MotorPostion.M1)
