
import { Injectable } from "@angular/core";
import { List } from "ionic-angular";
import { Usage, OptionItem, Type, SubType } from "./rates/item";

@Injectable()
export class AvaluoService {
    private avaluo: Avaluo;

    constructor() {
        this.avaluo = new Avaluo();
    }

    public createNewAvaluo() {
        this.avaluo = new Avaluo();
    }

    public getAvaluo() {
        return this.avaluo;
    }
}

export class Avaluo {
    basicData: DatosBasicos = new DatosBasicos();
    physicalData: DatosFisicos = new DatosFisicos();
    additionalBuiltAreaData: InformacionAdicionalAreaConstruida[] = [];
    geoLocationData:  DatosGeoreferenciacion = new DatosGeoreferenciacion();
    owners: Propietario[] = [];    
    madeBy: string;
}

export class DatosBasicos {
    requestNumber: string;
    sectorCode: string;
    mainAddress: string;
    secondaryAddress: string;
    initialComments: string;
}

export class DatosFisicos {
    landArea: number;
    builtArea: number;
    usage: Usage;
    ZHFGObservations: string;
}

export class InformacionAdicionalAreaConstruida {
    type: string;
    unit: string;
    usage: string;
    area: number;
    vetustez: string;
    comments: string;
    rates: OptionItem[] = [];
    images: Map<string, string> = new Map();

    getImageKeys(): string[] {
        console.log(this.images);
        return Array.from(this.images.keys());
    }

    getImage(key: string ) : string{
        console.log(key, this.images);
        return this.images.get(key);
    }

    getRateValue(): number {
        let value:number = this.rates.filter(rate => rate.value).reduce((sum: number, rate) => sum + Number(rate.value), 0); 
        return value;
    }

}

export class DatosGeoreferenciacion {
    exists: boolean = false;
    centerLatitude: number;
    centerLongitude: number;
    latitude: number;
    longitude: number;
    zoom: number;
    image: string;
    width: number;
    height: number;
}

export class Propietario {
    idType: string;
    id: string;
    firstName: string;
    lastName: string;
}