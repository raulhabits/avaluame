import { Item, Usages, Types, SubTypes, ItemValues, ItemEnumType } from "./item";
import { Injectable } from "@angular/core";

@Injectable()
export class ItemListService {


    constructor() {

        this.setupRates();
    }

    private rates : Item[] = new Array();
    setupRates(){
    this.rates = new Array(
        new Item(Usages.RESIDENCIAL, Types.ESTRUCTURA, SubTypes.ARMAZON, ItemValues.MADERA),
        new Item(Usages.RESIDENCIAL, Types.ESTRUCTURA, SubTypes.ARMAZON, ItemValues.PREFABRICADO),
        new Item(Usages.RESIDENCIAL, Types.ESTRUCTURA, SubTypes.ARMAZON, ItemValues.LADRILLO_BLOQUE),
        new Item(Usages.RESIDENCIAL, Types.ESTRUCTURA, SubTypes.ARMAZON, ItemValues.CONCRETO_HASTA_TRES_PISOS),
        new Item(Usages.RESIDENCIAL, Types.ESTRUCTURA, SubTypes.ARMAZON, ItemValues.CONCRETO_CUATRO_MAS_PISOS),
        new Item(Usages.RESIDENCIAL, Types.ESTRUCTURA, SubTypes.MUROS, ItemValues.MATERIALES_DESECHO_ESTERILLA),
        new Item(Usages.RESIDENCIAL, Types.ESTRUCTURA, SubTypes.MUROS, ItemValues.BAHAREQUE_ADOBE_TAPIA),
        new Item(Usages.RESIDENCIAL, Types.ESTRUCTURA, SubTypes.MUROS, ItemValues.CONCRETO_PREFABRICADO),
        new Item(Usages.RESIDENCIAL, Types.ESTRUCTURA, SubTypes.MUROS, ItemValues.BLOQUE_LADRILLO),
        new Item(Usages.RESIDENCIAL, Types.ESTRUCTURA, SubTypes.CUBIERTA, ItemValues.MATERIALES_DESECHO_TEJAS_ASFALTICAS),
        new Item(Usages.RESIDENCIAL, Types.ESTRUCTURA, SubTypes.CUBIERTA, ItemValues.ZINC_TEJA_BARRO_ETERNIT_RUSTICO),
        new Item(Usages.RESIDENCIAL, Types.ESTRUCTURA, SubTypes.CUBIERTA, ItemValues.ENTREPISO_PREFABRICADO),
        new Item(Usages.RESIDENCIAL, Types.ESTRUCTURA, SubTypes.CUBIERTA, ItemValues.ETERNIT_TEJA_BARRO),
        new Item(Usages.RESIDENCIAL, Types.ESTRUCTURA, SubTypes.CUBIERTA, ItemValues.AZOTEA_ALUMINIO_PLACA_SENCILLA_ETERNIT_TEJA_BARRO),
        new Item(Usages.RESIDENCIAL, Types.ESTRUCTURA, SubTypes.CUBIERTA, ItemValues.PLACA_IMPERMEABILIZADA_CUBIERTA_LUJOSA_ORNAMENTAL),
        new Item(Usages.RESIDENCIAL, Types.ESTRUCTURA, SubTypes.CONSERVACION, ItemValues.MALO),
        new Item(Usages.RESIDENCIAL, Types.ESTRUCTURA, SubTypes.CONSERVACION, ItemValues.REGULAR),
        new Item(Usages.RESIDENCIAL, Types.ESTRUCTURA, SubTypes.CONSERVACION, ItemValues.BUENO),
        new Item(Usages.RESIDENCIAL, Types.ESTRUCTURA, SubTypes.CONSERVACION, ItemValues.EXCELENTE),

    );

    }
    public getRatesByUsageAndType(usage: ItemEnumType, type: ItemEnumType) : Item[] {
        console.log(this.rates);
        return this.rates.filter(item => item.usage == usage).filter(item => item.type == type);
    }

    public getSubtypeRates(usage: ItemEnumType, type: ItemEnumType) : Set<ItemEnumType>  {
        return new Set(this.getRatesByUsageAndType(usage, type).map(item => item.subtype));
    }
}

/*
export const RATES : Item[] = [
    {usage:usage.RESIDENCIAL, Types: Type.ESTRUCTURA, SubTypes: SubType.ARMAZON, value: ItemValue.MADERA},
    {usage:usage.RESIDENCIAL, Types: Type.ESTRUCTURA, SubTypes: SubType.ARMAZON, value: ItemValue.PREFABRICADO},
    {usage:usage.RESIDENCIAL, Types: Type.ESTRUCTURA, SubTypes: SubType.ARMAZON, value: ItemValue.LADRILLO_BLOQUE},
    {usage:usage.RESIDENCIAL, Types: Type.ESTRUCTURA, SubTypes: SubType.ARMAZON, value: ItemValue.CONCRETO_HASTA_TRES_PISOS},
    {usage:usage.RESIDENCIAL, Types: Type.ESTRUCTURA, SubTypes: SubType.ARMAZON, value: ItemValue.CONCRETO_CUATRO_MAS_PISOS},
    
    {usage:usage.RESIDENCIAL, Types: Type.ESTRUCTURA, SubTypes: SubType.MUROS, value: ItemValue.MATERIALES_DESECHO_ESTERILLA},
    {usage:usage.RESIDENCIAL, Types: Type.ESTRUCTURA, SubTypes: SubType.MUROS, value: ItemValue.BAHAREQUE_ADOBE_TAPIA},
    {usage:usage.RESIDENCIAL, Types: Type.ESTRUCTURA, SubTypes: SubType.MUROS, value: ItemValue.CONCRETO_PREFABRICADO},
    {usage:usage.RESIDENCIAL, Types: Type.ESTRUCTURA, SubTypes: SubType.MUROS, value: ItemValue.BLOQUE_LADRILLO},
    
    {usage:usage.RESIDENCIAL, Types: Type.ESTRUCTURA, SubTypes: SubType.CUBIERTA, value: ItemValue.MATERIALES_DESECHO_TEJAS_ASFALTICAS},
    {usage:usage.RESIDENCIAL, Types: Type.ESTRUCTURA, SubTypes: SubType.CUBIERTA, value: ItemValue.ZINC_TEJA_BARRO_ETERNIT_RUSTICO},
    {usage:usage.RESIDENCIAL, Types: Type.ESTRUCTURA, SubTypes: SubType.CUBIERTA, value: ItemValue.ENTREPISO_PREFABRICADO},
    {usage:usage.RESIDENCIAL, Types: Type.ESTRUCTURA, SubTypes: SubType.CUBIERTA, value: ItemValue.ETERNIT_TEJA_BARRO},
    {usage:usage.RESIDENCIAL, Types: Type.ESTRUCTURA, SubTypes: SubType.CUBIERTA, value: ItemValue.AZOTEA_ALUMINIO_PLACA_SENCILLA_ETERNIT_TEJA_BARRO},
    {usage:usage.RESIDENCIAL, Types: Type.ESTRUCTURA, SubTypes: SubType.CUBIERTA, value: ItemValue.PLACA_IMPERMEABILIZADA_CUBIERTA_LUJOSA_ORNAMENTAL},
    
    {usage:usage.RESIDENCIAL, Types: Type.ESTRUCTURA, SubTypes: SubType.CONSERVACION, value: ItemValue.MALO},
    {usage:usage.RESIDENCIAL, Types: Type.ESTRUCTURA, SubTypes: SubType.CONSERVACION, value: ItemValue.REGULAR},
    {usage:usage.RESIDENCIAL, Types: Type.ESTRUCTURA, SubTypes: SubType.CONSERVACION, value: ItemValue.BUENO},
    {usage:usage.RESIDENCIAL, Types: Type.ESTRUCTURA, SubTypes: SubType.CONSERVACION, value: ItemValue.EXCELENTE},
];
*/