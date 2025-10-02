function follow_line_ultrasonic (distance: number) {
    while (PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J2, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) >= distance) {
        PlanetX_Display.showUserNumber(1, nezhaV2.readRelAngle(nezhaV2.MotorPostion.M1))
        if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_1)) {
            nezhaV2.comboStart(45, 50)
        } else {
            if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_2)) {
                nezhaV2.comboStart(50, 45)
            } else {
                if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_0) || PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_3)) {
                    nezhaV2.comboStart(45, 45)
                }
            }
        }
    }
    nezhaV2.stop(nezhaV2.MotorPostion.M1)
    nezhaV2.stop(nezhaV2.MotorPostion.M2)
}
input.onButtonPressed(Button.A, function () {
    nezhaV2.move(nezhaV2.MotorPostion.M1, 30, nezhaV2.MovementDirection.CW, 320, nezhaV2.SportsMode.Degree)
    nezhaV2.comboMove(30, nezhaV2.VerticallDirection.Up, 300, nezhaV2.DistanceAndAngleUnit.Degree)
    follow_line_ultrasonic(11)
    nezhaV2.move(nezhaV2.MotorPostion.M3, 30, nezhaV2.MovementDirection.CW, 20, nezhaV2.SportsMode.Degree)
    nezhaV2.move(nezhaV2.MotorPostion.M1, 30, nezhaV2.MovementDirection.CCW, 320, nezhaV2.SportsMode.Degree)
    check_object()
    follow_line(200)
    follow_line_ultrasonic(11)
    nezhaV2.move(nezhaV2.MotorPostion.M1, 30, nezhaV2.MovementDirection.CCW, 320, nezhaV2.SportsMode.Degree)
    check_object()
})
function follow_line (degrees: number) {
    while (nezhaV2.readRelAngle(nezhaV2.MotorPostion.M1) >= degrees * -1) {
        PlanetX_Display.showUserNumber(1, nezhaV2.readRelAngle(nezhaV2.MotorPostion.M1))
        if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_1)) {
            nezhaV2.comboStart(45, 50)
        } else {
            if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_2)) {
                nezhaV2.comboStart(50, 45)
            } else {
                if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_0) || PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_3)) {
                    nezhaV2.comboStart(45, 45)
                }
            }
        }
    }
    nezhaV2.stop(nezhaV2.MotorPostion.M1)
    nezhaV2.stop(nezhaV2.MotorPostion.M2)
}
input.onButtonPressed(Button.B, function () {
    PlanetX_Display.showUserNumber(2, PlanetX_Basic.readColor())
})
function check_object () {
    if (PlanetX_Basic.readColor() > 145 && PlanetX_Basic.readColor() < 165) {
        nezhaV2.comboMove(30, nezhaV2.VerticallDirection.Up, 100, nezhaV2.DistanceAndAngleUnit.Degree)
        nezhaV2.move(nezhaV2.MotorPostion.M3, 30, nezhaV2.MovementDirection.CCW, 20, nezhaV2.SportsMode.Degree)
        nezhaV2.comboMove(30, nezhaV2.VerticallDirection.Down, 100, nezhaV2.DistanceAndAngleUnit.Degree)
        nezhaV2.move(nezhaV2.MotorPostion.M1, 30, nezhaV2.MovementDirection.CW, 320, nezhaV2.SportsMode.Degree)
    }
    if (PlanetX_Basic.readColor() > 65 && PlanetX_Basic.readColor() < 95) {
        nezhaV2.move(nezhaV2.MotorPostion.M1, 30, nezhaV2.MovementDirection.CW, 320, nezhaV2.SportsMode.Degree)
    }
    PlanetX_Display.showUserNumber(2, PlanetX_Basic.readColor())
}
nezhaV2.setComboMotor(nezhaV2.MotorPostion.M1, nezhaV2.MotorPostion.M2)
nezhaV2.resetRelAngleValue(nezhaV2.MotorPostion.M1)
