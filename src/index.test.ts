import { backupCopy, createDocument, prepareDocument } from '.';
import { DocType } from './types';
import employee from './__mocks__/employee.mock';

describe('Testing prepareDocument', () => {
  test('should read the directory containing the aesys template', () => {
    expect(prepareDocument(DocType.aesys)).toBeTruthy();
  });

  test('should read the directory containing the reply template', () => {
    expect(prepareDocument(DocType.reply)).toBeTruthy();
  });
});

describe('Generate the docx buffer', () => {
  test('should transform the template into a docx', () => {
    const doc = createDocument(employee, prepareDocument(DocType.reply));
    expect(doc).toBeInstanceOf(Buffer);
  });
});
