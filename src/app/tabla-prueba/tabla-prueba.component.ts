import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';

export interface Person {
  persona: string;
  edad: number;
  estado: string;
  municipio: string;
  colonia: string;
  registrado: string;
}

const PERSON_DATA: Person[] = 
[
  {persona: 'Luisa', edad: 33, estado: 'Yucatan', municipio: 'Mérida', colonia: 'Itzimná', registrado: '2021-10-01'},
  {persona: 'Ana', edad: 28, estado: 'Estado de México', municipio: 'Ecatepec', colonia: 'Las Américas', registrado: '2021-10-02'},
  {persona: 'Pedro', edad: 27, estado: 'Yucatan', municipio: 'Mérida', colonia: 'Centro', registrado: '2021-10-03'},
  {persona: 'Luis', edad: 35, estado: 'Chihuahua', municipio: 'Juárez', colonia: 'Zona Pronaf', registrado: '1921-10-04'},
  {persona: 'Marta', edad: 40, estado: 'Estado de México', municipio: 'Nezahualcóyotl', colonia: 'Jardines de Morelos', registrado: '2021-10-05'},
  {persona: 'Jorge', edad: 39, estado: 'Monterrey', municipio: 'Chihuahua', colonia: 'San Felipe', registrado: '2011-10-06'},
  {persona: 'Carlos', edad: 22, estado: 'Chihuahua', municipio: 'Chihuahua', colonia: 'San Felipe', registrado: '2221-10-07'},
  {persona: 'Sofía', edad: 31, estado: 'Estado de México', municipio: 'Toluca', colonia: 'El Seminario', registrado: '2021-10-08'},
  {persona: 'Juan', edad: 45, estado: 'Chihuahua', municipio: 'Juárez', colonia: 'Centro', registrado: '2021-10-09'},
  {persona: 'María', edad: 19, estado: 'Yucatan', municipio: 'Nezahualcóyotl', colonia: 'La Perla', registrado: '2321-10-10'},
  {persona: 'Ana', edad: 43, estado: 'Chihuahua', municipio: 'Juárez', colonia: 'San Lorenzo', registrado: '1996-01-06'},
  {persona: 'Jorge', edad: 22, estado: 'Chihuahua', municipio: 'Chihuahua', colonia: 'San Felipe', registrado: '1947-04-23'},
  {persona: 'Carlos', edad: 53, estado: 'Estado de México', municipio: 'Toluca', colonia: 'Santa Ana', registrado: '1979-10-09'},
  {persona: 'María', edad: 50, estado: 'Monterrey', municipio: 'Monterrey', colonia: 'Centro', registrado: '2005-01-18'},
  {persona: 'Marta', edad: 42, estado: 'Yucatan', municipio: 'Tizimín', colonia: 'Centro', registrado: '1944-01-03'},
  {persona: 'Luisa', edad: 51, estado: 'Estado de México', municipio: 'Toluca', colonia: 'El Seminario', registrado: '1990-01-14'},
  {persona: 'Carlos', edad: 37, estado: 'Monterrey', municipio: 'San Nicolás', colonia: 'Anáhuac', registrado: '1954-10-12'},
  {persona: 'Luis', edad: 36, estado: 'Yucatan', municipio: 'Valladolid', colonia: 'Centro', registrado: '1949-12-02'},
  {persona: 'Ana', edad: 45, estado: 'Yucatan', municipio: 'Mérida', colonia: 'Chuburná', registrado: '1921-04-06'},
  {persona: 'Juan', edad: 24, estado: 'Yucatan', municipio: 'Mérida', colonia: 'Chuburná', registrado: '2014-09-06'},
  {persona: 'Jorge', edad: 24, estado: 'Estado de México', municipio: 'Toluca', colonia: 'Santa Ana', registrado: '2000-06-15'},
  {persona: 'Luis', edad: 48, estado: 'Estado de México', municipio: 'Ecatepec', colonia: 'San Cristóbal', registrado: '1991-07-26'},
  {persona: 'Jorge', edad: 46, estado: 'Monterrey', municipio: 'Guadalupe', colonia: 'San Miguel', registrado: '1959-01-06'},
  {persona: 'Juan', edad: 27, estado: 'Chihuahua', municipio: 'Chihuahua', colonia: 'Santa Rita', registrado: '1935-04-18'},
  {persona: 'Pedro', edad: 59, estado: 'Chihuahua', municipio: 'Delicias', colonia: 'San Carlos', registrado: '1958-02-08'},
  {persona: 'Sofía', edad: 30, estado: 'Yucatan', municipio: 'Valladolid', colonia: 'San Juan', registrado: '1962-12-24'},
  {persona: 'Carlos', edad: 41, estado: 'Estado de México', municipio: 'Nezahualcóyotl', colonia: 'Las Águilas', registrado: '2009-05-28'},
  {persona: 'Luis', edad: 43, estado: 'Yucatan', municipio: 'Tizimín', colonia: 'San Francisco', registrado: '1994-12-04'},
  {persona: 'Carlos', edad: 57, estado: 'Estado de México', municipio: 'Nezahualcóyotl', colonia: 'La Perla', registrado: '1995-04-20'},
  {persona: 'María', edad: 36, estado: 'Monterrey', municipio: 'Guadalupe', colonia: 'Las Quintas', registrado: '2018-12-23'},
  {persona: 'Ana', edad: 40, estado: 'Estado de México', municipio: 'Ecatepec', colonia: 'Ciudad Azteca', registrado: '1980-09-03'},
  {persona: 'Pedro', edad: 31, estado: 'Monterrey', municipio: 'Monterrey', colonia: 'San Pedro', registrado: '1968-03-23'},
  {persona: 'Juan', edad: 32, estado: 'Monterrey', municipio: 'San Nicolás', colonia: 'Las Puentes', registrado: '1964-06-01'},
  {persona: 'Ana', edad: 22, estado: 'Monterrey', municipio: 'San Nicolás', colonia: 'Centro', registrado: '1951-03-04'},
  {persona: 'Jorge', edad: 42, estado: 'Monterrey', municipio: 'San Nicolás', colonia: 'Anáhuac', registrado: '1965-02-17'},
  {persona: 'Sofía', edad: 56, estado: 'Monterrey', municipio: 'Guadalupe', colonia: 'Las Quintas', registrado: '2013-11-13'},
  {persona: 'Jorge', edad: 41, estado: 'Monterrey', municipio: 'Guadalupe', colonia: 'San Miguel', registrado: '1938-01-23'},
  {persona: 'Luisa', edad: 22, estado: 'Chihuahua', municipio: 'Juárez', colonia: 'Centro', registrado: '1928-03-10'},
  {persona: 'Ricardo', edad: 25, estado: 'Puebla', municipio: 'Puebla', colonia: 'Centro', registrado: '2020-05-10'},
  {persona: 'Elena', edad: 29, estado: 'Jalisco', municipio: 'Guadalajara', colonia: 'Americana', registrado: '2021-07-15'},
  {persona: 'Roberto', edad: 34, estado: 'Nuevo León', municipio: 'Monterrey', colonia: 'Obispado', registrado: '2019-03-21'},
  {persona: 'Carmen', edad: 26, estado: 'Veracruz', municipio: 'Veracruz', colonia: 'Centro', registrado: '2022-01-19'},
  {persona: 'Miguel', edad: 31, estado: 'Quintana Roo', municipio: 'Cancún', colonia: 'Zona Hotelera', registrado: '2020-11-25'},
  {persona: 'Fernanda', edad: 28, estado: 'Sinaloa', municipio: 'Culiacán', colonia: 'Las Quintas', registrado: '2018-09-14'},
  {persona: 'Héctor', edad: 39, estado: 'Tamaulipas', municipio: 'Reynosa', colonia: 'Las Fuentes', registrado: '2021-05-07'},
  {persona: 'Paola', edad: 33, estado: 'Coahuila', municipio: 'Saltillo', colonia: 'Zona Centro', registrado: '2017-08-12'},
  {persona: 'Raúl', edad: 45, estado: 'Baja California', municipio: 'Tijuana', colonia: 'Playas de Tijuana', registrado: '2019-12-29'},
  {persona: 'Patricia', edad: 32, estado: 'Sonora', municipio: 'Hermosillo', colonia: 'Las Lomas', registrado: '2020-02-16'},
  {persona: 'Fernando', edad: 29, estado: 'Querétaro', municipio: 'Querétaro', colonia: 'Centro', registrado: '2022-04-10'},
  {persona: 'Lucía', edad: 27, estado: 'Tabasco', municipio: 'Villahermosa', colonia: 'Tabasco 2000', registrado: '2021-08-23'},
  {persona: 'Javier', edad: 36, estado: 'Chiapas', municipio: 'Tuxtla Gutiérrez', colonia: 'Terán', registrado: '2022-06-11'},
  {persona: 'Sara', edad: 40, estado: 'Hidalgo', municipio: 'Pachuca', colonia: 'Real de Minas', registrado: '2021-03-09'},
  {persona: 'Ramiro', edad: 33, estado: 'San Luis Potosí', municipio: 'San Luis Potosí', colonia: 'Centro', registrado: '2019-07-22'},
  {persona: 'Alicia', edad: 35, estado: 'Michoacán', municipio: 'Morelia', colonia: 'Centro', registrado: '2020-10-18'},
  {persona: 'Emilio', edad: 42, estado: 'Oaxaca', municipio: 'Oaxaca', colonia: 'Jalatlaco', registrado: '2021-12-30'},
  {persona: 'Verónica', edad: 37, estado: 'Zacatecas', municipio: 'Zacatecas', colonia: 'Guadalupe', registrado: '2018-11-03'},
  {persona: 'Gustavo', edad: 30, estado: 'Tlaxcala', municipio: 'Tlaxcala', colonia: 'Centro', registrado: '2019-09-15'},
  {persona: 'Leticia', edad: 41, estado: 'Morelos', municipio: 'Cuernavaca', colonia: 'Acapantzingo', registrado: '2021-04-27'},
  {persona: 'Andrés', edad: 38, estado: 'Colima', municipio: 'Colima', colonia: 'Centro', registrado: '2020-06-19'},
  {persona: 'Rosa', edad: 34, estado: 'Durango', municipio: 'Durango', colonia: 'Guadalupe', registrado: '2019-01-12'},
  {persona: 'Tomás', edad: 44, estado: 'Campeche', municipio: 'Campeche', colonia: 'Centro', registrado: '2022-05-29'},
  {persona: 'Silvia', edad: 31, estado: 'Nayarit', municipio: 'Tepic', colonia: 'Centro', registrado: '2018-02-05'},
  {persona: 'Esteban', edad: 35, estado: 'Aguascalientes', municipio: 'Aguascalientes', colonia: 'San Marcos', registrado: '2020-11-11'},
  {persona: 'Ángela', edad: 29, estado: 'Guerrero', municipio: 'Acapulco', colonia: 'La Quebrada', registrado: '2019-08-24'},
  {persona: 'Rafael', edad: 40, estado: 'Yucatán', municipio: 'Valladolid', colonia: 'Centro', registrado: '2021-07-05'},
  {persona: 'Monica', edad: 33, estado: 'Veracruz', municipio: 'Coatzacoalcos', colonia: 'Centro', registrado: '2019-12-31'},
  {persona: 'Gabriel', edad: 45, estado: 'Puebla', municipio: 'Puebla', colonia: 'La Paz', registrado: '2020-03-14'},
  {persona: 'Ana', edad: 28, estado: 'Jalisco', municipio: 'Zapopan', colonia: 'Santa Margarita', registrado: '2022-01-09'}
];

@Component({
  selector: 'app-tabla-prueba',
  templateUrl: './tabla-prueba.component.html',
  styleUrls: ['./tabla-prueba.component.css']
})

export class TablaPruebaComponent implements OnInit {
  displayedColumns: string[] = ['persona', 'edad', 'estado', 'municipio', 'colonia', 'registrado'];
  dataSource = new MatTableDataSource(PERSON_DATA);

  estadoFilter: string[] = [];
  edadFilter: string[] = [];
  coloniaFilter: string = '';
  estados: string[] = [];
  rangosEdad: string[] = ['Menor de 18', '19 a 25', '26 a 31', '32 a 45', '45 a más'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('estadoSelect') estadoSelect!: MatSelect;
  @ViewChild('edadSelect') edadSelect!: MatSelect;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.generateEstadoList();
    this.dataSource.filterPredicate = this.createFilter();
  }

  createFilter(): (data: Person, filter: string) => boolean {
    return (data: Person, filter: string): boolean => {
      const searchTerms = JSON.parse(filter);
      const estadoMatch = searchTerms.estado.length ? searchTerms.estado.includes(data.estado) : true;
      const edadMatch = searchTerms.edad.length ? searchTerms.edad.includes(this.getEdadRange(data.edad)) : true;
      const coloniaMatch = searchTerms.colonia ? data.colonia.toLowerCase().includes(searchTerms.colonia.toLowerCase()) : true;
      return estadoMatch && edadMatch && coloniaMatch;
    };
  }

  applyFilters() {
    const filterValues = {
      estado: this.estadoFilter,
      edad: this.edadFilter,
      colonia: this.coloniaFilter
    };
    this.dataSource.filter = JSON.stringify(filterValues);
  }

  onEstadoChange(event: any) {
    this.estadoFilter = event.value;
    this.applyFilters();
  }

  onEdadChange(event: any) {
    this.edadFilter = event.value;
    this.applyFilters();
  }

  applyColoniaFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    this.coloniaFilter = input.value.trim().toLowerCase();
    this.applyFilters();
  }

  toggleEstadoDropdown(event: Event) {
    event.stopPropagation(); // Para evitar el cierre del menú al hacer clic en el ícono
    if (this.estadoSelect) {
      this.estadoSelect.open();
    }
  }

  toggleEdadDropdown(event: Event) {
    event.stopPropagation(); // Para evitar el cierre del menú al hacer clic en el ícono
    if (this.edadSelect) {
      this.edadSelect.open();
    }
  }

  generateEstadoList() {
    this.estados = PERSON_DATA
      .map(p => p.estado)
      .filter((value, index, self) => self.indexOf(value) === index);
  }

  getEdadRange(edad: number): string {
    if (edad < 18 ) {
      return 'Menor de 18';
    }
    if (edad >= 19 && edad <= 25) {
      return '19 a 25';
    }
    if (edad >= 26 && edad <= 31) {
      return '26 a 31';
    }
    if (edad >= 32 && edad <= 45) {
      return '32 a 45';
    }
    return '45 a más';
  }
}