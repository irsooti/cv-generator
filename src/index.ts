import DocxTemplater from 'docxtemplater';
import fs from 'fs';
import upperCase from 'lodash/upperCase';
import path from 'path';
import PizZip from 'pizzip';
import * as types from './types';

/**
 * Choose between the available templates
 * @param docType
 */
export function prepareDocument(docType: types.DocType): string {
  const inputPath = `../templates/${docType}.docx`;
  return fs.readFileSync(inputPath, 'binary');
}

/**
 * It produces a Buffer you can use to download the DOCX
 * @param employee The employee JSON
 * @param templatePath The template used to create the final DOCX
 */
export function createDocument(
  employee: types.Employee,
  templatePath: string
): Buffer {
  const doc = new DocxTemplater();
  const zip = new PizZip(templatePath);

  doc.loadZip(zip);
  doc.setData(employee);
  doc.render();

  return doc.getZip().generate({ type: 'nodebuffer' });
}

/**
 * It saves locally a generated document
 * @param document
 * @param employee
 * @param docType
 */
export function backupCopy(
  document: Buffer,
  employee: types.Employee,
  docType: types.DocType
): void {
  const outputFolder = path.resolve(__dirname, `../outputs/`);
  const outputPath = path.resolve(
    outputFolder,
    `${upperCase(docType)}-${upperCase(employee.profile.name)}.docx`
  );

  return fs.writeFileSync(outputPath, document);
}

export { types };
