export enum ConnectionStatus {
  Online,
  Offline,
}

export interface configModel {
  jwt: string;
  login: boolean;
}

export interface StoredRequest {
  url: string;
  type: string;
  data: any;
  time: number;
  id: string;
}