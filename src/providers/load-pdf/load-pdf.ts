import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener';
import { File, DirectoryEntry } from '@ionic-native/file';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Platform, Loading, LoadingController } from 'ionic-angular';
import { DocumentViewerOptions, DocumentViewer } from '@ionic-native/document-viewer';
import { Avaluo } from '../../models/avaluo';


/*
  Generated class for the LoadPdfProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadPdfProvider {

  avaluo: Avaluo;

  constructor(private plt: Platform, private file: File, private fileOpener: FileOpener, private document: DocumentViewer) {
    console.log('Hello LoadPdfProvider Provider');
  }

  loadPdfViewer(value: string) {
    const options: DocumentViewerOptions = {
      title: 'Avaluo',
      email: { enabled: true },
      openWith: { enabled: true }
    }
    this.document.viewDocument(value, 'application/pdf', options);
    alert("Termino");
  }

  getDocumentDefinition() {
    let imageWidth = 250;
    let currentDate = new Date();
    let documentDefinition = { content: [], styles: {} };

    documentDefinition.styles = {
      date: {
        fontSize: 14,
        alignment: 'center'
      },
      headerTitle: {
        fontSize: 25,
        bold: true,
        alignment: 'center'
      },
      sectionTitle: {
        fontSize: 16,
        bold: true,
        alignment: 'center'
      },
      subSectionTitle: {
        fontSize: 14,
        bold: true,
        alignment: 'left'
      },
      content: {
        fontSize: 12,
        bold: false,
        alignment: 'left'
      },
      fieldSeparator: {
        alignment: 'center',
        fontSize: 10
      }

    };


    documentDefinition.content.push({ text: 'INFORME VISITA TÉCNICA PUNTUAL', style: ['headerTitle'] });

    documentDefinition.content.push({ text: ' ', style: ['headerTitle'] });
    documentDefinition.content.push({ text: ' ', style: ['headerTitle'] });

    documentDefinition.content.push({ text: 'OBSERVACIONES INICIALES', style: ['sectionTitle'] });

    documentDefinition.content.push({ text: ' ', style: ['sectionTitle'] });

    documentDefinition.content.push({ text: this.avaluo.basicData.initialComments ? this.avaluo.basicData.initialComments : 'No registra.', style: ['content'] });

    documentDefinition.content.push({ text: ' ', style: ['sectionTitle'] });

    documentDefinition.content.push({ text: 'DATOS BÁSICOS DE SOLICITUD', style: ['sectionTitle'] });

    documentDefinition.content.push({ text: ' ', style: ['sectionTitle'] });

    documentDefinition.content.push({ text: 'Solicitud N°:', style: ['subSectionTitle'] });
    documentDefinition.content.push({ text: ' ', style: ['fieldSeparator'] });
    documentDefinition.content.push({ text: this.avaluo.basicData.requestNumber ? this.avaluo.basicData.requestNumber : 'No registra.', style: ['content'] });
    documentDefinition.content.push({ text: ' ', style: ['fieldSeparator'] });
    documentDefinition.content.push({ text: 'Código sector:', style: ['subSectionTitle'] });
    documentDefinition.content.push({ text: ' ', style: ['fieldSeparator'] });
    documentDefinition.content.push({ text: this.avaluo.basicData.sectorCode ? this.avaluo.basicData.sectorCode : 'No registra.', style: ['content'] });
    documentDefinition.content.push({ text: ' ', style: ['fieldSeparator'] });
    documentDefinition.content.push({ text: 'Nómenclatura principal:', style: ['subSectionTitle'] });
    documentDefinition.content.push({ text: ' ', style: ['fieldSeparator'] });
    documentDefinition.content.push({ text: this.avaluo.basicData.mainAddress ? this.avaluo.basicData.mainAddress : 'No registra.', style: ['content'] });
    documentDefinition.content.push({ text: ' ', style: ['fieldSeparator'] });
    documentDefinition.content.push({ text: 'Nómenclatura secundaria:', style: ['subSectionTitle'] });
    documentDefinition.content.push({ text: ' ', style: ['fieldSeparator'] });
    documentDefinition.content.push({ text: this.avaluo.basicData.secondaryAddress ? this.avaluo.basicData.secondaryAddress : 'No registra.', style: ['content'] });

    documentDefinition.content.push({ text: ' ', style: ['sectionTitle'] });

    documentDefinition.content.push({ text: 'INFORMACIÓN FÍSICA DEL INMUEBLE', style: ['sectionTitle'] });

    documentDefinition.content.push({ text: ' ', style: ['sectionTitle'] });

    documentDefinition.content.push({ text: 'Área del terreno:', style: ['subSectionTitle'] });
    documentDefinition.content.push({ text: ' ', style: ['fieldSeparator'] });
    documentDefinition.content.push({ text: this.avaluo.physicalData.landArea ? this.avaluo.physicalData.landArea : 'No registra.', style: ['content'] });
    documentDefinition.content.push({ text: ' ', style: ['fieldSeparator'] });
    documentDefinition.content.push({ text: 'Área construida:', style: ['subSectionTitle'] });
    documentDefinition.content.push({ text: ' ', style: ['fieldSeparator'] });
    documentDefinition.content.push({ text: this.avaluo.physicalData.builtArea ? this.avaluo.physicalData.builtArea : 'No registra.', style: ['content'] });
    documentDefinition.content.push({ text: ' ', style: ['fieldSeparator'] });
    documentDefinition.content.push({ text: 'Destino económico:', style: ['subSectionTitle'] });
    documentDefinition.content.push({ text: ' ', style: ['fieldSeparator'] });
    documentDefinition.content.push({ text: this.avaluo.physicalData.usage ? this.avaluo.physicalData.usage : 'No registra.', style: ['content'] });
    documentDefinition.content.push({ text: ' ', style: ['fieldSeparator'] });
    documentDefinition.content.push({ text: 'Observaciones sobre ZHFG:', style: ['subSectionTitle'] });
    documentDefinition.content.push({ text: ' ', style: ['fieldSeparator'] });
    documentDefinition.content.push({ text: this.avaluo.physicalData.ZHFGObservations ? this.avaluo.physicalData.ZHFGObservations : 'No registra.', style: ['content'] });

    documentDefinition.content.push({ text: ' ', style: ['sectionTitle'] });

    documentDefinition.content.push({ text: 'INFORMACIÓN ADICIONAL ÁREA CONSTRUIDA', style: ['sectionTitle'] });

    documentDefinition.content.push({ text: ' ', style: ['sectionTitle'] });


    let areas = [];

    this.avaluo.additionalBuiltAreaData.forEach(area => {
      let areaDocument = [];

      areaDocument.push({ text: 'Calificación de área registrada:' + area.getRateValue(), style: ['subSectionTitle'] });
      areaDocument.push({ text: ' ', style: ['fieldSeparator'] });
      areaDocument.push({ text: 'Tipo:', style: ['subSectionTitle'] });
      areaDocument.push({ text: ' ', style: ['fieldSeparator'] });
      areaDocument.push({ text: area.type ? area.type : 'No registra.', style: ['content'] });
      areaDocument.push({ text: ' ', style: ['fieldSeparator'] });
      areaDocument.push({ text: 'Unidad:', style: ['subSectionTitle'] });
      areaDocument.push({ text: ' ', style: ['fieldSeparator'] });
      areaDocument.push({ text: area.unit ? area.unit : 'No registra.', style: ['content'] });
      areaDocument.push({ text: ' ', style: ['fieldSeparator'] });
      areaDocument.push({ text: 'Uso:', style: ['subSectionTitle'] });
      areaDocument.push({ text: ' ', style: ['fieldSeparator'] });
      areaDocument.push({ text: area.usage ? area.usage : 'No registra.', style: ['content'] });
      areaDocument.push({ text: ' ', style: ['fieldSeparator'] });
      areaDocument.push({ text: 'Vetustez:', style: ['subSectionTitle'] });
      areaDocument.push({ text: ' ', style: ['fieldSeparator'] });
      areaDocument.push({ text: area.vetustez ? area.vetustez : 'No registra.', style: ['content'] });
      areaDocument.push({ text: ' ', style: ['fieldSeparator'] });

      let areaRates = [];

      areaDocument.push({ text: 'Calificaciones registradas', style: ['subSectionTitle'] });
      areaDocument.push({ text: ' ', style: ['fieldSeparator'] });

      area.rates.forEach(rate => {
        areaRates.push({ text: '[ + ' + rate.value + ' ]' + ' por calificación del item ' + rate.usage.toLowerCase() + ' - ' + rate.type.toLowerCase() + ' - ' + rate.subtype.toLowerCase() + ':' + rate.option.toLowerCase() });
      });

      if (areaRates.length !== 0) {
        areaDocument.push({ ul: areaRates });
      } else {
        areaDocument.push({ text: 'No registra.', style: ['content'] });
      }

      if (area.images.size !== 0) {

        areaDocument.push({ text: ' ', style: ['content'] });
        areaDocument.push({ text: 'Imágenes registradas', style: ['subSectionTitle'] });
        let imageExist = false;
        area.getImageKeys().forEach(imageKey => {
          if (area.getImage(imageKey)) {
            imageExist = true;

            areaDocument.push({ text: ' ', style: ['content'] });
            areaDocument.push({ width: imageWidth, image: area.getImage(imageKey), style: ['fieldSeparator'] });
            areaDocument.push({ text: imageKey, style: ['fieldSeparator'] });
          }
        });
        if (!imageExist) {
          areaDocument.push({ text: ' ', style: ['content'] });
          areaDocument.push({ text: 'No tiene imagenes registradas.' });
          areaDocument.push({ text: ' ', style: ['content'] });
        }
      }
      areas.push(areaDocument);
    });

    documentDefinition.content.push({ text: ' ', style: ['sectionTitle'] });

    if (areas.length !== 0) {
      let total = this.avaluo.additionalBuiltAreaData.filter(area => area.getRateValue()).reduce((sum: number, area) => sum + Number(area.getRateValue()), 0);
     
      documentDefinition.content.push({ text: 'La calificacion total obtenida en la visita es de ' + total + '. A continuación se muestran los criterios de evaluación tenidos en cuenta con su respectiva calificación.', style: ['subSectionTitle'] });

      documentDefinition.content.push({ text: ' ', style: ['sectionTitle'] });

      documentDefinition.content.push({ ul: areas });
    } else {
      documentDefinition.content.push({ text: 'No registra calificaciones.', style: ['content'] });
    }

    documentDefinition.content.push({ text: ' ', style: ['sectionTitle'] });

    let owners = [];
    documentDefinition.content.push({ text: 'INFORMACION DE ASPECTO JURIDICO', style: ['sectionTitle'] });

    documentDefinition.content.push({ text: ' ', style: ['sectionTitle'] });

    this.avaluo.owners.forEach(owner => {
      let ownerData = [];
      ownerData.push({ text: 'Tipo de identificación:', style: ['subSectionTitle'] });
      ownerData.push({ text: ' ', style: ['fieldSeparator'] });
      ownerData.push({ text: owner.idType ? owner.idType : 'No registra.', style: ['content'] });
      ownerData.push({ text: ' ', style: ['fieldSeparator'] });
      ownerData.push({ text: 'Numero identificación:', style: ['subSectionTitle'] });
      ownerData.push({ text: ' ', style: ['fieldSeparator'] });
      ownerData.push({ text: owner.id ? owner.id : 'No registra.', style: ['content'] });
      ownerData.push({ text: ' ', style: ['fieldSeparator'] });
      ownerData.push({ text: 'Nombres:', style: ['subSectionTitle'] });
      ownerData.push({ text: ' ', style: ['fieldSeparator'] });
      ownerData.push({ text: owner.firstName ? owner.firstName : 'No registra.', style: ['content'] });
      ownerData.push({ text: ' ', style: ['fieldSeparator'] });
      ownerData.push({ text: 'Apellidos:', style: ['subSectionTitle'] });
      ownerData.push({ text: ' ', style: ['fieldSeparator'] });
      ownerData.push({ text: owner.lastName ? owner.lastName : 'No registra.', style: ['content'] });
      owners.push(ownerData);
    });

    if (owners.length !== 0) {
      documentDefinition.content.push({ ul: owners });
    } else {
      documentDefinition.content.push({ text: 'No registra.', style: ['content'] });
    }

    documentDefinition.content.push({ text: ' ', style: ['sectionTitle'] });



    documentDefinition.content.push({ text: 'CROQUIS', style: ['sectionTitle'] });

    documentDefinition.content.push({ text: ' ', style: ['sectionTitle'] });

    documentDefinition.content.push({ text: 'Coordenadas:', style: ['subSectionTitle'] });
    documentDefinition.content.push({ text: ' ', style: ['fieldSeparator'] });
    documentDefinition.content.push({ text: 'Latitud: ' + (this.avaluo.geoLocationData.latitude ? this.avaluo.geoLocationData.latitude : 'No registra.') + " Longitud: " + (this.avaluo.geoLocationData.longitude ? this.avaluo.geoLocationData.longitude : 'No registra.') });

    if (this.avaluo.geoLocationData.image) {
      documentDefinition.content.push({ text: ' ', style: ['subSectionTitle'] });
      documentDefinition.content.push({ width: imageWidth, image: this.avaluo.geoLocationData.image, style: ['fieldSeparator'] });
      documentDefinition.content.push({ text: 'Vista previa en el mapa', style: ['fieldSeparator'] });
    } else {
      documentDefinition.content.push({ text: ' ', style: ['fieldSeparator'] });
      documentDefinition.content.push({ text: 'No registra imagen en el mapa.', style: ['content'] });
    }


    documentDefinition.content.push({ text: ' ', style: ['headerTitle'] });
    documentDefinition.content.push({ text: ' ', style: ['headerTitle'] });

    documentDefinition.content.push({ text: 'Este informe fue realizado por,', style: ['content'] });

    documentDefinition.content.push({ text: ' ', style: ['headerTitle'] });
    documentDefinition.content.push({ text: ' ', style: ['headerTitle'] });
    documentDefinition.content.push({ text: ' ', style: ['headerTitle'] });
    documentDefinition.content.push({ text: ' ', style: ['headerTitle'] });

    documentDefinition.content.push({ text: this.avaluo.madeBy ? this.avaluo.madeBy : 'No registra.', style: ['headerTitle'] });

    let date = new Date();
    let dd = date.getDate();
    var mm = date.getMonth() + 1;

    let meses = ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    documentDefinition.content.push({ text: meses[mm] + ' ' + dd + ' de ' + date.getFullYear(), style: ['date'] });


    return documentDefinition;
  }


  createPdfV2(avaluo: Avaluo, loader: Loading) {

    this.avaluo = avaluo;
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    var dd = this.getDocumentDefinition();
    console.log(dd);
    const pdfDocGenerator = pdfMake.createPdf(dd);


    if (this.plt.is('cordova')) {
      pdfDocGenerator.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });

        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'AvaluoV2.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'AvaluoV2.pdf', 'application/pdf');
          loader.dismiss();
        })
      });
    } else {
      // On a browser simply use download!
      pdfDocGenerator.download();
      loader.dismiss();
    }

  }

}
