import { Wind, WeatherSys } from './weather-model';
export interface Coordinates {
  lon: number;
  lat: number;
}
export interface Weather {
  "id": number;
  "main": string;
  "description": string;
  "icon": string;
}
export interface WeatherMain {
  "temp": number;
  "pressure": number;
  "humidity": number;
  "temp_min": number;
  "temp_max": number;
}
export interface Wind {
  "speed": number;
  "deg": number;
}
export interface Cloud {
  "all": number;
}

export interface WeatherSys {
  "type": number;
  "id": number;
  "message": number;
  "country": string;
  "sunrise": number;
  "sunset": number;
}
export interface WeatherInfo {
  "coord": Coordinates;
  "weather": Weather[];
  "base": string;
  "main": WeatherMain;
  "visibility": number;
  "wind": Wind;
  "clouds": Cloud;
  "dt": number;
  "sys": WeatherSys;
  "id": number;
  "name": string;
  "cod": number;
}
