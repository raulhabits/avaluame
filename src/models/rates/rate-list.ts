
import { Injectable } from "@angular/core";
import { OptionItem, Usage, Type, SubType, Option } from "./item";

@Injectable()
export class ItemListService {


    constructor() {

        this.setupRates();
    }

    private rates: OptionItem[] = new Array();
    setupRates() {
        this.rates = new Array(
            new OptionItem(0,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.ARMAZON, Option.MADERA),
            new OptionItem(1,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.ARMAZON, Option.PREFABRICADO),
            new OptionItem(3,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.ARMAZON, Option.LADRILLO_BLOQUE),
            new OptionItem(3,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.ARMAZON, Option.CONCRETO_HASTA_TRES_PISOS),
            new OptionItem(6,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.ARMAZON, Option.CONCRETO_CUATRO_MAS_PISOS),
            new OptionItem(0,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.MUROS, Option.MATERIALES_DESECHO_ESTERILLA),
            new OptionItem(1,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.MUROS, Option.BAHAREQUE_ADOBE_TAPIA),
            new OptionItem(2,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.MUROS, Option.MADERA),
            new OptionItem(3,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.MUROS, Option.CONCRETO_PREFABRICADO),
            new OptionItem(4,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.MUROS, Option.BLOQUE_LADRILLO),
            new OptionItem(1,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CUBIERTA, Option.MATERIALES_DESECHO_TEJAS_ASFALTICAS),
            new OptionItem(3,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CUBIERTA, Option.ZINC_TEJA_BARRO_ETERNIT_RUSTICO),
            new OptionItem(6,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CUBIERTA, Option.ENTREPISO_PREFABRICADO),
            new OptionItem(9,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CUBIERTA, Option.ETERNIT_TEJA_BARRO),
            new OptionItem(13,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CUBIERTA, Option.AZOTEA_ALUMINIO_PLACA_SENCILLA_ETERNIT_TEJA_BARRO),
            new OptionItem(16,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CUBIERTA, Option.PLACA_IMPERMEABILIZADA_CUBIERTA_LUJOSA_ORNAMENTAL),
            new OptionItem(0,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CONSERVACION, Option.MALO),
            new OptionItem(2,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CONSERVACION, Option.REGULAR),
            new OptionItem(4,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CONSERVACION, Option.BUENO),
            new OptionItem(5,Usage.RESIDENCIAL, Type.ESTRUCTURA, SubType.CONSERVACION, Option.EXCELENTE),


            new OptionItem(0,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.FACHADAS, Option.POBRE),
            new OptionItem(2,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.FACHADAS, Option.SENCILLA),
            new OptionItem(4,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.FACHADAS, Option.REGULAR),
            new OptionItem(6,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.FACHADAS, Option.BUENA),
            new OptionItem(8,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.FACHADAS, Option.LUJOSA),
            new OptionItem(0,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.CUBRIMIENTO_MUROS, Option.SIN_CUBRIMIENTO),
            new OptionItem(1,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.CUBRIMIENTO_MUROS, Option.PANYETE_LADRILLO_PRENSADO),
            new OptionItem(2,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.CUBRIMIENTO_MUROS, Option.ESTUCO_CERAMICA_PAPEL_COLGADURA),
            new OptionItem(3,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.CUBRIMIENTO_MUROS, Option.MADERA_PIEDRA_ORNAMENTAL),
            new OptionItem(4,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.CUBRIMIENTO_MUROS, Option.MARMOL_LUJOS_OTROS),
            new OptionItem(0,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.PISOS, Option.TIERRA_PISADA),
            new OptionItem(2,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.PISOS, Option.CEMENTO_MADERA_BURDA),
            new OptionItem(3,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.PISOS, Option.BALDOSA_COMUN_CEMENTO_TABLON_LADRILLO),
            new OptionItem(4,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.PISOS, Option.LISTON_MACHIHEMBRIADO),
            new OptionItem(6,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.PISOS, Option.TABLETA_CAUCHO_ACRILICO_GRANITO_BALDOSA_FINA),
            new OptionItem(8,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.PISOS, Option.PARQUET_ALFOMBRA_RETAL_DE_MARMOL_GRANO_PEQUENYO),
            new OptionItem(9,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.PISOS, Option.RETAL_MARMOL_MARMOL_OTROS_LUJOS),
            new OptionItem(0,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.CONSERVACION, Option.MALO),
            new OptionItem(2,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.CONSERVACION, Option.REGULAR),
            new OptionItem(4,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.CONSERVACION, Option.BUENO),
            new OptionItem(5,Usage.RESIDENCIAL, Type.ACABADOS_PRINCIPALES, SubType.CONSERVACION, Option.EXCELENTE),


            new OptionItem(0,Usage.RESIDENCIAL, Type.BANYO, SubType.TAMANYO, Option.SIN_BANYO),
            new OptionItem(1,Usage.RESIDENCIAL, Type.BANYO, SubType.TAMANYO, Option.BANYO_PEQUENYO),
            new OptionItem(2,Usage.RESIDENCIAL, Type.BANYO, SubType.TAMANYO, Option.BANYO_MEDIANO),
            new OptionItem(3,Usage.RESIDENCIAL, Type.BANYO, SubType.TAMANYO, Option.BANYO_GRANDE),
            new OptionItem(0,Usage.RESIDENCIAL, Type.BANYO, SubType.ENCHAPES, Option.SIN_CUBRIMIENTO),
            new OptionItem(1,Usage.RESIDENCIAL, Type.BANYO, SubType.ENCHAPES, Option.PANYETE_BALDOSA_COMUN_CEMENTO),
            new OptionItem(3,Usage.RESIDENCIAL, Type.BANYO, SubType.ENCHAPES, Option.BALDOSIN_CRISTANAC_PAPEL),
            new OptionItem(4,Usage.RESIDENCIAL, Type.BANYO, SubType.ENCHAPES, Option.BALDOSIN_CERAMICA),
            new OptionItem(5,Usage.RESIDENCIAL, Type.BANYO, SubType.ENCHAPES, Option.MARMOL_ENCHAPE_LUJOSO),
            new OptionItem(0,Usage.RESIDENCIAL, Type.BANYO, SubType.MOBILIARIO, Option.POBRE),
            new OptionItem(3,Usage.RESIDENCIAL, Type.BANYO, SubType.MOBILIARIO, Option.SENCILLO),
            new OptionItem(6,Usage.RESIDENCIAL, Type.BANYO, SubType.MOBILIARIO, Option.REGULAR),
            new OptionItem(9,Usage.RESIDENCIAL, Type.BANYO, SubType.MOBILIARIO, Option.BUENO),
            new OptionItem(11,Usage.RESIDENCIAL, Type.BANYO, SubType.MOBILIARIO, Option.LUJOSO),
            new OptionItem(0,Usage.RESIDENCIAL, Type.BANYO, SubType.CONSERVACION, Option.MALO),
            new OptionItem(2,Usage.RESIDENCIAL, Type.BANYO, SubType.CONSERVACION, Option.REGULAR),
            new OptionItem(4,Usage.RESIDENCIAL, Type.BANYO, SubType.CONSERVACION, Option.BUENO),
            new OptionItem(5,Usage.RESIDENCIAL, Type.BANYO, SubType.CONSERVACION, Option.EXCELENTE),


            new OptionItem(0,Usage.RESIDENCIAL, Type.COCINA, SubType.TAMANYO, Option.SIN_COCINA),
            new OptionItem(1,Usage.RESIDENCIAL, Type.COCINA, SubType.TAMANYO, Option.COCINA_PEQUENYA),
            new OptionItem(2,Usage.RESIDENCIAL, Type.COCINA, SubType.TAMANYO, Option.COCINA_MEDIANA),
            new OptionItem(3,Usage.RESIDENCIAL, Type.COCINA, SubType.TAMANYO, Option.COCINA_GRANDE),
            new OptionItem(0,Usage.RESIDENCIAL, Type.COCINA, SubType.ENCHAPES, Option.SIN_CUBRIMIENTO),
            new OptionItem(1,Usage.RESIDENCIAL, Type.COCINA, SubType.ENCHAPES, Option.PANYETE_BALDOSA_COMUN_CEMENTO),
            new OptionItem(3,Usage.RESIDENCIAL, Type.COCINA, SubType.ENCHAPES, Option.BALDOSIN_CRISTANAC_PAPEL),
            new OptionItem(4,Usage.RESIDENCIAL, Type.COCINA, SubType.ENCHAPES, Option.BALDOSIN_CERAMICA),
            new OptionItem(5,Usage.RESIDENCIAL, Type.COCINA, SubType.ENCHAPES, Option.MARMOL_ENCHAPE_LUJOSO),
            new OptionItem(0,Usage.RESIDENCIAL, Type.COCINA, SubType.MOBILIARIO, Option.POBRE),
            new OptionItem(2,Usage.RESIDENCIAL, Type.COCINA, SubType.MOBILIARIO, Option.SENCILLO),
            new OptionItem(3,Usage.RESIDENCIAL, Type.COCINA, SubType.MOBILIARIO, Option.REGULAR),
            new OptionItem(4,Usage.RESIDENCIAL, Type.COCINA, SubType.MOBILIARIO, Option.BUENO),
            new OptionItem(6,Usage.RESIDENCIAL, Type.COCINA, SubType.MOBILIARIO, Option.LUJOSO),
            new OptionItem(0,Usage.RESIDENCIAL, Type.COCINA, SubType.CONSERVACION, Option.MALO),
            new OptionItem(2,Usage.RESIDENCIAL, Type.COCINA, SubType.CONSERVACION, Option.REGULAR),
            new OptionItem(4,Usage.RESIDENCIAL, Type.COCINA, SubType.CONSERVACION, Option.BUENO),
            new OptionItem(5,Usage.RESIDENCIAL, Type.COCINA, SubType.CONSERVACION, Option.EXCELENTE),






            new OptionItem(4,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.ARMAZON, Option.MADERA),
            new OptionItem(8,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.ARMAZON, Option.PREFABRICADO),
            new OptionItem(12,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.ARMAZON, Option.LADRILLO_BLOQUE),
            new OptionItem(22,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.ARMAZON, Option.CONCRETO_HASTA_TRES_PISOS),
            new OptionItem(22,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.ARMAZON, Option.CONCRETO_CUATRO_MAS_PISOS),
            new OptionItem(0,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.MUROS, Option.MATERIALES_DESECHO_ESTERILLA),
            new OptionItem(1,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.MUROS, Option.BAHAREQUE_ADOBE_TAPIA),
            new OptionItem(2,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.MUROS, Option.CONCRETO_PREFABRICADO),
            new OptionItem(3,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.MUROS, Option.MADERA),
            new OptionItem(4,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.MUROS, Option.BLOQUE_LADRILLO),
            new OptionItem(1,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.CUBIERTA, Option.MATERIALES_DESECHO_TEJAS_ASFALTICAS),
            new OptionItem(3,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.CUBIERTA, Option.ZINC_TEJA_BARRO_ETERNIT_RUSTICO),
            new OptionItem(6,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.CUBIERTA, Option.ENTREPISO_PREFABRICADO),
            new OptionItem(9,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.CUBIERTA, Option.ETERNIT_TEJA_BARRO),
            new OptionItem(13,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.CUBIERTA, Option.AZOTEA_ALUMINIO_PLACA_SENCILLA_ETERNIT_TEJA_BARRO),
            new OptionItem(16,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.CUBIERTA, Option.PLACA_IMPERMEABILIZADA_CUBIERTA_LUJOSA_ORNAMENTAL),
            new OptionItem(0,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.CONSERVACION, Option.MALO),
            new OptionItem(2,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.CONSERVACION, Option.REGULAR),
            new OptionItem(4,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.CONSERVACION, Option.BUENO),
            new OptionItem(5,Usage.INDUSTRIAL_COMERCIAL, Type.ESTRUCTURA, SubType.CONSERVACION, Option.EXCELENTE),


            new OptionItem(2,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.FACHADAS, Option.POBRE),
            new OptionItem(4,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.FACHADAS, Option.SENCILLA),
            new OptionItem(6,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.FACHADAS, Option.REGULAR),
            new OptionItem(8,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.FACHADAS, Option.BUENA),
            new OptionItem(12,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.FACHADAS, Option.LUJOSA),
            new OptionItem(0,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.CUBRIMIENTO_MUROS, Option.SIN_CUBRIMIENTO),
            new OptionItem(2,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.CUBRIMIENTO_MUROS, Option.PANYETE_LADRILLO_PRENSADO),
            new OptionItem(3,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.CUBRIMIENTO_MUROS, Option.ESTUCO_CERAMICA_PAPEL_COLGADURA),
            new OptionItem(5,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.CUBRIMIENTO_MUROS, Option.MADERA_PIEDRA_ORNAMENTAL),
            new OptionItem(7,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.CUBRIMIENTO_MUROS, Option.MARMOL_LUJOS_OTROS),
            new OptionItem(0,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.PISOS, Option.TIERRA_PISADA),
            new OptionItem(3,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.PISOS, Option.CEMENTO_MADERA_BURDA),
            new OptionItem(5,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.PISOS, Option.BALDOSA_COMUN_CEMENTO_TABLON_LADRILLO),
            new OptionItem(7,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.PISOS, Option.LISTON_MACHIHEMBRIADO),
            new OptionItem(9,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.PISOS, Option.TABLETA_CAUCHO_ACRILICO_GRANITO_BALDOSA_FINA),
            new OptionItem(11,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.PISOS, Option.PARQUET_ALFOMBRA_RETAL_DE_MARMOL_GRANO_PEQUENYO),
            new OptionItem(13,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.PISOS, Option.RETAL_MARMOL_MARMOL_OTROS_LUJOS),
            new OptionItem(0,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.CONSERVACION, Option.MALO),
            new OptionItem(2,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.CONSERVACION, Option.REGULAR),
            new OptionItem(4,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.CONSERVACION, Option.BUENO),
            new OptionItem(5,Usage.INDUSTRIAL_COMERCIAL, Type.ACABADOS_PRINCIPALES, SubType.CONSERVACION, Option.EXCELENTE),


            new OptionItem(0,Usage.INDUSTRIAL_COMERCIAL, Type.BANYO, SubType.MOBILIARIO, Option.POBRE),
            new OptionItem(3,Usage.INDUSTRIAL_COMERCIAL, Type.BANYO, SubType.MOBILIARIO, Option.SENCILLO),
            new OptionItem(6,Usage.INDUSTRIAL_COMERCIAL, Type.BANYO, SubType.MOBILIARIO, Option.REGULAR),
            new OptionItem(9,Usage.INDUSTRIAL_COMERCIAL, Type.BANYO, SubType.MOBILIARIO, Option.BUENO),
            new OptionItem(16,Usage.INDUSTRIAL_COMERCIAL, Type.BANYO, SubType.MOBILIARIO, Option.LUJOSO),


            new OptionItem(0,Usage.INDUSTRIAL_COMERCIAL, Type.COCINA, SubType.MOBILIARIO, Option.POBRE),
            new OptionItem(3,Usage.INDUSTRIAL_COMERCIAL, Type.COCINA, SubType.MOBILIARIO, Option.SENCILLO),
            new OptionItem(6,Usage.INDUSTRIAL_COMERCIAL, Type.COCINA, SubType.MOBILIARIO, Option.REGULAR),
            new OptionItem(9,Usage.INDUSTRIAL_COMERCIAL, Type.COCINA, SubType.MOBILIARIO, Option.BUENO),
            new OptionItem(13,Usage.INDUSTRIAL_COMERCIAL, Type.COCINA, SubType.MOBILIARIO, Option.LUJOSO),


            new OptionItem(6,Usage.INDUSTRIAL_COMERCIAL, Type.COMPLEMENTO_INDUSTRIA, SubType.CERCHAS, Option.MADERA),
            new OptionItem(12,Usage.INDUSTRIAL_COMERCIAL, Type.COMPLEMENTO_INDUSTRIA, SubType.CERCHAS, Option.METALICA_LIVIANA),
            new OptionItem(22,Usage.INDUSTRIAL_COMERCIAL, Type.COMPLEMENTO_INDUSTRIA, SubType.CERCHAS, Option.METALICA_MEDIANA),
            new OptionItem(34,Usage.INDUSTRIAL_COMERCIAL, Type.COMPLEMENTO_INDUSTRIA, SubType.CERCHAS, Option.METALICA_PESADA),
            new OptionItem(6,Usage.INDUSTRIAL_COMERCIAL, Type.COMPLEMENTO_INDUSTRIA, SubType.CERCHAS, Option.ALTURA_MAYOR_7M_COLUMNA_PUENTE_GRUA)

        );

    }
    public getUsages(): Set<Usage> {
        return new Set(this.rates.map(item => item.usage));
    }

    public getTypeByUsage(usage: string): Set<Type> {
        return new Set(this.rates.filter(item => item.usage == usage).map(item => item.type));
    }

    public getRatesByUsageAndType(usage: string, type: string): OptionItem[] {
        return this.rates.filter(item => item.usage == usage).filter(item => item.type == type);
    }

    public getSubtypeRates(usage: string, type: string): Set<SubType> {
        return new Set(this.getRatesByUsageAndType(usage, type).map(item => item.subtype));
    }
}
