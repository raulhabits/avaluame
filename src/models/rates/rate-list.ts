
import { Injectable } from "@angular/core";
import { OptionItem, Usage, Type, SubType, Option } from "./item";

@Injectable()
export class ItemListService {


    constructor() {

        this.setupRates();
    }

    private rates : OptionItem[] = new Array();
    setupRates(){
    this.rates = new Array(
        new OptionItem(Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.ARMAZON, Option.MADERA),
        new OptionItem(Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.ARMAZON, Option.PREFABRICADO),
        new OptionItem(Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.ARMAZON, Option.LADRILLO_BLOQUE),
        new OptionItem(Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.ARMAZON, Option.CONCRETO_HASTA_TRES_PISOS),
        new OptionItem(Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.ARMAZON, Option.CONCRETO_CUATRO_MAS_PISOS),
        new OptionItem(Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.MUROS, Option.MATERIALES_DESECHO_ESTERILLA),
        new OptionItem(Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.MUROS, Option.BAHAREQUE_ADOBE_TAPIA),
        new OptionItem(Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.MUROS, Option.CONCRETO_PREFABRICADO),
        new OptionItem(Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.MUROS, Option.BLOQUE_LADRILLO),
        new OptionItem(Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CUBIERTA, Option.MATERIALES_DESECHO_TEJAS_ASFALTICAS),
        new OptionItem(Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CUBIERTA, Option.ZINC_TEJA_BARRO_ETERNIT_RUSTICO),
        new OptionItem(Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CUBIERTA, Option.ENTREPISO_PREFABRICADO),
        new OptionItem(Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CUBIERTA, Option.ETERNIT_TEJA_BARRO),
        new OptionItem(Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CUBIERTA, Option.AZOTEA_ALUMINIO_PLACA_SENCILLA_ETERNIT_TEJA_BARRO),
        new OptionItem(Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CUBIERTA, Option.PLACA_IMPERMEABILIZADA_CUBIERTA_LUJOSA_ORNAMENTAL),
        new OptionItem(Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CONSERVACION, Option.MALO),
        new OptionItem(Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CONSERVACION, Option.REGULAR),
        new OptionItem(Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CONSERVACION, Option.BUENO),
        new OptionItem(Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CONSERVACION, Option.EXCELENTE),
        
        new OptionItem(Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.CONSERVACION, Option.EXCELENTE),

        new OptionItem(Usage.RESIDENCIAL, Type.ACABADOS, SubType.FACHADAS, Option.POBRE),
        new OptionItem(Usage.RESIDENCIAL, Type.ACABADOS, SubType.FACHADAS, Option.SENCILLA),
        new OptionItem(Usage.RESIDENCIAL, Type.ACABADOS, SubType.FACHADAS, Option.REGULAR),
        new OptionItem(Usage.RESIDENCIAL, Type.ACABADOS, SubType.FACHADAS, Option.BUENA),
        new OptionItem(Usage.RESIDENCIAL, Type.ACABADOS, SubType.FACHADAS, Option.LUJOSA),
        
    );

    }
    public getUsages() : Set<Usage> {
        return new Set(this.rates.map(item => item.usage));
    }

    public getTypeByUsage(usage: string) : Set<Type> {
        return new Set(this.rates.filter(item => item.usage == usage).map(item => item.type));
    }
    
    public getRatesByUsageAndType(usage: string, type: string) : OptionItem[] {
        return this.rates.filter(item => item.usage == usage).filter(item => item.type == type);
    }

    public getSubtypeRates(usage: string, type: string) : Set<SubType>  {
        return new Set(this.getRatesByUsageAndType(usage, type).map(item => item.subtype));
    }
}
