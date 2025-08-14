import { Component } from "@angular/core";
import { Empleado } from "../empleado/empleado";

@Component({
    selector: 'app-empleados',
    standalone: true,
    imports: [Empleado],
    templateUrl: './empleados.html',
    styleUrls: ['./empleados.css']
})
export class EmpleadosComponent{
    
}