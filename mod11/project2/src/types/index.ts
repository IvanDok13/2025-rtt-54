export interface IpifyLocation {
  city: string;
  region: string;
  postalCode: string;
  timezone: string;
  lat: number;
  lng: number;
}

export interface IpifyResponse {
  ip: string;
  isp: string;
  location: IpifyLocation;
}
