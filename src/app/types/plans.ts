export interface Plan {
  costnormal: string;
  time: string;
  linkdescription: string;
  setupfee: string;
}

export interface ParamInfoLeftBar {
  classGet: string;
  showText: boolean;
}

export interface PlayerList {
  Username: string;
  Name: string;
  Map: string;
  ServerOn: boolean;
  ClientOn: boolean;
  IPGet: string;
}
