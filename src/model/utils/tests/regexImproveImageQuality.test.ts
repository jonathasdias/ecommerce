import { describe, expect, it } from "vitest";
import regexImproveImageQuality from "../regexImproveImageQuality";

describe('regexImproveImageQuality', () => {
    it('deve substituir o sufixo de imagem para "W.jpg"', () => {
      expect(regexImproveImageQuality('https://example.com/image1.jpg'))
        .toBe('https://example.com/imageW.jpg');
  
      expect(regexImproveImageQuality('https://example.com/a.jpg'))
        .toBe('https://example.com/W.jpg');
  
      expect(regexImproveImageQuality('https://example.com/photo_X.jpg'))
        .toBe('https://example.com/photo_W.jpg');
    });
  
    it('não deve alterar URLs que não terminam com ".jpg"', () => {
      expect(regexImproveImageQuality('https://example.com/image.png'))
        .toBe('https://example.com/image.png');
  
      expect(regexImproveImageQuality('https://example.com/image.jpeg'))
        .toBe('https://example.com/image.jpeg');
  
      expect(regexImproveImageQuality('https://example.com/image'))
        .toBe('https://example.com/image');
    });
  });